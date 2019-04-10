import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators} from '@angular/forms'
import { ApiDataService } from 'src/app/shared/api-data.service';
// import { Movie } from '../../shared/movie;'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    movieSearch: any[] = [];
    @Output() chosenMovie: string;
    movieArray: any;
    addedMovie: any[] =[];
    usersList: any[] = [];
    searchByTitle: AbstractControl;
    yourTitle: AbstractControl;
    yourRealeseDay: AbstractControl;
    yourOverview: AbstractControl;
    yourPopularity: AbstractControl;

    /*style*/
    selectedIdx;
    constructor(private movieDataList: ApiDataService) {  }

    groupPostMovie = new FormGroup ({
        searchByTitle: new FormControl(''),
    });

    addYourMovieGroup = new FormGroup ({
        yourTitle: new FormControl('', [Validators.required, Validators.minLength(2)] ),
        yourRealeseDay: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}')]),
        yourOverview: new FormControl('', [Validators.required, Validators.minLength(10)]),
        yourPopularity: new FormControl('', [Validators.required, Validators.min(1), Validators.max(10), Validators.pattern('[0-9]*')]),

    });


    ngOnInit() { this.onChanges();

        this.yourTitle = this.addYourMovieGroup.controls['yourTitle'];
        this.yourRealeseDay = this.addYourMovieGroup.controls['yourRealeseDay'];
        this.yourOverview = this.addYourMovieGroup.controls['yourOverview'];
        this.yourPopularity = this.addYourMovieGroup.controls['yourPopularity'];
    }

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
                    this.movieSearch = null;
                }
        })
    }

    uploadMovie() {
        let newTitle = this.addYourMovieGroup.get('yourTitle').value;
        let titleObj = {title: newTitle};

        let newRealeseDay = this.addYourMovieGroup.get('yourRealeseDay').value;
        let realsedayObj = {release_date: newRealeseDay}

        let newOvewrview =  this.addYourMovieGroup.get('yourOverview').value;
        let overviewObj = {overview: newOvewrview}

        let newPopularity = this.addYourMovieGroup.get('yourPopularity').value;
        let popuarityObj = {popularity: newPopularity}

        let newPoster = {poster_path: null}
        let newVote = {vote_average: null}

        let newMovieObj = (Object.assign(titleObj, realsedayObj, overviewObj, popuarityObj, newVote, newPoster ))

        this.movieDataList.updateMovieArray(newMovieObj)

}
    addMovieToMovie(movieIndex: any) {
        this.selectedIdx = movieIndex;
        this.movieDataList.addNewMovieToArray(this.movieSearch[movieIndex])
        setTimeout(() => { this.selectedIdx = null; }, 2000);
    }
}
