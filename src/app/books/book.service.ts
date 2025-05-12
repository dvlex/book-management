import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Book } from '../models/book';
import { asyncScheduler, scheduled } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  addBook(book: Book): Observable<Book> {

    // Simulate an error API call
    // const err = new Error('Error adding book');
    // return throwError(() => err);

    // Simulate a successful response
    // return of(book); //this is the old way
    return scheduled([book], asyncScheduler);
  }
}
