import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService, Cliente } from '../../services/cliente.service';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton
  ]
})
export class CadastroPage implements OnInit {
  cliente: Cliente = {
    nome: '',
    endereco: '',
    cep: '',
    cidade: '',
    bairro: '',
    estado: '',
    telefone: ''
  };

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit() {
    const dados = this.clienteService.getCliente();
    if (dados) {
      this.cliente = { ...dados };
    }
  }

  salvar() {
    const campos = Object.values(this.cliente);
    const camposVazios = campos.some(campo => !campo || campo.trim() === '');

    if (camposVazios) {
      alert('Todos os campos são obrigatórios!');
      return;
    }

    this.clienteService.salvarCliente({ ...this.cliente });
    this.router.navigate(['/tabs/inicio'], { replaceUrl: true });
    setTimeout(() => {
        this.router.navigate(['/tabs/conta']);
      }, 50);
    }

}
