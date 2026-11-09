import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SiteNavComponent } from './portfolio/ui/site-nav/site-nav.component';
import { SiteFooterComponent } from './portfolio/ui/site-footer/site-footer.component';
import { PortfolioStore } from './portfolio/data-access/portfolio.store';
import { HeroComponent } from './portfolio/feature/hero/hero.component';
import { AboutComponent } from './portfolio/feature/about/about.component';
import { NumbersComponent } from './portfolio/feature/numbers/numbers.component';
import { SkillsComponent } from './portfolio/feature/skills/skills.component';
import { ProjectsComponent } from './portfolio/feature/projects/projects.component';
import { ManifestoComponent } from './portfolio/feature/manifesto/manifesto.component';
import { ExperienceComponent } from './portfolio/feature/experience/experience.component';
import { ContactComponent } from './portfolio/feature/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    SiteNavComponent, SiteFooterComponent,
    HeroComponent, AboutComponent, NumbersComponent, SkillsComponent,
    ProjectsComponent, ManifestoComponent, ExperienceComponent, ContactComponent,
  ],
  template: `
    @let portfolio = portfolioStore.portfolio();
    <app-site-nav
      [navLinks]="portfolio.navLinks"
      [text]="portfolio.text.nav"
      [selectedLocale]="portfolioStore.locale()"
      (localeSelected)="portfolioStore.setLocale($event)"
    />
    <main>
      <app-hero />
      <app-about />
      <app-numbers />
      <app-skills />
      <app-projects />
      <app-manifesto />
      <app-experience />
      <app-contact />
    </main>
    <app-site-footer [ownerName]="portfolio.profile.fullName" [text]="portfolio.text.footer" />
  `,
  styles: `:host { display: block; overflow-x: clip; }`,
  host: { id: 'top' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly portfolioStore = inject(PortfolioStore);
}
