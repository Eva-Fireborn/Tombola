import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
    chosenMovie: string;
    http: HttpClient = null;
    url: string = 'https://api.themoviedb.org/3/movie/top_rated?api_key=b77e44fd4073dc13e011647c4946a9ae&language=en-US&page=1';
    formUrl: string = null;

    constructor(http: HttpClient) {
        this.http = http;
    }

    getMovie(): Observable<Movie> {
        return this.http.get<Movie>(this.url);
    }

    getSearchMovie(): Observable<Movie> {
        return this.http.get<Movie>(this.formUrl);
    }

    getSearchMovieFromApi(searchString: string): Observable<Movie> | null {
        this.formUrl = `https://api.themoviedb.org/3/search/movie?api_key=b77e44fd4073dc13e011647c4946a9ae&query=${searchString}`

        if( searchString) {
            return this.http.get<Movie>(this.formUrl);
        } else {
            return null;
        }
    }

}
