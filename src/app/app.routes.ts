import { Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { LoginComponent } from './features/auth/login/login.component';
import { ForgetpassComponent } from './features/auth/forgetpass/forgetpass.component';
import { ChangepassComponent } from './features/auth/changepass/changepass.component';
import { DoctorComponent } from './features/doctor/doctor.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { CreateexamComponent } from './features/doctor/createexam/createexam.component';
import { StudentsComponent } from './features/students/students.component';

export const routes: Routes = [
  // auth routes
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'register',
        pathMatch: 'full',
        title: 'register',
      },
      { path: 'register', component: RegisterComponent, title: 'register' },
      { path: 'login', component: LoginComponent, title: 'login' },
      {
        path: 'forgetpass',
        component: ForgetpassComponent,
        title: 'forgetPass',
      },
      {
        path: 'changepass',
        component: ChangepassComponent,
        title: 'Change Password',
      },
    ],
  },


  //  doctor layouts

  {path:"" , component : DoctorComponent , children : [
    // {path:"" , redirectTo:"profile" , pathMatch:"full" , title:"myProfile" } ,
    // {path:"profile" , component: ProfileComponent , title:"profile"} ,
    {path:"createexam" , component: CreateexamComponent , title:"create Exam"} ,

  ] } ,





  //  students layouts routing  here

  {path:"" , component : StudentsComponent , children : [
    {path:"" , redirectTo:"profile" , pathMatch:"full" , title:"my profile"} ,
    {path:"profile" , component:ProfileComponent , title:"my profile"} ,
    // {path:""}
  ]}
];
