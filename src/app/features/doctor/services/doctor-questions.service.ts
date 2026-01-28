import { provideToastr } from 'ngx-toastr';
import { inject, Injectable } from '@angular/core';
import { Http2ServerRequest } from 'http2';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../core/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class DoctorQuestionsService {
  //  injection service http client here to use four methods apis

  private readonly _HttpClient = inject(HttpClient);

  //  get all questions for exam
  getExamQuestions(
    examId: number | string,
    pageNumber: number = 1,
    pageSize: number = 10,
  ): Observable<any> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return this._HttpClient.get(
      `${environment.baseUrl}/api/exams/${examId}/questions`,
      { params },
    );
  }

  // create questions

  createQuestion(
    examId: string | number | null,
    questionData: {
      questionText: string;
      questionMark: number;
      questionType: string;
      options: { optionText: string }[];
      correctOptionNumber: number;
    },
  ): Observable<any> {
    return this._HttpClient.post(
      `${environment.baseUrl}/api/exams/${examId}/questions`,
      questionData,
    );
  }

  // get question by id

  getQuestionById(
    examId: string | number | null,
    questionId: string | number | null,
  ): Observable<any> {
    return this._HttpClient.get(
      `${environment.baseUrl}/api/exams/${examId}/questions/${questionId}`,
    );
  }

  //   update question 
  updateQuestion(
    examId: string | number | null,
    questionId: string | number | null,
    updatedData: {
      questionText: string;
      newQuestionMark: number;
      options: { optionId: number; newOptionText: string }[];
      newCorrectOptionId: number;
    },
  ): Observable<any> {
    return this._HttpClient.put(
      `${environment.baseUrl}/api/exams/${examId}/questions/${questionId}`,
      updatedData,
    );
  }

  // delete question by ib  exam id
  deleteQuestion(
    examId: string | number | null,
    questionId: string | number | null,
  ): Observable<any> {
    return this._HttpClient.delete(
      `${environment.baseUrl}/api/exams/${examId}/questions/${questionId}`,
    );
  }






}
