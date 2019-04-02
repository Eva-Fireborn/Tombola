import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-image',
  templateUrl: './landing-page-image.component.html',
  styleUrls: ['./landing-page-image.component.css']
})
export class LandingPageImageComponent implements OnInit {

  kameraImage1="../assets/images/Kamera1.jpg";

  constructor() { }

  ngOnInit() {
  }

}
