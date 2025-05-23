import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  overviewLinks: { key: string; routerLink: string }[] = [
    { key: 'ABOUT', routerLink: '/content' },
    { key: 'PRIVACY', routerLink: '/content' },
    { key: 'HOW_TO_USE', routerLink: '/content' },
    { key: 'NEWS_EVENTS', routerLink: '/content' },
    { key: 'SLA_STATS', routerLink: '/content' },
  ];

  importantLinks: { key: string; routerLink: string }[] = [
    { key: 'NATIONAL_SERVICE', routerLink: '/content' },
    { key: 'OPEN_GOV_DATA', routerLink: '/content' },
    { key: 'NATIONAL_STRATEGY', routerLink: '/content' },
    { key: 'OPEN_DATA_PORTAL', routerLink: '/content' },
    { key: 'E_PARTICIPATION', routerLink: '/content' },
  ];

  contactLinks: { key: string; routerLink: string }[] = [
    { key: 'CONTACT_US', routerLink: '/content' },
    { key: 'ENGAGE_WITH_US', routerLink: '/content' },
    { key: 'SUBMIT_COMPLAINT', routerLink: '/content' },
    { key: 'REPORT_CORRUPTION', routerLink: '/content' },
  ];

  socialIcons: { key: string; icon: string; url: string }[] = [
    {
      key: 'TWITTER',
      icon: 'assets/images/icon-x.svg',
      url: 'https://twitter.com/',
    },
    {
      key: 'LINKEDIN',
      icon: 'assets/images/icon-linkedin.svg',
      url: 'https://www.linkedin.com/in/abhar/',
    },
    {
      key: 'INSTAGRAM',
      icon: 'assets/images/icon-instagram.svg',
      url: 'https://instagram.com/',
    },
  ];

  accessibilityTools: { label: string; icon: string }[] = [
    { label: 'Sign Language', icon: 'assets/images/icon-sign-language-c.svg' },
    { label: 'Search Add', icon: 'assets/images/icon-search-add.svg' },
    { label: 'View Mode', icon: 'assets/images/icon-view.svg' },
  ];
}
