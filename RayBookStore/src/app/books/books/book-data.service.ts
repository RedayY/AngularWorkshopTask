import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4730/books');
  }

  getBookByISBN(isbn: string): Observable<Book[]> {
    return this.http
      .get<Book[]>('http://localhost:4730/books/' + isbn)
      .pipe(shareReplay(1));
  }

  postNewBook(newBook: Book) {
    return this.http.post<Book>('http://localhost:4730/books/', newBook);
  }
}
