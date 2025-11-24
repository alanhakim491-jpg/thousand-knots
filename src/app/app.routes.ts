import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { SignUp } from './pages/sign-up/sign-up';
import { CatalogPage } from './pages/catalog-page/catalog-page';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: Home,
    },
    {
        path: 'catalog',
        component: CatalogPage,
    },
    {
        path: 'login',
        loadComponent: () => { return import('./pages/login/login').then((m) => m.Login) },
        children: [
            { path: 'sign-up', component: SignUp }
        ],
    },
    {
        path: 'contact',
        loadComponent: () => { return import('./pages/contact/contact').then((m) => m.Contact) },
    },
    {
        path: 'cart',
        loadComponent: () => { return import('./pages/cart-page/cart-page').then((m) => m.CartPage)}
    }
];
