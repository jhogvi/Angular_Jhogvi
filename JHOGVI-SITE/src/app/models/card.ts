import { BankCard } from "./bank-card";

export interface Card extends BankCard {
	numero: string;
	validade: string;

}
