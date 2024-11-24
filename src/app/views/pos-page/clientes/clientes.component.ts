import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientesComponent {

}
