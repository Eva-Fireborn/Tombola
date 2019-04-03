import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../shared/api-data.service'

@Component({
  selector: 'app-toplist-films',
  templateUrl: './toplist-films.component.html',
  styleUrls: ['./toplist-films.component.css']
})
export class ToplistFilmsComponent implements OnInit {
    stars: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    movieMix_rating: number;
    movieMix_ratings: any[];

  constructor(private movieData: ApiDataService) { }

  onClick(i){
   this.movieMix_ratings[i].popularity +=1
  }

  ngOnInit() {
    this.movieData.getMovie().subscribe(
        movieInformation => {

            let movieInfo = movieInformation.results;
            this.movieMix_ratings = movieInfo.map(obj => ({
              title: obj.title,
              poster_path: obj.poster_path,
              overview: obj.overview,
              release_date: obj.release_date,
              vote_average: obj.vote_average,
              popularity: obj.popularity = 0,
            }));
        }
    )
      this.movieData.currentMovieArray.subscribe(movieMix_ratings => this.movieMix_ratings = movieMix_ratings)
  }
  newMessage() {
    this.movieData.updateMovieArray(this.movieMix_ratings)
  }

}
