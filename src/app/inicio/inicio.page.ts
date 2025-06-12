import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosService, Produto } from '../services/produtos.service';
import { IonHeader, IonToolbar, IonLabel, IonItem, IonContent, IonTitle, IonList } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  standalone: true,
  imports: [IonList, IonTitle, 
    CommonModule,
    IonHeader,
    IonToolbar,
    IonLabel,
    IonItem,
    IonContent
  ]
})
export class InicioPage {
  produtos: Produto[] = [];

  constructor(private produtosService: ProdutosService, private router: Router) {}

  ngOnInit() {
    this.produtos = this.produtosService.getProdutos();
  }

  verProduto(codigo: number) {
    this.router.navigate(['/produto', codigo]);
  }
}
