import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Book } from 'src/app/models/book.model';
import { ApiService } from 'src/app/shared/api.service';
import * as bookActions from "../../state/book.actions";
import * as fromBooks from '../../state/book.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  booksList$!: Observable<Book[]>;

  constructor(private apiService: ApiService, private store: Store<fromBooks.BookState>) { }

  ngOnInit(): void {
    // this.getAllBooks();
    this.store.dispatch(new bookActions.LoadBooks());
    this.booksList$ = this.store.pipe(select(fromBooks.getAllBooks))
  }

  getBooksLength() {

  }

  getAllBooks(): void {
    // this.apiService.getAllBooks().subscribe((data) => {
    // this.booksList$ = data.booksList;
    // });
  }
}
