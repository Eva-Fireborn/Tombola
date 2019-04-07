import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ToplistFilmsComponent } from './toplist-films/toplist-films.component';

@NgModule({
  declarations: [ ToplistFilmsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    ToplistFilmsComponent
  ]
})
export class ToplistModule { }
