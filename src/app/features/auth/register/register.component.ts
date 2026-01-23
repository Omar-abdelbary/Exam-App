import { Component, inject, signal, WritableSignal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgClass, provideNetlifyLoader } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  // injection services here
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _AuthService = inject(AuthService);
  private readonly _Router = inject(Router);
  private readonly _ToastrService = inject(ToastrService) ;

  //  varialbes to move from register to confirm step 2 here
  Step: WritableSignal<number> = signal(1);

  // form group here and form controls
  registerForm: FormGroup = this._FormBuilder.group(
    {
      fullName: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(30),
        ],
      ],
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/),
        ],
      ],
      confirmPassword: [null, [Validators.required]],
      role: [null, [Validators.required]],
    },
    { validators: this.confirmPass },
  );

  // match repassword to password here validation
  confirmPass(g: AbstractControl) {
    // if condition ture
    if (g.get('password')?.value === g.get('confirmPassword')?.value) {
      return null;
    } else {
      return { mismatch: true };
    }
  }

  //  form Submit function here
  registerFormOnSubmit() {
    // form register is valid to call register service
    if (this.registerForm.valid) {
      //  call register  from auth service here
      this._AuthService.register(this.registerForm.value).subscribe({
        next: (res) => {
          // get response here and log it  .


          if (res.isSuccess === true) {
            this._ToastrService.success(res.message , "Exam App" ) ;
            this.Step.set(2);
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        },
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }





  //    confirm email logic here

  confirmEmailForm: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    token: [null, [Validators.required]],
  });

  confirmEmailOnSubmit() {
    // form confirm email is valid to call confirm email from auth service
    if (this.confirmEmailForm.valid) {

      const { email, token } = this.confirmEmailForm.value;
      this._AuthService.confirmEmail(email, token).subscribe({
        next: (res) => {
          // console.log(res);
          this._ToastrService.success(res.message , "Exam App") ;
          this._Router.navigate(['/login']);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        },
      });
    } else {
      this.confirmEmailForm.markAllAsTouched();
    }
  }















}

