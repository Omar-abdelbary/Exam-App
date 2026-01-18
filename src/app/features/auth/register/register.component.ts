import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  // injection services here
  private readonly _FormBuilder = inject(FormBuilder) ;
  private readonly _AuthService = inject(AuthService) ;




  // form group here and form controls
  registerForm:FormGroup = this._FormBuilder.group({

    fullName : [ null , [Validators.required , ]] ,
    email : [ null , [Validators.required , ]] ,
    password : [ null , [Validators.required , ]] ,
    confirmPassword : [ null , [Validators.required , ]] ,
    role : [ null , [Validators.required , ]] ,
  })



  //  form Submit function here

  registerFormOnSubmit(){


    if (this.registerForm.valid) {


      //  call register service here
      this._AuthService.register(this.registerForm.value).subscribe({
        next:(res)=>{
          console.log(res);
        },
        error:(err:HttpErrorResponse)=>{
          console.log(err);
        }
      })

    } else {

      this.registerForm.markAllAsTouched() ;

    }
  }

}
