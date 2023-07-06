import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import {LoginComponent} from './components/login/login.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardmoviesComponent } from './components/cardmovies/cardmovies.component'


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    LoginComponent,
    ButtonsComponent,
    CardmoviesComponent,
 

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
