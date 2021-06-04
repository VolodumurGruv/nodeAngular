import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { User } from './interfaces';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private url = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http
      .get(this.url, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept',
          'Access-Control-Allow-Methods':
            'GET, PATCH, PUT, POST, DELETE, OPTIONS',
        },
      })
      .pipe(
        map((data: any) => {
          return data;
        }),
        catchError((err) => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  create(user: User): Observable<User[]> {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http
      .post<User[]>(`${this.url}create`, JSON.stringify(user), {
        headers: myHeaders,
      })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
