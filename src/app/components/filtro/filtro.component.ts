import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBroom } from '@fortawesome/free-solid-svg-icons';
import { ICompania } from '../../models/ICompania';

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [FaIconComponent, ReactiveFormsModule],
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltroComponent {
  faBroom = faBroom;

  @Input() companias: Array<ICompania> = [];
  @Input() sucursales: Array<Object> = [];
  @Output() seleccionarCompania = new EventEmitter<Object>();
  @Output() seleccionarSucursal = new EventEmitter<Object>();

  filtrosForm: FormGroup = new FormBuilder().group({
    compania: [{}],
    sucursal: [{}],
  });

  selectCompania() {
    this.seleccionarCompania.emit(this.filtrosForm.get('compania')?.value);
  }

  selectSucursal() {
    this.seleccionarSucursal.emit(this.filtrosForm.get('sucursal')?.value);
  }

  limpiarFiltros() {}
}
