import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing.module";
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksService } from './shared/services/books.services';
import 'rxjs/Rx';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './shared/error/error.component';
import { CapitalizeOnlyLettersPipe } from './shared/capitalize-only-letters.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    PageNotFoundComponent,
    AddBookComponent,
    BookDetailsComponent,
    ErrorComponent,
    CapitalizeOnlyLettersPipe,
  ],

  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BooksService ,CapitalizeOnlyLettersPipe]   
  ,
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(_booksService: BooksService) {
    //_booksService.loadBooks();
  }
}
