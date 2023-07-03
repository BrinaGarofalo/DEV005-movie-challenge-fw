import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/Movie.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  userLoginOn:boolean= false;

  constructor() {}

  ngOnInit(): void {
    
  }
  
}