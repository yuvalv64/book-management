import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookManageComponent } from './book/book-manage/book-manage.component';


const routes: Routes = [
  {path: 'createBook', component: BookCreateComponent},
  {path: 'edit/:id', component: BookManageComponent}, // SHOULD BE REMOVE AND USE BY BOOK INFO MAYBE
  {path: '', component: BookListComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
