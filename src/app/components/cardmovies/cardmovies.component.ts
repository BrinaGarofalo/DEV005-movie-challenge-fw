import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Movie } from 'src/app/models/movies.interface';

@Component({
  selector: 'app-cardmovies',
  templateUrl: './cardmovies.component.html',
  styleUrls: ['./cardmovies.component.css']
})
export class CardmoviesComponent implements OnInit {
  @Input() movie: any;
  movies: Movie[] = [];


  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    this.mostrarData();


  }
    mostrarData() {
      this.apiService.getData().subscribe(
        (data: any) => {
          this.movies = data.results;
        
  
        },
        (error: any) => {
          console.error(error);
      })
  }

}

