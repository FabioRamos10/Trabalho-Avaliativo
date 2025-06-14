import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';
import { ProdutoCarrinho } from '../services/carrinho.service';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonCardContent,
  IonCard,
  AlertController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  standalone: true,
  imports: [
    IonCard,
    IonCardContent,
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonList,
    IonItem,
    IonLabel
  ]
})
export class CarrinhoPage {
  produtos: ProdutoCarrinho[] = [];
  total = 0;
  frete = 0;
  final = 0;

  constructor(
    private carrinhoService: CarrinhoService,
    private clienteService: ClienteService,
    private router: Router,
    private cd: ChangeDetectorRef,
    private alertController: AlertController
  ) {}

  ionViewWillEnter() {
    this.produtos = this.carrinhoService.getProdutos();
    this.total = this.carrinhoService.getTotal();
    this.frete = this.carrinhoService.frete;
    this.final = this.total + this.frete;

    this.cd.detectChanges();
  }

  async finalizarCompra() {
    if (this.produtos.length === 0) {
      const alert = await this.alertController.create({
        header: 'Carrinho vazio',
        message: 'Adicione produtos ao carrinho antes de finalizar a compra.',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    if (!this.clienteService.clienteExiste()) {
      const alert = await this.alertController.create({
        header: 'Cadastro necessário',
        message: 'Você precisa cadastrar seus dados antes de finalizar a compra.',
        buttons: ['OK']
      });

      await alert.present();

      
      await alert.onDidDismiss();
      this.router.navigate(['/cadastro']);
      return;
    }

    this.router.navigate(['/resultado']);
  }

}
