import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { NewsDto } from '../../../../shared/interfaces/news.dto';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'news-section',
  imports: [
    CommonModule,
    CarouselModule,
    ButtonModule,
    CardModule,
    RouterModule,
    TranslateModule,
  ],
  templateUrl: './news-section.component.html',
  styleUrl: './news-section.component.scss',
  standalone: true,
})
export class NewsSectionComponent {
  news: NewsDto[] = [
    {
      thumbnail: './assets/images/image-01.jpg',
      title: 'NEWS.ITEMS.0.TITLE',
      describtion: 'NEWS.ITEMS.0.DESCRIPTION',
      buttonLabel: 'NEWS.ITEMS.0.BUTTON',
      buttonLink: '/content',
    },
    {
      thumbnail: './assets/images/image-01.jpg',
      title: 'NEWS.ITEMS.1.TITLE',
      describtion: 'NEWS.ITEMS.1.DESCRIPTION',
      buttonLabel: 'NEWS.ITEMS.1.BUTTON',
      buttonLink: '/content',
    },
    {
      thumbnail: './assets/images/image-01.jpg',
      title: 'NEWS.ITEMS.2.TITLE',
      describtion: 'NEWS.ITEMS.2.DESCRIPTION',
      buttonLabel: 'NEWS.ITEMS.2.BUTTON',
      buttonLink: '/content',
    },
  ];

  responsiveNewsOptions: CarouselResponsiveOptions[] | undefined;
  constructor() {
    this.responsiveNewsOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
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
