import {
  faHouse,
  faBoxOpen,
  faDollarSign,
  faCashRegister,
  faAddressBook,
  faUserGear,
} from '@fortawesome/free-solid-svg-icons';

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
        title: 'Items',
        url: '/comercial/items',
      },
      {
        title: 'Inventario',
        url: '/comercial/inventario',
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
