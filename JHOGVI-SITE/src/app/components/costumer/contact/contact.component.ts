import { Component, Input } from '@angular/core';
import { SocialMediaService } from '../../../services/social-media.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
	@Input() celular: string = '';
	@Input() whatsapp: string = '';
	@Input() email: string = '';
	@Input() facebook: string = '';
	@Input() instagram: string = '';
	whatsappSocial: any;

	constructor(private socialService: SocialMediaService){}

	ngOnInit() {
		const links = this.socialService.getSocialLinks();
		this.whatsappSocial = links[0]; // Pega só o primeiro (WhatsApp)

	  }


	formatarTelefone(numero: string, isWhatsapp: boolean = false): string {
	  if (!numero) return '';
	  const cleanNumber = numero.replace(/\D/g, ''); // Remove caracteres não numéricos

	  if (cleanNumber.length === 11) {
		// Formato para celular e WhatsApp
		if (isWhatsapp) {
		  return `(${cleanNumber.substring(0, 2)}) ${cleanNumber.substring(2, 3)} ${cleanNumber.substring(3, 7)}-${cleanNumber.substring(7)}`;
		}
		return `(${cleanNumber.substring(0, 2)}) ${cleanNumber.substring(2, 7)}-${cleanNumber.substring(7)}`;
	  } else if (cleanNumber.length === 10) {
		// Formato para telefone fixo
		return `(${cleanNumber.substring(0, 2)}) ${cleanNumber.substring(2, 6)}-${cleanNumber.substring(6)}`;
	  }
	  return numero; // Retorna sem formatar se não for um número válido
	}

	get whatsappLink(): string {
	  return `https://api.whatsapp.com/send?phone=55${this.celular.replace(/\D/g, '')}`;
	}

	get telLink(): string {
	  return `tel:+55${this.celular.replace(/\D/g, '')}`;
	}

	get mailtoLink(): string {
	  return `mailto:${this.email}`;
	}
  }
