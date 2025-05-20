import { Component } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { Evento } from '../../models/evento';
import { eventos } from '../../data/data';
import { ValuesService } from '../../services/values.service';
@Component({
  selector: 'app-eventos',
  standalone: false,
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
	events: Evento[] = [];
	filteredEvents: Evento[] = [];
	nameOptions: string[]=[];
	opcoesSubcategorias: string[] = [];
	opcoesLocalidades: string[] = [];
	showFeedback: boolean = false;
	feedbackMessage: string = '';
	typeOptions: string[] = [];

	constructor(
	  private filterService: FilterService,
	  private valuesService: ValuesService,
	  public formatBrl: ValuesService
	) {}

	ngOnInit() {
	  this.initializeEvents();
	}

	// Inicializa os eventos e carrega as opções para os filtros
	private initializeEvents() {
	  this.events = eventos;
	  this.filteredEvents = [...this.events];
	  this.loadFilterOptions();
	}

	// Carrega as opções únicas para os filtros
	private loadFilterOptions() {
		this.nameOptions = this.getUniqueField('titulo'); // <-- Adicione isso
		this.opcoesSubcategorias = this.getUniqueField('subcategoria');
		this.opcoesLocalidades = this.getUniqueField('localidade');
		this.typeOptions = this.getUniqueField('detalhes'); // ou outro campo, dependendo do seu objetivo
	}

	// Retorna valores únicos de um campo específico dos eventos
	private getUniqueField(key: keyof Evento): string[] {
	  const values = this.events
		.map(event => event[key])
		.filter((value): value is string => typeof value === 'string' && value.trim() !== '');
	  return [...new Set(values)];
	}

	// Aplica os filtros nos eventos
	applyFilters(filters: any) {
		console.log('Filtros Recebidos: ', filters);
	 	this.filteredEvents = this.filterService.filterEvents(this.events, filters);

		// Feedback de filtro
		this.showFeedback = true;
		this.feedbackMessage = this.filteredEvents.length
			? '✅ Filtros Aplicados!'
			: '❌ Nenhum Item Encontrado.';

		setTimeout(() => (this.showFeedback = false), 5000);
	}

	// Limpa todos os filtros e restaura os eventos
	clearFilters() {
	  const emptyFilters = this.filterService.cleanEventFilters();
	  this.filteredEvents = [...this.events];
	  this.feedbackMessage = '❌ Filtros removidos!';
	  this.showFeedback = true;

	  setTimeout(() => (this.showFeedback = false), 5000);
	}
  }
