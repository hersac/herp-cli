import {
  faHouse,
  faBoxOpen,
  faDollarSign,
  faCashRegister,
  faAddressBook,
  faUserGear,
} from '@fortawesome/free-solid-svg-icons';
import { title } from 'process';

export const menu = [
  {
    title: 'Inicio',
    url: '/',
    icon: faHouse,
    submodulo: [],
  },
  {
    title: 'Comercial',
    url: '/comercial',
    icon: faBoxOpen,
    submodulo: [
      {
        title: 'Sucursales',
        url: '/comercial/sucursales',
      },
      {
        title: 'Centros Operación',
        url: '/comercial/centros-operacion',
      },
      {
        title: 'Instalaciones',
        url: '/comercial/instalaciones',
      },
      {
        title: 'Bodegas',
        url: '/comercial/bodegas',
      },
      {
        title: 'Items',
        url: '/comercial/items',
      },
      {
        title: 'Compras',
        url: '/comercial/compras',
      },
      {
        title: 'Ventas',
        url: '/comercial/ventas',
      },
      {
        title: 'Consultas',
        url: '/comercial/consultas',
      },
    ],
  },
  {
    title: 'Financiero',
    url: '/financiero',
    icon: faDollarSign,
    submodulo: [
      {
        title: 'Cuentas',
        url: '/financiero/cuentas',
      },
      {
        title: 'Movimientos',
        url: '/financiero/movimientos',
      },
      {
        title: 'Cobros',
        url: '/financiero/cobros',
      },
      {
        title: 'Pagos',
        url: '/financiero/pagos',
      },
      {
        title: 'Cajas',
        url: '/financiero/cajas',
      },
      {
        title: 'Presupuesto',
        url: '/financiero/presupuesto',
      },
      {
        title: 'Consultas',
        url: '/financiero/consultas',
      },
    ],
  },
  {
    title: 'POS',
    url: '/pos',
    icon: faCashRegister,
    submodulo: [
      {
        title: 'Clientes',
        url: '/pos/clientes',
      },
      {
        title: 'Ventas',
        url: '/pos/ventas',
      },
      {
        title: 'Devoluciones',
        url: '/pos/devoluciones',
      },
      {
        title: 'Consultas',
        url: '/pos/consultas',
      },
    ],
  },
  {
    title: 'Nomina',
    url: '/nomina',
    icon: faAddressBook,
    submodulo: [
      {
        title: 'Empleados',
        url: '/nomina/empleados',
      },
      {
        title: 'Cargos',
        url: '/nomina/cargos',
      },
      {
        title: 'Nominas',
        url: '/nomina/nominas',
      },
      {
        title: 'Consultas',
        url: '/nomina/consultas',
      },
    ],
  },
  {
    title: 'Usuarios',
    url: '/usuarios',
    icon: faUserGear,
    submodulo: [
      {
        title: 'Gestion Usuarios',
        url: '/usuarios/gestion-usuarios',
      },
      {
        title: 'Roles',
        url: '/usuarios/roles',
      },
    ],
  },
];
