import { Component, OnInit } from '@angular/core';
import {  ApiDataService } from '../../shared/api-data.service';
import { Movie } from '../../shared/movie';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  movieMix_ratings: Movie [];
  selectedFilm: Movie;
  recentlyAddedMovie: [] = []; 
  constructor(private apiData: ApiDataService) { }

  ngOnInit() {
    this.apiData.getDiscoverList().subscribe(movieInformation => {
      let movieInfo = movieInformation.results;
      this.movieMix_ratings = movieInfo.map( obj => ({
        title: obj.title,
        poster_path: obj.poster_path,
        overview: obj.overview,
        release_date: obj.release_date,
        vote_average: obj.vote_average,
        popularity: obj.popularity = 0
      }));
    })

    this.recentlyAddedMovie = JSON.parse(localStorage.getItem('recentlyAddedMovie'))
  }
  voteOnFilm(selectedFilm){
    this.movieMix_ratings = this.movieMix_ratings.filter(film => film !== selectedFilm);
    this.apiData.updateMovieArray(selectedFilm)
  }
  selectFilm(listItem){
    this.selectedFilm = listItem;
  }
}
