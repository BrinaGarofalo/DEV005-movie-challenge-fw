import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { genderId } from 'src/app/gender';
import { IMovie } from 'src/app/models/Movie.model';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnChanges {
  movies:  IMovie []= [];
  filterMov: IMovie []= [];
  titleMov: string = '';
  selectMov: number | null= null;
  selectedMovieIndex: number | null = null;
  moviePoster: string | null = null;
  selectGender: number | null = null;
  selectPopular: string = '';
  genreMap: any = genderId;


  @Input('filter-text') filterText: string = '';
  @Input('filter-gender') filterGender: number | null = null;
  @Input('filter-popular') filterPopular: string = '';

  constructor(private apiService: ApiService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    if (changes['filterText']){
      this.busquedaMov();
    }
  }

  

  ngOnInit(): void {
    this.mostrarData();
   
    
  }

  mostrarData() {
    this.apiService.getData().subscribe(
      (data: any) => {
        this.movies = data.results;
        this.filterMov = [...this.movies];
      
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  busquedaMov() {
    const searchTerm = this.filterText.toLocaleLowerCase();
    this.filterMov = this.movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm)
    );
   }
 
   movieIndex(index: number) {
    if (this.selectMov === index) {
      this.selectMov = null;
      this.selectedMovieIndex = null;
      this.moviePoster = null;
    } else {
      this.selectMov = index;
      this.selectedMovieIndex = index;
      this.moviePoster =
        'https://image.tmdb.org/t/p/w500' +
        this.filterMov[index].poster_path;
    }
  }

  genderMov() {
    if (this.selectGender) {
      const filterGender = this.movies.filter((movie: IMovie) =>
        movie.genre_id.includes(Number(this.selectGender))
      );
      this.filterMov = filterGender;
    } else {
      this.filterMov = this.movies;
    }
  
 
  }


  movPopular() {
    if (this.selectPopular === 'week') {
      this.filterMov= this.movies.filter(
        (movie: IMovie) => movie.vote_average >= 5
      );
    } else if (this.selectPopular === 'month') {
      this.filterMov = this.movies
        .filter((movie: IMovie) => movie.vote_average >= 8)
        .slice(0, 5);
    }
    debugger

  }

  getGenderName(genreId: number): string {
    const genre = this.genreMap.find((g: any) => g.id === genreId);
    return genre ? genre.name : '';
  }


}
