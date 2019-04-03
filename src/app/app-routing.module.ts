import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreditComponent } from './credits/credit/credit.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { FilmComponent } from './search-rate-film/film/film.component';
import { ToplistFilmsComponent } from './toplist/toplist-films/toplist-films.component';
import { FormComponent } from './user-form/form/form.component';

const routes: Routes = [
	{ path: 'Credits', component: CreditComponent },
  { path: 'LandingPage', component: LandingPageComponent },
  { path: 'Rating', component: FilmComponent },
  { path: 'Toplist', component: ToplistFilmsComponent },
  { path: 'Form', component: FormComponent },
	{ path: '', component: LandingPageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
