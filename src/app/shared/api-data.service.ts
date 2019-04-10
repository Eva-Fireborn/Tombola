import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  http: HttpClient = null;
  toplistUrl: string = 'https://api.themoviedb.org/3/movie/top_rated?api_key=b77e44fd4073dc13e011647c4946a9ae&language=en-US&page=1'
  discoverUrl: string = 'https://api.themoviedb.org/3/discover/movie?api_key=b77e44fd4073dc13e011647c4946a9ae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
  private movieArray: Movie [] =[];
  private recentlyAddedMovie: Movie [] =[];
  chosenMovie: string;
  formUrl: string = null;

  updateMovieArray(movie: Movie) {
    let isMovieInList: boolean = false;
    for (let i= 0; i < this.movieArray.length; i++){
      if(this.movieArray[i].title === movie.title){
        this.movieArray[i].popularity = movie.popularity;
        isMovieInList = true;
      }
    }
    if (isMovieInList){
      let tempJSON = JSON.stringify(this.movieArray)
      localStorage.setItem('movieArray', tempJSON)
    } else {
      this.movieArray.push(movie)
      let tempJSON = JSON.stringify(this.movieArray)
      localStorage.setItem('movieArray', tempJSON)
    }
  }

  addNewMovieToArray(movie: Movie){
      let isMovieInList: boolean = false;
      for (let i= 0; i < this.recentlyAddedMovie.length; i++){
        if(this.recentlyAddedMovie[i].title === movie.title){
          this.recentlyAddedMovie[i].popularity = movie.popularity;
          isMovieInList = true;
        }
      }
      if (isMovieInList){
        let tempJSON = JSON.stringify(this.recentlyAddedMovie)
        localStorage.setItem('recentlyAddedMovie', tempJSON)
      } else {
        this.recentlyAddedMovie.push(movie)
        let tempJSON = JSON.stringify(this.recentlyAddedMovie)
        localStorage.setItem('recentlyAddedMovie', tempJSON)
      }

  }

  constructor(http: HttpClient) {
    this.http = http;
    if(localStorage.getItem('movieArray')){
      this.movieArray = JSON.parse(localStorage.getItem('movieArray'))
    }
  }

  fetchMovieArray(){
    this.movieArray.sort(this.sortMovieArrayByPopularity);
    return this.movieArray;
  }

  sortMovieArrayByPopularity(a, b) {
    const valueA = a.popularity;
    const valueB = b.popularity;
    let comparison = 0;
    if (valueA < valueB) {
      comparison = 1;
    } else if (valueA > valueB) {
      comparison = -1;
    }
    return comparison;
    }


    getSearchMovieFromApi(searchString: string): Observable<Movie> | null {
        this.formUrl = `https://api.themoviedb.org/3/search/movie?api_key=b77e44fd4073dc13e011647c4946a9ae&query=${searchString}`

        if( searchString) {
            return this.http.get<Movie>(this.formUrl);
        } else {
            return null;
        }
    }


  getMovie(): Observable<Movie> {
      return this.http.get<Movie>(this.toplistUrl);
  }
  getDiscoverList(): Observable<Movie> {
    return this.http.get<Movie>(this.discoverUrl);
  }
  /*	getCat(): Observable<any> {
  console.log(this.JSONmovie)
  return this.http.get<any>(this.url, {params:
    { op: 'get',
    group: 'F9648',
    key: 'film2'}
  });
  }*/
}
