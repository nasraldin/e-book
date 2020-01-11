import { BookHttp } from './../models/book-http.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Book } from '../models/book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  private bookListUrl = environment.endpoint.booksList;
  private bookDetailsUrl = environment.endpoint.bookDetails;

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  getBooks(): Observable<BookHttp> {
    return this.http.get<BookHttp>(this.bookListUrl);
  }

  getBookDetails(id: number): Observable<Book> {
    return this.http.get<Book>(this.bookListUrl + `/${id}`);
  }

  getGridItems(): Observable<Book[]> {
    return this.http
      .get<Book[]>(this.bookListUrl)
      .pipe(catchError(this.handleError));
  }
}
