import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { MyBooksComponent } from '../app/my-books/my-books.component'
const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
},
{
  path: 'my-books',
  component: MyBooksComponent,
},
{
  path: 'add-book',
  component: AddBookComponent,
},
{
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

