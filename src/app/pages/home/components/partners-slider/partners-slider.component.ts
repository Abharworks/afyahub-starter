import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';

@Component({
  selector: 'partners-slider',
  imports: [CommonModule, CarouselModule, TranslateModule],
  templateUrl: './partners-slider.component.html',
  styleUrl: './partners-slider.component.scss',
  standalone: true,
})
export class PartnersSliderComponent {
  partners: { name: string; logo: string }[] = [
    { name: 'Partner A', logo: './assets/images/paceholder-85x68.svg' },
    { name: 'Partner B', logo: './assets/images/paceholder-85x68.svg' },
    { name: 'Partner C', logo: './assets/images/paceholder-85x68.svg' },
    { name: 'Partner D', logo: './assets/images/paceholder-85x68.svg' },
    { name: 'Partner E', logo: './assets/images/paceholder-85x68.svg' },
    { name: 'Partner F', logo: './assets/images/paceholder-85x68.svg' },
    { name: 'Partner G', logo: './assets/images/paceholder-85x68.svg' },
    { name: 'Partner H', logo: './assets/images/paceholder-85x68.svg' },
    { name: 'Partner I', logo: './assets/images/paceholder-85x68.svg' },
    { name: 'Partner J', logo: './assets/images/paceholder-85x68.svg' },
    { name: 'Partner K', logo: './assets/images/paceholder-85x68.svg' },
    { name: 'Partner L', logo: './assets/images/paceholder-85x68.svg' },
  ];
  responsivePartnersOptions: CarouselResponsiveOptions[] | undefined;

  constructor() {
    this.responsivePartnersOptions = [
      {
        breakpoint: '1400px',
        numVisible: 9,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 5,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 5,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 2,
        numScroll: 1,
      },
    ];
  }
}
