import { Component, HostListener } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { ItemCarrinho } from '../../models/item-carrinho';
import { CartService } from '../../services/cart.service';
import { CheckoutService } from '../../services/checkout.service';
import { ValuesService } from '../../services/values.service';
import { ClientService } from '../../services/client.service';
import { Street } from '../../models/street';
import { Client } from '../../models/client';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
	client!: Client;
	enderecoEntrega: any;
	cartItems: ItemCarrinho[] = [];
	total = 0;
	showAllAddresses: boolean = false;
	selectedAddressIndex: number = 0;
	editandoEnderecos = false;

	constructor(
	  public formatBrl: ValuesService,
	  private clientService: ClientService,
	  private cartService: CartService
	) {}

	ngOnInit() {
	  this.clientService.getCliente().subscribe(cliente => {
		this.client = cliente;
		this.enderecoEntrega = cliente.enderecos[0];
	  });

	  this.cartService.getCart().subscribe(items => {
		this.cartItems = items;
		this.total = items.reduce((acc, item) => acc + item.preco * item.qtd!, 0);
	  });
	}
	openAddress() {
		this.showAllAddresses = true;
	  }


	  removerEndereco(index: number) {
		const confirmRemove = confirm('Remover Este Endereço');
		if (confirmRemove) {
		  this.client.enderecos.splice(index, 1);

		  if (this.selectedAddressIndex >= this.client.enderecos.length) {
			this.selectedAddressIndex = 0;
		  }
		}
	  }

	  salvarEndereco() {
		const enderecoValido = this.client.enderecos.every(end =>
		  end.rua && end.numero && end.bairro && end.cidade && end.estado && end.cep
		);

		if (!enderecoValido) {
		  alert('Preencha todos os campos dos endereços.');
		  return;
		}

		this.editandoEnderecos = false;
		// Aqui você pode enviar pro backend se quiser
	  }
			cancelarEdicao() {
		this.editandoEnderecos = false;
	  }

	  adicionarNovoEndereco() {
		this.client.enderecos.push({
		  rua: '',
		  numero: 0,
		  bairro: '',
		  cidade: '',
		  estado: '',
		  cep: ''
		});
		this.selectedAddressIndex = this.client.enderecos.length - 1;
	  }
	openWallet() {
		throw new Error('Method not implemented.');
	}

	finalizePurchase() {
	  alert('Compra finalizada!');
	}

	removeItem(id: number) {
	  this.cartService.removeItem(id);
	}
}
