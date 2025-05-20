import { Component, Input } from '@angular/core';
import { ValuesService } from '../../../services/values.service';
import { ProdutoCarrinho } from '../../../models/produto-carrinho';
import { CartService } from '../../../services/cart.service';
import { ItemCarrinho } from '../../../models/item-carrinho';

@Component({
  selector: 'app-mini-card',
  standalone: false,
  templateUrl: './mini-card.component.html',
  styleUrl: './mini-card.component.css'
})
export class MiniCardComponent {
	@Input() imgProduct!: string;
	@Input() title!: string;
	@Input() description: string = '';
	@Input() price!: number;
	@Input() id!: number;
	@Input() cor!: string[]; // Adicionando cor como Input
	@Input() detail!:string[]

	constructor(
	  public formatBrl: ValuesService,
	  private cartService: CartService
	) {}

	addProductToCart(): void {
	  const item: ItemCarrinho = {
		  id: this.id, // Usando o ID do produto
		  titulo: this.title,
		  preco: this.price,
		  qtd: 1,
		  imagens: [this.imgProduct], // Usando a imagem passada via Input
		  descricao: this.description,
		  detalhes: [], // Detalhes podem ser passados se necessário
		  cor: this.cor,
		  tipo: 'produto'
	  };

	  this.cartService.addToCart(item);
	//   alert(`${this.title} foi adicionado ao carrinho!`);
  // Exemplo de feedback visual
  this.cartService.showAddedToCartMessage(`${this.title} foi adicionado ao carrinho!`);	}
  }
