import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router'; // Não esqueça de importar
import { tap } from 'rxjs';
import { ParsePrecoPipe } from '../../shared/parse-preco.pipe';
import { ItemCarrinho } from '../../models/item-carrinho';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})

export class ShoppingCartComponent implements OnInit {

	products: ItemCarrinho[] = [];
		totalPrice: number = 0;
		totalQtd: number = 0;
		selectAll: boolean = false;

		constructor(private service: CartService, private router: Router) {}

		ngOnInit(): void {
		  // Obter os produtos do carrinho e calcular o total
		  this.service.getCart().pipe(
			tap(cart => {
			  this.products = cart;
			  this.calculateTotal();
			})
		  ).subscribe();
		}

		// Função para realizar a compra
		buy() {
		  const selectedProducts = this.products.filter(p => p.selected);

		  if (selectedProducts.length === 0) {
			alert('Selecione ao menos um produto para continuar!');
			return;
		  }

		  // Passa os produtos selecionados para o checkout
		  this.service.setCheckoutItems(selectedProducts);
		  this.router.navigate(['/checkout']); // Redireciona para a página de checkout
		}

		// Alterna a seleção de todos os produtos
		toggleAllSelection() {
		  this.selectAll = !this.selectAll;
		  this.products = this.products.map(p => ({
			...p,
			selected: this.selectAll
		  }));
		}

		// Atualiza a seleção de um produto específico
		updateProductSelection(id: number, isSelected: boolean) {
		  this.products = this.products.map(p =>
			p.id === id ? { ...p, selected: isSelected } : p
		  );
		}

		// Calcula o total de preço e quantidade do carrinho
		calculateTotal() {
		  this.totalPrice = this.products.reduce(
			(acc, item) => acc + item.preco * item.qtd!, 0
		  );
		  this.totalQtd = this.products.reduce(
			(acc, item) => acc + item.qtd!, 0
		  );
		}

		updateQtd(productId: number, event: Event) {
			const input = event.target as HTMLInputElement; // Cast do evento para um HTMLInputElement
			if (!input) return;

			const newQtd = input.value; // Acessando o valor do input
			const current = this.products.find(p => p.id === productId);
			if (!current || !newQtd) return;

			const qtdNumber = parseInt(newQtd, 10); // Convertendo o valor de string para número

			if (!isNaN(qtdNumber)) {
			  if (qtdNumber > current.qtd) {
				this.service.incrementToCart(productId);
			  } else if (qtdNumber < current.qtd) {
				this.service.decrementToCart(productId);
			  }
			}
		  }
}
