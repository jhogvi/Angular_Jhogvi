import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
	private checkoutData = new BehaviorSubject<any>(null);

	constructor() {}

	iniciarCheckout(cartItems: any[]) {
	  this.checkoutData.next({
		items: cartItems,
		endereco: null,
		pagamento: null
	  });
	}

	setEndereco(endereco: any) {
	  const data = this.checkoutData.value;
	  this.checkoutData.next({ ...data, endereco });
	}

	setPagamento(pagamento: any) {
	  const data = this.checkoutData.value;
	  this.checkoutData.next({ ...data, pagamento });
	}

	getDadosCheckout(): Observable<any> {
	  return this.checkoutData.asObservable();
	}

	cancelarCheckout() {
	  this.checkoutData.next(null);
	}

	getResumoAtual() {
	  return this.checkoutData.value;
	}
  }
