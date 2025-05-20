import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ValuesService } from '../../../services/values.service';
import { CartService } from '../../../services/cart.service';
import { ParsePrecoPipe } from '../../../shared/parse-preco.pipe';

@Component({
  selector: 'app-elements',
  standalone: false,
  templateUrl: './elements.component.html',
  styleUrl: './elements.component.css',
  providers: [ParsePrecoPipe]
})
export class ElementsComponent {

// [x: string]: any;
	@Input()
	id:number=0;
	@Input()
	prodImg:string = "";
	@Input()
	prodName:string= "";
	@Input()
	qtd:number=0;
	@Input()
	price:number=0;

	@Output()
	@Input() isSelected: boolean = false;
    @Output() toggleSelection = new EventEmitter<boolean>();


	updateQtd = new EventEmitter<number>();

	constructor(public formatBrl:ValuesService, private cartService:CartService, private parsePreco:ParsePrecoPipe){}
	ngOnInit(): void {}

// Calcula o preço total baseado na quantidade
	get priceTotal() : number {
	return this.parsePreco.transform(this.price) * this.qtd;
	}

	// // Método chamado para alterar a quantidade
	// changeQtd(newQtd: number) {
	//   if (newQtd >= 0) {
	//     this.qtd = newQtd; // Atualiza a quantidade local
	//     this.updateQtd.emit(this.qtd); // Emite a nova quantidade para o componente pai
	//   }
	// }
	/** NAO DA CERTO POR QUE NAO FAZ AJUSTES NOS BOTOES */


	increaseQtd() {
		// this.updateQtd.emit(this.qtd + 1); // Solicita ao pai para atualizar
		this.cartService.incrementToCart(this.id); // Atualiza no service
	  }

	  decreaseQtd() {
		if (this.qtd === 1) {
		  const confirmRm = window.confirm("Remover item?");
		  if (confirmRm) {
			this.updateQtd.emit(0); // Solicita remoção ao pai
			this.cartService.decrementToCart(this.id); // Atualiza no service
		  }
		} else if (this.qtd > 1) {
		//   this.updateQtd.emit(this.qtd - 1); // Solicita decremento ao pai
		  this.cartService.decrementToCart(this.id); // Atualiza no service
		}
	  }

	  onSelectionChange(event: Event) {
		const checked = (event.target as HTMLInputElement).checked;
		this.toggleSelection.emit(checked);
	  }

}
