import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../core/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class StudentexamsService {

  constructor( private readonly _HttpClient : HttpClient) { } ;



// get all exams for students
  // getExamsForStudents():Observable<any> {
  //   return this._HttpClient.get(`${environment.baseUrl}/api/exams/student?examStatus=Finished&pageNumber=1&pageSize=10`)
  // }


  getExamsForStudents(
  examStatus?: 'Upcoming' | 'Active' | 'Finished',
  pageNumber: number = 1,
  pageSize: number = 10
): Observable<any> {

  let params = new HttpParams()
    .set('pageNumber', pageNumber)
    .set('pageSize', pageSize);

  if (examStatus) {
    params = params.set('examStatus', examStatus);
  }

  return this._HttpClient.get(
    `${environment.baseUrl}/api/exams/student`,
    { params }
  );
}





  // start exams

  StartExam(examId:string | number | null):Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/api/exams/${examId}/start` ,
      null
    )
  }



  //  submit exam

  SubmitExam(examId :string | number | null , answers:[]):Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/api/exams/${examId}/submit` ,
      answers
    )
  }















}
