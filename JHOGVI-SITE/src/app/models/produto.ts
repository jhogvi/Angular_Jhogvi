export interface Produto {
	id: number;
	categoria: string;
	cor: string[];
	imagens: string[];
	videos?:string[];
	titulo: string;
	descricao?: string[];
	detalhes: string[];
	preco: number;
	qtd?: number;
	link?:string;
}
