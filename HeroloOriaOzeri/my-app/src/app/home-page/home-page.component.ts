import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BooksService } from '../shared/services/books.services';
import { HttpErrorResponse } from '@angular/common/http';
import { Book } from '../shared/model/book.model';
import { Router } from '@angular/router';
import { BookDetailsComponent } from '../book-details/book-details.component';

@Component({
  selector: 'herolo-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  books: Book;
  @ViewChild(BookDetailsComponent) child: BookDetailsComponent;

  constructor(private _booksService: BooksService, private router: Router) {

  }

  ngOnInit() { this.getBooks() }

  public getBooks(): void {
    this._booksService.getAllBooks()
      .subscribe((books: Book) => {
        this.books = books;
      },
        (error: HttpErrorResponse) => alert(error.status + ", " + error.statusText));
  }

 private addBook(book: Book): void {
    this._booksService.addBook(book)
      .subscribe(() => { alert("Added"); },
        (error: HttpErrorResponse) => alert(error.status + ", " + error.statusText));
  }


  private deleteBookByID(bookID:number): void {
    this._booksService.deleteBook(bookID)
      .subscribe(() => { this.router.navigateByUrl(""); },
        (error: HttpErrorResponse) => alert(error.status + ", " + error.statusText));
  }

  private updateBookByID(bookID: number): void {
    this._booksService.updateBook(bookID)
      .subscribe(() => { this.router.navigateByUrl(""); },
        (error: HttpErrorResponse) => alert(error.status + ", " + error.statusText));
  }
  

  private top(): void {
    window.scrollTo(0, 0);
  }
}
