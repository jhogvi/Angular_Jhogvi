import { Component, Input } from '@angular/core';
import { SocialMediaService } from '../../../services/social-media.service';

@Component({
  selector: 'app-right',
  standalone: false,
  templateUrl: './right.component.html',
  styleUrl: './right.component.css'
})
export class RightComponent {
	socialLinks: any[] = [];

	@Input()
	imgBack:string = '';
	@Input()
	titulo:string='';
	@Input()
	descricao?:string[];
	@Input()
	detalhes:string[]=[];

	getBackgroundStyle(){
		return{
			'background-image': `linear-gradient(to right, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), url(${this.imgBack})`,
			// 'background-image': `url(${this.imgBack})`,
			'background-size': 'cover',
			'background-position': 'center',
			'background-repeat': 'no-repeat',
			// 'min-width': '44vw',
			// 'height': '77vh'
		};
	}

	constructor(private socialService: SocialMediaService){}

	ngOnInit() {
		this.socialLinks = this.socialService.getSocialLinks();
	  }


}
