import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-layout-base',
  standalone: true,
  imports: [],
  templateUrl: './layout-base.component.html',
  styleUrl: './layout-base.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutBaseComponent {

}
