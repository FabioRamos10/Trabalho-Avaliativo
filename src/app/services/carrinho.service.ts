import { Injectable } from '@angular/core';
import { Produto } from './produtos.service';

export interface ProdutoCarrinho extends Produto {
  quantidade: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private produtos: ProdutoCarrinho[] = [];
  frete = 21.54;

  adicionarProduto(produto: Produto, quantidade: number = 1) {
    // Verifica se o produto já está no carrinho
    const existente = this.produtos.find(p => p.codigo === produto.codigo);

    if (existente) {
      existente.quantidade += quantidade;
    } else {
      this.produtos.push({ ...produto, quantidade });
    }
  }

  getProdutos(): ProdutoCarrinho[] {
    return this.produtos;
  }

  getTotal(): number {
    return this.produtos.reduce((total, p) => total + p.desconto * p.quantidade, 0);
  }

  limpar() {
    this.produtos = [];
  }
}
