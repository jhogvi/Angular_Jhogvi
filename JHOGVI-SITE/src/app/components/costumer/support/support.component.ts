import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-support',
  standalone: false,
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {
	supportForm: FormGroup;
	whatsappNumero: string = '554598482809'; // Número do WhatsApp
	emailDestino: string = 'jhogvi@gmail.com'; // E-mail de destino

	constructor(private fb: FormBuilder) {
	  this.supportForm = this.fb.group({
		nome: ['', Validators.required],
		celular: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]], // 11 dígitos sem máscara
		email: ['', [Validators.required, Validators.email]],
		assunto: ['', Validators.required],
		mensagem: ['', [Validators.required, Validators.minLength(10)]],
		metodoEnvio: ['', Validators.required], // Adicionando o método de envio
	  });
	}

	onSubmit() {
	  if (this.supportForm.invalid) {
		alert("⚠️ Preencha todos os campos corretamente!");
		this.supportForm.markAllAsTouched();
		return;
	  }
	  const metodoEnvio = this.supportForm.value.metodoEnvio;
	  if (metodoEnvio === 'whatsapp') {
		this.enviarPorWhatsApp();
	  } else if (metodoEnvio === 'email') {
		this.enviarPorEmail();
	  }
	  alert("✅ Mensagem enviada com sucesso!");
	  this.supportForm.reset(); // Limpa o formulário após o envio
	  // console.log('Formulário enviado com sucesso!', this.supportForm.value);

	}

	enviarPorWhatsApp() {
	  const mensagemFormatada = this.formatarMensagem();
	  const whatsappLink = `https://api.whatsapp.com/send?phone=${this.whatsappNumero}&text=${encodeURIComponent(mensagemFormatada)}`;
	  window.open(whatsappLink, '_blank');
	}

	enviarPorEmail() {
	  const mensagemFormatada = this.formatarMensagem();
	  const mailtoLink = `mailto:${this.emailDestino}?subject=${encodeURIComponent(this.supportForm.value.assunto)}&body=${encodeURIComponent(mensagemFormatada)}`;
	  window.location.href = mailtoLink;
	}

	formatarMensagem(): string {
	  return `
		Nome: ${this.supportForm.value.nome}
		Celular: ${this.supportForm.value.celular}
		E-mail: ${this.supportForm.value.email}
		Assunto: ${this.supportForm.value.assunto}
		Mensagem: ${this.supportForm.value.mensagem}
	  `;
	}
  }

