import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageImageComponent } from './landing-page-image.component';

describe('LandingPageImageComponent', () => {
  let component: LandingPageImageComponent;
  let fixture: ComponentFixture<LandingPageImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
