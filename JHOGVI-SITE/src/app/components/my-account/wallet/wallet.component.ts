import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Wallet } from '../../../models/wallet';
import { BankCard } from '../../../models/bank-card';
import { BankAccount } from '../../../models/bank-account';
import { Client } from '../../../models/client';
import { ClientService } from '../../../services/client.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-wallet',
  standalone: false,
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css'
})
export class WalletComponent implements OnInit {
	protected clientData!: Client;

	cartoes: BankCard[] = [];
	bancos: BankAccount[] = [];
	isEditingBank: boolean = false;
	isEditingCard: boolean = false;
	formWallet!: FormGroup;
	formBancoArray!: FormArray;
	formCartaoArray!: FormArray;

	@Output() fechar = new EventEmitter<void>();

	constructor(private clientService: ClientService, private fb: FormBuilder) {}

	ngOnInit(): void {
	  this.clientService.getCliente().subscribe(data => {
		this.clientData = data;
		this.cartoes = data.wallet.cartoes;
		this.bancos = data.wallet.contasBancarias;

		this.formWallet = this.fb.group({
			bancos: this.fb.array(this.bancos.map(conta => this.createBancoFormGroup(conta))),
			cartoes: this.fb.array(this.cartoes.map(cartao => this.createCartaoFormGroup(cartao)))
		  });

		  this.formBancoArray = this.formWallet.get('bancos') as FormArray;
		  this.formCartaoArray = this.formWallet.get('cartoes') as FormArray;

		//   this.formBancoArray = this.fb.array(
		//   this.bancos.map(conta => this.createBancoFormGroup(conta))
		// );

		// this.formCartaoArray = this.fb.array(
		//   this.cartoes.map(cartao => this.createCartaoFormGroup(cartao))
		// );
	  });
	}

	createBancoFormGroup(data?: BankAccount): FormGroup {
	  return this.fb.group({
		titular: [data?.titular || ''],
		cpfCnpjTitular: [data?.cpfCnpjTitular || ''],
		chavePix: [data?.chavePix || ''],
		nomeBanco: [data?.nomeBanco || ''],
		tipoConta: [data?.tipoConta || 'Corrente'],
		agencia: [data?.agencia || ''],
		numeroConta: [data?.numeroConta || '']
	  });
	}

	createCartaoFormGroup(data?: BankCard): FormGroup {
	  return this.fb.group({
		nomeTitular: [data?.nomeTitular || ''],
		numero: [data?.numero || ''],
		validade: [data?.validade || ''],
		codigoSeguranca: [data?.codigoSeguranca || ''],
		bandeira: [data?.bandeira || '']
	  });
	}

	addAccount() {
	  this.formBancoArray.push(this.createBancoFormGroup());
	}

	removeAccount(index: number) {
	  this.formBancoArray.removeAt(index);
	}

	addCard() {
	  this.formCartaoArray.push(this.createCartaoFormGroup());
	}

	removeCard(index: number) {
	  this.formCartaoArray.removeAt(index);
	}

	editBank() {
	  this.isEditingBank = true;
	  this.isEditingCard = false;
	}

	editCard() {
	  this.isEditingCard = true;
	  this.isEditingBank = false;
	}

	cancelEditing() {
	  const cancel = confirm('Cancelar Alterações?');

	  if (cancel) {
		this.formBancoArray.clear();
		this.formCartaoArray.clear();

		// Recarregar os dados
		this.ngOnInit();

		this.isEditingBank = false;
		this.isEditingCard = false;
	  }
	}

	closeEdition() {
	  this.isEditingBank = false;
	  this.isEditingCard = false;
	}

	onSubmitBanco() {
	  if (this.formBancoArray.valid) {
		const novasContas = this.formBancoArray.value as BankAccount[];
		this.clientData.wallet.contasBancarias = novasContas;

		this.clientService.updateWallet(this.clientData.wallet).subscribe({
		  next: updated => {
			this.clientData = updated;
			this.bancos = updated.wallet.contasBancarias;
			this.closeEdition();
		  },
		  error: err => console.error('Erro ao salvar contas bancárias', err)
		});
	  }
	}

	onSubmitCartao() {
	  if (this.formCartaoArray.valid) {
		const novosCartoes = this.formCartaoArray.value as BankCard[];
		this.clientData.wallet.cartoes = novosCartoes;

		this.clientService.updateWallet(this.clientData.wallet).subscribe({
		  next: updated => {
			this.clientData = updated;
			this.cartoes = updated.wallet.cartoes;
			this.closeEdition();
		  },
		  error: err => console.error('Erro ao salvar cartões', err)
		});
	  }
	}
  }
