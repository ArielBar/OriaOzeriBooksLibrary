(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-book/add-book.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-book/add-book.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-primary {\r\n    color: #fff;\r\n    background-color: #007b5e;\r\n    border-color: #007b5e;\r\n}\r\n"

/***/ }),

/***/ "./src/app/add-book/add-book.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-book/add-book.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-inline\">\n  <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModalCenter1\">Add new book &nbsp;\n    <i class=\"fa fa-plus\"></i>\n  </button>\n\n</ul>\n\n<div class=\"modal fade\" id=\"exampleModalCenter1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Add new book</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <form novalidate [formGroup]=\"addBookForm\" (ngSubmit)=\"addBook()\">\n          <div class=\"form-group\">\n            <label for=\"nae\">Author Name:</label>\n            <input type=\"text\" formControlName=\"bookName\" class=\"form-control\" id=\"name\">\n            <herolo-error [controlToValidate]=\"addBookForm.controls['bookName']\"></herolo-error>\n\n          </div>\n          <div class=\"form-group\">\n            <label for=\"title\">Title:</label>\n            <input type=\"text\" formControlName=\"bookTitle\" class=\"form-control\" id=\"title\">\n            <herolo-error [controlToValidate]=\"addBookForm.controls['bookTitle']\"></herolo-error>\n\n          </div>\n          <div class=\"form-group\">\n            <label for=\"description\">Description:</label>\n            <input type=\"text\" formControlName=\"bookDescription\" class=\"form-control\" id=\"description\">\n            <herolo-error [controlToValidate]=\"addBookForm.controls['bookDescription']\"></herolo-error>\n\n          </div>\n          <div class=\"form-group\">\n            <label for=\"date\">Published Date:</label>\n            <input type=\"date\" formControlName=\"bookPublishedDate\" class=\"form-control\" id=\"date\">\n            <herolo-error [controlToValidate]=\"addBookForm.controls['bookPublishedDate']\"></herolo-error>\n\n          </div>\n        </form>\n\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" [disabled]=\"!addBookForm.valid\" data-dismiss=\"modal\" class=\"btn btn-primary\" (click)=\"addBook()\">Add book</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/add-book/add-book.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-book/add-book.component.ts ***!
  \************************************************/
/*! exports provided: AddBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_model_book_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/model/book.model */ "./src/app/shared/model/book.model.ts");
/* harmony import */ var _shared_services_books_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/books.services */ "./src/app/shared/services/books.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddBookComponent = /** @class */ (function () {
    function AddBookComponent(formBuilder, booksService) {
        this.formBuilder = formBuilder;
        this.booksService = booksService;
        this.boolReCaptcha = false;
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AddBookComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    AddBookComponent.prototype.createForm = function () {
        this.addBookForm = this.formBuilder.group({
            bookTitle: ["", _shared_model_book_model__WEBPACK_IMPORTED_MODULE_2__["Book"].textValidators],
            bookName: ["", _shared_model_book_model__WEBPACK_IMPORTED_MODULE_2__["Book"].textValidators],
            bookPublishedDate: ["", _shared_model_book_model__WEBPACK_IMPORTED_MODULE_2__["Book"].dateValidators],
            bookDescription: ["", _shared_model_book_model__WEBPACK_IMPORTED_MODULE_2__["Book"].descriptionValidators]
        });
    };
    AddBookComponent.prototype.addBook = function () {
        var BookID = Math.floor(Math.random() * 100) + 1;
        var booktitle = this.addBookForm.get("bookTitle").value;
        var bookName = this.addBookForm.get("bookName").value;
        var description = this.addBookForm.get("bookDescription").value;
        var datePublish = this.addBookForm.get("bookPublishedDate").value;
        var newBook = new _shared_model_book_model__WEBPACK_IMPORTED_MODULE_2__["Book"](BookID, booktitle, bookName, description, datePublish);
        this.emitter.emit(newBook);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddBookComponent.prototype, "emitter", void 0);
    AddBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'herolo-add-book',
            template: __webpack_require__(/*! ./add-book.component.html */ "./src/app/add-book/add-book.component.html"),
            styles: [__webpack_require__(/*! ./add-book.component.css */ "./src/app/add-book/add-book.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_services_books_services__WEBPACK_IMPORTED_MODULE_3__["BooksService"]])
    ], AddBookComponent);
    return AddBookComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<herolo-header></herolo-header>\n<router-outlet></router-outlet>\n<herolo-footer></herolo-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'herolo-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-book/add-book.component */ "./src/app/add-book/add-book.component.ts");
/* harmony import */ var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./book-details/book-details.component */ "./src/app/book-details/book-details.component.ts");
/* harmony import */ var _shared_services_books_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services/books.services */ "./src/app/shared/services/books.services.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/Rx */ "../../node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_error_error_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/error/error.component */ "./src/app/shared/error/error.component.ts");
/* harmony import */ var _shared_capitalize_only_letters_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/capitalize-only-letters.pipe */ "./src/app/shared/capitalize-only-letters.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AppModule = /** @class */ (function () {
    function AppModule(_booksService) {
        //_booksService.loadBooks();
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
                _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_9__["AddBookComponent"],
                _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_10__["BookDetailsComponent"],
                _shared_error_error_component__WEBPACK_IMPORTED_MODULE_15__["ErrorComponent"],
                _shared_capitalize_only_letters_pipe__WEBPACK_IMPORTED_MODULE_16__["CapitalizeOnlyLettersPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]
            ],
            providers: [_shared_services_books_services__WEBPACK_IMPORTED_MODULE_11__["BooksService"], _shared_capitalize_only_letters_pipe__WEBPACK_IMPORTED_MODULE_16__["CapitalizeOnlyLettersPipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_shared_services_books_services__WEBPACK_IMPORTED_MODULE_11__["BooksService"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: "home", component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"] },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];
