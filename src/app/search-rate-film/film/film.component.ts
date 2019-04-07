import { Component, OnInit } from '@angular/core';
import {  ApiDataService } from '../../shared/api-data.service';
import { MovielistService } from '../../shared/movielist.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
    moviesToRate: any[];
    test = 'fas'
  constructor(
    private apiData: ApiDataService,
    private movieList:  MovielistService
    ) { }

  ngOnInit() {
    this.moviesToRate = this.movieList.getMoviesToRate()


     // this.apiData.currentMovieArray.subscribe(moviesToRate => this.moviesToRate = moviesToRate)
  }




  buttonFunction(i, num){
   this.moviesToRate[i].popularity += num
   this.moviesToRate[i].numberOfVotes += 1
   console.log(this.moviesToRate[i].popularity)
   console.log(this.moviesToRate[i].numberOfVotes)
   console.log(this.moviesToRate[i].title)
   this.moviesToRate.splice(i, 1);

  }


}
