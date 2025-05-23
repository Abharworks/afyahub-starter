import { Component } from '@angular/core';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { PartnersSliderComponent } from './components/partners-slider/partners-slider.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroSliderComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    NewsSectionComponent,
    PartnersSliderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {}
