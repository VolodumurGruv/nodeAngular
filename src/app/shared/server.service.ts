import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Category } from './interfaces';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private url = 'http://localhost:3200/api';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Category[]> {
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

  getById(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.url}/${id}.json`).pipe(
      map((prod: Category) => {
        console.log({ ...prod });
        return { ...prod };
      })
    );
  }

  create(category: Category): Observable<Category[]> {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http
      .post<Category[]>(`${this.url}/create`, JSON.stringify(category), {
        headers: myHeaders,
      })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message + 'handle client error Ang';
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message} handle server error Ang`;
    }
    console.log(errorMessage, 'Handle ang');
    return throwError(errorMessage);
  }
}
