import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { PortfolioStore } from '../../data-access/portfolio.store';
import { SceneHeadingComponent } from '../../ui/scene-heading/scene-heading.component';

@Component({
  selector: 'app-about',
  imports: [SceneHeadingComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  protected readonly portfolio = inject(PortfolioStore).portfolio;
  protected readonly educationCredential = computed(() => this.portfolio().credentials.find(credential => credential.kind === 'education')!);
}
