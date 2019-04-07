import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film/film.component';
import { FilmChildComponent } from './film-child/film-child.component';

@NgModule({
  declarations: [FilmComponent, FilmChildComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FilmComponent
  ]
})
export class SearchRateFilmModule { }
