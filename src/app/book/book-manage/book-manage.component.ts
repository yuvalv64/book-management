import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { ApiService } from 'src/app/shared/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-manage',
  templateUrl: './book-manage.component.html',
  styleUrls: ['./book-manage.component.scss']
})
export class BookManageComponent implements OnInit {
  bookInfo!: Book;
  editBookForm!: FormGroup;
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.getBookInfo(data['id']);
    });
  }

  getBookInfo(id: string): void {
    this.apiService.getBookInfo(id).subscribe((data) => {
      this.bookInfo = data;
    });
  }
}


