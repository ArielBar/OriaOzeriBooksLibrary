import { Component, OnInit, Input, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/model/book.model';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ValidatorFn } from "@angular/forms";
import { BooksService } from '../shared/services/books.services';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'herolo-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input() book: Book;
  @Output() emitter: EventEmitter<number> = new EventEmitter();
  editBookForm: FormGroup;
  errormessege: string;
  bookID: number;
  isShowModal: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private _booksService: BooksService) { }

  ngOnInit() {
    this.createForm();
  }
  private createForm(): void {
    this.editBookForm = this.formBuilder.group({
      bookTitle: ["", Book.textValidators],
      bookAutorName: ["", Book.textValidators],
      bookPublishedDate: ["", Book.dateValidators],
      bookDescription: ["", Book.descriptionValidators]
    });
  }

  private updateBook(): void {
    this._booksService.updateBook(this.book.id)
      .subscribe(() => { alert("Updated"); },
        (error: HttpErrorResponse) => alert(error.status + ", " + error.statusText));
  }

  private deleteBook(bookID): void {
    this.bookID = bookID;
    this.emitter.emit(this.bookID);

    console.log(bookID);
  }
}
