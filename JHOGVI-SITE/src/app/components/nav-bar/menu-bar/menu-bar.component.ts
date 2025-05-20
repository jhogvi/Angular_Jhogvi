import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  standalone: false,
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
	// isFixed: boolean = false; // Define se a barra fica fixa ou não

	// @HostListener('window:scroll', [])
	// onScroll() {
	//   this.isFixed = window.scrollY > 50; // Se rolar mais de 50px, torna fixo
	// }

	// @Input()
	// imgLogo:string='';
	ngOnInit(){}
	constructor(){}
}
