import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-conta',
  templateUrl: 'conta.page.html',
  styleUrls: ['conta.page.scss'],
  standalone: false,
})
export class ContaPage {
  clienteCadastrado: boolean = false;
  cliente: any = null;

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ionViewDidEnter() {
    const dados = this.clienteService.getCliente();
    this.cliente = dados ? { ...dados } : null;
    this.clienteCadastrado = !!this.cliente;
  }


  editarOuCadastrar() {
    this.router.navigate(['/cadastro']);
  }
}
