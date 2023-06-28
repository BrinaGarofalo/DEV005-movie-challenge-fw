import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  filterMov: any[] = [];
  titleMov: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.mostrarData();
  }

  mostrarData() {
    this.apiService.getData().subscribe(
      (data: any) => {
        this.movies = data.results;
        this.filterMov = this.movies;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  
  busquedaMov() {
    const searchTerm = this.titleMov.toLocaleLowerCase();
    this.filterMov = this.movies.filter((movie: any) =>
    movie.title.toLowerCase().includes(searchTerm)
    );
  }
}


