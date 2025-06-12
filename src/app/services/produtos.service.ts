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
    // Adicione até 12 produtos no total
  ];

  getProdutos(): Produto[] {
    return this.produtos;
  }

  getProdutoPorCodigo(codigo: number): Produto | undefined {
    return this.produtos.find(p => p.codigo === codigo);
  }
}
