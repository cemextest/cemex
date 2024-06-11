import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'orders-history',
    loadChildren: () => import('./views/orders-history/orders-history.module').then((m) => m.OrdersHistoryModule),
  },
  {
    path: '',
    redirectTo: '/orders-history',
    pathMatch: 'full',
  },
];
