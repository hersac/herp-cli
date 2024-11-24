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
    submodulo: [],
  },
  {
    title: 'POS',
    url: '/pos',
    icon: faCashRegister,
    submodulo: [],
  },
  {
    title: 'Nomina',
    url: '/nomina',
    icon: faAddressBook,
    submodulo: [],
  },
  {
    title: 'Usuarios',
    url: '/usuarios',
    icon: faUserGear,
    submodulo: [],
  },
];
