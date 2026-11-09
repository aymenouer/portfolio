import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Project, ProjectCardText } from '../../data-access/portfolio.models';

@Component({
  selector: 'article[app-project-card]',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
  readonly text = input.required<ProjectCardText>();
}
