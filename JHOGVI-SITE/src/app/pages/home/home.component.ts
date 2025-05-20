import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { Produto } from '../../models/produto';
import { ItemCarrinho } from '../../models/item-carrinho';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  produtos: Produto[] = [];
  imgMockups: string[] = [];
  imgBack: string = 'assets/fundo_tech.png';
  titulo: string = '';
  descricao: string = '';
  detalhes: string[] = [];

  // Tipado para Produto ou null
  selectedBone: Produto | null = null;

  constructor(private produtosService: ProdutosService, private cartService:CartService, private router:Router) {}

  ngOnInit() {
	this.produtosService.getProdutosPorCategoria('bone').subscribe((data) => {
	  this.produtos = data;
	  if (this.produtos.length >= 0) {
		this.selectedBone = this.produtos[0]; // Seleciona o primeiro boné logo de início
	  }
	});
  }

  selecionarBone(bone: Produto) {
    this.selectedBone = bone;
  }

  handleComprar() {
	if (!this.selectedBone) return;

	const item: ItemCarrinho = {
	  id: this.selectedBone.id,
	  titulo: this.selectedBone.titulo,
	  descricao: this.selectedBone.descricao,
	  preco: this.selectedBone.preco,
	  imagens: this.selectedBone.imagens,
	  qtd: 1,
	  tipo: 'produto'
	};

	this.cartService.addToCart(item);
	this.router.navigate(['/carrinho']);
  }

}
