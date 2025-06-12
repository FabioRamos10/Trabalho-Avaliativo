import { Injectable } from '@angular/core';

export interface Produto {
  codigo: number;
  descricao: string;
  valor: number;
  desconto: number;
  detalhes: string;
}

@Injectable({ providedIn: 'root' })
export class ProdutosService {
  private produtos: Produto[] = [
    { codigo: 1, descricao: 'Camisa Polo', valor: 80, desconto: 60, detalhes: 'Camisa confortável 100% algodão.' },
    { codigo: 2, descricao: 'Tênis Esportivo', valor: 200, desconto: 150, detalhes: 'Leve, resistente e estiloso.' },
    { codigo: 3, descricao: 'Calça Jeans', valor: 120, desconto: 90, detalhes: 'Jeans moderno e confortável.' },
    { codigo: 4, descricao: 'Jaqueta Corta-Vento', valor: 180, desconto: 140, detalhes: 'Ideal para dias frios e chuvosos.' },
    { codigo: 5, descricao: 'Vestido Floral', valor: 150, desconto: 110, detalhes: 'Fresco e elegante para o verão.' },
    { codigo: 6, descricao: 'Blusa de Tricô', valor: 100, desconto: 75, detalhes: 'Quentinha e estilosa para o inverno.' },
    { codigo: 7, descricao: 'Relógio Digital', valor: 250, desconto: 200, detalhes: 'Design moderno com diversas funções.' },
    { codigo: 8, descricao: 'Óculos de Sol', valor: 90, desconto: 70, detalhes: 'Proteção UV com muito estilo.' },
    { codigo: 9, descricao: 'Bolsa Feminina', valor: 180, desconto: 140, detalhes: 'Compacta e sofisticada para o dia a dia.' },
    { codigo: 10, descricao: 'Boné Estampado', valor: 60, desconto: 45, detalhes: 'Acessório estiloso para completar o look.' },
    { codigo: 11, descricao: 'Meia Esportiva', valor: 40, desconto: 30, detalhes: 'Conforto e durabilidade para o dia a dia.' },
    { codigo: 12, descricao: 'Camiseta Básica', valor: 50, desconto: 35, detalhes: 'Essencial para qualquer guarda-roupa.' }
  ];

  getProdutos(): Produto[] {
    return this.produtos;
  }

  getProdutoPorCodigo(codigo: number): Produto | undefined {
    return this.produtos.find(p => p.codigo === codigo);
  }
}
