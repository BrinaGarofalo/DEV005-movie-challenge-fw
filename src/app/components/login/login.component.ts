import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  userLoginOn: boolean=false;

  loginForm= this.FormBuilder.group({
    email:['holamundo@gmail.com',[Validators.required,Validators.email]],
    password: ['',Validators.required],
  })

  constructor(private FormBuilder:FormBuilder, private router:Router){}
ngOnInit():void{}

get email(){
  return this.loginForm.controls.email;
}

get password(){
  return this.loginForm.controls.password;
}


login() {
  if(this.loginForm.valid){
    console.log("llamar servicio");
   this.router.navigate(['/buttons']);
   this.loginForm.reset();
  }
  else {
    this.loginForm.markAllAsTouched();
  
  }
}
}