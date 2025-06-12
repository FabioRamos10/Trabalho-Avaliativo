import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService, Produto } from '../../services/produtos.service';
import { CarrinhoService } from '../../services/carrinho.service';
import { AlertController } from '@ionic/angular';
import {
  IonHeader,
  IonToolbar,
  IonButton,
  IonContent,
  IonTitle,
  IonCardContent,
  IonCard,
  IonItem,
  IonLabel,
  IonInput,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto',
  standalone: true,
  templateUrl: './produto.page.html',
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonCard,
    IonCardContent,
    IonContent,
    IonButton,
    IonItem,
    IonLabel,
    IonInput,
    IonButtons,
    IonBackButton
  ]
})
export class ProdutoPage {
  produto: Produto | undefined;
  quantidade: number = 1;

  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService,
    private carrinhoService: CarrinhoService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    const codigo = +this.route.snapshot.paramMap.get('id')!;
    this.produto = this.produtosService.getProdutoPorCodigo(codigo);
  }

  async comprar() {
    if (this.produto && this.quantidade > 0) {
      this.carrinhoService.adicionarProduto(this.produto, this.quantidade);

      const mensagem =
        this.quantidade === 1
          ? '1 unidade adicionada ao carrinho!'
          : `${this.quantidade} unidades adicionadas ao carrinho!`;

      const alert = await this.alertController.create({
        header: 'Produto adicionado',
        message: mensagem,
        buttons: ['OK']
      });

      await alert.present();
    }
  }
}
