import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-media',
  standalone: false,
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css'
})
export class SocialMediaComponent {
@Input() tipoSocial: string='';
@Input() icoSocial: string='';
@Input() linkSocial: string='';

}
