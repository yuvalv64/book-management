import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookManageComponent } from './book-manage/book-manage.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookListComponent } from './book-list/book-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { BasicLayoutModule } from '../basic-layout/basic-layout.module';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from '../state/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffect } from '../state/book.effect';


@NgModule({
  declarations: [
    BookManageComponent,
    BookCreateComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    BasicLayoutModule,
    StoreModule.forFeature("booksList", booksReducer),
    EffectsModule.forFeature(BookEffect)
  ]
})
export class BookModule { }
