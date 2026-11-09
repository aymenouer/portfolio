import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PortfolioStore } from '../../data-access/portfolio.store';
import { SceneHeadingComponent } from '../../ui/scene-heading/scene-heading.component';

@Component({
  selector: 'app-contact',
  imports: [SceneHeadingComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  protected readonly portfolio = inject(PortfolioStore).portfolio;
  protected readonly isEmailCopied = signal(false);

  async copyEmail(): Promise<void> {
    const { email } = this.portfolio().profile;
    try {
      await navigator.clipboard.writeText(email);
      this.isEmailCopied.set(true);
      setTimeout(() => this.isEmailCopied.set(false), 1600);
    } catch {
      location.href = `mailto:${email}`;
    }
  }
}
