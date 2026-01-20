import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-forgetpass',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass
],
  templateUrl: './forgetpass.component.html',
  styleUrl: './forgetpass.component.css'
})
export class ForgetpassComponent {


  // injection service here to use in the component
  private readonly _formBuilder = inject(FormBuilder) ;
  private readonly _router = inject(Router) ;
  private readonly _AuthService = inject(AuthService) ;


  //  all veriables here to use in components
  Step:WritableSignal<number> = signal(1) ;


  // forget password form
  forgetPassForm:FormGroup = this._formBuilder.group({
    email: [ null , [Validators.required , Validators.email]] ,
  }) ;

  // submit forget password form
  forgetPasswordSubmit() {

    // is form valid to call funtion from auth service

    if (this.forgetPassForm.valid) {


      this._AuthService.forgetPassword(this.forgetPassForm.value).subscribe({
        next:(res)=>{
          console.log(res);
          this.Step.set(2) ;

        },

        error:(err:HttpErrorResponse)=>{
          console.log(err);

        }
      })
    } else {
      this.forgetPassForm.markAllAsTouched() ;

    }
  }



//  reset password form here

resetPasswordForm:FormGroup = this._formBuilder.group({

  email : [ null , [Validators.required , Validators.email]] ,
  token : [null , [Validators.required]] ,
  newPassword : [ null , [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/)]]
}) ;

// submit reset password form
resetPasswordFormSubmit() {

  if (this.resetPasswordForm.valid) {

    this._AuthService.resetPassword(this.resetPasswordForm.value).subscribe({
      next:(res)=>{

        console.log(res);

      },


      error:(err:HttpErrorResponse)=>{
        console.log(err);

      }
    })

  } else {

    this.resetPasswordForm.markAllAsTouched() ;

  }

}


}
