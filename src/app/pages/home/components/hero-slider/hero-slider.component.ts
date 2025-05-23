import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { HeroSliderDto } from '../../../../shared/interfaces/heroSlider.dto';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'hero-slider',
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    ButtonModule,
    TranslateModule,
  ],
  templateUrl: './hero-slider.component.html',
  styleUrl: './hero-slider.component.scss',
  standalone: true,
})
export class HeroSliderComponent {
  heroItems: HeroSliderDto[] = [
    {
      title: 'HERO.ITEM1.TITLE',
      subtitle: 'HERO.ITEM1.SUBTITLE',
      route: '/home',
      backgroundImage: './assets/images/hero-01.jpg',
      linkText: 'HERO.ITEM1.LINK_TEXT',
    },
    {
      title: 'HERO.ITEM2.TITLE',
      subtitle: 'HERO.ITEM2.SUBTITLE',
      route: '/appointments',
      backgroundImage: './assets/images/hero-02.jpg',
      linkText: 'HERO.ITEM2.LINK_TEXT',
    },
    {
      title: 'HERO.ITEM3.TITLE',
      subtitle: 'HERO.ITEM3.SUBTITLE',
      route: '/clinics',
      backgroundImage: './assets/images/hero-01.jpg',
      linkText: 'HERO.ITEM3.LINK_TEXT',
    },
  ];

  responsiveOptions: CarouselResponsiveOptions[] | undefined;

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
