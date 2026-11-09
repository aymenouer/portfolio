import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioStore } from '../../data-access/portfolio.store';
import { SceneHeadingComponent } from '../../ui/scene-heading/scene-heading.component';
import { SkillRowComponent } from '../../ui/skill-row/skill-row.component';

@Component({
  selector: 'app-skills',
  imports: [SceneHeadingComponent, SkillRowComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  protected readonly portfolio = inject(PortfolioStore).portfolio;
}
