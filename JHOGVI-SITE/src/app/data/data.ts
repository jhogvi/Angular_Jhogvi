// src/app/data/data.ts
import { Produto } from '../models/produto';
import { Evento } from '../models/evento';

export const produtos:Produto[] = [{
	id: 1001,
	categoria: 'Bone',
	titulo: 'Boné Jhogvi',
	descricao: ['Boné Jhogvi perfeito para qualquer ocasião! Seja para um passeio descontraído ou um evento especial',
		'Agregando exclusividade, garantindo a sua entrada em baladas e eventos Jhogvi!',
		'Feito com materiais premium, nosso boné garante durabilidade e ajuste perfeito.',
		'Adicione um toque de sofisticação ao seu visual e atraia todos os olhares!',
		'Estoque limitado.',
		'Não perca a oportunidade de brilhar!',
		'Adquira Seu Boné Estilo Beisebol Hoje Mesmo #Jhogvi.'],
	detalhes: ['Chip Criptografado RFID'],
	cor: ['Preto', 'Branco'],
	imagens: [
		'assets/img/bone/bone-jhogvi/bone-preto-lateral.png',
		'assets/img/bone/bone-jhogvi/bone-branco-lateral.png',
		'assets/img/bone/bone-jhogvi/bone-preto-front.png',
		'assets/img/bone/bone-jhogvi/bone-branco-front.png',
		'assets/img/bone/bone-jhogvi/bone-preto-tras.png',
		'assets/img/bone/bone-jhogvi/bone-branco-tras.png',
	],
	videos:['assets/video/bone-jhogvi/bone_preto_com_base.webm'],
	preco: 200.00,
	link: 'https://jhogvi.lojaintegrada.com.br/bone-jhogvi'
	},
	{
	id: 1002,
	categoria: 'Bone',
	titulo: 'Boné Jhogvi (Exclusivo)',
	descricao: [
		'Boné Jhogvi exclusivamente para acesso à camarotes.',
		'Tecnologia RFID agregando exclusividade, garantindo seu camarote nas baladas e eventos Jhogvi.',
		'Entregando durabilidade e ajuste perfeito.',
		'Adicione um toque de sofisticação ao seu visual e atraia todos os olhares!',
		'Estoque limitado!',
		'Não perca a oportunidade de brilhar!',
		'Adquira seu boné estilo beisebol hoje mesmo #Jhogvi.'
	],
	detalhes: ['Chip Criptografado RFID','Material Premium'],
	cor: ['Preto','Branco'],
	imagens: [
		'assets/img/bone/bone-jhogvi/bone-preto-lateral.png',
		'assets/img/bone/bone-jhogvi/bone-branco-lateral.png',
		'assets/img/bone/bone-jhogvi/bone-preto-front.png',
		'assets/img/bone/bone-jhogvi/bone-branco-front.png',
		'assets/img/bone/bone-jhogvi/bone-preto-tras.png',
		'assets/img/bone/bone-jhogvi/bone-branco-tras.png',
	],
	videos:['assets/video/bone-jhogvi/bone_preto_com_base.webm'],
	preco: 500.00,
	link: 'https://jhogvi.lojaintegrada.com.br/bone-jhogvi-exclusivo--'
	}
];

export const eventos:Evento[]=[
	{
		id: 2001,
		idProdutosVinculados: [1001, 1002],
		categoria: 'Evento',
		subcategoria: 'Inauguração',
		imagens: ['assets/img/eventos/img-evento.png'],
		titulo: 'Evento Inauguração Jhogvi',
		descricao: 'Evento de Inauguração Jhogvi.',
		detalhes: [],
		localidade: 'Toledo PR',
		endereco: 'Fique atento para mais informações.',
		local:'',
		data:'26-09-2026',
		entrada: 0.0
	},{
		id: 2002,
		idProdutosVinculados: [1002],
		titulo: 'Evento de Jhogvi Exclusivo',
		descricao: 'Evento de Jhogvi Teste.',
		categoria: 'Evento',
		subcategoria: 'Inauguração',
		imagens: ['assets/img/eventos/img-evento.png'],
		detalhes: [],
		localidade: 'Toledo',
		endereco: 'Fique atento para mais informações.',
		local:'',
		data:'26-09-2026',
		entrada: 0.0
	}]
