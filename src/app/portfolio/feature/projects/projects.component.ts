import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioStore } from '../../data-access/portfolio.store';
import { SceneHeadingComponent } from '../../ui/scene-heading/scene-heading.component';
import { ProjectCardComponent } from '../../ui/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [SceneHeadingComponent, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  protected readonly portfolio = inject(PortfolioStore).portfolio;
}
