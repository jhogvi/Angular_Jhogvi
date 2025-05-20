// src/app/data/data.ts
import { Produto } from '../models/produto';
import { Evento } from '../models/evento';

export const produtos:Produto[] = [{
	id: 1001,
	categoria: 'Bone',
	titulo: 'Jhogvi Negócios e Oportunidades',
	descricao: ['Um boné que não é apenas um acessório de moda, mas também um dispositivo inteligente que pode ser usado para acessar eventos ou locais específicos.',
		'Integrado tecnologia RFID proporcionar um toque moderno  permitindo o acesso a lugares privados de maneira segura e prática.',
		'Possui chip criptografado, que é seguro e capaz de armazenar informações de forma criptografada, garantindo que apenas usuários autorizados possam acessar os locais.'],
	detalhes: ['Chip Criptografado'],
	cor: ['Preto', 'Branco'],
	imagens: [
		'assets/3d/mockup1.png', 'assets/3d/mockup2.png', 'assets/3d/mockup3.png',
		'assets/3d/mockup4.png', 'assets/3d/mockup5.png', 'assets/3d/mockup6.png',
		'assets/3d/mockup7.png', 'assets/3d/mockup8.png', 'assets/3d/mockup9.png', 'assets/3d/mockup10.png'
	],
	videos:[],
	preco: 59.90,
	link: 'https://jhogvi.lojaintegrada.com.br/bone-negocios-e-oportunidades'
	},
	{
	id: 1002,
	categoria: 'Bone',
	titulo: 'Jhogvi Parcerias',
	descricao: ['A boina é um acessório que combina elegância e status, frequentemente associado a um estilo clássico.'],
	detalhes: ['Tecnologia: Aba Reta'],
	cor: ['Branco'],
	imagens: [
		'assets/3d/mockup1.png', 'assets/3d/mockup2.png', 'assets/3d/mockup3.png',
		'assets/3d/mockup4.png', 'assets/3d/mockup5.png', 'assets/3d/mockup6.png',
		'assets/3d/mockup7.png', 'assets/3d/mockup8.png', 'assets/3d/mockup9.png', 'assets/3d/mockup10.png'
	],
	videos:[],
	preco: 64.90,
	link: 'https://jhogvi.lojaintegrada.com.br/bone-negocios-e-oportunidades'
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
