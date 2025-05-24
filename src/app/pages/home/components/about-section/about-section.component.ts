import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutDto } from '../../../../shared/interfaces/about.dto';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'about-section',
  imports: [CommonModule, TranslateModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
  standalone: true,
})
export class AboutSectionComponent {
  about: AboutDto = {
    title: 'ABOUT.TITLE',
    text: 'ABOUT.TEXT',
    stats: [
      {
        icon: './assets/images/icon-user-group.svg',
        title: 'ABOUT.STATS.0.TITLE',
        count: 'ABOUT.STATS.0.COUNT',
      },
      {
        icon: './assets/images/icon-plus.svg',
        title: 'ABOUT.STATS.1.TITLE',
        count: 'ABOUT.STATS.1.COUNT',
      },
      {
        icon: './assets/images/icon-star.svg',
        title: 'ABOUT.STATS.2.TITLE',
        count: 'ABOUT.STATS.2.COUNT',
      },
      {
        icon: './assets/images/icon-give-blood.svg',
        title: 'ABOUT.STATS.3.TITLE',
        count: 'ABOUT.STATS.3.COUNT',
      },
    ],
  };
}
