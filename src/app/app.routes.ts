import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./views/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
  {
    path: 'comercial',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./views/comercial-page/comercial-page.component').then(
            (m) => m.ComercialPageComponent
          ),
      },
      {
        path: 'sucursales',
        loadComponent: () =>
          import('./views/comercial-page/sucursales/sucursales.component').then(
            (m) => m.SucursalesComponent
          ),
      },
      {
        path: 'centros-operacion',
        loadComponent: () =>
          import(
            './views/comercial-page/centros-operacion/centros-operacion.component'
          ).then((m) => m.CentrosOperacionComponent),
      },
      {
        path: 'instalaciones',
        loadComponent: () =>
          import(
            './views/comercial-page/instalaciones/instalaciones.component'
          ).then((m) => m.InstalacionesComponent),
      },
      {
        path: 'bodegas',
        loadComponent: () =>
          import('./views/comercial-page/bodegas/bodegas.component').then(
            (m) => m.BodegasComponent
          ),
      },
      {
        path: 'items',
        loadComponent: () =>
          import('./views/comercial-page/items/items.component').then(
            (m) => m.ItemsComponent
          ),
      },
      {
        path: 'compras',
        loadComponent: () =>
          import('./views/comercial-page/compras/compras.component').then(
            (m) => m.ComprasComponent
          ),
      },
      {
        path: 'ventas',
        loadComponent: () =>
          import('./views/comercial-page/ventas/ventas.component').then(
            (m) => m.VentasComponent
          ),
      },
      {
        path: 'consultas',
        loadComponent: () =>
          import('./views/comercial-page/consultas/consultas.component').then(
            (m) => m.ConsultasComponent
          ),
      },
    ],
  },
  {
    path: 'auth/login',
    loadComponent: () =>
      import('./views/auth/login-page/login-page.component').then(
        (m) => m.LoginPageComponent
      ),
  },
  {
    path: 'auth/register',
    loadComponent: () =>
      import('./views/auth/register-page/register-page.component').then(
        (m) => m.RegisterPageComponent
      ),
  },
  {
    path: 'auth/recuperar-contrasena',
    loadComponent: () =>
      import(
        './views/auth/recuperar-contrasena-page/recuperar-contrasena-page.component'
      ).then((m) => m.RecuperarContrasenaPageComponent),
  },

  {
    path: '**',
    loadComponent: () =>
      import('./views/OtrasVistas/error-page/error-page.component').then(
        (m) => m.ErrorPageComponent
      ),
  },
];
