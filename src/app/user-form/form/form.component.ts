import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { ApiDataService } from 'src/app/shared/api-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    movieSearch: any[] = [];
    @Output() chosenMovie: string;

    constructor(private movieDataList: ApiDataService) {  }

    groupPostMovie = new FormGroup ({
        searchByTitle: new FormControl(''),
        yourName: new FormControl(''),
        postComment: new FormControl(''),
    });

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
                        }));
                        console.log('form-ngOnInit movieSearchList: ' , this.movieSearch)
                    })

            } else {
                return null
            }
        })
    }
}





// this.searchByTitle = this.groupPostMovie.get('searchByTitle');
// this.yourName = this.groupPostMovie.get('yourName');
// this.postComment = this.groupPostMovie.get('postComment');

// searchByTitle: AbstractControl;
// yourName: AbstractControl;
// postComment: AbstractControl;
