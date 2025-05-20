import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Street } from '../../../models/street';

@Component({
  selector: 'app-address',
  standalone: false,
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
	@Input() endereco!: Street;
	@Input() index!: number; // opcional, se quiser identificar
	@Input() editMode = false;

	@Output() remover = new EventEmitter<number>();
	@Output() fechar = new EventEmitter<void>();

	removerEndereco() {
		const confirmRemove = confirm('Remover Este Endereço');
		if(confirmRemove){
			this.remover.emit(this.index);

		}
	}

	cancelarEdicao() {
		this.fechar.emit();
	}
}
