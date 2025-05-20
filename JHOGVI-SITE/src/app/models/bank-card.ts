export interface BankCard {
	numero: string;
	nomeTitular: string;
	validade: string;         // Ex: 05/28
	codigoSeguranca: string;  // Ex: 123
	bandeira: string;         // Ex: Visa, MasterCard
}
