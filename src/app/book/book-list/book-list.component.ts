import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit  {
  booksList : Array<Book> = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void{
    this.getAllBooks();
  }

  getAllBooks(): void{
    this.apiService.getAllBooks().subscribe((data) =>{
      this.booksList = data;
    });
  }
}
