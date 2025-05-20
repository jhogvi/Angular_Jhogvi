
export interface Evento {
	id: number;
	categoria: string;
	subcategoria: string;
	imagens: string[];
	titulo: string;
	descricao: string;
	detalhes: string[];
	localidade: string;
	endereco: string;
	local: string;
	data: string;
	entrada: number;
	idProdutosVinculados: number[];
}
