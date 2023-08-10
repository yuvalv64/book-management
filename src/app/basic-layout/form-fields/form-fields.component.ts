import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss']
})
export class FormFieldsComponent {
  book!: Book;
  editBookForm!: FormGroup;

  @Input() bookInfo!: Book;

  constructor(private apiService: ApiService, private route: ActivatedRoute,private formBuilder: FormBuilder){}
  
  ngOnInit(): void {
    this.route.params.subscribe( data =>{
      if(data['id']){
        this.getBookInfo(data['id']);
      }else{
        this.initForm(undefined);
      }
    });
  }

  getBookInfo(id: string): void{
    this.apiService.getBookInfo(id).subscribe((data) =>{
      this.book = data;
      this.initForm(this.book);
    });
  }

  performBookAction(book: Book): void{
    this.apiService.book(book).subscribe((data) =>{
        // update state
        // redirect to first page
    });
  }

  initForm(bookInfo?: Book) {

    this.editBookForm = this.formBuilder.group({
      bookName: ['', Validators.required],
      price: ['' , Validators.required],
      genre: [''],
      description: [''],
      yearOfPublish: ['']     
    });

      this.editBookForm.setValue({
        bookName: bookInfo ? bookInfo.name : '',
        price: bookInfo ?  bookInfo.price : '',
        genre: bookInfo ?  bookInfo.genre : '',
        description: bookInfo ?  bookInfo.description : '',
        yearOfPublish: bookInfo ?  bookInfo.yearOfPublish : ''
      });

  }

  submit(event: any){
    if(event.submitter.id == 'submit'){
      if(this.editBookForm.invalid){
          return;
        }
        let newBook : Book = {
          id: !this.book.id ? this.editBookForm.controls['id'].value :'',
          name: this.editBookForm.controls['bookName'].value,
          genre: this.editBookForm.controls['genre'].value,
          price: this.editBookForm.controls['price'].value,
          yearOfPublish: this.editBookForm.controls['yearOfPublish'].value,
          description: this.editBookForm.controls['description'].value,
        };
        this.performBookAction(newBook);
    }else{
      this.removeBook();
    }  
    
  }

  removeBook(){
    this.apiService.removeBook(this.book.id).subscribe((data) =>{
      // set state
      // redirect to first page
    });
  }
}
