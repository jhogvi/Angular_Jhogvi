import { BankAccount } from "./bank-account";
import { BankCard } from "./bank-card";

export interface Wallet {
	cartoes: BankCard[];
	contasBancarias: BankAccount[];
  }
