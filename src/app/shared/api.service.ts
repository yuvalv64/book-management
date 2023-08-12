import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';

HttpClientModule
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = "http://localhost:8080/api"
  private GET_ALL_BOOKS_URL = this.BASE_URL + '/books';
  private GET_BOOK_INFO_URL = this.BASE_URL + '/bookInfo';
  private REMOVE_BOOK_URL = this.BASE_URL + '/removeBook';
  private BOOK_ACTION = this.BASE_URL + '/performBookAction';
  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.GET_ALL_BOOKS_URL);
  }

  getBookInfo(id: string): Observable<Book> {
    return this.http.get<Book>(this.GET_BOOK_INFO_URL + `/${id}`);
  }

  book(book: Book): Observable<Book> {
    return this.http.post<Book>(this.BOOK_ACTION, book);
  }

  removeBook(id: number): Observable<Book> {
    return this.http.get<Book>(this.REMOVE_BOOK_URL + `/${id}`);
  }
}
