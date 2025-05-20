import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { eventos } from '../../data/data';

@Component({
  selector: 'app-alert-compra',
  standalone: false,
  templateUrl: './alert-compra.component.html',
  styleUrl: './alert-compra.component.css'
})
export class AlertCompraComponent {
	produtosVinculados: any[] = [];

	constructor(
	  private dialogRef: MatDialogRef<AlertCompraComponent>,
	  @Inject(MAT_DIALOG_DATA) public data: { eventoId: number }
	) {}

	ngOnInit(): void {
	  const evento = eventos.find(e => e.id === this.data.eventoId);
	  if (evento && evento.idProdutosVinculados) {
		// Aqui você pode montar uma lista mais detalhada, caso tenha acesso aos produtos
		this.produtosVinculados = evento.idProdutosVinculados.map(id => ({
		  id,
		  nome: `Produto ${id}` // Substitua com nome real se tiver acesso ao array de produtos
		}));
	  }
	}

	redirecionarPara(id: number) {
	  this.dialogRef.close({ redirectToProductId: id });
	}

	fechar() {
	  this.dialogRef.close();
	}
}
