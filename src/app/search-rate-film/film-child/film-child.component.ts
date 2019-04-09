import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film-child',
  templateUrl: './film-child.component.html',
  styleUrls: ['./film-child.component.css']
})
export class FilmChildComponent implements OnInit {
  @Input() selectedFilm;
  @Output() onAction = new EventEmitter<any> ();
  @Output() selectedFilmToNull = new EventEmitter<any> ();

  voteOnFilm(rating){
    this.selectedFilm.popularity = rating;
    this.onAction.emit(this.selectedFilm)
  }
  constructor() { }
  setSelectedFilmToNull(){
    this.selectedFilmToNull.emit(null);
  }
  ngOnInit() {
  }

}
