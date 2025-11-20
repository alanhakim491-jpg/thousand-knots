import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { SignUp } from './pages/sign-up/sign-up';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: Home,
    },
    {
        path: 'login',
        loadComponent: () => { return import('./pages/login/login').then((m) => m.Login) },
        children: [
            { path: 'sign-up', component: SignUp }
        ],
    }
];
