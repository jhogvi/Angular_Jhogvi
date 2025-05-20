import { Street } from './street';
import { Wallet } from './wallet';

export interface Client {
	id: number;
	photo?:string;
	firstName: string;
	lastName: string;
	email: string;
	genero: string;
	cpf?: string;
	cnpj?: string;
	tipoConta: 'CPF' | 'CNPJ';
	enderecos: Street[];
	wallet: Wallet;
  }
