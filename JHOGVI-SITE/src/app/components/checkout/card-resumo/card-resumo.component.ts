import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ValuesService } from '../../../services/values.service';
import { ItemCarrinho } from '../../../models/item-carrinho';

@Component({
  selector: 'app-card-resumo',
  standalone: false,
  templateUrl: './card-resumo.component.html',
  styleUrl: './card-resumo.component.css'
})
export class CardResumoComponent {
	@Input() id!: number;
	@Input()imgProduto?: string;
	@Input()titulo!: string;
	@Input()detalhes?: string | string[];
	@Input()valor!: number;
	@Input()quantidade!: number;
	@Input() cartItems: ItemCarrinho[] = [];  // Itens do carrinho
	@Output() itemRemoved = new EventEmitter<number>();  // Evento para remover um item

	constructor(public formatBrl: ValuesService) {}

	// Função para remover o item
	removeItem(productId: number) {
		const confirmRemove = confirm('remover item');

		if(confirmRemove===true){
			this.itemRemoved.emit(productId);  // Emite o id do produto a ser removido
		}
	}
  }
