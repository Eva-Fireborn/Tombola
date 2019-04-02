import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film/film.component';

@NgModule({
  declarations: [FilmComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FilmComponent
  ]
})
export class SearchRateFilmModule { }
