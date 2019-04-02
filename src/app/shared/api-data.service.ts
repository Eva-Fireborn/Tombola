import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';


@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
    http: HttpClient = null;
    url: string = 'https://api.themoviedb.org/3/movie/top_rated?api_key=b77e44fd4073dc13e011647c4946a9ae&language=en-US&page=1'

    constructor(http: HttpClient) {
        this.http = http;
    }

    getMovie(): Observable<Movie> {
        return this.http.get<Movie>(this.url);

    }
}
