import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { Observable, of } from 'rxjs';
import { Wallet } from '../models/wallet';
import { dataClient } from '../data/dataClient';
import { Street } from '../models/street';
import { Card } from '../models/card';
import { BankCard } from '../models/bank-card';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
	private clientData:  Client = dataClient;

	  constructor() {}

	//   updateClientWallet(id: number, wallet: Wallet): Observable<Client> {
	// 	return this.http.put<Client>(`${this.apiUrl}/${id}/wallet`, wallet);
	//   }

	// PERFIL
	getCliente(): Observable<Client> {
		return of(this.clientData);
	  }

	updateProfile(dadosEditados: Partial<Client>): Observable<Client> {
		this.clientData = { ...this.clientData, ...dadosEditados };
		return of(this.clientData);
	}

	// ENDERECOS
	addEndereco(endereco: Street): Observable<Client> {
		this.clientData.enderecos = [...this.clientData.enderecos, endereco];
		return of(this.clientData);
	}

	updateEndereco(index: number, enderecoAtualizado: Street): Observable<Client> {
		this.clientData.enderecos[index] = enderecoAtualizado;
		return of(this.clientData);
	}

	removeEndereco(index: number): Observable<Client> {
		this.clientData.enderecos.splice(index, 1);
		return of(this.clientData);
	}

	// CARTEIRA
	updateWallet(wallet: Wallet): Observable<Client> {
		this.clientData.wallet = wallet;
		return of(this.clientData);
	}

	addCard(card: Card): Observable<Client> {
		const bankCard: BankCard = {
		  numero: card.numero,
		  nomeTitular: card.nomeTitular,
		  validade: card.validade,
		  codigoSeguranca: card.codigoSeguranca,
		  bandeira: card.bandeira
		};

		this.clientData.wallet.cartoes.push(bankCard);
		return of(this.clientData);
	  }

	removeCard(index: number): Observable<Client> {
		this.clientData.wallet.cartoes.splice(index, 1);
		return of(this.clientData);
	}

	//   BANCOS
	addBankAccount(account: any): Observable<Client> {
		this.clientData.wallet.contasBancarias.push(account);
		return of(this.clientData);
	}

	removeBankAccount(index: number): Observable<Client> {
		this.clientData.wallet.contasBancarias.splice(index, 1);
		return of(this.clientData);
	}

}
