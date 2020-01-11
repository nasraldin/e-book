function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- header tag -->\n<app-header></app-header>\n<!-- end header tag -->\n<!-- start main tag -->\n<main class=\"container-fluid main-site\" role=\"main\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-3 col-xl-2 bd-sidebar\">\n      <!-- sidebar home-->\n      <app-sidebar></app-sidebar>\n      <!-- sidebar home wrapper -->\n    </div>\n    <div class=\"col-12 col-md-9 col-xl-10 warp-site\" id=\"main\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</main>\n<!-- end main tag -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-task/about-task.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-task/about-task.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAboutTaskAboutTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Abuot Task</h1>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-list/book-card/book-card.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-list/book-card/book-card.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBookListBookCardBookCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>book-card works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-list/book-list.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-list/book-list.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBookListBookListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\n  class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\"\n>\n  <h1 class=\"h3 mb-0\">Favorite Book List</h1>\n</div>\n\n<div class=\"jumbotron\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"form-group row\">\n          <label for=\"customSwitch1\" class=\"col-sm-3 pl-0\">Sorting</label>\n          <div class=\"col-sm-9 sorting-input\">\n            <div class=\"custom-control custom-switch\">\n              <input\n                type=\"checkbox\"\n                class=\"custom-control-input\"\n                id=\"customSwitch1\"\n              />\n              <label class=\"custom-control-label\" for=\"customSwitch1\"\n                >ASC/DESC</label\n              >\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-5\" style=\"left: -114px;\">\n        <div class=\"form-group row\">\n          <label for=\"inlineFormCustomSelectPref\" class=\"col-sm-3 pl-0\" style=\"right: -30px;\"\n            >Topics</label\n          >\n          <div class=\"col-sm-9 sorting-input\" style=\"top: -8px;\">\n            <select\n              class=\"custom-select my-1 mr-sm-2\"\n              id=\"inlineFormCustomSelectPref\"\n            >\n              <option selected>Choose...</option>\n              <option value=\"1\">One</option>\n              <option value=\"2\">Two</option>\n              <option value=\"3\">Three</option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\" style=\"left: -114px; top: -8px;\">\n        <button type=\"submit\" class=\"btn btn-primary my-1\">\n          Random Rating\n        </button>\n      </div>\n      <div class=\"col-12\" style=\"padding-left: 0;\">\n        <div class=\"form-group form-inline\">\n          <input\n            class=\"form-control w-50\"\n            type=\"text\"\n            name=\"searchTerm\"\n            placeholder=\"Type here to search\"\n            [(ngModel)]=\"searchQuery\"\n            (keyup)=\"setStatus()\"\n          />\n          <span class=\"ml-3\" *ngIf=\"noSearchResult\">Loading...</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row row-cols-1 row-cols-md-4\">\n  <div class=\"col mb-4\">\n    <div class=\"card h-100\">\n      <img\n        src=\"../../../assets/images/C-sharp_in_Depth.png\"\n        class=\"card-img-top\"\n        alt=\"...\"\n      />\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Kubernetes in Action</h5>\n        <div class=\"book-info\">\n          <div>\n            <span>\n              by\n            </span>\n            <a href=\"\">Nasr Eldin</a>\n          </div>\n          <div>\n            <span>\n              Publisher:\n            </span>\n            <a href=\"\">Manning Publications</a>\n          </div>\n          <div style=\"font-style: italic;\">\n            <span>\n              Release Date:\n            </span>\n            December 2017\n          </div>\n          <div>\n            <span>\n              ISBN:\n            </span>\n            9781617293726\n          </div>\n          <div>\n            <span> Topic: <a href=\"\">Design</a> </span>\n          </div>\n        </div>\n      </div>\n      <div>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary btn-block\"\n          data-toggle=\"modal\"\n          data-target=\".bd-example-modal-xl\"\n          style=\"border-radius: 0;\"\n        >\n          <i class=\"fas fa-book\"></i> Details\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/header/header.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/header/header.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLayoutHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\">\n    <i class=\"fas fa-book-open\"></i>\n    | E-Book\n  </a>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/sidebar/sidebar.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/sidebar/sidebar.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLayoutSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"sidebar\" class=\"site-list-home list-group mt-4 mb-4\" role=\"menu\">\n  <div class=\"card-header bg-menu\">\n    <span class=\"sl-h-es\">E-Book</span>\n    <a href=\"#\" class=\"off-sidebar\">\n      <i class=\"fas fa-chevron-left\" id=\"off-sidebar-icon\"></i>\n    </a>\n  </div>\n  <a\n    class=\"list-group-item list-group-item-action\"\n    data-toggle=\"list\"\n    [routerLink]=\"['/']\"\n    role=\"tab\"\n    aria-controls=\"Home\"\n    [routerLinkActive]=\"['active']\"\n    [routerLinkActiveOptions]=\"{ exact: true }\"\n  >\n    <i class=\"fas fa-th\"></i>\n    <span class=\"list-item-text\">Home</span>\n  </a>\n  <a\n    class=\"list-group-item list-group-item-action\"\n    data-toggle=\"list\"\n    [routerLink]=\"['/about-task']\"\n    role=\"tab\"\n    aria-controls=\"about-task\"\n    [routerLinkActive]=\"['active']\"\n    [routerLinkActiveOptions]=\"{ exact: true }\"\n  >\n    <i class=\"fas fa-question-circle\"></i>\n    <span class=\"list-item-text\">About Task</span>\n  </a>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-error.handler.ts":
  /*!**************************************!*\
    !*** ./src/app/app-error.handler.ts ***!
    \**************************************/

  /*! exports provided: AppErrorHandler */

  /***/
  function srcAppAppErrorHandlerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function () {
      return AppErrorHandler;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppErrorHandler =
    /*#__PURE__*/
    function (_angular_core__WEBPAC) {
      _inherits(AppErrorHandler, _angular_core__WEBPAC);

      function AppErrorHandler() {
        _classCallCheck(this, AppErrorHandler);

        return _possibleConstructorReturn(this, _getPrototypeOf(AppErrorHandler).call(this));
      }

      _createClass(AppErrorHandler, [{
        key: "handleError",
        value: function handleError(error) {
          console.error(error);

          if (confirm(true ? error : undefined)) {
            window.location.reload();
          }

          _get(_getPrototypeOf(AppErrorHandler.prototype), "handleError", this).call(this, error);
        }
      }]);

      return AppErrorHandler;
    }(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]);

    AppErrorHandler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AppErrorHandler);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/book-list/book-list.component */
    "./src/app/components/book-list/book-list.component.ts");
    /* harmony import */


    var _components_about_task_about_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/about-task/about-task.component */
    "./src/app/components/about-task/about-task.component.ts");

    var routes = [{
      path: '',
      component: _components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_3__["BookListComponent"]
    }, {
      path: 'about-task',
      component: _components_about_task_about_task_component__WEBPACK_IMPORTED_MODULE_4__["AboutTaskComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"],
        useHash: false
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: []
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'E-Book';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule, initializeApp */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initializeApp", function () {
      return initializeApp;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _services_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/app-config.service */
    "./src/app/services/app-config.service.ts");
    /* harmony import */


    var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/layout/header/header.component */
    "./src/app/components/layout/header/header.component.ts");
    /* harmony import */


    var _pipe_string_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pipe/string-filter.pipe */
    "./src/app/pipe/string-filter.pipe.ts");
    /* harmony import */


    var _components_about_task_about_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/about-task/about-task.component */
    "./src/app/components/about-task/about-task.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_error_handler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app-error.handler */
    "./src/app/app-error.handler.ts");
    /* harmony import */


    var _components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/book-list/book-list.component */
    "./src/app/components/book-list/book-list.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _components_book_list_book_card_book_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/book-list/book-card/book-card.component */
    "./src/app/components/book-list/book-card/book-card.component.ts");
    /* harmony import */


    var _services_book_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./services/book.service */
    "./src/app/services/book.service.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./store/reducers/app.reducers */
    "./src/app/store/reducers/app.reducers.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/fesm2015/router-store.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
    /* harmony import */


    var _store_effects_book_effects__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./store/effects/book.effects */
    "./src/app/store/effects/book.effects.ts");
    /* harmony import */


    var _components_layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/layout/sidebar/sidebar.component */
    "./src/app/components/layout/sidebar/sidebar.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_13__["BookListComponent"], _pipe_string_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"], _components_about_task_about_task_component__WEBPACK_IMPORTED_MODULE_9__["AboutTaskComponent"], _components_book_list_book_card_book_card_component__WEBPACK_IMPORTED_MODULE_17__["BookCardComponent"], _components_layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_25__["SidebarComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["NgxPaginationModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_19__["StoreModule"].forRoot(_store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_20__["appReducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_21__["EffectsModule"].forRoot([_store_effects_book_effects__WEBPACK_IMPORTED_MODULE_24__["BookEffects"]]), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_22__["StoreRouterConnectingModule"].forRoot({
        stateKey: 'router'
      }), !_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_23__["StoreDevtoolsModule"].instrument() : []],
      providers: [_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__["AppConfigService"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["APP_INITIALIZER"],
        useFactory: initializeApp,
        deps: [_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__["AppConfigService"]],
        multi: true
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ErrorHandler"],
        useClass: _app_error_handler__WEBPACK_IMPORTED_MODULE_12__["AppErrorHandler"]
      }, _services_book_service__WEBPACK_IMPORTED_MODULE_18__["BookService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule); // The entry point of app initializations

    function initializeApp(appConfig) {
      return function () {
        return appConfig.load();
      };
    }
    /***/

  },

  /***/
  "./src/app/components/about-task/about-task.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/about-task/about-task.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAboutTaskAboutTaskComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtdGFzay9hYm91dC10YXNrLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/about-task/about-task.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/about-task/about-task.component.ts ***!
    \***************************************************************/

  /*! exports provided: AboutTaskComponent */

  /***/
  function srcAppComponentsAboutTaskAboutTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutTaskComponent", function () {
      return AboutTaskComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutTaskComponent =
    /*#__PURE__*/
    function () {
      function AboutTaskComponent() {
        _classCallCheck(this, AboutTaskComponent);
      }

      _createClass(AboutTaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutTaskComponent;
    }();

    AboutTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about-task',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about-task.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-task/about-task.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about-task.component.scss */
      "./src/app/components/about-task/about-task.component.scss")).default]
    })], AboutTaskComponent);
    /***/
  },

  /***/
  "./src/app/components/book-list/book-card/book-card.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/book-list/book-card/book-card.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBookListBookCardBookCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9vay1saXN0L2Jvb2stY2FyZC9ib29rLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/book-list/book-card/book-card.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/book-list/book-card/book-card.component.ts ***!
    \***********************************************************************/

  /*! exports provided: BookCardComponent */

  /***/
  function srcAppComponentsBookListBookCardBookCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookCardComponent", function () {
      return BookCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BookCardComponent =
    /*#__PURE__*/
    function () {
      function BookCardComponent() {
        _classCallCheck(this, BookCardComponent);
      }

      _createClass(BookCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BookCardComponent;
    }();

    BookCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-book-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./book-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-list/book-card/book-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./book-card.component.scss */
      "./src/app/components/book-list/book-card/book-card.component.scss")).default]
    })], BookCardComponent);
    /***/
  },

  /***/
  "./src/app/components/book-list/book-list.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/book-list/book-list.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBookListBookListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sorting-input {\n  padding-left: 0;\n  left: -20px;\n  top: 2px;\n}\n\n.card-img-top {\n  max-height: 200px;\n}\n\n.book-info {\n  font-size: 0.8rem;\n  color: #777;\n}\n\n.book-info div > span {\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n\n.jumbotron {\n  padding: 2rem 3rem;\n  padding-bottom: 0.5rem;\n}\n\n/* Sortable table demo */\n\nth[sortable] {\n  cursor: pointer;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n\nth[sortable].desc:before,\nth[sortable].asc:before {\n  content: \"\";\n  display: block;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAmxJREFUeAHtmksrRVEUx72fH8CIGQNJkpGUUmakDEiZSJRIZsRQmCkTJRmZmJgQE0kpX0D5DJKJgff7v+ru2u3O3vvc67TOvsdatdrnnP1Y///v7HvvubdbUiIhBISAEBACQkAICAEhIAQ4CXSh2DnyDfmCPEG2Iv9F9MPlM/LHyAecdyMzHYNwR3fdNK/OH9HXl1UCozD24TCvILxizEDWIEzA0FcM8woCgRrJCoS5PIwrANQSMAJX1LEI9bqpQo4JYNFFKRSvIgsxHDVnqZgIkPnNBM0rIGtYk9YOOsqgbgepRCfdbmFtqhFkVEDVPjJp0+Z6e6hRHhqBKgg6ZDCvYBygVmUoEGoh5JTRvIJwhJo1aUOoh4CLPMyvxxi7EWOMgnCGsXXI1GIXlZUYX7ucU+kbR8NW8lh3O7cue0Pk32MKndfUxQFAwxdirk3fHappAnc0oqDPzDfGTBrCfHP04dM4oTV8cxr0SVzH9FF07xD3ib6xCDE+M+aUcVygtWzzbtGX2rPBrEUYfecfQkaFzYi6HjVnGBdtL7epqAlc1+jRdAap74RrnPc4BCijttY2tRcdN0g17w7HqZrXhdJTYAuS3hd8z+vKgK3V1zWPae0mZDMykadBn1hTQBLnZNwVrJpSe/NwEeDsEwCctEOsJTsgxLvCqUl2ACftEGvJDgjxrnBqkh3ASTvEWrIDQrwrnJpkB3DSDrGW7IAQ7wqnJtkBnLRztejXXVu4+mxz/nQ9jR1w5VB86ejLTFcnnDwhzV+F6T+CHZlx6THSjn76eyyBIOPHyDakhBAQAkJACAgBISAEhIAQYCLwC8JxpAmsEGt6AAAAAElFTkSuQmCC\") no-repeat;\n  background-size: 22px;\n  width: 22px;\n  height: 22px;\n  float: left;\n  margin-left: -22px;\n}\n\nth[sortable].desc:before {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n}\n\n/* Filtering table demo */\n\nngbd-table-filtering span.ngb-highlight {\n  background-color: yellow;\n}\n\n/* Complete table demo */\n\nngbd-table-complete span.ngb-highlight {\n  background-color: yellow;\n}\n\nngb-carousel .picsum-img-wrapper {\n  position: relative;\n  height: 0;\n  padding-top: 55%;\n  /* Keep ratio for 900x500 images */\n}\n\nngb-carousel .picsum-img-wrapper > img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29rLWxpc3QvQzpcXHNvdXJjZVxcZ2l0aHViXFxyZXBvc1xcZS1ib29rL3NyY1xcYXBwXFxjb21wb25lbnRzXFxib29rLWxpc3RcXGJvb2stbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ib29rLWxpc3QvYm9vay1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxpQkFBQTtBQ0VGOztBREFBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDR0Y7O0FERkU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDSUo7O0FERUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUEsd0JBQUE7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7R0FBQSxxQkFBQTtPQUFBLGlCQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURHQTs7RUFFRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDI4QkFBQTtFQUVBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLGlDQUFBO1VBQUEseUJBQUE7RUFDQSw2QkFBQTtBQ0RGOztBRElBLHlCQUFBOztBQUNBO0VBQ0Usd0JBQUE7QUNERjs7QURJQSx3QkFBQTs7QUFDQTtFQUNFLHdCQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUFrQixrQ0FBQTtBQ0FwQjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ib29rLWxpc3QvYm9vay1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvcnRpbmctaW5wdXQge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBsZWZ0OiAtMjBweDtcclxuICB0b3A6IDJweDtcclxufVxyXG4uY2FyZC1pbWctdG9wIHtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxufVxyXG4uYm9vay1pbmZvIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBjb2xvcjogIzc3NztcclxuICBkaXYgPiBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbi5qdW1ib3Ryb24ge1xyXG4gIHBhZGRpbmc6IDJyZW0gM3JlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4vKiBTb3J0YWJsZSB0YWJsZSBkZW1vICovXHJcblxyXG50aFtzb3J0YWJsZV0ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG50aFtzb3J0YWJsZV0uZGVzYzpiZWZvcmUsXHJcbnRoW3NvcnRhYmxlXS5hc2M6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFBWE5TUjBJQXJzNGM2UUFBQW14SlJFRlVlQUh0bWtzclJWRVV4NzJmSDhDSUdRTkprcEdVVW1ha0RFaVpTSlJJWnNSUW1Da1RKUm1abUpnUUUwa3BYMEQ1REpLSmdmZjd2K3J1MnUzTzN2dmM2N1RPdnNkYXRkcm5uUDFZLy8vdjdIdnZ1YmRiVWlJaEJJU0FFQkFDUWtBSUNBRWhJQVE0Q1hTaDJEbnlEZm1DUEVHMkl2OUY5TVBsTS9MSHlBZWNkeU16SFlOd1IzZmROSy9PSDlIWGwxVUNvekQyNFRDdklMeGl6RURXSUV6QTBGY004d29DZ1JySkNvUzVQSXdyQU5RU01BSlgxTEVJOWJxcFFvNEpZTkZGS1JTdklnc3hIRFZucVpnSWtQbk5CTTBySUd0WWs5WU9Pc3FnYmdlcFJDZmRibUZ0cWhGa1ZFRFZQakpwMCtaNmU2aFJIaHFCS2dnNlpEQ3ZZQnlnVm1Vb0VHb2g1SlRSdklKd2hKbzFhVU9vaDRDTFBNeXZ4eGk3RVdPTWduQ0dzWFhJMUdJWGxaVVlYN3VjVStrYlI4Tlc4bGgzTzdjdWUwUGszMk1LbmRmVXhRRkF3eGRpcmszZkhhcHBBbmMwb3FEUHpEZkdUQnJDZkhQMDRkTTRvVFY4Y3hyMFNWekg5RkYwN3hEM2liNnhDREUrTSthVWNWeWd0V3p6YnRHWDJyUEJyRVVZZmVjZlFrYUZ6WWk2SGpWbkdCZHRMN2VwcUFsYzEralJkQWFwNzRScm5QYzRCQ2lqdHRZMnRSY2ROMGcxN3c3SHFaclhoZEpUWUF1UzNoZDh6K3ZLZ0szVjF6V1BhZTBtWkRNeWthZEJuMWhUUUJMblpOd1ZySnBTZS9Od0VlRHNFd0NjdEVPc0pUc2d4THZDcVVsMkFDZnRFR3ZKRGdqeHJuQnFraDNBU1R2RVdySURRcndybkpwa0IzRFNEckdXN0lBUTd3cW5KdGtCbkxSenRlalhYVnU0K214ei9uUTlqUjF3NVZCODZlakxURmNubkR3aHpWK0Y2VCtDSFpseDZUSFNqbjc2ZXl5QklPUEh5RGFraEJBUUFrSkFDQWdCSVNBRWhJQVFZQ0x3QzhKeHBBbXNFR3Q2QUFBQUFFbEZUa1N1UW1DQycpXHJcbiAgICBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyMnB4O1xyXG4gIHdpZHRoOiAyMnB4O1xyXG4gIGhlaWdodDogMjJweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogLTIycHg7XHJcbn1cclxuXHJcbnRoW3NvcnRhYmxlXS5kZXNjOmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuLyogRmlsdGVyaW5nIHRhYmxlIGRlbW8gKi9cclxubmdiZC10YWJsZS1maWx0ZXJpbmcgc3Bhbi5uZ2ItaGlnaGxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi8qIENvbXBsZXRlIHRhYmxlIGRlbW8gKi9cclxubmdiZC10YWJsZS1jb21wbGV0ZSBzcGFuLm5nYi1oaWdobGlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxufVxyXG5cclxubmdiLWNhcm91c2VsIC5waWNzdW0taW1nLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDA7XHJcbiAgcGFkZGluZy10b3A6IDU1JTsgLyogS2VlcCByYXRpbyBmb3IgOTAweDUwMCBpbWFnZXMgKi9cclxufVxyXG5cclxubmdiLWNhcm91c2VsIC5waWNzdW0taW1nLXdyYXBwZXIgPiBpbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuIiwiLnNvcnRpbmctaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxlZnQ6IC0yMHB4O1xuICB0b3A6IDJweDtcbn1cblxuLmNhcmQtaW1nLXRvcCB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuXG4uYm9vay1pbmZvIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjNzc3O1xufVxuLmJvb2staW5mbyBkaXYgPiBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5qdW1ib3Ryb24ge1xuICBwYWRkaW5nOiAycmVtIDNyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59XG5cbi8qIFNvcnRhYmxlIHRhYmxlIGRlbW8gKi9cbnRoW3NvcnRhYmxlXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbnRoW3NvcnRhYmxlXS5kZXNjOmJlZm9yZSxcbnRoW3NvcnRhYmxlXS5hc2M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHVybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFBWE5TUjBJQXJzNGM2UUFBQW14SlJFRlVlQUh0bWtzclJWRVV4NzJmSDhDSUdRTkprcEdVVW1ha0RFaVpTSlJJWnNSUW1Da1RKUm1abUpnUUUwa3BYMEQ1REpLSmdmZjd2K3J1MnUzTzN2dmM2N1RPdnNkYXRkcm5uUDFZLy8vdjdIdnZ1YmRiVWlJaEJJU0FFQkFDUWtBSUNBRWhJQVE0Q1hTaDJEbnlEZm1DUEVHMkl2OUY5TVBsTS9MSHlBZWNkeU16SFlOd1IzZmROSy9PSDlIWGwxVUNvekQyNFRDdklMeGl6RURXSUV6QTBGY004d29DZ1JySkNvUzVQSXdyQU5RU01BSlgxTEVJOWJxcFFvNEpZTkZGS1JTdklnc3hIRFZucVpnSWtQbk5CTTBySUd0WWs5WU9Pc3FnYmdlcFJDZmRibUZ0cWhGa1ZFRFZQakpwMCtaNmU2aFJIaHFCS2dnNlpEQ3ZZQnlnVm1Vb0VHb2g1SlRSdklKd2hKbzFhVU9vaDRDTFBNeXZ4eGk3RVdPTWduQ0dzWFhJMUdJWGxaVVlYN3VjVStrYlI4Tlc4bGgzTzdjdWUwUGszMk1LbmRmVXhRRkF3eGRpcmszZkhhcHBBbmMwb3FEUHpEZkdUQnJDZkhQMDRkTTRvVFY4Y3hyMFNWekg5RkYwN3hEM2liNnhDREUrTSthVWNWeWd0V3p6YnRHWDJyUEJyRVVZZmVjZlFrYUZ6WWk2SGpWbkdCZHRMN2VwcUFsYzEralJkQWFwNzRScm5QYzRCQ2lqdHRZMnRSY2ROMGcxN3c3SHFaclhoZEpUWUF1UzNoZDh6K3ZLZ0szVjF6V1BhZTBtWkRNeWthZEJuMWhUUUJMblpOd1ZySnBTZS9Od0VlRHNFd0NjdEVPc0pUc2d4THZDcVVsMkFDZnRFR3ZKRGdqeHJuQnFraDNBU1R2RVdySURRcndybkpwa0IzRFNEckdXN0lBUTd3cW5KdGtCbkxSenRlalhYVnU0K214ei9uUTlqUjF3NVZCODZlakxURmNubkR3aHpWK0Y2VCtDSFpseDZUSFNqbjc2ZXl5QklPUEh5RGFraEJBUUFrSkFDQWdCSVNBRWhJQVFZQ0x3QzhKeHBBbXNFR3Q2QUFBQUFFbEZUa1N1UW1DQ1wiKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjJweDtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAtMjJweDtcbn1cblxudGhbc29ydGFibGVdLmRlc2M6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi8qIEZpbHRlcmluZyB0YWJsZSBkZW1vICovXG5uZ2JkLXRhYmxlLWZpbHRlcmluZyBzcGFuLm5nYi1oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbi8qIENvbXBsZXRlIHRhYmxlIGRlbW8gKi9cbm5nYmQtdGFibGUtY29tcGxldGUgc3Bhbi5uZ2ItaGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG5uZ2ItY2Fyb3VzZWwgLnBpY3N1bS1pbWctd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogNTUlO1xuICAvKiBLZWVwIHJhdGlvIGZvciA5MDB4NTAwIGltYWdlcyAqL1xufVxuXG5uZ2ItY2Fyb3VzZWwgLnBpY3N1bS1pbWctd3JhcHBlciA+IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/book-list/book-list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/book-list/book-list.component.ts ***!
    \*************************************************************/

  /*! exports provided: BookListComponent */

  /***/
  function srcAppComponentsBookListBookListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookListComponent", function () {
      return BookListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/book.service */
    "./src/app/services/book.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _utils_convert_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../utils/convert-helper */
    "./src/app/utils/convert-helper.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var BookListComponent =
    /*#__PURE__*/
    function () {
      function BookListComponent(service) {
        _classCallCheck(this, BookListComponent);

        this.service = service;
        this.config = {
          itemsPerPage: 10,
          currentPage: 1
        }; // convert helpers

        this.substring = _utils_convert_helper__WEBPACK_IMPORTED_MODULE_4__["ConvertHelper"].substringTo26Chart;
        this.unixTimestamp = _utils_convert_helper__WEBPACK_IMPORTED_MODULE_4__["ConvertHelper"].unixTimestamp;
      }

      _createClass(BookListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.fetchEvents();
          this.gridItems$ = this.service.getBooks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
          }));

          for (var key in this.gridItems$) {
            if (this.gridItems$.hasOwnProperty(key)) {
              var element = this.gridItems$[key];
              console.log(element);
            }
          }
        } // async fetchEvents() {
        //   this.eventsModel = await this.service.getPastEvents(24);
        //   // Config pagination instance
        //   if (this.eventsModel) {
        //     this.config.totalItems = this.eventsModel.length;
        //   }
        // }

      }, {
        key: "setStatus",
        value: function setStatus() {
          this.noSearchResult = !this.noSearchResult; // this.fetchEvents();
        }
      }]);

      return BookListComponent;
    }();

    BookListComponent.ctorParameters = function () {
      return [{
        type: _services_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]
      }];
    };

    BookListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-book-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./book-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-list/book-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./book-list.component.scss */
      "./src/app/components/book-list/book-list.component.scss")).default]
    })], BookListComponent);
    /***/
  },

  /***/
  "./src/app/components/layout/header/header.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/components/layout/header/header.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLayoutHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/layout/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/layout/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/components/layout/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/layout/sidebar/sidebar.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/components/layout/sidebar/sidebar.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLayoutSidebarSidebarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/layout/sidebar/sidebar.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/layout/sidebar/sidebar.component.ts ***!
    \****************************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppComponentsLayoutSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidebarComponent;
    }();

    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/sidebar/sidebar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.scss */
      "./src/app/components/layout/sidebar/sidebar.component.scss")).default]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/pipe/string-filter.pipe.ts":
  /*!********************************************!*\
    !*** ./src/app/pipe/string-filter.pipe.ts ***!
    \********************************************/

  /*! exports provided: FilterPipe */

  /***/
  function srcAppPipeStringFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
      return FilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * A simple string filter, filter pipe.
     */


    var FilterPipe =
    /*#__PURE__*/
    function () {
      function FilterPipe() {
        _classCallCheck(this, FilterPipe);
      }

      _createClass(FilterPipe, [{
        key: "transform",
        value: function transform(value, args) {
          if (!value) {
            return null;
          }

          if (!args) {
            return value;
          }

          args = args.toLowerCase();
          return value.filter(function (item) {
            return JSON.stringify(item).toLowerCase().includes(args);
          });
        }
      }]);

      return FilterPipe;
    }();

    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'filter'
    })], FilterPipe);
    /***/
  },

  /***/
  "./src/app/services/app-config.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/app-config.service.ts ***!
    \************************************************/

  /*! exports provided: AppConfigService */

  /***/
  function srcAppServicesAppConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConfigService", function () {
      return AppConfigService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppConfigService_1;

    var AppConfigService = AppConfigService_1 =
    /*#__PURE__*/
    function () {
      function AppConfigService(http) {
        _classCallCheck(this, AppConfigService);

        this.http = http;
      }

      _createClass(AppConfigService, [{
        key: "load",
        value: function load() {
          var _this = this;

          var jsonFile = "assets/config/app-config.dev.json";
          return new Promise(function (resolve, reject) {
            _this.http.get(jsonFile).toPromise().then(function (data) {
              AppConfigService_1.settings = data; // console.log(AppConfigService.settings);

              resolve();
            }).catch(function (error) {
              console.log("Could not load file '".concat(jsonFile, "': ").concat(JSON.stringify(error)));
              reject();
            });
          });
        }
      }]);

      return AppConfigService;
    }();

    AppConfigService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AppConfigService = AppConfigService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppConfigService);
    /***/
  },

  /***/
  "./src/app/services/book.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/book.service.ts ***!
    \******************************************/

  /*! exports provided: BookService */

  /***/
  function srcAppServicesBookServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookService", function () {
      return BookService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var BookService =
    /*#__PURE__*/
    function () {
      function BookService(http) {
        _classCallCheck(this, BookService);

        this.http = http;
        this.bookListUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint.booksList;
        this.bookDetailsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint.bookDetails;
      }

      _createClass(BookService, [{
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
          } else {
            console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something bad happened; please try again later.');
        }
      }, {
        key: "getBooks",
        value: function getBooks() {
          return this.http.get(this.bookListUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
        }
      }, {
        key: "getBookDetails",
        value: function getBookDetails(id) {
          return this.http.get(this.bookDetailsUrl + "/".concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
        }
      }]);

      return BookService;
    }();

    BookService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], BookService);
    /***/
  },

  /***/
  "./src/app/store/actions/book.actions.ts":
  /*!***********************************************!*\
    !*** ./src/app/store/actions/book.actions.ts ***!
    \***********************************************/

  /*! exports provided: EBookActions, GetBooks, GetBooksSuccess, GetBook, GetBookSuccess */

  /***/
  function srcAppStoreActionsBookActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EBookActions", function () {
      return EBookActions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetBooks", function () {
      return GetBooks;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetBooksSuccess", function () {
      return GetBooksSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetBook", function () {
      return GetBook;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetBookSuccess", function () {
      return GetBookSuccess;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var EBookActions;

    (function (EBookActions) {
      EBookActions["GetBooks"] = "[Book] Get Books";
      EBookActions["GetBooksSuccess"] = "[Book] Get Books Success";
      EBookActions["GetBook"] = "[Book] Get Book";
      EBookActions["GetBookSuccess"] = "[Book] Get Book Success";
    })(EBookActions || (EBookActions = {}));

    var GetBooks = function GetBooks() {
      _classCallCheck(this, GetBooks);

      this.type = EBookActions.GetBooks;
    };

    var GetBooksSuccess = function GetBooksSuccess(payload) {
      _classCallCheck(this, GetBooksSuccess);

      this.payload = payload;
      this.type = EBookActions.GetBooksSuccess;
    };

    var GetBook = function GetBook(payload) {
      _classCallCheck(this, GetBook);

      this.payload = payload;
      this.type = EBookActions.GetBook;
    };

    var GetBookSuccess = function GetBookSuccess(payload) {
      _classCallCheck(this, GetBookSuccess);

      this.payload = payload;
      this.type = EBookActions.GetBookSuccess;
    };
    /***/

  },

  /***/
  "./src/app/store/effects/book.effects.ts":
  /*!***********************************************!*\
    !*** ./src/app/store/effects/book.effects.ts ***!
    \***********************************************/

  /*! exports provided: BookEffects */

  /***/
  function srcAppStoreEffectsBookEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookEffects", function () {
      return BookEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_book_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../actions/book.actions */
    "./src/app/store/actions/book.actions.ts");
    /* harmony import */


    var _services_book_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/book.service */
    "./src/app/services/book.service.ts");
    /* harmony import */


    var _selectors_book_selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../selectors/book.selector */
    "./src/app/store/selectors/book.selector.ts");

    var BookEffects = function BookEffects(bookService, actions$, store) {
      var _this2 = this;

      _classCallCheck(this, BookEffects);

      this.bookService = bookService;
      this.actions$ = actions$;
      this.store = store;
      this.getBook$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_book_actions__WEBPACK_IMPORTED_MODULE_6__["EBookActions"].GetBook), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) {
        return action.payload;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_selectors_book_selector__WEBPACK_IMPORTED_MODULE_8__["selectBookList"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            id = _ref2[0],
            books = _ref2[1];

        var selectedBook = books.filter(function (book) {
          return book._id === +id;
        })[0];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_book_actions__WEBPACK_IMPORTED_MODULE_6__["GetBookSuccess"](selectedBook));
      }));
      this.getBooks$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_book_actions__WEBPACK_IMPORTED_MODULE_6__["EBookActions"].GetBooks), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
        return _this2.bookService.getBooks();
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (bookHttp) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_book_actions__WEBPACK_IMPORTED_MODULE_6__["GetBooksSuccess"](bookHttp.books));
      }));
    };

    BookEffects.ctorParameters = function () {
      return [{
        type: _services_book_service__WEBPACK_IMPORTED_MODULE_7__["BookService"]
      }, {
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], BookEffects.prototype, "getBook$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], BookEffects.prototype, "getBooks$", void 0);
    BookEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], BookEffects);
    /***/
  },

  /***/
  "./src/app/store/reducers/app.reducers.ts":
  /*!************************************************!*\
    !*** ./src/app/store/reducers/app.reducers.ts ***!
    \************************************************/

  /*! exports provided: appReducers */

  /***/
  function srcAppStoreReducersAppReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appReducers", function () {
      return appReducers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/fesm2015/router-store.js");
    /* harmony import */


    var _book_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./book.reducers */
    "./src/app/store/reducers/book.reducers.ts");

    var appReducers = {
      router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["routerReducer"],
      books: _book_reducers__WEBPACK_IMPORTED_MODULE_2__["bookReducers"]
    };
    /***/
  },

  /***/
  "./src/app/store/reducers/book.reducers.ts":
  /*!*************************************************!*\
    !*** ./src/app/store/reducers/book.reducers.ts ***!
    \*************************************************/

  /*! exports provided: bookReducers */

  /***/
  function srcAppStoreReducersBookReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bookReducers", function () {
      return bookReducers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _actions_book_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions/book.actions */
    "./src/app/store/actions/book.actions.ts");
    /* harmony import */


    var _state_book_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../state/book.state */
    "./src/app/store/state/book.state.ts");

    var bookReducers = function bookReducers() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state_book_state__WEBPACK_IMPORTED_MODULE_2__["initialBookState"];
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions_book_actions__WEBPACK_IMPORTED_MODULE_1__["EBookActions"].GetBooksSuccess:
          {
            return Object.assign({}, state, {
              books: action.payload
            });
          }

        case _actions_book_actions__WEBPACK_IMPORTED_MODULE_1__["EBookActions"].GetBookSuccess:
          {
            return Object.assign({}, state, {
              selectedBook: action.payload
            });
          }

        default:
          return state;
      }
    };
    /***/

  },

  /***/
  "./src/app/store/selectors/book.selector.ts":
  /*!**************************************************!*\
    !*** ./src/app/store/selectors/book.selector.ts ***!
    \**************************************************/

  /*! exports provided: selectBookList, selectSelectedBook */

  /***/
  function srcAppStoreSelectorsBookSelectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectBookList", function () {
      return selectBookList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectSelectedBook", function () {
      return selectSelectedBook;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var selectBooks = function selectBooks(state) {
      return state.books;
    };

    var selectBookList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectBooks, function (state) {
      return state.books;
    });
    var selectSelectedBook = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectBooks, function (state) {
      return state.selectedBook;
    });
    /***/
  },

  /***/
  "./src/app/store/state/book.state.ts":
  /*!*******************************************!*\
    !*** ./src/app/store/state/book.state.ts ***!
    \*******************************************/

  /*! exports provided: initialBookState */

  /***/
  function srcAppStoreStateBookStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialBookState", function () {
      return initialBookState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var initialBookState = {
      books: null,
      selectedBook: null
    };
    /***/
  },

  /***/
  "./src/app/utils/convert-helper.ts":
  /*!*****************************************!*\
    !*** ./src/app/utils/convert-helper.ts ***!
    \*****************************************/

  /*! exports provided: ConvertHelper */

  /***/
  function srcAppUtilsConvertHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConvertHelper", function () {
      return ConvertHelper;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ConvertHelper =
    /*#__PURE__*/
    function () {
      function ConvertHelper() {
        _classCallCheck(this, ConvertHelper);
      }

      _createClass(ConvertHelper, null, [{
        key: "substringTo26Chart",

        /**
         * @desc substring values to 26 characters
         * @param  val The string will substring
         * @return string ex: (value...)
         */
        value: function substringTo26Chart(val) {
          if (val) {
            return val.substring(0, 26) + '...';
          }
        }
        /**
         * @desc Convert a Unix timestamp to datetime
         * @param  val Unix timestamp
         * @return local datetime 10/21/2020, 5:18:56 AM
         */

      }, {
        key: "unixTimestamp",
        value: function unixTimestamp(val) {
          if (val) {
            return new Date(val * 1000).toLocaleString();
          }
        }
      }]);

      return ConvertHelper;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: true,
      endpoint: {
        booksList: '/api/list',
        bookDetails: '/api/details'
      }
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      endpoint: {
        booksList: '/api/list',
        bookDetails: '/api/details'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\source\github\repos\e-book\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map