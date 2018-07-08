import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Book } from '../shared/model/book.model';
import { BooksService } from '../shared/services/books.services';
import { ValidatorFn } from "@angular/forms";

@Component({
  selector: 'herolo-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent implements OnInit {

  boolReCaptcha: boolean = false;

  addBookForm: FormGroup;
  @Output() emitter: EventEmitter<Book> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private booksService: BooksService) { }

  ngOnInit() {
    this.createForm();

  }


  private createForm(): void {
    this.addBookForm = this.formBuilder.group({
      bookTitle: ["", Book.textValidators],
      bookName: ["", Book.textValidators],
      bookPublishedDate: ["", Book.dateValidators],
      bookDescription: ["", Book.descriptionValidators]
    });
  }

  addBook(): void {

    let BookID: number = Math.floor(Math.random() * 100) + 1;
    let booktitle: string = this.addBookForm.get("bookTitle").value;
    let bookName: string = this.addBookForm.get("bookName").value;
    let description: string = this.addBookForm.get("bookDescription").value;
    let datePublish: string = this.addBookForm.get("bookPublishedDate").value;

    let newBook = new Book(BookID, booktitle, bookName, description, datePublish);
    this.emitter.emit(newBook);

  }








}

