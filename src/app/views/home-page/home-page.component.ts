import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutBaseComponent } from '../../layouts/layout-base/layout-base.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [LayoutBaseComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
