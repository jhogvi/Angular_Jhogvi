import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-bar',
  standalone: false,
  templateUrl: './footer-bar.component.html',
  styleUrl: './footer-bar.component.css'
})
export class FooterBarComponent {
	cnpj:string='60.806.771/0001-00'
	nomeFantasia:string='JHOGVI STORE'
	endereco:string='Rua Ledi Fischer Maas, 1648, Jardim Europa/América - Toledo/PR'
	cep:string='85907-140'
	telefone:string='(45) 9848-2800'
	email:string='jhogvi@gmail.com'
	copy:string= '2025 JHOGVI STORE. Todos os direitos reservados.'

}
