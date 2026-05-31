import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/components/home-page/home-page').then(module => module.HomePage)
    }
];
