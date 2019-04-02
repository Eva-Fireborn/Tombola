import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToplistFilmsComponent } from './toplist-films/toplist-films.component';

@NgModule({
  declarations: [ToplistFilmsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ToplistFilmsComponent
  ]
})
export class ToplistModule { }
