import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioStore } from '../../data-access/portfolio.store';
import { SceneHeadingComponent } from '../../ui/scene-heading/scene-heading.component';
import { ExperienceItemComponent } from '../../ui/experience-item/experience-item.component';

@Component({
  selector: 'app-experience',
  imports: [SceneHeadingComponent, ExperienceItemComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  protected readonly portfolio = inject(PortfolioStore).portfolio;
}
