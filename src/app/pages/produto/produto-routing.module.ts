import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoPage } from './produto.page';

const routes: Routes = [
  {
    path: ':id',
    component: ProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoPageRoutingModule {}
