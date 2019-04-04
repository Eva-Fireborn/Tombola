import { Component, OnInit, Output } from '@angular/core';
import { ApiDataService } from '../../shared/api-data.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    movieSearch: any[] = [];
    @Output chosenMovie: string;

    constructor(private movieDataList: ApiDataService) { }

    ngOnInit() {
        this.movieDataList.getSearchMovie().subscribe(
            movieSearchList => {
                let movielist = movieSearchList.results;
                this.movieSearch = movielist.map(formObj => ({
                    title: formObj.title,
                    poster_path: formObj.poster_path,
                }));
                console.log('form.ts ngOnInit: ', movielist , 'movieSearchList:' , movieSearchList)
            }
        )
    }

    filterList($event) {
        this.chosenMovie = event.target.value;

    }

}
