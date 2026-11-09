import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SkillGroup } from '../../data-access/portfolio.models';

@Component({
  selector: 'app-skill-row',
  templateUrl: './skill-row.component.html',
  styleUrl: './skill-row.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillRowComponent {
  readonly skillGroup = input.required<SkillGroup>();
}
