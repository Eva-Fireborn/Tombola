import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../shared/api-data.service'
import { Movie } from '../../shared/movie';

@Component({
  selector: 'app-toplist-films',
  templateUrl: './toplist-films.component.html',
  styleUrls: ['./toplist-films.component.css']
})
export class ToplistFilmsComponent implements OnInit {
    movieMix_ratings: Movie [];

  constructor(private movieData: ApiDataService) { }


  ngOnInit() {
      this.movieMix_ratings = this.movieData.fetchMovieArray();

  }


}
