import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../books/book';
import { BookDataService } from '../books/book-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  constructor(
    private bookData: BookDataService,
    private route: ActivatedRoute
  ) {}

  $books: Observable<Book[]>;

  getKeys(book: Book) {
    return Object.keys(book);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: { isbn: string }) => {
      this.$books = this.bookData.getBookByISBN(params.isbn);
    });
  }
}
