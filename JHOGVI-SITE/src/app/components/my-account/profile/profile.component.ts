import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../../../models/client';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
	@Input() dados!: Client;
	@Output() salvar = new EventEmitter<Client>();
	@Output() fechar = new EventEmitter<void>();

	typeAccount: Array<'CPF' | 'CNPJ'> = ['CPF', 'CNPJ'];
	tipoContaSelecionado: 'CPF' | 'CNPJ' = 'CPF';
	dadosEditaveis: Client = {} as Client;

  ngOnInit() {
	this.dadosEditaveis = { ...this.dados };
	this.tipoContaSelecionado = (this.dados?.tipoConta === 'CNPJ') ? 'CNPJ' : 'CPF';
  }
	emitirSalvar() {
	const valido = this.validarDocumento(this.tipoContaSelecionado, this.dadosEditaveis.tipoConta);
	if (!valido) {
	  alert('Documento inválido! Verifique o CPF ou CNPJ.');
	  return;
	}
	this.salvar.emit(this.dadosEditaveis);
  }


  validarDocumento(tipo: 'CPF' | 'CNPJ', valor: string): boolean {
	if (tipo === 'CPF') {
	  return /^\d{11}$/.test(valor.replace(/\D/g, '')); // Só números, 11 dígitos
	} else {
	  return /^\d{14}$/.test(valor.replace(/\D/g, '')); // Só números, 14 dígitos
	}
  }

}
