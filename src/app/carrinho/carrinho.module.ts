import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { CarrinhoPageRoutingModule } from './carrinho-routing.module';
import { CarrinhoPage } from './carrinho.page';

@NgModule({
  imports: [
  CommonModule,
  FormsModule,
  IonicModule,
  CarrinhoPage,
  CarrinhoPageRoutingModule
  ]
})
export class CarrinhoPageModule {}

