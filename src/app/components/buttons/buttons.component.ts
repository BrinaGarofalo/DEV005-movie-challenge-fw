import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/Movie.model';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  userLoginOn:boolean= false;
  movies:  IMovie []= [];
  filterMov: IMovie []= [];
  titleMov: string = '';

  constructor( ) {}

  ngOnInit(): void {
   
  }

}
