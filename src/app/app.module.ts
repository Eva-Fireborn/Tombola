import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CreditsModule } from './credits/credits.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { SearchRateFilmModule } from './search-rate-film/search-rate-film.module';
import { ToplistModule } from './toplist/toplist.module';
import { UserFormModule } from './user-form/user-form.module';
import { AppComponent } from './app.component';

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
    UserFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
