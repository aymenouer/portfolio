import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Job } from '../../data-access/portfolio.models';

@Component({
  selector: 'article[app-experience-item]',
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceItemComponent {
  readonly job = input.required<Job>();
}
