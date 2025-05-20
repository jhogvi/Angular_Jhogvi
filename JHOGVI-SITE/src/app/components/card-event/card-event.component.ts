import { Component, Input } from '@angular/core';
import { ValuesService } from '../../services/values.service';

@Component({
  selector: 'app-card-event',
  standalone: false,
  templateUrl: './card-event.component.html',
  styleUrl: './card-event.component.css'
})
export class CardEventComponent {
	@Input() id:number=0;
@Input()title!: string;
@Input()local!: string;
@Input()imgEvent: string='assets/img/eventos/img-evento.png';
@Input()city!: string;
@Input()street!: string;
@Input()date!: string;
@Input()price!: number;
@Input()subcategoria!: string;

constructor(private valuesService:ValuesService, public formatBrl:ValuesService){}
}
