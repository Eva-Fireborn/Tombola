import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CreditsModule } from './credits/credits.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { SearchRateFilmModule } from './search-rate-film/search-rate-film.module';
import { ToplistModule } from './toplist/toplist.module';
import { UserFormModule } from './user-form/user-form.module';
import { SharedModule } from './shared/shared.module'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BarRatingModule } from "ngx-bar-rating";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MovielistService } from './shared/movielist.service';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CreditsModule,
    LandingPageModule,
    SearchRateFilmModule,
    ToplistModule,
    UserFormModule,
    AppRoutingModule,
    SharedModule,
    BarRatingModule,
    AngularFontAwesomeModule,

  ],
  providers: [MovielistService],
  bootstrap: [AppComponent]
})
export class AppModule {
constructor() {
  library.add( fasStar, farStar);
}
 }
