import { Component } from '@angular/core';
import { IMovie } from 'src/app/models/Movie.model';
import { genderId } from 'src/app/gender';
@Component({
  selector: 'app-cardmovies',
  templateUrl: './cardmovies.component.html',
  styleUrls: ['./cardmovies.component.css']
})
export class CardmoviesComponent {
  filterMov: IMovie []= [];
  selectMov: number | null= null;
  selectedMovieIndex: number | null = null;
  moviePoster: string | null = null;
  genderMap: any = genderId;

constructor(){}

ngOnInit(): void {}



getGenderName(genreId: number): string {
  const genre = this.genderMap.find((g: any) => g.id === genreId);
  return genre ? genre.name : '';
 }


}