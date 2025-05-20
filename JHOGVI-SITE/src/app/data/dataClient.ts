import { Client } from "../models/client";

export const dataClient:Client = {
	id: 1,
	photo:'assets/profile/icoPerson.jpeg',
	firstName: 'Antony',
	lastName: 'Marques',
	genero: 'masculino',
	tipoConta: 'CPF',
	cpf: '123.456.789-00',
	email: 'email-teste@email.com',
	enderecos: [
			{ rua: 'Rua das Avenidas',
				numero: 3120,
				complemento: 'apto201',
				bairro: 'Jardim das Americas',
				cidade: 'Curitiba',
				estado: 'Paraná',
				referencia: 'ao lado farmacia',
				cep: '80000-000' },
			{ rua: 'Av. das Torres',
				numero: 3120,
				complemento: 'apto201',
				bairro: 'Jardim das Americas',
				cidade: 'Curitiba',
				estado: 'Paraná',
				referencia: 'ao lado farmacia',
				cep: '82000-000' }
	], // <<--- necessário por causa da interface
	wallet: {
		contasBancarias: [
			{
				nomeBanco: 'Nubank',
				agencia: '0001',
				numeroConta: '123456-7',
				tipoConta: 'Corrente',
				titular: 'Usuario Teste',
				cpfCnpjTitular: '123.456.789-00',
				chavePix: 'email-teste@email.com'
			}
		],
		cartoes: [
			{
				numero: '4111111111111111',
				nomeTitular: 'Usuario Teste',
				validade: '05/28',
				codigoSeguranca: '123',
				bandeira: 'Visa'
			}
		]
	}
};
