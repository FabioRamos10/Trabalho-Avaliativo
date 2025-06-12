import { Component } from '@angular/core';
import { CarrinhoService } from '../../services/carrinho.service';
import { ClienteService, Cliente } from '../../services/cliente.service';
import { Router } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardContent
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardContent
  ]
})
export class ResultadoPage {
  total = 0;
  frete = 0;
  final = 0;
  cliente: Cliente | null = null;
  primeiroNome: string = '';

  constructor(
    private carrinhoService: CarrinhoService,
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit() {
    this.total = this.carrinhoService.getTotal();
    this.frete = this.carrinhoService.frete;
    this.final = this.total + this.frete;

    this.cliente = this.clienteService.getCliente();

    if (this.cliente?.nome) {
      this.primeiroNome = this.cliente.nome.split(' ')[0];
    }

    this.carrinhoService.limpar();
  }

  voltar() {
    this.router.navigate(['/tabs/inicio']);
  }
}
