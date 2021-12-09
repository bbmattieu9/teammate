import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Teammate } from './teammate-interface';
// import { Supplier } from '../suppliers/supplier';
// import { SupplierService } from '../suppliers/supplier.service';


@Injectable({
  providedIn: 'root'
})
export class TeammateService {

  private teammatesUrl = 'api/teammates';

  constructor(private http: HttpClient) { }


  private fakeTeammate(): Teammate {
    return {
      id: 10,
      firstname: 'Hakeem',
      lastname: 'Olajuwon',
      role: 'Product Owner',
      employmentDate: 'November 4, 2019',
      description: 'Leaf rake with 48-inch wooden handle.',
      salary: 300.00,
      starRating: 4.2,
      imageUrl: 'https://media.istockphoto.com/photos/portrait-of-young-man-against-white-background-picture-id916534092?b=1&k=6&m=916534092&s=170667a&w=0&h=3ZYjJJ2Yhk_jk6MLjeHd5lhs2Xn9HUPqZ_5SL8pshQM=',
      category: 'Business',
      contactInfo: null
    };
  }


  getTeammates(): Observable<Teammate[]> {
    return this.http.get<Teammate[]>(this.teammatesUrl)
    .pipe(
      tap(data => console.log(`[All_Teammates]:`, data)),
      catchError(this.handleError)
    );
  }



  private handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
