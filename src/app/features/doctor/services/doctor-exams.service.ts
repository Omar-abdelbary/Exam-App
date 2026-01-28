import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../core/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class DoctorExamsService {
  //  injection services http client here

  private readonly _HttpClient = inject(HttpClient);






  // create exams
  createExams(examsInfo: object): Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/api/exams`, examsInfo);
  }


  // update exam

  updateExam(examId:string | null | number , examInfo:object):Observable<any> {
    return this._HttpClient.put(`${environment.baseUrl}/api/exams/${examId}` ,
      examInfo
    )
  }




   // delete exam

  deleteExam(examId:string | null | number):Observable<any> {
    return this._HttpClient.delete(`${environment.baseUrl}/api/exams/${examId}`)
  }


  // get all exams for doctor

  getDoctorExams(
    examStatus: 'Finished' | 'Pending' | 'Published',
    pageNumber: number = 1,
    pageSize: number = 10,
  ): Observable<any> {
    const params = new HttpParams()
      .set('examStatus', examStatus)
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize);

    return this._HttpClient.get('/api/exams/doctor', { params });
  }



  // get exam by id

  getExamById(examId:string | number | null):Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/exams/${examId}`)
  }


  





















}
