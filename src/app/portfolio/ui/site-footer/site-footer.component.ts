import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { UiText } from '../../data-access/portfolio.models';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
  readonly ownerName = input.required<string>();
  readonly text = input.required<UiText['footer']>();
  protected readonly currentYear = new Date().getFullYear();
}
