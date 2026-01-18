import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../core/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  // injection HttpCleint to use four method apis to send back end
  private readonly _HttpClient = inject(HttpClient) ;





  // register method

  register(registerData: object):Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/api/Authentication/register` , registerData)
  }


  // login method

  login(loginData: object):Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/api/Authentication/login` , loginData)
  }



  // forget password method

  forgetPassword(email : string):Observable<any> {
    const params = new HttpParams().set('email', email);
    return this._HttpClient.get(`${environment.baseUrl}/api/Authentication/forget-password` ,{params})
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
    return this._HttpClient.get(`${environment.baseUrl}/api/Authentication/confirm-email` ,{ params })
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


}
