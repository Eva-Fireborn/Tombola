import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film/film.component';
import { BarRatingModule } from "ngx-bar-rating";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
@NgModule({
  declarations: [FilmComponent],
  imports: [
    CommonModule,
    BarRatingModule,
    FontAwesomeModule
  ],
  exports: [
    FilmComponent
  ]
})
export class SearchRateFilmModule { }
