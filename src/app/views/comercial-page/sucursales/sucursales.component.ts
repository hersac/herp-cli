import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutPageComponent } from '../../../layouts/layout-page/layout-page.component';
import { FiltroComponent } from '../../../components/filtro/filtro.component';
import { ICompania } from '../../../models/ICompania';

@Component({
  selector: 'app-sucursales',
  standalone: true,
  imports: [LayoutPageComponent, FiltroComponent],
  templateUrl: './sucursales.component.html',
  styleUrl: './sucursales.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SucursalesComponent {
  companias: Array<ICompania> = [
    { id: 1, nombre: 'Compañía 1' },
    { id: 2, nombre: 'Compañía 2' },
  ];
  sucursales: Array<Object> = [
    { id: 1, nombre: 'Sucursal 1' },
    { id: 2, nombre: 'Sucursal 2' },
  ];

  selccionarCompania(compania: Object) {
    console.log(compania);
  }

  selccionarSucursal(sucursal: Object) {
    console.log(sucursal);
  }
}
