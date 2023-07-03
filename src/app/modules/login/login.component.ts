import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm= this.FormBuilder.group({
    email:['holamundo@gmail.com'],
    password: [''],
  })

  constructor(private FormBuilder:FormBuilder){}
ngOnInit():void{}
}
