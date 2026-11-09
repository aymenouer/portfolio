import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioStore } from '../../data-access/portfolio.store';

@Component({
  selector: 'app-manifesto',
  templateUrl: './manifesto.component.html',
  styleUrl: './manifesto.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManifestoComponent {
  protected readonly portfolio = inject(PortfolioStore).portfolio;
}
