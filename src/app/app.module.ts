import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './modules/base/base.component';
import { MoviesComponent } from './modules/movies/movies.component';
import { MovieDetailComponent } from './modules/movies/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    MoviesComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