var appRouter = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [appRouter]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/book-details/book-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/book-details/book-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n#team {\r\n    background: #eee !important;\r\n}\r\na i {\r\n    color: #eee;\r\n}\r\n.btn-primary:hover,\r\n.btn-primary:focus {\r\n    background-color: #108d6f;\r\n    border-color: #108d6f;\r\n    box-shadow: none;\r\n    outline: none;\r\n}\r\n.btn-primary {\r\n    color: #fff;\r\n    background-color: #007b5e;\r\n    border-color: #007b5e;\r\n}\r\nsection {\r\n    padding: 60px 0;\r\n}\r\nsection .section-title {\r\n    text-align: center;\r\n    color: #007b5e;\r\n    margin-bottom: 50px;\r\n    text-transform: uppercase;\r\n}\r\n#team .card {\r\n    border: none;\r\n    background: #ffffff;\r\n}\r\n.image-flip:hover .backside,\r\n.image-flip.hover .backside {\r\n    -webkit-transform: rotateY(0deg);\r\n    transform: rotateY(0deg);\r\n    border-radius: .25rem;\r\n}\r\n.image-flip:hover .frontside,\r\n.image-flip.hover .frontside {\r\n    -webkit-transform: rotateY(180deg);\r\n    transform: rotateY(180deg);\r\n}\r\n.mainflip {\r\n    -webkit-transition: 1s;\r\n    -webkit-transform-style: preserve-3d;\r\n    -ms-transition: 1s;\r\n    -moz-transition: 1s;\r\n    -moz-transform: perspective(1000px);\r\n    -moz-transform-style: preserve-3d;\r\n    -ms-transform-style: preserve-3d;\r\n    transition: 1s;\r\n    -webkit-transform-style: preserve-3card-titled;\r\n            transform-style: preserve-3card-titled;\r\n    position: relative;\r\n}\r\n.frontside {\r\n    position: relative;\r\n    -webkit-transform: rotateY(0deg);\r\n    -ms-transform: rotateY(0deg);\r\n    z-index: 2;\r\n    margin-bottom: 30px;\r\n}\r\n.backside {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background: white;\r\n    -webkit-transform: rotateY(-180deg);\r\n    transform: rotateY(-180deg);\r\n    box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);\r\n}\r\n.frontside,\r\n.backside {\r\n    border-radius: 15px !important;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -webkit-transition: 1s;\r\n    -webkit-transform-style: preserve-3d;\r\n    -moz-transition: 1s;\r\n    -moz-transform-style: preserve-3d;\r\n    -o-transition: 1s;\r\n    -o-transform-style: preserve-3d;\r\n    -ms-transition: 1s;\r\n    -ms-transform-style: preserve-3d;\r\n    transition: 1s;\r\n    transform-style: preserve-3d;\r\n}\r\n.frontside .card,\r\n.backside .card {\r\n    min-height: 312px;\r\n    border-radius: 15px !important;\r\n\r\n}\r\n.backside .card a {\r\n    font-size: 16px;\r\n    color: #007b5e !important;\r\n}\r\n.frontside .card .card-title,\r\n.backside .card .card-title {\r\n    color: #007b5e !important;\r\n}\r\n.frontside .card .card-body img {\r\n    width: 120px;\r\n    height: 120px;\r\n    border-radius: 50%;\r\n}"

/***/ }),

/***/ "./src/app/book-details/book-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/book-details/book-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover'); \">\n  <div class=\"mainflip\">\n    <div class=\"frontside\">\n      <div class=\"card\">\n\n        <div class=\"card-body text-center\">\n          <h1 class=\"card-title\"></h1>\n          <h4 class=\"card-title\">{{book.book_title | capitalizeOnlyLetters}}</h4>\n          <h5 class=\"card-title\">{{book.author_name }}</h5>\n          <p class=\"card-text\">{{book.published_date}}</p>\n          <br>\n          <a class=\"btn btn-primary btn-md\">\n            <i class=\"fa fa-plus\"></i>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"backside\">\n      <div class=\"card\">\n        <div class=\"card-body text-center mt-4\">\n          <h4 class=\"card-title\">Description</h4>\n          <p class=\"card-text\">{{book.description}}</p>\n\n          <ul class=\"list-inline\">\n            <button class=\"btn btn-primary\" [attr.data-target]=\"'#editModalCenter' + book.id\" data-toggle=\"modal\">Edit\n              <i class=\"fa fa-edit\"></i>\n            </button>\n            <br>\n            <br>\n            <button class=\"btn btn-primary\" [attr.data-target]=\"'#ModalDelete' + book.id\" data-toggle=\"modal\">Delete\n              <i class=\"fa fa-trash\"></i>\n            </button>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal fade\" [attr.id]=\"'editModalCenter' + book.id\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h3>Edit Book </h3>\n\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n\n      <div class=\"modal-body\">\n        <form novalidate [formGroup]=\"editBookForm\">\n\n          <label>Book Title</label>\n          <input type=\"text\" formControlName=\"bookTitle\" name=\"book_title\" class=\"form-control\" [(ngModel)]=\"book.book_title\">\n          <herolo-error [controlToValidate]=\"editBookForm.controls['bookTitle']\"></herolo-error>\n\n          <label>Author Name</label>\n          <input type=\"text\" formControlName=\"bookAutorName\" [(ngModel)]=\"book.author_name\" class=\"form-control\" value={{book.author_name}}>\n          <herolo-error [controlToValidate]=\"editBookForm.controls['bookAutorName']\"></herolo-error>\n\n          <label>Publish Date</label>\n          <input type=\"date\" class=\"form-control\" formControlName=\"bookPublishedDate\" [(ngModel)]=\"book.published_date\" value={{book.published_date}}>\n          <herolo-error [controlToValidate]=\"editBookForm.controls['bookPublishedDate']\"></herolo-error>\n\n\n          <label>Description</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"bookDescription\" [(ngModel)]=\"book.description\" value={{book.description}}>\n          <herolo-error [controlToValidate]=\"editBookForm.controls['bookDescription']\"></herolo-error>\n\n        </form>\n      </div>\n\n      <div class=\"modal-footer\">\n\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" [disabled]=\"!editBookForm.valid\" data-dismiss=\"modal\" class=\"btn btn-primary\" (click)=\"updateBook() \">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal fade\" [attr.id]=\"'ModalDelete' + book.id\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5>{{book.book_title}}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <p>Do you want to delete {{book.author_name}} ?</p>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=deleteBook(book.id)>Yes</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/book-details/book-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/book-details/book-details.component.ts ***!
  \********************************************************/
