import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutPageComponent } from '../../../layouts/layout-page/layout-page.component';
import { FiltroComponent } from '../../../components/filtro/filtro.component';
import { ICompania, ISucursal } from '../../../models';

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
    {
      id: 1,
      nombre: 'Compañía 1',
      sucursales: [
        {
          id: 1,
          nombre: 'Sucursal 1',
        },
        {
          id: 2,
          nombre: 'Sucursal 2',
        },
      ],
    },
    {
      id: 2,
      nombre: 'Compañía 2',
      sucursales: [
        {
          id: 3,
          nombre: 'Sucursal 3',
        },
        {
          id: 4,
          nombre: 'Sucursal 4',
        },
      ],
    },
  ];

  sucursales: Array<ISucursal> = [];

  selccionarCompania(compania: ICompania) {
    console.log('dato2:', compania);
    this.sucursales = compania.sucursales as Array<ISucursal>;
  }

  selccionarSucursal(sucursal: ISucursal) {
    console.log(sucursal);
  }
}
