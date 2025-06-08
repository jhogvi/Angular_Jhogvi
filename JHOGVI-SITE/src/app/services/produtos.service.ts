import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';
import { Observable, of } from 'rxjs';
import { produtos } from '../data/data';

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
