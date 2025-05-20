export interface ItemCarrinho {
	id: number;
	titulo: string;
	preco: number;
	qtd: number;
	imagens?: string[];
	cor?: string[];
	descricao?: string | string[];
	detalhes?: string[];
	tipo: 'produto' | 'evento';
	selected?: boolean; // <-- aqui

}
