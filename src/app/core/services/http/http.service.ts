import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiMethod, AuthEndPoints } from '../../const';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  methods: ApiMethod;

  constructor( private http: HttpClient) { }


  requestCall(api: AuthEndPoints, method: ApiMethod, data?: any) {

    let response;

    switch(method) {

      case ApiMethod.GET:
        response = this.http.get(`${environment.apiUrl}${api}`)
        .pipe(catchError((err) => this.handleError(err, this)));
        break;

      case ApiMethod.POST:
        response = this.http.post(`${environment.apiUrl}${api}`, data)
        .pipe(catchError(err => this.handleError(err, this)));
        break;

      case ApiMethod.PUT:
        response = this.http.put(`${environment.apiUrl}${api}`, data)
        .pipe(catchError(err => this.handleError(err, this)));
        break;

      case ApiMethod.DELETE:
        response = this.http.delete(`${environment.apiUrl}${api}`)
        .pipe(catchError(err => this.handleError(err, this)));
        break;

      default:
        break;
    }

    return response;
  }



  handleError(error: HttpErrorResponse, self) {

    if (error.error instanceof ErrorEvent) {
      console.log('An error occured:', error.error.message);
    } else {
      console.error(error.message, error.status);
      // this._error.whichError(error.status, error.message);
      return throwError({error: error.message, status: error.status});
    }
  }
}
