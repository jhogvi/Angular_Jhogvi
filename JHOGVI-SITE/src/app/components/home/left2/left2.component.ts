import { Component, ElementRef, Input, OnInit, OnChanges, ViewChild, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-left2',
  standalone: false,
  templateUrl: './left2.component.html',
  styleUrl: './left2.component.css'
})
export class Left2Component implements OnInit, OnChanges {
	@Input()video!:string;
	@Input()imgMockups!:string[];
	@Input() comprarProd?: string;

	@ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
	ngOnInit(): void {
		setTimeout(() => {
		console.log('Autoplay Iniciado');
		const video: HTMLVideoElement = this.videoPlayer.nativeElement;
		video.muted = true;
		video.play().catch(err => console.log('Autoplay falhou:', err));
	});

	}
	ngOnChanges(changes: SimpleChanges): void {
		if (changes['video'] && !changes['video'].firstChange && this.videoPlayer) {
		const videoElement = this.videoPlayer.nativeElement;
		videoElement.pause();
		videoElement.src = this.video; // Atualiza o caminho do vídeo
		videoElement.load();
		videoElement.muted = true;
		videoElement.play().catch(err => console.log('Falha ao trocar o vídeo:', err));
		}
	}


}
