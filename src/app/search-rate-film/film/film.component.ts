import { Component, OnInit } from '@angular/core';
import {  ApiDataService } from '../../shared/api-data.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
   movieMix_ratings: any[];

  constructor(private apiData: ApiDataService) { }

  ngOnInit() {
    this.apiData.currentMovieArray.subscribe(movieMix_ratings => this.movieMix_ratings = movieMix_ratings)
  }
  onClick(i){
   this.movieMix_ratings[i].popularity +=1
  }

}
