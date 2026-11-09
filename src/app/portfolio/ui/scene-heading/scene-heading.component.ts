import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** "SCENE 02 / ABOUT ———— A LITTLE CONTEXT" divider at the top of each section. */
@Component({
  selector: 'app-scene-heading',
  templateUrl: './scene-heading.component.html',
  styleUrl: './scene-heading.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'mono' },
})
export class SceneHeadingComponent {
  /** Left side, e.g. "SCENE 02 / ABOUT". */
  readonly label = input.required<string>();
  /** Right side, e.g. "A LITTLE CONTEXT". */
  readonly tagline = input.required<string>();
}
