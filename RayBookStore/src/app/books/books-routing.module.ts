import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
  {
    path: 'books',
    component: BooklistComponent,
  },
  {
    path: 'books/:isbn',
    component: BookDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
