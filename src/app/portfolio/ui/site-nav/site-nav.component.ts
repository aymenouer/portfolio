import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { Locale, NavLink, UiText } from '../../data-access/portfolio.models';

@Component({
  selector: 'app-site-nav',
  templateUrl: './site-nav.component.html',
  styleUrl: './site-nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown.escape)': 'closeMenu()' },
})
export class SiteNavComponent {
  readonly navLinks = input.required<NavLink[]>();
  readonly text = input.required<UiText['nav']>();
  readonly selectedLocale = input.required<Locale>();
  readonly localeSelected = output<Locale>();

  protected readonly availableLocales: Locale[] = ['en', 'de'];
  protected readonly isMenuOpen = signal(false);
  protected readonly menuButtonLabel = computed(() => this.isMenuOpen() ? this.text().closeMenuLabel : this.text().openMenuLabel);

  protected toggleMenu(): void { this.isMenuOpen.update(isOpen => !isOpen); }
  protected closeMenu(): void { this.isMenuOpen.set(false); }
}
