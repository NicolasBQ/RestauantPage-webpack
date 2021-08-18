/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../dist/images/background.png */ "./dist/images/background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  min-height: 100vh;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nheader nav {\n  height: 60px;\n  width: 100%;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n}\nheader nav h1 {\n  position: absolute;\n  left: 1rem;\n  top: 0.7rem;\n  color: #D2E603;\n  font-family: \"Neucha\";\n  letter-spacing: 0.6rem;\n  font-size: 2rem;\n}\nheader nav .toggleBtn {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  right: 1rem;\n  top: 0.8rem;\n  height: 25px;\n  width: 25px;\n}\nheader nav .toggleBtn span {\n  height: 3px;\n  margin-top: 5px;\n  width: 25px;\n  background-color: #D2E603;\n}\nheader nav .nav-links {\n  display: none;\n}\nheader nav .nav-links.active {\n  display: block;\n  position: absolute;\n  top: 3.75rem;\n  width: 100%;\n  text-align: end;\n  background-color: rgba(0, 0, 0, 0.8);\n}\nheader nav .nav-links.active li {\n  list-style-type: none;\n  margin: 20px 20px;\n  color: #D2E603;\n  font-family: \"Neucha\";\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n@media (min-width: 800px) {\n  header nav {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  header nav .toggleBtn {\n    display: none;\n  }\n  header nav .nav-links {\n    display: flex;\n    position: absolute;\n    right: 1rem;\n  }\n  header nav .nav-links li {\n    list-style-type: none;\n    margin: 0 10px;\n    font-family: \"Neucha\";\n    font-size: 1.3rem;\n    color: #D2E603;\n    cursor: pointer;\n  }\n}\n\nmain {\n  margin-top: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nmain .message-container {\n  height: 350px;\n  width: 320px;\n  background-color: rgba(0, 0, 0, 0.3);\n}\nmain .message-container h1 {\n  text-align: center;\n  color: #D2E603;\n  font-size: 3rem;\n  font-family: \"Neucha\";\n  font-weight: bold;\n  padding: 1rem;\n}\nmain .message-container button {\n  height: 50px;\n  width: 120px;\n  margin: 40px 30%;\n  background-color: #D2E603;\n  border: none;\n  border-radius: 50px;\n  font-family: \"Neucha\";\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0.2rem;\n  cursor: pointer;\n}\nmain .menu-container {\n  height: 1700px;\n  width: 320px;\n  margin-bottom: 40px;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(6, 1fr);\n}\nmain .menu-container .restaurant-element {\n  height: 250px;\n  width: 250px;\n  margin: auto;\n  display: flex;\n  background-color: rgba(0, 0, 0, 0.3);\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\nmain .menu-container .restaurant-element .image {\n  height: 150px;\n  width: 150px;\n  margin-top: 20px;\n}\nmain .menu-container .restaurant-element span {\n  font-family: \"DM Sans\";\n  padding-top: 0.3rem;\n  font-size: 1rem;\n  color: #D2E603;\n}\nmain .menu-container .restaurant-element:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n}\nmain .contact-container {\n  height: 400px;\n  width: 320px;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .contact-container span {\n  font-size: 1.5rem;\n  font-family: \"DM Sans\";\n  color: #D2E603;\n  padding: 0.6rem;\n}\nmain .contact-container img {\n  height: 250px;\n  width: 300px;\n}\n@media (min-width: 800px) {\n  main {\n    justify-content: flex-start;\n    margin-top: 0px;\n  }\n  main .message-container {\n    margin-top: 40px;\n    height: 420px;\n    width: 400px;\n    margin-left: 100px;\n  }\n  main .message-container h1 {\n    font-size: 4rem;\n  }\n  main .message-container button {\n    height: 60px;\n    width: 150px;\n    margin: 40px 30%;\n    font-size: 1.3rem;\n  }\n  main .menu-container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    height: 570px;\n    width: 900px;\n    margin: 40px auto 40px auto;\n  }\n  main .menu-container .restaurant-element {\n    margin: 0 20px 20px 20px;\n  }\n  main .contact-container {\n    margin: 40px auto 0 auto;\n    height: 550px;\n    width: 550px;\n  }\n  main .contact-container img {\n    margin-top: 20px;\n    height: 400px;\n    width: 500px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAcA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;AAbJ;;AAgBA;EACI,iBAAA;EACA,yDAAA;AAbJ;;AAiBI;EACI,YAAA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,mBAAA;EACA,oCAhCI;AAkBZ;AAgBQ;EACI,kBAAA;EACA,UAAA;EACA,WAAA;EACA,cAvCL;EAwCK,qBArCL;EAsCK,sBAAA;EACA,eAAA;AAdZ;AAiBQ;EACI,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;AAfZ;AAiBY;EACI,WAAA;EACA,eAAA;EACA,WAAA;EACA,yBA1DT;AA2CP;AAkBQ;EACI,aAAA;AAhBZ;AAkBQ;EACI,cAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,oCArEA;AAqDZ;AAiBY;EACI,qBAAA;EACA,iBAAA;EACA,cA1ET;EA2ES,qBAxET;EAyES,iBAAA;EACA,iBAAA;AAfhB;AArDI;EAyEI;IACI,mBAAA;IACA,8BAAA;EAjBV;EAmBU;IACI,aAAA;EAjBd;EAmBU;IACI,aAAA;IACA,kBAAA;IACA,WAAA;EAjBd;EAmBc;IACI,qBAAA;IACA,cAAA;IACA,qBA9Fb;IA+Fa,iBAAA;IACA,cAnGb;IAoGa,eAAA;EAjBlB;AACF;;AAuBA;EACI,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AApBJ;AAqBI;EACI,aAAA;EACA,YAAA;EACA,oCAAA;AAnBR;AAqBQ;EACI,kBAAA;EACA,cAvHL;EAwHK,eAAA;EACA,qBAtHL;EAuHK,iBAAA;EACA,aAAA;AAnBZ;AAsBQ;EACI,YAAA;EACA,YAAA;EACA,gBAAA;EACA,yBAlIL;EAmIK,YAAA;EACA,mBAAA;EACA,qBAlIL;EAmIK,eAAA;EACA,gBAAA;EACA,sBAAA;EACA,eAAA;AApBZ;AAuBI;EACI,cAAA;EACA,YAAA;EACA,mBAAA;EACA,oCA/II;EAgJJ,aAAA;EACA,0BAAA;EACA,kCAAA;AArBR;AAuBQ;EACI,aAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,oCAAA;EACA,sBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;AArBZ;AAuBY;EACI,aAAA;EACA,YAAA;EACA,gBAAA;AArBhB;AAuBY;EACI,sBAAA;EACA,mBAAA;EACA,eAAA;EACA,cAzKT;AAoJP;AAwBQ;EACI,oCAAA;AAtBZ;AAyBI;EACI,aAAA;EACA,YAAA;EACA,oCAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AAvBR;AAyBQ;EACI,iBAAA;EACA,sBAAA;EACA,cA3LL;EA4LK,eAAA;AAvBZ;AA0BQ;EACI,aAAA;EACA,YAAA;AAxBZ;AAhKI;EAkGJ;IA2FQ,2BAAA;IACA,eAAA;EAzBN;EA2BM;IACI,gBAAA;IACA,aAAA;IACA,YAAA;IACA,kBAAA;EAzBV;EA2BU;IACI,eAAA;EAzBd;EA2BU;IACI,YAAA;IACA,YAAA;IACA,gBAAA;IACA,iBAAA;EAzBd;EA4BM;IACI,aAAA;IACA,qCAAA;IACA,kCAAA;IACA,aAAA;IACA,YAAA;IACA,2BAAA;EA1BV;EA4BU;IACI,wBAAA;EA1Bd;EA6BM;IACI,wBAAA;IACA,aAAA;IACA,YAAA;EA3BV;EA6BU;IACI,gBAAA;IACA,aAAA;IACA,YAAA;EA3Bd;AACF","sourcesContent":["$text: #D2E603;\r\n$box-color: rgba(0,0,0,.8); \r\n\r\n$typo: 'Neucha';\r\n\r\n$medium: 800px;\r\n\r\n\r\n@mixin medium {\r\n    @media(min-width: #{$medium}) {\r\n        @content\r\n    }\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#content {\r\n    min-height: 100vh;\r\n    background-image: url(../dist/images/background.png);\r\n}\r\n\r\nheader {\r\n    nav {\r\n        height: 60px;\r\n        width: 100%;\r\n        display: flex;\r\n        position: relative;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        background-color: $box-color;\r\n\r\n        h1 {\r\n            position: absolute;\r\n            left: 1rem;\r\n            top: .7rem;\r\n            color: $text;\r\n            font-family: $typo;\r\n            letter-spacing: .6rem;\r\n            font-size: 2rem;\r\n        }\r\n        \r\n        .toggleBtn {\r\n            display: flex;\r\n            flex-direction: column;\r\n            position: absolute;\r\n            right: 1rem;\r\n            top: .8rem;\r\n            height: 25px;\r\n            width: 25px;\r\n\r\n            span {\r\n                height: 3px;\r\n                margin-top: 5px;\r\n                width: 25px;\r\n                background-color: $text;\r\n            }\r\n        }\r\n        .nav-links {\r\n            display: none;\r\n        }\r\n        .nav-links.active {\r\n            display: block;\r\n            position: absolute;\r\n            top: 3.75rem;\r\n            width: 100%;\r\n            text-align: end;\r\n            background-color: $box-color;\r\n            li {\r\n                list-style-type: none;\r\n                margin: 20px 20px;\r\n                color: $text;\r\n                font-family: $typo;\r\n                font-size: 1.3rem;\r\n                font-weight: bold;\r\n            }\r\n        }\r\n    }\r\n    @include medium {\r\n        nav {\r\n            flex-direction: row;\r\n            justify-content: space-between;\r\n\r\n            .toggleBtn {\r\n                display: none;\r\n            }\r\n            .nav-links {\r\n                display: flex;\r\n                position: absolute;\r\n                right: 1rem;\r\n                \r\n                li {\r\n                    list-style-type: none;\r\n                    margin: 0 10px;\r\n                    font-family: $typo;\r\n                    font-size: 1.3rem;\r\n                    color: $text;\r\n                    cursor: pointer;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nmain {\r\n    margin-top: 200px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    .message-container {\r\n        height: 350px;\r\n        width: 320px;\r\n        background-color: rgba(0,0,0,.3);\r\n\r\n        h1 {\r\n            text-align: center;\r\n            color: $text;\r\n            font-size: 3rem;\r\n            font-family: $typo;\r\n            font-weight: bold;\r\n            padding: 1rem;\r\n        }\r\n\r\n        button {\r\n            height: 50px;\r\n            width: 120px;\r\n            margin: 40px 30%;\r\n            background-color: $text;\r\n            border: none;\r\n            border-radius: 50px;\r\n            font-family: $typo;\r\n            font-size: 1rem;\r\n            font-weight: 500;\r\n            letter-spacing: .2rem;\r\n            cursor: pointer;\r\n        }\r\n    }\r\n    .menu-container {\r\n        height: 1700px;\r\n        width: 320px;\r\n        margin-bottom: 40px;\r\n        background-color: $box-color;\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: repeat(6, 1fr);\r\n        \r\n        .restaurant-element {\r\n            height: 250px;\r\n            width: 250px;\r\n            margin: auto;\r\n            display: flex;\r\n            background-color: rgba(0,0,0,.3);\r\n            flex-direction: column;\r\n            align-items: center;\r\n            margin-bottom: 20px;\r\n            cursor: pointer;\r\n\r\n            .image {\r\n                height: 150px;\r\n                width: 150px;\r\n                margin-top: 20px;\r\n            }\r\n            span {\r\n                font-family: 'DM Sans';\r\n                padding-top: .3rem;\r\n                font-size: 1rem;\r\n                color: $text;\r\n            }\r\n        }\r\n        .restaurant-element:hover {\r\n            background-color: rgba(0,0,0,.7);\r\n        }\r\n    }\r\n    .contact-container {\r\n        height: 400px;\r\n        width: 320px;\r\n        background-color: rgba(0,0,0,.3);\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        \r\n        span {\r\n            font-size: 1.5rem;\r\n            font-family: 'DM Sans';\r\n            color: $text;\r\n            padding: .6rem;\r\n        }\r\n\r\n        img {\r\n            height: 250px;\r\n            width: 300px;\r\n        }\r\n\r\n    }\r\n    @include medium {\r\n        justify-content: flex-start;\r\n        margin-top: 0px;\r\n        \r\n        .message-container {\r\n            margin-top: 40px;\r\n            height: 420px;\r\n            width: 400px;\r\n            margin-left: 100px;\r\n\r\n            h1 {\r\n                font-size: 4rem;\r\n            }\r\n            button {\r\n                height: 60px;\r\n                width: 150px;\r\n                margin: 40px 30%;\r\n                font-size: 1.3rem;\r\n            }\r\n        }\r\n        .menu-container {\r\n            display: grid;\r\n            grid-template-columns: repeat(3, 1fr);\r\n            grid-template-rows: repeat(2, 1fr);\r\n            height: 570px;\r\n            width: 900px;\r\n            margin: 40px auto 40px auto;\r\n            \r\n            .restaurant-element {\r\n                margin: 0 20px 20px 20px;\r\n            }\r\n        }\r\n        .contact-container {\r\n            margin: 40px auto 0 auto;\r\n            height: 550px;\r\n            width: 550px;\r\n    \r\n            img {\r\n                margin-top: 20px;\r\n                height: 400px;\r\n                width: 500px;\r\n            }\r\n    \r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactCreator": () => (/* binding */ contactCreator)
/* harmony export */ });
function contactCreator() {
    document.querySelector('.message-container').style.display = 'none';
    const menu = document.querySelector('.menu-container');
    if(menu) {
        menu.style.display = 'none';
    }
    
    const contactContainer = document.createElement('div');
    contactContainer.className = 'contact-container';

    const number = document.createElement('span');
    number.textContent = '123456789';

    const adress = document.createElement('span');
    adress.textContent = '169 St Number 15-56';

    const image = document.createElement('img');
    image.className = 'imageUbication';
    image.src = '../dist/images/ubicacion.jpg';

    contactContainer.appendChild(number);
    contactContainer.appendChild(adress);
    contactContainer.appendChild(image);

    const homeBtn = document.querySelector('.nav-links').childNodes[0];
    const menuBtn = document.querySelector('.nav-links').childNodes[1];
    const contactBtn = document.querySelector('.nav-links').childNodes[2];
    homeBtn.addEventListener('click', () => {
        contactContainer.style.display = 'none';
        document.querySelector('.message-container').style.display = 'block';
    })
    menuBtn.addEventListener('click', () => {
        contactContainer.style.display = 'none';
        document.querySelector('.menu-container').style.display = 'grid';
    })
    contactBtn.addEventListener('click', () => {
        contactContainer.remove();
    })

    document.querySelector('.main-container').appendChild(contactContainer);

}





