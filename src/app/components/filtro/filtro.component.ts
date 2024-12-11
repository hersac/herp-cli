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
import { ISucursal } from '../../models';

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
    compania: [{}],
    sucursal: [{}],
  });

  selectCompania() {
    console.log('dato1:', this.filtrosForm.get('compania')?.value);
    this.seleccionarCompania.emit(this.filtrosForm.get('compania')?.value);
  }

  selectSucursal() {
    this.seleccionarSucursal.emit(this.filtrosForm.get('sucursal')?.value);
  }

  limpiarFiltros() {}
}
