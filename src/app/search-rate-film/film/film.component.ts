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
  originalList: Movie [];
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


    this.apiData.getDiscoverList().subscribe(movieInformation => {
      let movieInfo = movieInformation.results;
      this.originalList = movieInfo.map( obj => ({
        title: obj.title,
        poster_path: obj.poster_path,
        overview: obj.overview,
        release_date: obj.release_date,
        vote_average: obj.vote_average,
        popularity: obj.popularity = 0
      }));
    });

  }
  voteOnFilm(selectedFilm){
    this.apiData.updateMovieArray(selectedFilm)
    let index: number;
    for ( let i=0; i < this.movieMix_ratings.length; i++){
      if (selectedFilm.title === this.movieMix_ratings[i].title)
      index = i +1;
    }
    if (index > this.movieMix_ratings.length){
      index = 0;
    }
    this.selectedFilm = this.movieMix_ratings[index];
  }
  selectFilm(listItem){
    this.selectedFilm = listItem;
    window.scrollTo(0,0);
  }
  setSelectedFilmToNull(){
    this.selectedFilm = null;
  }
  sortByValueFunction($event){
    let sortByValue = $event.target.value;
    if (sortByValue === 'a-z'){
      this.movieMix_ratings.sort(this.sortMovieArrayByLetters);
    } else if (sortByValue === 'score'){
      this.movieMix_ratings.sort(this.sortMovieArrayByPopularity);
    } else if (sortByValue === 'original'){
      this.movieMix_ratings = this.originalList;
    } else if (sortByValue === 'over8'){
      this.movieMix_ratings = this.movieMix_ratings.filter(movie => movie.vote_average > 8);
    } else if (sortByValue === 'dateNew'){
      this.movieMix_ratings.sort(this.sortMovieArrayByDateNew);
    } else if (sortByValue === 'dateOld'){
      this.movieMix_ratings.sort(this.sortMovieArrayByDateOld);
    } else {
      return null;
    }
  }

  sortMovieArrayByPopularity(a, b) {
    const valueA = a.vote_average;
    const valueB = b.vote_average;
    let comparison = 0;
    if (valueA < valueB) {
      comparison = 1;
    } else if (valueA > valueB) {
      comparison = -1;
    }
    return comparison;
  }
  sortMovieArrayByLetters(a, b) {
    const valueA = a.title.toUpperCase();
    const valueB = b.title.toUpperCase();
    let comparison = 0;
    if (valueA > valueB) {
      comparison = 1;
    } else if (valueA < valueB) {
      comparison = -1;
    }
    return comparison;
  }

  sortMovieArrayByDateNew(a, b) {
    const valueA = a.release_date;
    const valueB = b.release_date;
    let comparison = 0;
    if (valueA < valueB) {
      comparison = 1;
    } else if (valueA > valueB) {
      comparison = -1;
    }
    return comparison;
  }
  sortMovieArrayByDateOld(a, b) {
    const valueA = a.release_date;
    const valueB = b.release_date;
    let comparison = 0;
    if (valueA > valueB) {
      comparison = 1;
    } else if (valueA < valueB) {
      comparison = -1;
    }
    return comparison;
  }
}
