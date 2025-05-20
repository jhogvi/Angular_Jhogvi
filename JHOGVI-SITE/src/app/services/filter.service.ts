import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
	filterEvents(events: Evento[], filters: any): Evento[] {
		return events.filter(event => {
		  return (!filters.name || event.titulo.toLowerCase().includes(filters.name.toLowerCase())) &&
				 (!filters.type || event.subcategoria.toLowerCase().includes(filters.type.toLowerCase())) &&
				//  (!filters.category || event.categoria === filters.category) &&
				 (!filters.location || event.localidade.toLowerCase().includes(filters.location.toLowerCase()));
				 console.log('Aplicando filtros em:', filters);

		});
	  }	filterProducts(products: Produto[], filters: any): Produto[] {
		return products.filter(product => {
		  const matchName = filters.name ? product.titulo.toLowerCase().includes(filters.name.toLowerCase()) : true;
		  const matchType = filters.type ? product.detalhes?.some(detail => detail.toLowerCase().includes(filters.type.toLowerCase())) : true;
		  const matchCategory = filters.category && filters.category !== 'Categoria' ? product.categoria === filters.category : true;

		  return matchName && matchType && matchCategory;
		});
	}

	getProductFilterOptions(products: Produto[]) {
		return {
		  categoryOptions: [...new Set(products.map(p => p.categoria))],
		  typeOptions: [...new Set(products.flatMap(p => p.detalhes || []))]
		};
	  }

	  getEventFilterOptions(events: Evento[]) {
		return {
		  categoryOptions: [...new Set(events.map(e => e.categoria))],
		  typeOptions: [...new Set(events.flatMap(e => e.detalhes || []))],
		  locationOptions: [...new Set(events.map(e => e.localidade))]
		};
	  }

  // Limpar filtros de eventos
  cleanEventFilters(): any {
    return {
      name: '',
      type: '',
      category: 'Categoria',
      location: 'Estado'
    };
  }

  // Limpar filtros de produtos
  cleanProductFilters(): any {
    return {
      name: '',
      type: '',
      category: 'Categoria'
    };
  }

}
