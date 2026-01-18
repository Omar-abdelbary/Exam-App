import { Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { LoginComponent } from './features/auth/login/login.component';

export const routes: Routes = [



  // auth routes

  {path:"" , component:AuthComponent , children:[
    {path:"" , redirectTo:"register" , pathMatch:"full" , title:"register"} ,
    {path:"register" , component: RegisterComponent , title:"register"} ,
    {path:"login" , component: LoginComponent , title:"login"} ,
  ]}
];