/*! exports provided: BookDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsComponent", function() { return BookDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_model_book_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/model/book.model */ "./src/app/shared/model/book.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_books_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/books.services */ "./src/app/shared/services/books.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookDetailsComponent = /** @class */ (function () {
    function BookDetailsComponent(formBuilder, _booksService) {
        this.formBuilder = formBuilder;
        this._booksService = _booksService;
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isShowModal = true;
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    BookDetailsComponent.prototype.createForm = function () {
        this.editBookForm = this.formBuilder.group({
            bookTitle: ["", _shared_model_book_model__WEBPACK_IMPORTED_MODULE_1__["Book"].textValidators],
            bookAutorName: ["", _shared_model_book_model__WEBPACK_IMPORTED_MODULE_1__["Book"].textValidators],
            bookPublishedDate: ["", _shared_model_book_model__WEBPACK_IMPORTED_MODULE_1__["Book"].dateValidators],
            bookDescription: ["", _shared_model_book_model__WEBPACK_IMPORTED_MODULE_1__["Book"].descriptionValidators]
        });
    };
    BookDetailsComponent.prototype.updateBook = function () {
        this._booksService.updateBook(this.book.id)
            .subscribe(function () { alert("Updated"); }, function (error) { return alert(error.status + ", " + error.statusText); });
    };
    BookDetailsComponent.prototype.deleteBook = function (bookID) {
        this.bookID = bookID;
        this.emitter.emit(this.bookID);
        console.log(bookID);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_model_book_model__WEBPACK_IMPORTED_MODULE_1__["Book"])
    ], BookDetailsComponent.prototype, "book", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BookDetailsComponent.prototype, "emitter", void 0);
    BookDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'herolo-book-details',
            template: __webpack_require__(/*! ./book-details.component.html */ "./src/app/book-details/book-details.component.html"),
            styles: [__webpack_require__(/*! ./book-details.component.css */ "./src/app/book-details/book-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_services_books_services__WEBPACK_IMPORTED_MODULE_3__["BooksService"]])
    ], BookDetailsComponent);
    return BookDetailsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n    color: #007b5e;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer font-small blue \">\n\n  <div class=\"container-fluid text-center text-md-left\">\n\n    <hr class=\"clearfix w-100 d-md-none \">\n\n  </div>\n\n  <div class=\"footer-copyright text-center py-3\">{{copyrights}} &copy; {{currentYear}}\n    <a href=\"#\"> National Library </a>\n\n    <ul class=\"list-inline\">\n      <li class=\"list-inline-item\">\n        <a class=\"social-icon text-xs-center\" target=\"_blank\" href=\"https://www.facebook.com\">\n          <i class=\"fa fa-facebook\"></i>\n        </a>\n      </li>\n      \n      <li class=\"list-inline-item\">\n        <a class=\"social-icon text-xs-center\" target=\"_blank\" href=\"https://twitter.com\">\n          <i class=\"fa fa-twitter\"></i>\n        </a>\n      </li>\n      <li class=\"list-inline-item\">\n        <a class=\"social-icon text-xs-center\" target=\"_blank\" href=\"https://www.skype.com/en/\">\n          <i class=\"fa fa-instagram\"></i>\n        </a>\n      </li>\n\n      <li class=\"list-inline-item\">\n        <a class=\"social-icon text-xs-center\" target=\"_blank\" href=\"https://www.google.com/\">\n          <i class=\"fa fa-google\"></i>\n        </a>\n      </li>\n\n    </ul>\n  </div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.copyrights = "All Rights Reserved";
        this.currentYear = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'herolo-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    background-color: #eee;\r\n    color: #007b5e;\r\n}\r\n\r\n\r\n#custom-search-input{\r\n    padding: 3px;\r\n    border: solid 1px #E4E4E4;\r\n    border-radius: 6px;\r\n    background-color: #fff;\r\n}\r\n\r\n\r\n#custom-search-input input{\r\n    border: 0;\r\n    box-shadow: none;\r\n}\r\n\r\n\r\n#custom-search-input button{\r\n    margin: 2px 0 0 0;\r\n    background: none;\r\n    box-shadow: none;\r\n    border: 0;\r\n    color: #666666;\r\n    padding: 0 8px 0 10px;\r\n    border-left: solid 1px #ccc;\r\n}\r\n\r\n\r\n#custom-search-input button:hover{\r\n    border: 0;\r\n    box-shadow: none;\r\n    border-left: solid 1px #ccc;\r\n}\r\n\r\n\r\n#custom-search-input .glyphicon-search{\r\n    font-size: 23px;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h1> {{ headerTitle | capitalizeOnlyLetters }}\n            <i class=\"fa fa-book\"></i>\n        </h1>\n        <p>Home to the intellectual and cultural treasures of Israel and the Jewish people, the National Library of Israel (NLI)\n            has recently embarked on a visionary journey of renewal. In addition to the construction of a state-of-the-art\n            complex in the heart of Jerusalem, the renewal process incorporates a wide range of initiatives to preserve and\n            make these treasures available to diverse audiences in Israel and across the globe.\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.headerTitle = "national #$%^&!@#$%^&library@@@";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'herolo-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n/* FontAwesome for working BootSnippet :> */\n#team {\r\n    background: #eee !important;\r\n}\n.btn-primary:hover,\r\n.btn-primary:focus {\r\n    background-color: #108d6f;\r\n    border-color: #108d6f;\r\n    box-shadow: none;\r\n    outline: none;\r\n}\n.btn-primary {\r\n    color: #fff;\r\n    background-color: #007b5e;\r\n    border-color: #007b5e;\r\n}\nsection {\r\n    padding: 60px 0;\r\n}\nrow{\r\n    display: flex!important;\r\n}\nsection .section-title {\r\n    text-align: center;\r\n    color: #007b5e;\r\n    margin-bottom: 50px;\r\n    text-transform: uppercase;\r\n}\n/* FontAwesome for working BootSnippet :> */\n#team {\r\n    background: #eee !important;\r\n}\n.btn-primary:hover,\r\n.btn-primary:focus {\r\n    background-color: #108d6f;\r\n    border-color: #108d6f;\r\n    box-shadow: none;\r\n    outline: none;\r\n}\n.btn-primary {\r\n    color: #fff;\r\n    background-color: #007b5e;\r\n    border-color: #007b5e;\r\n}\nsection {\r\n    padding: 60px 0;\r\n}\nrow{\r\n    display: flex!important;\r\n}\nsection .section-title {\r\n    text-align: center;\r\n    color: #007b5e;\r\n    margin-bottom: 50px;\r\n    text-transform: uppercase;\r\n}\n.back-to-top{\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    color: #fff;\r\n    background: #7f8c8d;\r\n    height: 50px;\r\n    width: 50px;\r\n    display: inline-block;\r\n    text-align: center;\r\n    line-height: 60px;\r\n    font-size: 30px;\r\n    font-family: Times New Roman;\r\n    position: fixed;;\r\n    bottom: 3%;\r\n    right: 1%;\r\n    cursor: pointer;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"team\" class=\"pb-5\">\n  <div class=\"container\">\n    <h5 class=\"section-title h1\">OUR BOOKS</h5>\n    <herolo-add-book (emitter)=\"addBook($event)\"> </herolo-add-book>\n\n    <div class=\"row\">\n      <div *ngFor=\"let b of books\" class=\"col-xs-12 col-sm-6 col-md-4\">\n        <b class=\"title\"></b>\n        <herolo-book-details [book]=\"b\" (emitter)=\"deleteBookByID($event)\"> </herolo-book-details>\n      </div>\n    </div>\n\n    <a class=\"back-to-top\" (click)=\"top()\">^</a>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_books_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/books.services */ "./src/app/shared/services/books.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../book-details/book-details.component */ "./src/app/book-details/book-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(_booksService, router) {
        this._booksService = _booksService;
        this.router = router;
    }
    HomePageComponent.prototype.ngOnInit = function () { this.getBooks(); };
    HomePageComponent.prototype.getBooks = function () {
        var _this = this;
        this._booksService.getAllBooks()
            .subscribe(function (books) {
            _this.books = books;
        }, function (error) { return alert(error.status + ", " + error.statusText); });
    };
    HomePageComponent.prototype.addBook = function (book) {
        this._booksService.addBook(book)
            .subscribe(function () { alert("Added"); }, function (error) { return alert(error.status + ", " + error.statusText); });
    };
    HomePageComponent.prototype.deleteBookByID = function (bookID) {
        var _this = this;
        this._booksService.deleteBook(bookID)
            .subscribe(function () { _this.router.navigateByUrl(""); }, function (error) { return alert(error.status + ", " + error.statusText); });
    };
    HomePageComponent.prototype.updateBookByID = function (bookID) {
        var _this = this;
        this._booksService.updateBook(bookID)
            .subscribe(function () { _this.router.navigateByUrl(""); }, function (error) { return alert(error.status + ", " + error.statusText); });
    };
    HomePageComponent.prototype.top = function () {
        window.scrollTo(0, 0);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_3__["BookDetailsComponent"]),
        __metadata("design:type", _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_3__["BookDetailsComponent"])
    ], HomePageComponent.prototype, "child", void 0);
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'herolo-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_books_services__WEBPACK_IMPORTED_MODULE_1__["BooksService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    /* background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg==); */\r\n}\r\n\r\n.error-template {\r\n    padding: 40px 15px;\r\n    text-align: center;\r\n}\r\n\r\n.error-actions {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.error-actions .btn {\r\n    margin-right: 10px;\r\n}"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"error-template\">\n                <h1>\n                    Oops!</h1>\n                <h2>\n                    404 Not Found</h2>\n                <div class=\"error-details\">\n                    Sorry, an error has occured, Requested page not found!\n                </div>\n                <div class=\"error-actions\">\n                    <a href=\"\" class=\"btn btn-primary btn-lg\">\n                        <span class=\"glyphicon glyphicon-home\"></span>\n                        Take Me Home </a>\n                    <a href=\"/home\" class=\"btn btn-default btn-lg\">\n                        <span class=\"glyphicon glyphicon-envelope\"></span> Contact Support </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'herolo-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/capitalize-only-letters.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/capitalize-only-letters.pipe.ts ***!
  \********************************************************/
/*! exports provided: CapitalizeOnlyLettersPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizeOnlyLettersPipe", function() { return CapitalizeOnlyLettersPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizeOnlyLettersPipe = /** @class */ (function () {
    function CapitalizeOnlyLettersPipe() {
    }
    CapitalizeOnlyLettersPipe.prototype.transform = function (value) {
        if (value) {
            this.newValue = value.replace(/[^a-zA-Z ]/g, "");
            console.log(this.newValue);
            return this.newValue.split(' ').map(function (s) { return s != ' ' ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : s; }).join(' ');
        }
        return value;
    };
    CapitalizeOnlyLettersPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'capitalizeOnlyLetters'
        })
    ], CapitalizeOnlyLettersPipe);
    return CapitalizeOnlyLettersPipe;
}());



/***/ }),

/***/ "./src/app/shared/error/error.component.css":
/*!**************************************************!*\
  !*** ./src/app/shared/error/error.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{\r\n    color: red;\r\n    background-color: white;\r\n    text-align: left;\r\n    border-radius: 10px;\r\n    font-size: smaller;\r\n\r\n}"

/***/ }),

/***/ "./src/app/shared/error/error.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/error/error.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n    <li *ngFor=\"let err of errors\">{{err}}</li>\n</ul>"

/***/ }),

