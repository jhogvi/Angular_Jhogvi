import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parsePreco',
  standalone: false
})

@Injectable({ providedIn: 'root' }) // <- ADICIONE ESSA LINHA

export class ParsePrecoPipe implements PipeTransform {
	transform(value: string | number): number {
		if (typeof value === 'string') {
		  return Number(value.replace('R$', '').replace(/\s/g, '').replace(',', '.'));
		}
		return value;
	}
}
