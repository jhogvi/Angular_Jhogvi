import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ValuesService } from '../../services/values.service';
import { ProdutoCarrinho } from '../../models/produto-carrinho';
import { Evento } from '../../models/evento';
import { eventos } from '../../data/data';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoCarrinho } from '../../models/evento-carrinho';
import { ItemCarrinho } from '../../models/item-carrinho';
import { MatDialog } from '@angular/material/dialog';
import { AlertCompraComponent } from '../../components/alert-compra/alert-compra.component';


@Component({
  selector: 'app-event',
  standalone: false,
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
	event?: Evento;
	private id!: number;

	constructor(
	  private route: ActivatedRoute,
	  private cartService: CartService,
	  public formatBrl: ValuesService,
	  private dialog: MatDialog,
	  private router: Router
	) {}

	ngOnInit(): void {
	  this.route.paramMap.subscribe(params => {
		const idParam = params.get('id');
		if (idParam) {
		  this.id = +idParam;
		  this.loadEventById(this.id);
		} else {
		  console.error("ID não encontrado na rota.");
		}
	  });
	}

	private loadEventById(id: number): void {
	  const foundEvent = eventos.find(e => e.id === id);
	  if (foundEvent) {
		this.event = foundEvent;
	  } else {
		console.error("Evento não encontrado!");
	  }
	}

	addToCart(): void {
	  if (!this.event) return;

	  const item: ItemCarrinho = {
		id: this.event.id,
		titulo: this.event.titulo,
		preco: this.event.entrada,
		qtd: 1,
		descricao: this.event.descricao,
		detalhes: this.event.detalhes,
		imagens: this.event.imagens,
		tipo: 'evento'
	  };


	  /*Implementar algo para abrir outro component como se fosse um Alert informando para comprar um produto
	  tendo um OK e um Me encaminhe ao produto, e nessa parte, quando OK fecha esse subcomponent e quando o 2° opt,
	  */
	const dialogRef = this.dialog.open(AlertCompraComponent, {
		minWidth: '60vw',
		minHeight: '70vh',

		data: { eventoId: this.event.id??[] }  // Substitua com o ID real do produto
	});

	dialogRef.afterClosed().subscribe(result => {
		if (result?.redirectToProductId) {
			// Redirecionar ao produto
			this.router.navigate(['/produto', result.redirectToProductId]);  // Substitua com o ID real
		} else {
			return
		}
		});
	}
}