/***/ }),

/***/ "./src/landing.js":
/*!************************!*\
  !*** ./src/landing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialize": () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");



function headerCreator() {
    const header = document.createElement('header');
    header.appendChild(navCreator());
    return header;
}

function navCreator() {
    const nav = document.createElement('nav');

    const brandTitle = document.createElement('h1');
    brandTitle.textContent = 'VEGGIE';

    const navList = document.createElement('ul');
    navList.className = 'nav-links';
    multipleElements(navList, 'li', 3);
    const home = navList.childNodes[0];
    const menu = navList.childNodes[1];
    const contact = navList.childNodes[2];
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    contact.addEventListener('click', () => {
        (0,_contact__WEBPACK_IMPORTED_MODULE_1__.contactCreator)();
    })
    menu.addEventListener('click', () => {
        ;(0,_menu__WEBPACK_IMPORTED_MODULE_0__.menuCreator)();
    })

    const toggleBtn = document.createElement('div');
    toggleBtn.className = 'toggleBtn';
    multipleElements(toggleBtn,'span', 3);
    toggleBtn.addEventListener('click', () => {
        navList.classList.toggle('active');
    })

    nav.appendChild(brandTitle);
    nav.appendChild(toggleBtn);
    nav.appendChild(navList);


    return nav   
}

function mainCreator() {
    const main = document.createElement('main');
    main.className = 'main-container';

    const messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';

    const message = document.createElement('h1');
    message.textContent = 'TRY THE BEST VEGAN FOOD IN THE CITY';

    const button = document.createElement('button');
    button.className = 'order-button'
    button.textContent = 'Order Now!';
    button.addEventListener('click', () => {
        (0,_menu__WEBPACK_IMPORTED_MODULE_0__.menuCreator)();
    })

    main.appendChild(messageContainer);
    messageContainer.appendChild(message);
    messageContainer.appendChild(button);

    return main;
}

function multipleElements(parent, element, number) {
    for(let i = 0; i < number; i++) {
        parent.appendChild(document.createElement(`${element}`))
    }
}

function initialize() {
    const mainTag = document.getElementById('content');
    mainTag.appendChild(headerCreator());
    mainTag.appendChild(mainCreator());
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuCreator": () => (/* binding */ menuCreator)
/* harmony export */ });
function menuCreator() {
    document.querySelector('.message-container').style.display = 'none';
    const contact = document.querySelector('.contact-creator');
    if(contact) {
        contact.style.display = 'none';
    }

    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';
    
    menuContainer.appendChild(menuElements('Burguer', '3,99$', '../dist/images/hamburguer.svg'));
    menuContainer.appendChild(menuElements('Pizza', '5,99$', '../dist/images/pizza.svg'));
    menuContainer.appendChild(menuElements('Lasagna', '6,99$', '../dist/images/lasagna.svg'));
    menuContainer.appendChild(menuElements('Wok', '6,99$', '../dist/images/wok.svg'));
    menuContainer.appendChild(menuElements('Sandwich', '4,99$', '../dist/images/sandwich.svg'));
    menuContainer.appendChild(menuElements('Salad', '6,99$', '../dist/images/salad.svg'));

    
    
    const homeBtn = document.querySelector('.nav-links').childNodes[0];
    const menuBtn = document.querySelector('.nav-links').childNodes[1];
    const contactBtn = document.querySelector('.nav-links').childNodes[2];
    homeBtn.addEventListener('click', () => {
        menuContainer.style.display = 'none';
        document.querySelector('.message-container').style.display = 'block';
    })
    contactBtn.addEventListener('click', () => {
        menuContainer.style.display = 'none';
        document.querySelector('.contact-container').style.display = 'flex'
    })
    menuBtn.addEventListener('click', () => {
        menuContainer.remove();
    })


    document.querySelector('.main-container').appendChild(menuContainer);
}

function menuElements(description, price, image) {
    const element = document.createElement('div');
    element.className = 'restaurant-element';

    const imageSpace = document.createElement('img');
    imageSpace.src = image;
    imageSpace.className = 'image';

    const elementPrice = document.createElement('span');
    const elementDescription = document.createElement('span');
    elementPrice.textContent = price;
    elementDescription.textContent = description;

    

    element.appendChild(imageSpace);
    element.appendChild(elementPrice);
    element.appendChild(elementDescription);

    return element
}





/***/ }),

/***/ "./dist/images/background.png":
/*!************************************!*\
  !*** ./dist/images/background.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84073e2c68cfe3671aef.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _landing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.js */ "./src/landing.js");



(0,_landing_js__WEBPACK_IMPORTED_MODULE_1__.initialize)();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map