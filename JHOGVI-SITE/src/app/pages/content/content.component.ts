import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../models/produto';
import { CartService } from '../../services/cart.service';
import { ValuesService } from '../../services/values.service';
import { ItemCarrinho } from '../../models/item-carrinho';
import { ParsePrecoPipe } from '../../shared/parse-preco.pipe';
import { produtos } from '../../data/data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  standalone: false
})
export class ContentComponent implements OnInit {
  produto!: Produto;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    public formatBrl: ValuesService,
    private parsePreco: ParsePrecoPipe
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = +idParam;
        this.carregarProduto(this.id);
      } else {
        console.error("ID não encontrado na rota.");
      }
    });
  }

  private carregarProduto(id: number): void {
	// Acessando diretamente os produtos dentro da categoria
	const todosProdutos: Produto[] = produtos
	  .flatMap(produto => produto.categoria ? [produto] : []);

	const encontrado = todosProdutos.find(p => p.id === id);

	if (encontrado) {
	  this.produto = encontrado;
	} else {
	  console.error("Produto não encontrado!");
	}
  }

  get cor(): string[] | undefined {
	const corString = this.produto?.detalhes?.find(d => d.toLowerCase().startsWith('cor:'))?.split(':')[1]?.trim();
	return corString ? corString.split(',').map(c => c.trim()) : undefined;
  }


  adicionarAoCarrinho(): void {
    if (!this.produto) return;

    const item: ItemCarrinho = {
      id: this.produto.id,
      titulo: this.produto.titulo,
      preco: this.produto.preco,
      qtd: 1,
      imagens: this.produto.imagens,
      descricao: this.produto.descricao,
      detalhes: this.produto.detalhes,
      cor: this.cor,
      tipo: 'produto'
    };

    this.cartService.addToCart(item);
    console.log(`${this.produto.titulo} foi adicionado ao carrinho!`);
  }

  comprarProduto(){

  }
}
