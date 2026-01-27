import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../core/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentresultsService {

  constructor(private readonly _HttpClient : HttpClient ) { } ;


  // myExamResults():Observable<any> {
  //   return this._HttpClient.get(`${environment.baseUrl}/api/results/me?pageNumber=1&pageSize=5`)
  // }


  myExamResults(
  pageNumber: number = 1,
  pageSize: number = 5
): Observable<any> {

  let params = new HttpParams()
    .set('pageNumber', pageNumber)
    .set('pageSize', pageSize);

  return this._HttpClient.get(
    `${environment.baseUrl}/api/results/me`,
    { params }
  );
}




  reviewExam(examId:string | number | null):Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/exams/${examId}/review`)
  }
}
