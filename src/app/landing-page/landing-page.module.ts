import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageButtonComponent } from './landing-page-button/landing-page-button.component';
import { LandingPageImageComponent } from './landing-page-image/landing-page-image.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [LandingPageComponent, LandingPageButtonComponent, LandingPageImageComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingPageModule { }
