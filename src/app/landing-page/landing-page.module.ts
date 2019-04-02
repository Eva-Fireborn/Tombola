import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageButtonComponent } from './landing-page-button/landing-page-button.component';
import { LandingPageImageComponent } from './landing-page-image/landing-page-image.component';

@NgModule({
  declarations: [LandingPageComponent, LandingPageButtonComponent, LandingPageImageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingPageModule { }
