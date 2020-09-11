import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../books/book-data.service';
import { Book } from '../books/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})
export class BooklistComponent implements OnInit {
  $books: Observable<Book[]>;

  constructor(private bookData: BookDataService) {}

  ngOnInit(): void {
    this.$books = this.bookData.getBooks();
  }
}
