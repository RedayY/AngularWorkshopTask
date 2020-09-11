import { Injectable } from '@angular/core';
import { Book } from './book';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  constructor() {}

  private books: Book[] = [
    {
      title: 'Design Patterns',
      isdn: '1',
      subtitle: 'Elements of Reusable Object-Oriented Software',
    },
    {
      title: 'REST und HTTP',
      isdn: '2',
      subtitle: 'Entwicklung und Integration nach dem Architekturstil des Web',
    },
    {
      title: 'Eloquent JavaScript',
      isdn: '2',
      subtitle: 'A Modern Introduction to Programming',
    },
  ];

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }
}
