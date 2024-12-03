import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutBaseComponent } from '../layout-base/layout-base.component';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [LayoutBaseComponent],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPageComponent {}
