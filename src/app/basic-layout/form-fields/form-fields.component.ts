import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss']
})
export class FormFieldsComponent {
  editBookForm!: FormGroup;

  @Input() bookInfo!: Book;

  constructor(private apiService: ApiService,
    private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      if (data['id']) {
        this.initForm(this.bookInfo);
      } else {
        this.initForm(undefined);
      }
    });
  }

  performBookAction(book: Book): void {
    this.apiService.book(book).subscribe((data) => {
      // update state
      this.router.navigate(["/"]);
    });
  }

  initForm(bookInfo?: Book) {

    this.editBookForm = this.formBuilder.group({
      bookName: ['', Validators.required],
      price: ['', [Validators.pattern("^[0-9]*$"), Validators.required]],
      genre: [''],
      description: [''],
      yearOfPublish: ['']
    });

    this.editBookForm.setValue({
      bookName: bookInfo ? bookInfo.name : '',
      price: bookInfo ? bookInfo.price : '',
      genre: bookInfo ? bookInfo.genre : '',
      description: bookInfo ? bookInfo.description : '',
      yearOfPublish: bookInfo ? bookInfo.yearOfPublish : ''
    });

  }

  submit(event: any) {
    if (event.submitter.id == 'submit') {
      if (this.editBookForm.invalid) {
        return;
      }
      let newBook: Book = {
        id: this.bookInfo ? this.bookInfo.id : 0,
        name: this.editBookForm.controls['bookName'].value,
        genre: this.editBookForm.controls['genre'].value,
        price: this.editBookForm.controls['price'].value,
        yearOfPublish: this.editBookForm.controls['yearOfPublish'].value,
        description: this.editBookForm.controls['description'].value,
      };
      this.performBookAction(newBook);
    } else {
      this.removeBook();
    }

  }

  removeBook() {
    this.apiService.removeBook(this.bookInfo.id).subscribe((data) => {
      // set state
      this.router.navigate(["/"]);
    });
  }
}
