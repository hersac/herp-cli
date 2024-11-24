import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmpleadosComponent {

}
