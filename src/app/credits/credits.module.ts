import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditComponent } from './credit/credit.component';

@NgModule({
  declarations: [CreditComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CreditComponent
  ]
})
export class CreditsModule { }
