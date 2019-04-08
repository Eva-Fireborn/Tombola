import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-button',
  templateUrl: './landing-page-button.component.html',
  styleUrls: ['./landing-page-button.component.css']
})
export class LandingPageButtonComponent implements OnInit {

  onCLick() {
    console.log('Du har klickat på mig');
  }

  constructor() {
    
    
  }

  ngOnInit() {
  
    
  }
}
