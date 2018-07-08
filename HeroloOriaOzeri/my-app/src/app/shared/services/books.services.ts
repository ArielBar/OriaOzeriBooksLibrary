import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Book } from "../model/book.model";
import { map } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { environment } from "../../../environments/environment";
import 'rxjs/add/observable/of';
import { of } from 'rxjs';


@Injectable()
export class BooksService {
    baseUrl: string = environment.apiUrl;
    errorMessage: string;
    apiEndPointUrl: string;
    books: Book[];

    constructor(private http: HttpClient) {
    }

       getAllBooks(): Observable<Book> {
        this.apiEndPointUrl = this.baseUrl;
        return this.http.get(this.apiEndPointUrl)
        .map((response:Book) => response)
    .catch((response: HttpErrorResponse) =>{ 
        console.log("Error ",response);
        return Observable.throw(response) ;});      }


        addBook(book: Book): Observable<Book[]> {
        return this.http.post(this.apiEndPointUrl, book)
            .map((response: Book[]) => response)
            .catch((response: HttpErrorResponse) => Observable.throw(response));

    }

    updateBook(bookID: number): Observable<void> {
        return this.http.put(this.apiEndPointUrl , bookID)
            .map(() => alert("Deleted"))
            .catch((response: HttpErrorResponse) => Observable.throw(response));

    }

  deleteBook(bookID: number): Observable<void> {
        return this.http.delete(this.apiEndPointUrl+ bookID)
            .map(() => alert("Deleted"))
            .catch((response: HttpErrorResponse) => Observable.throw(response));

    }



}
