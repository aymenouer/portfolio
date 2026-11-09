import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioStore } from '../../data-access/portfolio.store';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumbersComponent {
  protected readonly portfolio = inject(PortfolioStore).portfolio;
}