/***/ "./src/app/shared/error/error.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/error/error.component.ts ***!
  \*************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    // HTML-ארוע שיתבצע בכל שינוי בתבנית ה
    ErrorComponent.prototype.ngAfterContentChecked = function () {
        this.errors = new Array(); // ניקוי הודעות קודמות
        if (this.controlToValidate.touched) {
            for (var key in this.controlToValidate.errors) {
                this.errors.push(this.controlToValidate.errors[key]);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"])
    ], ErrorComponent.prototype, "controlToValidate", void 0);
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'herolo-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/shared/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/shared/error/error.component.css")]
        })
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/shared/model/book.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/model/book.model.ts ***!
  \********************************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
/* harmony import */ var _val__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../val */ "./src/app/shared/val.ts");

var Book = /** @class */ (function () {
    function Book(id, author_name, book_title, description, published_date) {
        this.id = id;
        this.author_name = author_name;
        this.book_title = book_title;
        this.description = description;
        this.published_date = published_date;
    }
    Object.defineProperty(Book, "textValidators", {
        get: function () {
            return [_val__WEBPACK_IMPORTED_MODULE_0__["Val"].required(), _val__WEBPACK_IMPORTED_MODULE_0__["Val"].minLength(5), _val__WEBPACK_IMPORTED_MODULE_0__["Val"].maxLength(35)]; // Default Messages.
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Book, "descriptionValidators", {
        get: function () {
            return [_val__WEBPACK_IMPORTED_MODULE_0__["Val"].minLength(15)];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Book, "dateValidators", {
        get: function () {
            return [_val__WEBPACK_IMPORTED_MODULE_0__["Val"].required(), _val__WEBPACK_IMPORTED_MODULE_0__["Val"].dateValidation()];
        },
        enumerable: true,
        configurable: true
    });
    return Book;
}());



/***/ }),

/***/ "./src/app/shared/services/books.services.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/books.services.ts ***!
  \***************************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "../../node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/of */ "../../node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "../../node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BooksService = /** @class */ (function () {
    function BooksService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
    }
    BooksService.prototype.getAllBooks = function () {
        this.apiEndPointUrl = this.baseUrl;
        return this.http.get(this.apiEndPointUrl)
            .map(function (response) { return response; })
            .catch(function (response) {
            console.log("Error ", response);
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(response);
        });
    };
    BooksService.prototype.addBook = function (book) {
        return this.http.post(this.apiEndPointUrl, book)
            .map(function (response) { return response; })
            .catch(function (response) { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(response); });
    };
    BooksService.prototype.updateBook = function (bookID) {
        return this.http.put(this.apiEndPointUrl, bookID)
            .map(function () { return alert("Deleted"); })
            .catch(function (response) { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(response); });
    };
    BooksService.prototype.deleteBook = function (bookID) {
        return this.http.delete(this.apiEndPointUrl + bookID)
            .map(function () { return alert("Deleted"); })
            .catch(function (response) { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(response); });
    };
    BooksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BooksService);
    return BooksService;
}());



