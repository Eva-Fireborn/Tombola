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
  ratedMovies: any[];

  constructor(
    private apiData: ApiDataService,
    private movieList:  MovielistService
    ) { }

  ngOnInit() {
    this.moviesToRate = this.movieList.getMoviesToRate()
    this.ratedMovies = this.movieList.getRatedMovies()
  }




  buttonFunction(i, num){
    this.moviesToRate[i].totalScore += num
    this.moviesToRate[i].numberOfVotes += 1
    console.log('this is moviesToRate', this.moviesToRate[i].totalScore)
    console.log('this is moviesToRate', this.moviesToRate[i].numberOfVotes)
    this.ratedMovies.push(this.moviesToRate[i])
    this.moviesToRate.splice(i, 1);
  }


}
