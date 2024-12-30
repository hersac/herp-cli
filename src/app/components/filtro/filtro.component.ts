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
import { ICompania, ISucursal } from '../../models';
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
  @Input() sucursales: Array<ISucursal> = [];
  @Output() seleccionarCompania = new EventEmitter<ICompania>();
  @Output() seleccionarSucursal = new EventEmitter<ISucursal>();

  filtrosForm: FormGroup = new FormBuilder().group({
    compania: [null],
   sucursal: [null],
  });   

  selectCompania() {
    const companiaSeleccionada = this.filtrosForm.get('compania')?.value;
    this.seleccionarCompania.emit(companiaSeleccionada);
  }

  selectSucursal() {
    const sucursalSeleccionada = this.filtrosForm.get('sucursal')?.value;
    this.seleccionarSucursal.emit(sucursalSeleccionada);
  }

  limpiarFiltros() {
    this.filtrosForm.reset();
  }
}
