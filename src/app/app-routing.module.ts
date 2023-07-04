import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ButtonsComponent } from './components/buttons/buttons.component';


const routes: Routes = [
{path: '', redirectTo:'/login', pathMatch:'full'},
{path:'login', component:LoginComponent},
{path:'buttons', component:ButtonsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
