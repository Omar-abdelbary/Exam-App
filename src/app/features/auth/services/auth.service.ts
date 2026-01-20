import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../core/environment/environment';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  // injection HttpCleint to use four method apis to send back end
  private readonly _HttpClient = inject(HttpClient) ;


  Token:any| null ;
  RoleApp :WritableSignal<string | null> = signal(null) ;



  // register method

  register(registerData: object):Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/api/Authentication/register` , registerData)
  }


  // login method

  login(loginData: object):Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/api/Authentication/login` , loginData)
  }



  // forget password method

  forgetPassword(forgetPassData : object):Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/api/Authentication/forget-password`  , forgetPassData)
  }



  // reset password method

  resetPassword(resetPassData: object):Observable<any> {

    return this._HttpClient.post(`${environment.baseUrl}/api/Authentication/reset-password` ,
      resetPassData
    )
  }


  // confirm email method

  confirmEmail(email: string, token: string):Observable<any> {

    let params = new HttpParams()
    .set('email', email)
    .set('token', token);
    return this._HttpClient.get(`${environment.baseUrl}/api/Authentication/confirm-email` ,{params})
  }


  // change password method

  changePassword(changePassData: object):Observable<any> {

    return this._HttpClient.post(`${environment.baseUrl}/api/Authentication/change-password` , changePassData)
  }




  // resend confirm email method


  resendConfirmEmail(email: string):Observable<any> {

    const params = new HttpParams().set('email', email);

    return this._HttpClient.get(`${environment.baseUrl}/api/Authentication/resend-confirm-email` ,{params})
  }


  //  save token
  SaveToken() {

    this.Token = jwtDecode(localStorage.getItem("appToken") !) ;
  }

  //  save Role
  SaveRole() {
    this.RoleApp.set(localStorage.getItem("roleApp") )  ;
  }



  //  signout
  logOut() {

    if (localStorage.getItem("AppToken") !== null) {

      localStorage.removeItem("AppToken") ;
      this.Token = null ;

    }
  }


}