/***/ }),

/***/ "./src/app/shared/val.ts":
/*!*******************************!*\
  !*** ./src/app/shared/val.ts ***!
  \*******************************/
/*! exports provided: Val */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Val", function() { return Val; });
var Val = /** @class */ (function () {
    function Val() {
    }
    Val.required = function (errorMessage) {
        if (errorMessage === void 0) { errorMessage = "This field is required."; }
        return function (formControl) {
            return formControl.value === null || formControl.value === "" ? (_a = {}, _a[Val.key] = errorMessage, _a) : null;
            var _a;
        };
    };
    Val.minLength = function (length, errorMessage) {
        if (errorMessage === void 0) { errorMessage = "Length can't be shorter than " + length + " chars."; }
        return function (formControl) {
            return formControl.value.length < length ? (_a = {}, _a[Val.key] = errorMessage, _a) : null;
            var _a;
        };
    };
    Val.maxLength = function (length, errorMessage) {
        if (errorMessage === void 0) { errorMessage = "Length can't be longer than " + length + " chars."; }
        return function (formControl) {
            return formControl.value.length > length ? (_a = {}, _a[Val.key] = errorMessage, _a) : null;
            var _a;
        };
    };
    Val.nonNegative = function (errorMessage) {
        if (errorMessage === void 0) { errorMessage = "This field can't be negative or 0"; }
        return function (formControl) {
            return +formControl.value < 0 ? (_a = {}, _a[Val.key] = errorMessage, _a) : null;
            var _a;
        };
    };
    Val.letters = function (errorMessage) {
        if (errorMessage === void 0) { errorMessage = "This field has to be only letters"; }
        return function (formControl) {
            return formControl.value == "[a-zA-Z ]*" ? (_a = {}, _a[Val.key] = errorMessage, _a) : null;
            var _a;
        };
    };
    Val.dateValidation = function (errorMessage) {
        if (errorMessage === void 0) { errorMessage = "Invalid Date"; }
        return function (formControl) {
            return formControl.value == "/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/g" ? (_a = {}, _a[Val.key] = errorMessage, _a) : null;
            var _a;
        };
    };
    Object.defineProperty(Val, "key", {
        get: function () {
            return "error_" + Val._key++;
        },
        enumerable: true,
        configurable: true
    });
    Val._key = 0;
    return Val;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    test: false,
    apiUrl: "http://api.jsonbin.io/b/5b337ebfac18a776c6839d30/5//"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\HeroloOriaOzeri\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map