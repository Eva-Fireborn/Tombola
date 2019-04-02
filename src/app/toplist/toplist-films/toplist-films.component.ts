import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../shared/api-data.service'

@Component({
  selector: 'app-toplist-films',
  templateUrl: './toplist-films.component.html',
  styleUrls: ['./toplist-films.component.css']
})
export class ToplistFilmsComponent implements OnInit {
    movieUrl: any = null;
    stars: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private movieData: ApiDataService) { }

  ngOnInit() {
    this.movieData.getMovie().subscribe(
        movieInformation => {
            this.movieUrl = movieInformation.results;

            console.log('above stars', this.stars)
        }
    )
  }
}
