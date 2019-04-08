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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CreditsModule,
    LandingPageModule,
    SearchRateFilmModule,
    ToplistModule,
    UserFormModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
