import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersSliderComponent } from './partners-slider.component';

describe('PartnersSliderComponent', () => {
  let component: PartnersSliderComponent;
  let fixture: ComponentFixture<PartnersSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnersSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
