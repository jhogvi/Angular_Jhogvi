import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-left',
  standalone: false,
  templateUrl: './left.component.html',
  styleUrl: './left.component.css'
})
export class LeftComponent {
	// imgProduto:string='assets/bone_teste.png';
	@Input()
	imgMockups: string[] = [];
	@Input()
	backgroundImage: string = '';

	currentMockupIndex: number = 0;
	@Output() comprar = new EventEmitter<void>(); // avisa o componente pai


	constructor() {
	// Inicia a troca das imagens a cada 3 mili-segundos (3000ms)
		setInterval(() => {
		  this.changeMockup();
		}, 200); // 300ms = 0.3 segundos
	  }

	  // Função para alternar as imagens
	//   changeMockup() {
	// 	this.currentMockupIndex = (this.currentMockupIndex + 1) % this.imgMockups.length;
	//   }
	changeMockup() {
		const imgElement = document.querySelector('.img-produto img');
		if (imgElement) {
		  imgElement.classList.add('fade-out'); // Aplica efeito de saída
		  setTimeout(() => {
			this.currentMockupIndex = (this.currentMockupIndex + 1) % this.imgMockups.length;
			imgElement.classList.remove('fade-out'); // Remove para suavizar a entrada
		  }, 400); // Tempo menor que a transição CSS (500ms)
		}
	  }

	getBackgroundStyle(){
		return{
			'background-image': `url(${this.backgroundImage})`,
			// 'background-image': `url(${this.imgBack})`,
			'background-size': 'cover',
			'background-position': 'center',
			'background-repeat': 'no-repeat',
			// 'min-width': '44vw',
			// 'height': '77vh'
		};
	}
	onComprarClick() {
		this.comprar.emit(); // dispara o evento pro pai
	  }


}
