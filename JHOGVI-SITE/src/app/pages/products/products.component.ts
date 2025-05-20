import { Component } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { Produto } from '../../models/produto';
import { produtos } from '../../data/data';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
	products: Produto[] = [];
	filteredProducts: Produto[] = [];
	categoryOptions: string[] = [];
	typeOptions: string[] = [];
	nameOptions: string[] = [];

	showFeedback: boolean = false;
	feedbackMessage: string = '';

	constructor(private filterService: FilterService) {}

	ngOnInit() {
	  this.products = produtos;
	  this.filteredProducts = [...this.products];
	  this.categoryOptions = this.getAllDetails();
	  this.typeOptions = this.getAllTypes();
	  this.nameOptions = this.getAllNames();
	}

	getAllDetails(): string[] {
	  return [...new Set(this.products.flatMap(p => p.detalhes))];
	}

	getAllTypes(): string[] {
	  return [...new Set(this.products.map(p => p.categoria?.trim() || ''))];
	}

	getAllNames(): string[] {
	  return [...new Set(this.products.map(p => p.titulo?.trim() || ''))];
	}


  applyFilters(filters: any) {
    this.filteredProducts = this.filterService.filterProducts(this.products, filters);

    if (this.filteredProducts.length === 0) {
      this.showTemporaryFeedback('Nenhum item encontrado.');
    } else {
      this.showTemporaryFeedback('Item(s) encontrado(s).');
    }
  }

  clearFilters() {
    const clearedFilters = this.filterService.cleanProductFilters();
    this.filteredProducts = this.filterService.filterProducts(this.products, clearedFilters);
    this.showTemporaryFeedback('Filtros limpos.');
  }

  showTemporaryFeedback(message: string) {
    this.feedbackMessage = message;
    this.showFeedback = true;
    setTimeout(() => {
      this.showFeedback = false;
    }, 3000);
  }
}
