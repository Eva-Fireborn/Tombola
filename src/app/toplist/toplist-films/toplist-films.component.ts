import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../shared/api-data.service'
import { MovielistService } from '../../shared/movielist.service';
@Component({
  selector: 'app-toplist-films',
  templateUrl: './toplist-films.component.html',
  styleUrls: ['./toplist-films.component.css']
})
export class ToplistFilmsComponent implements OnInit {
    ratedMovies: any[];

    constructor(private movieData: ApiDataService,
                private movieList:  MovielistService ) { }


  ngOnInit() {
    this.ratedMovies = this.movieList.getRatedMovies()
  }

}
