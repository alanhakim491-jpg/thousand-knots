import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CatalogPage } from './pages/catalog-page/catalog-page';
import { CartPage } from './pages/cart-page/cart-page';
import { ItemPage } from './pages/item-page/item-page';

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
        path: 'profile/login',
        loadComponent: () => { return import('./pages/login/login').then((m) => m.Login) },
    },
    {
        path: 'profile/sign-up',
        loadComponent: () => { return import('./pages/sign-up/sign-up').then((m) => m.SignUp)},
    },
    {
        path: 'contact',
        loadComponent: () => { return import('./pages/contact/contact').then((m) => m.Contact) },
    },
    {
        path: 'cart',
        component: CartPage,
    },{
        path: 'item/:id',
        component: ItemPage,
    }
];
