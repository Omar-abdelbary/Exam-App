import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../core/environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorResultsService {
  // injection service http client to use four method apis

  private readonly _HttpClient = inject(HttpClient);



  //  get all results for exam
  getExamResults(
    examId: string | number | null,
    status?: 'Passed' | 'Failed',
    pageNumber: number = 1,
    pageSize: number = 10,
  ): Observable<any> {
    let params = new HttpParams()
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize);

    if (status) {
      params = params.set('status', status);
    }

    return this._HttpClient.get(
      `${environment.baseUrl}/api/exams/${examId}/results`,
      { params },
    );
  }




 
}
