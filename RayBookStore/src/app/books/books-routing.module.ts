import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';

const routes: Routes = [
  {
    path: 'books',
    component: BooklistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
