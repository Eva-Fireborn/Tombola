import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, AbstractControl} from '@angular/forms'
import { ApiDataService } from 'src/app/shared/api-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    movieSearch: any[] = [];
    @Output() chosenMovie: string;
    movieArray: any;

    constructor(private movieDataList: ApiDataService) {  }

    groupPostMovie = new FormGroup ({
        searchByTitle: new FormControl(''),

    });
    searchByTitle: AbstractControl;

    ngOnInit() { this.onChanges(); }

    onChanges(): void {
        this.groupPostMovie.get('searchByTitle').valueChanges.subscribe(val => {
            this.chosenMovie = val ;
            console.log('listOfSearchMovie' , this.chosenMovie);

            if( this.chosenMovie) {
                this.movieDataList.getSearchMovieFromApi(this.chosenMovie).subscribe(
                    movieSearchList => {
                        let movielist = movieSearchList.results;
                        this.movieSearch = movielist.map(formObj => ({
                            title: formObj.title,
                            poster_path: formObj.poster_path,
                            overview: formObj.overview,
                            release_date: formObj.release_date,
                            vote_average: formObj.vote_average,
                            popularity: formObj.popularity = 0
                        }));
                        console.log('form-ngOnInit movieSearchList: ' , this.movieSearch)
                    })

                } else {
                    return null
            }
        })
    }

    addMovieToMovie(i) {
        this.movieDataList.addNewMovieToArray(this.movieSearch[i])
        // this.movieArray.push(this.movieSearch[i])
        console.log(this.movieSearch[i]);
    }
}
