import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ServicesDto } from '../../../../shared/interfaces/services.dto';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'services-section',
  imports: [
    CommonModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    TranslateModule,
  ],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
  standalone: true,
})
export class ServicesSectionComponent {
  services: ServicesDto[] = [
    {
      icon: './assets/images/icon-checkmark-circle.svg',
      title: 'SERVICES.ITEMS.0.TITLE',
      tags: ['SERVICES.ITEMS.0.TAGS.0', 'SERVICES.ITEMS.0.TAGS.1'],
      desc: 'SERVICES.ITEMS.0.DESCRIPTION',
    },
    {
      icon: './assets/images/icon-checkmark-circle.svg',
      title: 'SERVICES.ITEMS.1.TITLE',
      tags: ['SERVICES.ITEMS.1.TAGS.0', 'SERVICES.ITEMS.1.TAGS.1'],
      desc: 'SERVICES.ITEMS.1.DESCRIPTION',
    },
    {
      icon: './assets/images/icon-checkmark-circle.svg',
      title: 'SERVICES.ITEMS.2.TITLE',
      tags: ['SERVICES.ITEMS.2.TAGS.0', 'SERVICES.ITEMS.2.TAGS.1'],
      desc: 'SERVICES.ITEMS.2.DESCRIPTION',
    },
    {
      icon: './assets/images/icon-checkmark-circle.svg',
      title: 'SERVICES.ITEMS.3.TITLE',
      tags: ['SERVICES.ITEMS.3.TAGS.0', 'SERVICES.ITEMS.3.TAGS.1'],
      desc: 'SERVICES.ITEMS.3.DESCRIPTION',
    },
    {
      icon: './assets/images/icon-checkmark-circle.svg',
      title: 'SERVICES.ITEMS.4.TITLE',
      tags: ['SERVICES.ITEMS.4.TAGS.0', 'SERVICES.ITEMS.4.TAGS.1'],
      desc: 'SERVICES.ITEMS.4.DESCRIPTION',
    },
    {
      icon: './assets/images/icon-checkmark-circle.svg',
      title: 'SERVICES.ITEMS.5.TITLE',
      tags: ['SERVICES.ITEMS.5.TAGS.0', 'SERVICES.ITEMS.5.TAGS.1'],
      desc: 'SERVICES.ITEMS.5.DESCRIPTION',
    },
  ];
  responsiveServicesOptions: CarouselResponsiveOptions[] | undefined;

  constructor() {
    this.responsiveServicesOptions = [
      {
        breakpoint: '1400px',
        numVisible: 4,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  getSeverity(tagIndex: number) {
    switch (tagIndex) {
      case 0:
        return 'p-tag-success';
      case 1:
        return 'p-tag-info';
      case 2:
        return 'p-tag-secondary';
      default:
        return 'p-tag-contrast';
    }
  }
}
