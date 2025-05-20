import { Injectable } from '@angular/core';
import { produtos } from '../data/data';
import { Observable, of } from 'rxjs';

export interface Produto {
  id: number;
  categoria: string;
  cor: string[];
  imagens: string[];
  titulo: string;
  descricao?: string[];
  detalhes: string[];
  preco: number;
  qtd?:number;
}

interface Categoria <T=Produto>{
  id: number;
  [nome: string]: T[] | number | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private produtosData = produtos;

  getProdutosPorCategoria(nomeCategoria: string): Observable<Produto[]> {
	const produtosFiltrados = this.produtosData.filter(
	  (produto: Produto) =>
		produto.categoria.toLowerCase() === nomeCategoria.toLowerCase()
	);
	return of(produtosFiltrados);
  }


}
