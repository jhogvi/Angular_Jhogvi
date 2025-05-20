import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-costumer-support',
  standalone: false,
  templateUrl: './costumer-support.component.html',
  styleUrl: './costumer-support.component.css'
})
export class CostumerSupportComponent {
	@Input() presenting_img: string="assets/";
	@Input() missao: string="Nossa missao...";
	@Input() visao:string="Nossa vissao...";
	@Input() valores: string="Nossos valores...";

}
