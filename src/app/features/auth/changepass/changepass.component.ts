import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-changepass',
  standalone: true,
  imports: [
    ReactiveFormsModule ,
    NgClass

  ],
  templateUrl: './changepass.component.html',
  styleUrl: './changepass.component.css'
})
export class ChangepassComponent {

  //  injection service here to use in components

  private readonly _ToastrService = inject(ToastrService) ;
  private readonly _AuthService = inject(AuthService) ;
  private readonly _Router = inject(Router) ;
  private readonly _FormBuilder = inject(FormBuilder) ;


  changePassForm:FormGroup = this._FormBuilder.group({

    currentPassword : [null , [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/)]] ,
    newPassword : [null , [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/)]] ,
  })

  changePassSubmit() {

    if (this.changePassForm.valid) {

      this._AuthService.changePass(this.changePassForm.value).subscribe({
        next:(res)=>{
          console.log(res);

        },

        error:(err:HttpErrorResponse)=>{
          console.log(err);

        }
      })

    }
    else {
      this.changePassForm.markAllAsTouched() ;
    }
  }












}
