import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page'; 

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () =>
          import('../inicio/inicio.module').then((m) => m.InicioPageModule),
      },
      {
        path: 'conta',
        loadChildren: () =>
          import('../conta/conta.module').then((m) => m.ContaPageModule),
      },
      {
        path: 'carrinho',
        loadChildren: () =>
          import('../carrinho/carrinho.module').then((m) => m.CarrinhoPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full',
      },
    ],
  },
];
