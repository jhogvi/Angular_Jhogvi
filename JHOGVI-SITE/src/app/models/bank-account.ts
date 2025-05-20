export interface BankAccount {
	nomeBanco: string;            // Ex: Itaú, Nubank
	agencia: string;
	numeroConta: string;
	tipoConta: 'Corrente' | 'Poupança';
	titular: string;
	cpfCnpjTitular: string;
	chavePix?: string;        // Pode ser e-mail, CPF, número, etc.
}
