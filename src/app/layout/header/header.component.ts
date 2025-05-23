import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { CommonModule, DOCUMENT } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from '../../shared/services/localStorage.service';
@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterModule,
    ToolbarModule,
    MenubarModule,
    ButtonModule,
    BadgeModule,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  topbarItems: MenuItem[] | undefined;
  mainItems: MenuItem[] | undefined;
  weather = {
    condition: 'Cloudy',
    date: '3-Sep-2024',
    time: '2:30 PM',
    city: 'Al-Riyadh',
  };
  @HostBinding('attr.dir') dir = 'rtl';

  constructor(
    private translate: TranslateService,
    private localStorageService: LocalStorageService,
    @Inject(DOCUMENT) private document: Document
  ) {
    translate.addLangs(['en', 'ar']);
    const saved = this.localStorageService.getItem('lang') || 'ar';
    this.switchLang(saved as 'en' | 'ar');
  }

  switchLang(lang: 'en' | 'ar') {
    this.translate.use(lang);
    this.localStorageService.setItem('lang', lang);
    this.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.document.documentElement.dir = this.dir;
  }
  ngOnInit() {
    this.topbarItems = [
      {
        label: 'HEADER.TOPBAR.CONDITION',
        iconImage: 'assets/images/icon-cloud.svg',
      },
      {
        label: new Date().toLocaleDateString(),
        iconImage: 'assets/images/icon-calender.svg',
      },
      {
        label: new Date().toLocaleTimeString(),
        iconImage: 'assets/images/icon-clock.svg',
      },
      {
        label: 'HEADER.TOPBAR.CITY',
        iconImage: 'assets/images/icon-map-marker.svg',
      },
    ];

    this.mainItems = [
      { label: 'HEADER.MENU.HOME', routerLink: '/' },
      { label: 'HEADER.MENU.ABOUT', routerLink: '/content' },
      { label: 'HEADER.MENU.SERVICES', routerLink: '/content' },
      { label: 'HEADER.MENU.NEWS', routerLink: '/content' },
      {
        label: 'HEADER.MENU.EDUCATION',
        items: [
          { label: 'HEADER.MENU.EDU_EDUCATION', routerLink: '/content' },
          {
            label: 'HEADER.MENU.EDU_RESEARCH',
            routerLink: '/content',
          },
          {
            label: 'HEADER.MENU.EDU_ANNUAL_WELLNESS_EXAM',
            routerLink: '/content',
          },
        ],
      },
      {
        label: 'HEADER.MENU.CONTACT',
        href: 'https://www.linkedin.com/in/abhar/',
      },
    ];
  }

  onSearchClick(event: Event) {}
}
