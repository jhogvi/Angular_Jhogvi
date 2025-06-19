// src/app/data/data.ts
import { Produto } from '../models/produto';
import { Evento } from '../models/evento';

export const produtos:Produto[] = [{
	id: 1001,
	categoria: 'Bone',
	titulo: 'Boné Jhogvi',
	descricao: ['O boné jhogvi perfeita para qualquer ocasião! Seja para um passeio descontraído ou um evento especial',
		'Entregado tecnologia rfid agregando exclusividade e garantindo a sua entrada  em baladas jhogvi!',
		'Feita com materiais premium, nosso boné garante durabilidade e um ajuste perfeito.',
		'Adicione um toque de sofisticação ao seu visual e atraia todos os olhares!',
		'Estoque limitado.',
		'Não perca a oportunidade de brilhar!',
		'adquira seu boné estilo Beisebol hoje mesmo #Jhogvi.'],
	detalhes: ['Chip Criptografado'],
	cor: ['Preto', 'Branco'],
	imagens: [
		'assets/3d/mockup1.png', 'assets/3d/mockup2.png', 'assets/3d/mockup3.png',
		'assets/3d/mockup4.png', 'assets/3d/mockup5.png', 'assets/3d/mockup6.png',
		'assets/3d/mockup7.png', 'assets/3d/mockup8.png', 'assets/3d/mockup9.png', 'assets/3d/mockup10.png'
	],
	videos:['assets/video/jhogvi-preto.webm'],
	preco: 150.00,
	link: 'https://jhogvi.lojaintegrada.com.br/bone-jhogvi'
	},
	{
	id: 1002,
	categoria: 'Bone',
	titulo: 'Boné Jhogvi (Camarote)',
	descricao: [
		'Boné Jhogvi Exclusivamente para acesso à Camarote.',
		'Tecnologia RFID Agregando Exclusividade, Garantindo Seu Camarote nas Baladas e Eventos Jhogvi',
		'Entregando Durabilidade e Ajuste Perfeito.',
		'Adicione um toque de sofisticação ao seu visual e atraia todos os olhares!',
		'Estoque limitado!',
		'Não perca a oportunidade ',
		'Adquira Seu Boné Estilo Beisebol Hoje Mesmo #Jhogvi.'
	],
	detalhes: ['Chip RFID','Material Premium'],
	cor: ['Branco'],
	imagens: [
		'assets/3d/mockup1.png', 'assets/3d/mockup2.png', 'assets/3d/mockup3.png',
		'assets/3d/mockup4.png', 'assets/3d/mockup5.png', 'assets/3d/mockup6.png',
		'assets/3d/mockup7.png', 'assets/3d/mockup8.png', 'assets/3d/mockup9.png', 'assets/3d/mockup10.png'
	],
	videos:['assets/video/jhogvi-branco.webm'],
	preco: 500.00,
	link: 'https://jhogvi.lojaintegrada.com.br/bone-jhogvi'
	}
];

export const eventos:Evento[]=[{
	id: 2001,
	idProdutosVinculados: [1001, 1002],
	categoria: 'Evento',
	subcategoria: 'Inauguração',
	imagens: ['assets/img/eventos/img-evento.png'],
	titulo: 'Evento Inauguração Jhogvi',
	descricao: 'Evento de Inauguração Jhogvi.',
	detalhes: [],
	localidade: 'Toledo PR',
	endereco: 'Rua das Carmelias, 456',
	local:'Convenção das Roseiras',
	data:'26-09-2026',
	entrada: 0.0
	},{
		id: 2002,
		idProdutosVinculados: [1001, 1002],
		titulo: 'Evento de Jhogvi Teste',
		descricao: 'Evento de Jhogvi Teste.',
		categoria: 'Evento',
		subcategoria: 'Inauguração',
		imagens: ['assets/img/eventos/img-evento.png'],
		detalhes: [],
		localidade: 'SBC SP',
		endereco: 'Rua das Carmelias, 456',
		local:'Convenção das Roseiras',
		data:'26-09-2026',
		entrada: 0.0
	}]
