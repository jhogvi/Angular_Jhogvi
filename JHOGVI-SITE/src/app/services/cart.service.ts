import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from './produtos.service';
import { ItemCarrinho } from '../models/item-carrinho';

@Injectable({
  providedIn: 'root'
})
export class CartService {
	private cartItems: ItemCarrinho[] = [];
	public cartSubject = new BehaviorSubject<ItemCarrinho[]>([]); // Comportamento dos itens no carrinho
	cart$ = this.cartSubject.asObservable();

	private totalSubject = new BehaviorSubject<number>(0); // Total do carrinho
	getTotal() {
	  return this.totalSubject.asObservable();
	}

	// Atualiza o valor total do carrinho
	public updateTotal() {
	  const total = this.cartItems.reduce((sum, item) => sum + (item.preco * item.qtd!), 0);
	  this.totalSubject.next(total); // Atualiza o total
	}

	// Retorna os itens no carrinho
	getCart() {
	  return this.cart$;
	}

	// Adiciona um item ao carrinho
	addToCart(prod: ItemCarrinho) {
	  const item = this.cartItems.find(p => p.id === prod.id);
	  if (item) {
		item.qtd = (item.qtd || 0) + (prod.qtd || 1);
	  } else {
		this.cartItems.push({ ...prod, qtd: prod.qtd || 1 });
	  }

	  this.cartSubject.next(this.cartItems);
	  this.updateTotal(); // Atualiza o total
	}

	removeItem(id: number) {
		this.cartItems = this.cartItems.filter(item => item.id !== id);
		this.cartSubject.next(this.cartItems);
		this.updateTotal();
	  }


	// Incrementa a quantidade de um item no carrinho
	incrementToCart(prodId: number) {
	  const item = this.cartItems.find(p => p.id === prodId);
	  if (item) {
		item.qtd = (item.qtd || 0) + 1;
		this.cartSubject.next(this.cartItems);
		this.updateTotal(); // Atualiza o total
	  }
	}

	// Decrementa a quantidade de um item no carrinho
	decrementToCart(prodId: number) {
	  const item = this.cartItems.find(p => p.id === prodId);
	  if (item) {
		item.qtd = (item.qtd || 1) - 1;
		if (item.qtd <= 0) {
		  this.cartItems = this.cartItems.filter(p => p.id !== prodId); // Remove item se quantidade for <= 0
		}
		this.cartSubject.next(this.cartItems);
		this.updateTotal(); // Atualiza o total
	  }
	}

	// Exibe uma mensagem de produto adicionado ao carrinho
	showAddedToCartMessage(message: string): void {
	  console.log(message);
	}

	// Método para definir os produtos selecionados para o checkout
	setCheckoutItems(selectedProducts: ItemCarrinho[]) {
	  // Aqui você pode salvar os itens no localStorage ou em um backend.
	  // Exemplo com localStorage:
	  localStorage.setItem('checkoutItems', JSON.stringify(selectedProducts));
	  console.log('Itens para checkout:', selectedProducts);
	}
  }
