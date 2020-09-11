import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookNewComponent } from './book-new/book-new.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BooksComponent,
    BooklistComponent,
    BookDetailComponent,
    BookNewComponent,
  ],
  imports: [CommonModule, BooksRoutingModule, ReactiveFormsModule],
  exports: [BooksComponent, BooklistComponent],
})
export class BooksModule {}
