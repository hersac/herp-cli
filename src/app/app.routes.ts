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
    path: 'financiero',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./views/financiero-page/financiero-page.component').then(
            (m) => m.FinancieroPageComponent
          ),
      },
      {
        path: 'cuentas',
        loadComponent: () =>
          import('./views/financiero-page/cuentas/cuentas.component').then(
            (m) => m.CuentasComponent
          ),
      },
      {
        path: 'movimientos',
        loadComponent: () =>
          import(
            './views/financiero-page/movimientos/movimientos.component'
          ).then((m) => m.MovimientosComponent),
      },
      {
        path: 'cobros',
        loadComponent: () =>
          import('./views/financiero-page/cobros/cobros.component').then(
            (m) => m.CobrosComponent
          ),
      },
      {
        path: 'pagos',
        loadComponent: () =>
          import('./views/financiero-page/pagos/pagos.component').then(
            (m) => m.PagosComponent
          ),
      },
      {
        path: 'cajas',
        loadComponent: () =>
          import('./views/financiero-page/cajas/cajas.component').then(
            (m) => m.CajasComponent
          ),
      },
      {
        path: 'presupuesto',
        loadComponent: () =>
          import(
            './views/financiero-page/presupuesto/presupuesto.component'
          ).then((m) => m.PresupuestoComponent),
      },
      {
        path: 'consultas',
        loadComponent: () =>
          import('./views/financiero-page/consultas/consultas.component').then(
            (m) => m.ConsultasComponent
          ),
      },
    ],
  },
  {
    path: 'pos',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./views/pos-page/pos-page.component').then(
            (m) => m.PosPageComponent
          ),
      },
      {
        path: 'clientes',
        loadComponent: () =>
          import('./views/pos-page/clientes/clientes.component').then(
            (m) => m.ClientesComponent
          ),
      },
      {
        path: 'ventas',
        loadComponent: () =>
          import('./views/pos-page/ventas/ventas.component').then(
            (m) => m.VentasComponent
          ),
      },
      {
        path: 'devoluciones',
        loadComponent: () =>
          import('./views/pos-page/devoluciones/devoluciones.component').then(
            (m) => m.DevolucionesComponent
          ),
      },
      {
        path: 'consultas',
        loadComponent: () =>
          import('./views/pos-page/consultas/consultas.component').then(
            (m) => m.ConsultasComponent
          ),
      },
    ],
  },
  {
    path: 'nomina',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./views/nomina-page/nomina-page.component').then(
            (m) => m.NominaPageComponent
          ),
      },
      {
        path: 'empleados',
        loadComponent: () =>
          import('./views/nomina-page/empleados/empleados.component').then(
            (m) => m.EmpleadosComponent
          ),
      },
      {
        path: 'cargos',
        loadComponent: () =>
          import('./views/nomina-page/cargos/cargos.component').then(
            (m) => m.CargosComponent
          ),
      },
      {
        path: 'nominas',
        loadComponent: () =>
          import('./views/nomina-page/nominas/nominas.component').then(
            (m) => m.NominasComponent
          ),
      },
      {
        path: 'consultas',
        loadComponent: () =>
          import('./views/nomina-page/consultas/consultas.component').then(
            (m) => m.ConsultasComponent
          ),
      },
    ],
  },
  {
    path: 'usuarios',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./views/usuarios-page/usuarios-page.component').then(
            (m) => m.UsuariosPageComponent
          ),
      },
      {
        path: 'gestion-usuarios',
        loadComponent: () =>
          import(
            './views/usuarios-page/gestion-usuarios/gestion-usuarios.component'
          ).then((m) => m.GestionUsuariosComponent),
      },
      {
        path: 'roles',
        loadComponent: () =>
          import('./views/usuarios-page/roles/roles.component').then(
            (m) => m.RolesComponent
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
