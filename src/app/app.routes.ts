import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./views/home-page/home-page.component').then(m => m.HomePageComponent),
    },
    {
        path: 'auth/login',
        loadComponent: () => import('./views/auth/login-page/login-page.component').then(m => m.LoginPageComponent),
    },
    {
        path: 'auth/register',
        loadComponent: () => import('./views/auth/register-page/register-page.component').then(m => m.RegisterPageComponent),
    },
    {
        path: 'auth/recuperar-contrasena',
        loadComponent: () => import('./views/auth/recuperar-contrasena-page/recuperar-contrasena-page.component').then(m => m.RecuperarContrasenaPageComponent),
    },

    {
        path: '**',
        loadComponent: () => import('./views/OtrasVistas/error-page/error-page.component').then(m => m.ErrorPageComponent),
    }
];
