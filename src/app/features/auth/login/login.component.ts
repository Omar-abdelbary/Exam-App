import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true ,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  //  injection service here to use in component

  private readonly _Router = inject(Router);
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _AuthService = inject(AuthService);

  // create login form here

  loginForm: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/)]],
  });

  // login form submit function here
  loginFormSubmit() {
    // if condition form valid to call login from auth service

    if (this.loginForm.valid) {
      // call login service here

      this._AuthService.login(this.loginForm.value).subscribe({
        next:(res)=>{
          console.log(res);

          if (res.role === "Doctor" ) {

            localStorage.setItem("AppToken" , res.token) ;
            this._AuthService.SaveToken() ;
            this._Router.navigate(["/home"]) ;

          }
          // check here on role
          else if (res.role === "Student") {

             localStorage.setItem("AppToken" , res.token) ;
            this._AuthService.SaveToken() ;
            this._Router.navigate(["/home"]) ;
          }

        },

        error:(err:HttpErrorResponse)=>{
          console.log(err);

        }
      })
    } else {
    }
  }
}
