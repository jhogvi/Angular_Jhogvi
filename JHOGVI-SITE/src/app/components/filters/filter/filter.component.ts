import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FilterService } from '../../../services/filter.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class FilterComponent {
  name: string = '';
  type: string = '';
  subcategory: string = 'Subcategoria';
  location: string = 'State';
  @Input() nameTitle: string = '';
  @Input() nameOptions: string[] = []; // ✅ Adicione essa linha
  @Input() filterType!: 'event' | 'product';
  @Input() locationTitle: string = '';
  @Input() typeTitle: string = '';
  @Input() subcategoryTitle!: string;
  @Input() subcategoryOptions: string[] = [];
  @Input() locationOptions: string[] = [];
  @Input() typeOptions: string[] = [];
  @Input() feedbackMessage: string = '';
  @Input() showFeedback: boolean = false;

  @Output() filter = new EventEmitter<any>();
  @Output() clear = new EventEmitter<void>();
  protected value: string = '';

  constructor(private filterService: FilterService) {}
  capitalizeFirst(text: string): string {
	return text.charAt(0).toUpperCase() + text.slice(1);
  }

  protected onInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
  }
	// Para produtos
	alertMessage: string = '';
	showAlert: boolean = false;

	showTemporaryAlert(message: string) {
	this.alertMessage = message;
	this.showAlert = true;
	setTimeout(() => {
		this.showAlert = false;
	}, 5000); // Alerta visível por 3 segundos
	}

  // Método para aplicar filtro
  applyFilter() {
	const filters = {
		titulo: this.name, // se o campo se chama 'titulo' no objeto Evento
		detalhes: this.type,
		subcategoria: this.subcategory !== 'Subcategoria' ? this.subcategory : '',
		localidade: this.location !== 'State' ? this.location : ''
	};

    // Verifica o tipo de filtro (evento ou produto)
    if (this.filterType === 'event') {
      this.filter.emit(filters);
	  this.showTemporaryAlert('Filtros aplicados!');

    } else if (this.filterType === 'product') {
      this.filter.emit(filters);
	  this.showTemporaryAlert('Filtros aplicados!');
    }
  }

  clearFilter() {
	let cleanFilters;
	if (this.filterType === 'event') {
	  cleanFilters = this.filterService.cleanEventFilters();
	} else if (this.filterType === 'product') {
	  cleanFilters = this.filterService.cleanProductFilters();
	}

	this.name = cleanFilters.name;
	this.type = cleanFilters.type;
	this.subcategory = cleanFilters.category;
	this.location = cleanFilters.location || 'estado';

	this.clear.emit(cleanFilters); // envia os filtros limpos
	this.showTemporaryAlert('Filtros removidos!');

  }
}
