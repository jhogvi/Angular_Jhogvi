import { Component, Input } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';
import { Card } from '../../models/card';
import { Street } from '../../models/street';

@Component({
  selector: 'app-my-account',
  standalone: false,
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.css'
})
export class MyAccountComponent {

	@Input() icoCarteira: string = 'assets/ico/carteira_digital.ico';
	@Input() icoCarrinho: string = 'assets/ico/carrinho.ico';
	@Input() icoEndereco: string = 'assets/ico/casa.ico';
	@Input() icoCompras: string = 'assets/ico/shop.ico';
	@Input() icoSup: string = 'assets/ico/pergunta.ico';
	@Input() imgPedidosGeral: string = 'assets/ico/pedidos_geral.ico';
	@Input() imgRastreioPedidos: string = 'assets/ico/rastreio.ico';
	@Input() imgPedidosConcluidos: string = 'assets/ico/pedidos_concluidos.ico';
	@Input() imgMinhasAvaliacoes: string = 'assets/ico/satisfacao.ico';

	secaoAtiva: string = 'perfil'; // valor padrão
	clientData!: Client;
	cards: Card[] = [];
	streets: Street[] = [];

	showProfileEditor = false;
	showAddressEditor = false;
	showOrdersSection = false;
	showWalletSection = false;
	editandoEnderecos = false;
	selectedAddressIndex: number = 0;

	constructor(private clientService: ClientService) {}

	ngOnInit(): void {
	  this.clientService.getCliente().subscribe(data => {
		this.clientData = data;
		this.cards = data.wallet.cartoes;   // Supondo que venha assim da API
		this.streets = data.enderecos; // Também vindo junto com o cliente

		console.log('Client data carregado:', this.clientData);
	  });
	}

	saveProfile(dadosAtualizados: any) {
	  this.clientService.updateProfile(dadosAtualizados).subscribe(
		() => {
		  this.clientData = { ...this.clientData, ...dadosAtualizados };
		  this.showProfileEditor = false;
		},
		(err) => {
		  console.error('Erro ao atualizar perfil:', err);
		}
	  );
	}

	toggleSection(section: 'profile' | 'address' | 'orders' | 'wallet') {
	  // Zera todos
	  this.showProfileEditor = false;
	  this.showAddressEditor = false;
	  this.showOrdersSection = false;
	  this.showWalletSection = false;

	  // Ativa só o que foi clicado
	  switch (section) {
		case 'profile':
		  this.showProfileEditor = true;
		  break;
		case 'address':
		  this.showAddressEditor = true;
		  break;
		case 'orders':
		  this.showOrdersSection = true;
		  break;
		case 'wallet':
		  this.showWalletSection = true;
		  break;
	  }
	}

	closeAllSections() {
	  this.showProfileEditor = false;
	  this.showAddressEditor = false;
	  this.showOrdersSection = false;
	  this.showWalletSection = false;
	}

	mostrarSecao(secao: string): void {
	  this.secaoAtiva = secao;
	}

	// Métodos de edição de endereços
	adicionarNovoEndereco() {
	  this.clientData.enderecos.push({
		rua: '',
		numero: 0,
		bairro: '',
		cidade: '',
		estado: '',
		cep: ''
	  });
	  this.selectedAddressIndex = this.clientData.enderecos.length - 1;
	}
	definirComoPrincipal(index: number): void {
		this.clientData.enderecos.forEach((endereco, i) => {
		  endereco.isPrincipal = i === index;
		});

		this.selectedAddressIndex = index;

		this.clientService.updateEndereco(index, this.clientData.enderecos[index])
		  .subscribe(
			(updatedClient) => {
			  this.clientData = updatedClient;
			  console.log('Endereço principal atualizado com sucesso.');
			},
			(err) => {
			  console.error('Erro ao atualizar endereço principal:', err);
			}
		  );
	  }
	removerEndereco(index: number) {
	  const confirmar = confirm('Deseja realmente remover este endereço?');
	  if (confirmar) {
		this.clientData.enderecos.splice(index, 1);
		if (this.selectedAddressIndex >= this.clientData.enderecos.length) {
		  this.selectedAddressIndex = 0;
		}
	  }
	}

	salvarEndereco() {
		const enderecoValido = this.clientData.enderecos.every(end =>
			end.rua && end.numero && end.bairro && end.cidade && end.estado && end.cep
		);

		if (!enderecoValido) {
			alert('Preencha todos os campos dos endereços.');
			return;
		}

		this.editandoEnderecos = false;

	// // client.service.ts
	// updateEnderecos(enderecos: Street[]): Observable<Client> {
	// 	return this.http.put<Client>('URL_DA_API/client/endereco', { enderecos });
	//   }


		// Opcional: Salvar no backend
		this.clientService.updateEndereco(this.selectedAddressIndex, this.clientData.enderecos[this.selectedAddressIndex])
		.subscribe(
			(updatedClient) => {
			this.clientData = updatedClient;
			console.log('Endereço atualizado com sucesso');
			},
			(err) => {
			console.error('Erro ao atualizar endereço:', err);
			}
		);
	}

	cancelarEdicao() {
	  this.editandoEnderecos = false;

	  // Opcional: recarregar os dados do cliente se quiser desfazer mudanças
	  this.ngOnInit();
	}
  }
