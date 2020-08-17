function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlogBlogPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Blog</ion-title>\n \n    <ion-button slot=\"end\" fill=\"clear\" class=\"ion-padding-end\" color=\"dark\" href=\"https://www.instagram.com/highmani420/\">\n      <ion-icon name=\"logo-instagram\" ></ion-icon></ion-button>\n    <ion-button slot=\"end\" fill=\"clear\" class=\"ion-padding-end\" color=\"dark\" href=\"https://www.facebook.com/himani.baskaran.9\">\n        <ion-icon name=\"logo-facebook\" ></ion-icon></ion-button>\n    <ion-button slot=\"end\" fill=\"clear\" class=\"ion-padding-end\" color=\"dark\" href=\"https://in.linkedin.com/in/himani-baskaran-b7a7b6165\">\n          <ion-icon name=\"logo-linkedin\" ></ion-icon></ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br>\n  \n  <ion-grid>\n    <ion-row>\n\n      <ion-col size=\"100%\" *ngFor=\"let w of writings\">\n        <ion-card>\n           \n            <ion-card-header>\n              <ion-card-title>{{w.name}}</ion-card-title>\n              <ion-card-subtitle>{{w.desc}}</ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content>{{w.para}}</ion-card-content>\n        \n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n  <br><br>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/blog/blog-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/blog/blog-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: BlogPageRoutingModule */

  /***/
  function srcAppBlogBlogRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogPageRoutingModule", function () {
      return BlogPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _blog_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blog.page */
    "./src/app/blog/blog.page.ts");

    var routes = [{
      path: '',
      component: _blog_page__WEBPACK_IMPORTED_MODULE_3__["BlogPage"]
    }];

    var BlogPageRoutingModule = function BlogPageRoutingModule() {
      _classCallCheck(this, BlogPageRoutingModule);
    };

    BlogPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BlogPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/blog/blog.module.ts":
  /*!*************************************!*\
    !*** ./src/app/blog/blog.module.ts ***!
    \*************************************/

  /*! exports provided: BlogPageModule */

  /***/
  function srcAppBlogBlogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogPageModule", function () {
      return BlogPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _blog_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./blog-routing.module */
    "./src/app/blog/blog-routing.module.ts");
    /* harmony import */


    var _blog_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./blog.page */
    "./src/app/blog/blog.page.ts");

    var BlogPageModule = function BlogPageModule() {
      _classCallCheck(this, BlogPageModule);
    };

    BlogPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_5__["BlogPageRoutingModule"]],
      declarations: [_blog_page__WEBPACK_IMPORTED_MODULE_6__["BlogPage"]]
    })], BlogPageModule);
    /***/
  },

  /***/
  "./src/app/blog/blog.page.scss":
  /*!*************************************!*\
    !*** ./src/app/blog/blog.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlogBlogPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/blog/blog.page.ts":
  /*!***********************************!*\
    !*** ./src/app/blog/blog.page.ts ***!
    \***********************************/

  /*! exports provided: BlogPage */

  /***/
  function srcAppBlogBlogPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogPage", function () {
      return BlogPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BlogPage = /*#__PURE__*/function () {
      function BlogPage() {
        _classCallCheck(this, BlogPage);

        this.writings = [];
      }

      _createClass(BlogPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.writings = [{
            name: 'Silent Night',
            desc: 'Not so alone',
            para: 'Standing outside under the moonlight with phone in hand, trying to write about the cloudy night. A peacock far away making its voice known to everybody awake. Crickets, grasshoppers and other insects whose names unknown weaving it\'s melody. The gentle breeze which makes goosebumps rise and the trees dance and rejoice. The sound of a door being shut in your neighborhood as four girls go walking and talking with a small kid dancing to the song being sung, disrupting the silence. A bird which lost its way or turning home late, flying above in the sky with the moon playing peek-a-boo, hiding behind the dense clouds, refusing to show its true brilliance. Words don\'t do justice to the peaceful feeling of this night as I lay in wait for my brother to arrive.'
          }, {
            name: 'Life',
            desc: 'As we know it',
            para: 'Have you ever wondered about the meaning of your life. Well if you said you have never thought about it, then you are lying. Life. It is indeed a wonderful thing. While trying to give meaning to the life you live is what everybody does, I think sometimes it\'s alright to go with the flow cause not all these questions may have answers. Life is still an enigma to each and everyone of us and we are still exploring it, in this moment. Sometimes, no,  many a times we feel like we are lost in this endless universe and feel like its not worth living ,that you are not worthy of your life. It\'s alright to feel a little lost sometimes but what you have to remember is that you should also come out of it. Cause life being an enigma and all, how can you figure your worth if you don\'t even know the meaning of life. If you think you are worthless, do something which makes you realize that you are worth it. If you feel unhappy,  do something or just think about something which makes you happy, well, unless you are a sadist or a serial killer or even a masochist. Just remember that everyone goes through these stages in life and you\'ll realize that when others can go through ,why can\'t you. And of course we humans are not so selfish as we seem to be cause we sure as well will be happy after we know that others also went through the same thing. So chin up and brace yourselves for the longest thing you\'ll ever experience...... LIFE'
          }, {
            name: 'Spark',
            desc: 'Where art thou',
            para: 'What is the purpose? What am I doing here? I can\'t say I\'m too happy nor too sad. It\'s just that feel empty. I\'m perfectly happy with my few friends and my slightly messed up family. But where is the spark? The spark which I used to have when I was young? Where do they go, disappear into thin air as soon as you turn seventeen? Or are they buried deep down so much that you can\'t extract it? I like to think that is buried, to have hope that maybe one day just one day I\'d get a glimpse of it and feel it one more time.'
          }];
        }
      }]);

      return BlogPage;
    }();

    BlogPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./blog.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./blog.page.scss */
      "./src/app/blog/blog.page.scss"))["default"]]
    })], BlogPage);
    /***/
  }
}]);
//# sourceMappingURL=blog-blog-module-es5.js.map