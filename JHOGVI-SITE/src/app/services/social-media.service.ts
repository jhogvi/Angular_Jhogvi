import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

	constructor(){}
	socialLinks = [
		{
		tipoSocial: 'WhatsApp',
		icoSocial: 'assets/ico/whatsapp.ico',
		linkSocial: 'https://wa.me/554598482809'
		},
		{
		tipoSocial: 'Instagram',
		icoSocial: 'assets/ico/instagram.ico',
		linkSocial: 'https://www.instagram.com/jhogvi_oficial?igsh=aW81NmRwZWRxNm9p'
		},
		{
		tipoSocial: 'Facebook',
		icoSocial: 'assets/ico/facebook.ico',
		linkSocial: 'https://www.facebook.com/profile.php?id=61557981425759&mibextid=kFxxJD'
		}
	];

	getSocialLinks() {
		return this.socialLinks;
	}
}
