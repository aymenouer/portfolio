import { DOCUMENT, PLATFORM_ID, computed, effect, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { Locale, Portfolio } from './portfolio.models';
import { PORTFOLIO_DE } from './portfolio.content.de';
import { PORTFOLIO_EN } from './portfolio.content.en';

const PORTFOLIO_BY_LOCALE: Record<Locale, Portfolio> = { en: PORTFOLIO_EN, de: PORTFOLIO_DE };
const LOCALE_STORAGE_KEY = 'portfolio-locale';

const isLocale = (value: unknown): value is Locale => value === 'en' || value === 'de';

/** Saved choice, else the browser language. The prerendered HTML is always English. */
function detectInitialLocale(): Locale {
  if (!isPlatformBrowser(inject(PLATFORM_ID))) return 'en';
  let savedLocale: string | null = null;
  try { savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY); } catch { /* storage blocked */ }
  if (isLocale(savedLocale)) return savedLocale;
  return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en';
}

/** App-wide language + the portfolio content in that language. */
export const PortfolioStore = signalStore(
  { providedIn: 'root' },
  withState(() => ({ locale: detectInitialLocale() })),
  withComputed(({ locale }) => ({
    portfolio: computed(() => PORTFOLIO_BY_LOCALE[locale()]),
  })),
  withMethods(store => ({
    setLocale(locale: Locale): void { patchState(store, { locale }); },
  })),
  withHooks({
    onInit(store) {
      const document = inject(DOCUMENT);
      const isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

      // Keep <html lang> and the saved choice in sync with the current locale.
      effect(() => {
        const locale = store.locale();
        document.documentElement.lang = locale;
        if (isBrowser) {
          try { localStorage.setItem(LOCALE_STORAGE_KEY, locale); } catch { /* storage blocked: choice lasts for this visit only */ }
        }
      });
    },
  }),
);
