(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["photo-photo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/photo/photo.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/photo/photo.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Photography</ion-title>\n    <ion-button slot=\"end\" fill=\"clear\" class=\"ion-padding-end\" color=\"dark\" href=\"https://www.instagram.com/highmani420/\">\n      <ion-icon name=\"logo-instagram\" ></ion-icon></ion-button>\n    <ion-button slot=\"end\" fill=\"clear\" class=\"ion-padding-end\" color=\"dark\" href=\"https://www.facebook.com/himani.baskaran.9\">\n        <ion-icon name=\"logo-facebook\" ></ion-icon></ion-button>\n    <ion-button slot=\"end\" fill=\"clear\" class=\"ion-padding-end\" color=\"dark\" href=\"https://in.linkedin.com/in/himani-baskaran-b7a7b6165\">\n          <ion-icon name=\"logo-linkedin\" ></ion-icon></ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br>\n  \n  <ion-grid>\n    <ion-row>\n\n      <ion-col size=\"100%\" *ngFor=\"let p of photos\">\n        <ion-card>\n          <img [src]=\"p.imgUrl\"/>\n            <ion-card-header>\n              <ion-card-title>{{p.name}}</ion-card-title>\n              <ion-card-subtitle>{{p.desc}}</ion-card-subtitle>\n            </ion-card-header>\n         \n        \n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n  <br><br>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/photo/photo-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/photo/photo-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PhotoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoPageRoutingModule", function() { return PhotoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _photo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo.page */ "./src/app/photo/photo.page.ts");




const routes = [
    {
        path: '',
        component: _photo_page__WEBPACK_IMPORTED_MODULE_3__["PhotoPage"]
    }
];
let PhotoPageRoutingModule = class PhotoPageRoutingModule {
};
PhotoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PhotoPageRoutingModule);



/***/ }),

/***/ "./src/app/photo/photo.module.ts":
/*!***************************************!*\
  !*** ./src/app/photo/photo.module.ts ***!
  \***************************************/
/*! exports provided: PhotoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoPageModule", function() { return PhotoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _photo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photo-routing.module */ "./src/app/photo/photo-routing.module.ts");
/* harmony import */ var _photo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./photo.page */ "./src/app/photo/photo.page.ts");







let PhotoPageModule = class PhotoPageModule {
};
PhotoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _photo_routing_module__WEBPACK_IMPORTED_MODULE_5__["PhotoPageRoutingModule"]
        ],
        declarations: [_photo_page__WEBPACK_IMPORTED_MODULE_6__["PhotoPage"]]
    })
], PhotoPageModule);



/***/ }),

/***/ "./src/app/photo/photo.page.scss":
/*!***************************************!*\
  !*** ./src/app/photo/photo.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvL3Bob3RvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/photo/photo.page.ts":
/*!*************************************!*\
  !*** ./src/app/photo/photo.page.ts ***!
  \*************************************/
/*! exports provided: PhotoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoPage", function() { return PhotoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PhotoPage = class PhotoPage {
    constructor() {
        this.photos = [];
    }
    ngOnInit() {
        this.photos = [
            { name: 'Serenity', desc: 'My first visit to Mangalore beaches', imgUrl: '/assets/Pics/1.jpg', },
            { name: 'Dear one', desc: 'One of the many wonders in Campus', imgUrl: '/assets/Pics/2.jpg' },
            { name: 'Dear departed', desc: 'A scene at the Egmore railway station', imgUrl: '/assets/Pics/3.jpg' },
            { name: 'Fallen', desc: 'Simple yet beautiful', imgUrl: '/assets/Pics/4.jpg' },
            { name: 'Silhouette', desc: 'A macaque looking so ethereal', imgUrl: '/assets/Pics/5.jpg' },
            { name: '', desc: '', imgUrl: '/assets/Pics/10.jpeg' },
            { name: '', desc: '', imgUrl: '/assets/Pics/11.jpg' },
            { name: '', desc: '', imgUrl: '/assets/Pics/12.jpeg' },
            { name: '', desc: '', imgUrl: '/assets/Pics/13.jpg' },
            { name: '', desc: '', imgUrl: '/assets/Pics/14.jpg' },
            { name: '', desc: '', imgUrl: '/assets/Pics/15.jpg' },
            { name: '', desc: '', imgUrl: '/assets/Pics/16.jpg' },
            { name: '', desc: '', imgUrl: '/assets/Pics/17.jpg' },
            { name: '', desc: '', imgUrl: '/assets/Pics/18.jpg' },
            { name: '', desc: '', imgUrl: '/assets/Pics/19.jpg' },
            { name: '', desc: '', imgUrl: '/assets/Pics/20.jpg' },
            { name: '', desc: '', imgUrl: '/assets/Pics/21.jpg' },
            { name: '', desc: '', imgUrl: '/assets/Pics/22.jpg' },
            { name: '', desc: '', imgUrl: '/assets/Pics/23.jpg' },
            { name: '', desc: '', imgUrl: '/assets/Pics/24.jpg' },
            { name: '', desc: '', imgUrl: '/assets/Pics/25.jpg' }
        ];
    }
};
PhotoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-photo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./photo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/photo/photo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./photo.page.scss */ "./src/app/photo/photo.page.scss")).default]
    })
], PhotoPage);



/***/ })

}]);
//# sourceMappingURL=photo-photo-module-es2015.js.map