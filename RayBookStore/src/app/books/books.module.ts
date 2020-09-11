import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [BooksComponent, BooklistComponent, BookDetailComponent],
  imports: [CommonModule, BooksRoutingModule],
  exports: [BooksComponent, BooklistComponent],
})
export class BooksModule {}
