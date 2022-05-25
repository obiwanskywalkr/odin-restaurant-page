"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/satterfields.png */ "./src/images/satterfields.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cormorant+Upright&family=Roboto:wght@300;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-light: rgba(249, 250, 251, 1);\n    --primary-dark: rgba(0,0,0, 0.75);\n    font-family: 'Roboto', sans-serif;\n    font-size: clamp(1rem, calc(.5em + 0.5vw), 1.75rem);\n}\n* {\n    margin: 0;\n    padding: 0;\n}\nbody {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-attachment: fixed;\n    background-size: cover;\n}\n#content {\n    display: flex;\n    flex-direction: column;\n}\n#header {\n    height: 10rem;\n    width: 100%;\n    background-color: var(--primary-dark);\n    color: var(--primary-light);\n    display: flex;\n    justify-content: center;\n}\n#header > div {\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n#header > div > h1 {\n    cursor: default;\n    margin: 1rem 0;\n    font-family: 'Cormorant Upright', serif;\n    font-size: 5rem;\n    align-self: flex-end;\n    grid-column: 1 / 4;\n}\n.tab {\n    cursor: pointer;\n    font-weight: 300;\n    justify-self: center;\n\n}\n.active {\n    transform: scale(1.1);\n    font-weight: 700;\n    transition: 5ms;\n}\n#homeTab {\n    grid-row: 2 / 3;\n    grid-column: -4 / -3;\n}\n#menuTab {\n    grid-row: 2 / 3;\n    grid-column: -3 / -2;\n}\n#contactTab {\n    grid-row: -2 / -1;\n    grid-column: -2 / -1;\n}\n#main {\n    max-height: 50rem;\n    max-width: 35rem;\n    margin: 5rem 0;\n    border-radius: 1rem;\n    padding: 3rem 10rem;\n    background-color: var(--primary-dark);\n    color: var(--primary-light);\n    align-self: center;\n}\n#home {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n#home > p {\n    font-size: 1.5rem;\n    font-weight: 300;\n    line-height: 2.5rem;\n    text-align: center;\n    white-space: pre;\n}\n#home > img {\n    width: 23rem;\n    height: 22rem;\n    border-radius: 50%;\n}\n#menu > img {\n    width: 35rem;\n    height: 50rem;\n}\n#contact > form {\n    font-size: 1.25rem;\n    font-weight: 300;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 0.5fr 1fr 4fr 0.5fr;\n    column-gap: 2rem;\n    row-gap: 2.5rem;\n}\nform > legend {\n    font-size: 1.75rem;\n    grid-column: 1 / 3;\n}\nform > div {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n}\n#name,\n#email {\n    height: 1.5rem;\n    padding: .5rem;\n    background-color: var(--primary-light);\n    border: none;\n    border-radius: 0.25rem;\n    font-family: 'Roboto', sans-serif;\n}\nform > div:nth-child(4) {\n    width: 25rem;\n    grid-column: 1 / 3;\n}\n#message {\n    height: 15rem;\n    padding: .5rem;\n    background-color: var(--primary-light);\n    border: none;\n    border-radius: 0.25rem;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n}\n#submit {\n    cursor: pointer;\n    width: 10rem;\n    background-color: var(--primary-light);\n    border: none;\n    border-radius: .5rem;\n    color: var(--primary-dark);\n    font-size: 1.25rem;\n    grid-row: 4 / 5;\n    grid-column: 1 / 3;\n    justify-self: center;\n}\n#footer {\n    width: 100%;\n    padding: 2rem 0;\n    background-color: var(--primary-dark);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5rem;\n}\n#footer > p {\n    color: var(--primary-light);\n    font-weight: 300;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,uCAAuC;IACvC,iCAAiC;IACjC,iCAAiC;IACjC,mDAAmD;AACvD;AACA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,yDAAgD;IAChD,4BAA4B;IAC5B,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,WAAW;IACX,qCAAqC;IACrC,2BAA2B;IAC3B,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,2BAA2B;IAC3B,kCAAkC;AACtC;AACA;IACI,eAAe;IACf,cAAc;IACd,uCAAuC;IACvC,eAAe;IACf,oBAAoB;IACpB,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,oBAAoB;;AAExB;AACA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,eAAe;IACf,oBAAoB;AACxB;AACA;IACI,eAAe;IACf,oBAAoB;AACxB;AACA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;AACA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;IACd,mBAAmB;IACnB,mBAAmB;IACnB,qCAAqC;IACrC,2BAA2B;IAC3B,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,uCAAuC;IACvC,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;AACA;;IAEI,cAAc;IACd,cAAc;IACd,sCAAsC;IACtC,YAAY;IACZ,sBAAsB;IACtB,iCAAiC;AACrC;AACA;IACI,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,cAAc;IACd,sCAAsC;IACtC,YAAY;IACZ,sBAAsB;IACtB,iCAAiC;IACjC,eAAe;AACnB;AACA;IACI,eAAe;IACf,YAAY;IACZ,sCAAsC;IACtC,YAAY;IACZ,oBAAoB;IACpB,0BAA0B;IAC1B,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,oBAAoB;AACxB;AACA;IACI,WAAW;IACX,eAAe;IACf,qCAAqC;IACrC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,2BAA2B;IAC3B,gBAAgB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Cormorant+Upright&family=Roboto:wght@300;700&display=swap');\n\n:root {\n    --primary-light: rgba(249, 250, 251, 1);\n    --primary-dark: rgba(0,0,0, 0.75);\n    font-family: 'Roboto', sans-serif;\n    font-size: clamp(1rem, calc(.5em + 0.5vw), 1.75rem);\n}\n* {\n    margin: 0;\n    padding: 0;\n}\nbody {\n    background-image: url(./images/satterfields.png);\n    background-attachment: fixed;\n    background-size: cover;\n}\n#content {\n    display: flex;\n    flex-direction: column;\n}\n#header {\n    height: 10rem;\n    width: 100%;\n    background-color: var(--primary-dark);\n    color: var(--primary-light);\n    display: flex;\n    justify-content: center;\n}\n#header > div {\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n#header > div > h1 {\n    cursor: default;\n    margin: 1rem 0;\n    font-family: 'Cormorant Upright', serif;\n    font-size: 5rem;\n    align-self: flex-end;\n    grid-column: 1 / 4;\n}\n.tab {\n    cursor: pointer;\n    font-weight: 300;\n    justify-self: center;\n\n}\n.active {\n    transform: scale(1.1);\n    font-weight: 700;\n    transition: 5ms;\n}\n#homeTab {\n    grid-row: 2 / 3;\n    grid-column: -4 / -3;\n}\n#menuTab {\n    grid-row: 2 / 3;\n    grid-column: -3 / -2;\n}\n#contactTab {\n    grid-row: -2 / -1;\n    grid-column: -2 / -1;\n}\n#main {\n    max-height: 50rem;\n    max-width: 35rem;\n    margin: 5rem 0;\n    border-radius: 1rem;\n    padding: 3rem 10rem;\n    background-color: var(--primary-dark);\n    color: var(--primary-light);\n    align-self: center;\n}\n#home {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n#home > p {\n    font-size: 1.5rem;\n    font-weight: 300;\n    line-height: 2.5rem;\n    text-align: center;\n    white-space: pre;\n}\n#home > img {\n    width: 23rem;\n    height: 22rem;\n    border-radius: 50%;\n}\n#menu > img {\n    width: 35rem;\n    height: 50rem;\n}\n#contact > form {\n    font-size: 1.25rem;\n    font-weight: 300;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 0.5fr 1fr 4fr 0.5fr;\n    column-gap: 2rem;\n    row-gap: 2.5rem;\n}\nform > legend {\n    font-size: 1.75rem;\n    grid-column: 1 / 3;\n}\nform > div {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n}\n#name,\n#email {\n    height: 1.5rem;\n    padding: .5rem;\n    background-color: var(--primary-light);\n    border: none;\n    border-radius: 0.25rem;\n    font-family: 'Roboto', sans-serif;\n}\nform > div:nth-child(4) {\n    width: 25rem;\n    grid-column: 1 / 3;\n}\n#message {\n    height: 15rem;\n    padding: .5rem;\n    background-color: var(--primary-light);\n    border: none;\n    border-radius: 0.25rem;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n}\n#submit {\n    cursor: pointer;\n    width: 10rem;\n    background-color: var(--primary-light);\n    border: none;\n    border-radius: .5rem;\n    color: var(--primary-dark);\n    font-size: 1.25rem;\n    grid-row: 4 / 5;\n    grid-column: 1 / 3;\n    justify-self: center;\n}\n#footer {\n    width: 100%;\n    padding: 2rem 0;\n    background-color: var(--primary-dark);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5rem;\n}\n#footer > p {\n    color: var(--primary-light);\n    font-weight: 300;\n}"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
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
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
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
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
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
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function createContact() {
    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');

    const form = document.createElement('form');
    form.setAttribute('method', 'post');

    const legend = document.createElement('legend');
    legend.textContent = "Questions or comments?";

    const nameDiv = document.createElement('div');

    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = "Name";

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('id', 'name');

    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameInput);

    const emailDiv = document.createElement('div');

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = "Email";

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('id', 'email');

    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);

    const messageDiv = document.createElement('div');
    
    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');
    messageLabel.textContent = "Message";

    const messageInput = document.createElement('textarea');
    messageInput.setAttribute('name', 'message');
    messageInput.setAttribute('id', 'message');

    messageDiv.appendChild(messageLabel);
    messageDiv.appendChild(messageInput);

    const submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('id', 'submit');
    submit.textContent = 'Submit';
    
    form.appendChild(legend);
    form.appendChild(nameDiv);
    form.appendChild(emailDiv);
    form.appendChild(messageDiv);
    form.appendChild(submit);
    contact.appendChild(form);

    return contact;
}

function renderContact() {
    const main = document.getElementById('main');
    main.innerHTML = "";
    main.appendChild(createContact());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_chef_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/chef.png */ "./src/images/chef.png");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



function createHome() {
    const home = document.createElement('div');
    home.setAttribute('id', 'home');

    const about = document.createElement('p');
    about.textContent = 'Best and freshest ingredients. \r\n Friendly and knowledgable staff. \r\n Elegant ambience.';

    const description = document.createElement('p');
    description.textContent = 'Chef Becky Satterfield';

    const img = new Image();
    img.src = _images_chef_png__WEBPACK_IMPORTED_MODULE_0__;
    img.alt = "Becky Satterfield";
    
    home.appendChild(about);
    home.appendChild(img);
    home.appendChild(description);

    return home;
}

function renderHome() {
    const main = document.getElementById('main');
    main.innerHTML = "";
    main.appendChild(createHome());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _site_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site.js */ "./src/site.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





(0,_site_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

const homeTab = document.getElementById('homeTab');
homeTab.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveTab(homeTab);
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

const menuTab = document.getElementById('menuTab');
menuTab.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveTab(menuTab);
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

const contactTab = document.getElementById('contactTab');
contactTab.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveTab(contactTab);
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

function setActiveTab(tab) {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach((tab) => {
        if (tab != this) {
            tab.classList.remove('active');
        }
    });

    tab.classList.add('active');
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_menu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menu.png */ "./src/images/menu.png");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



function createMenu() {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    
    const img = new Image();
    img.src = _images_menu_png__WEBPACK_IMPORTED_MODULE_0__;
    img.alt = "Menu";
    
    menu.appendChild(img);

    return menu;
}

function renderMenu() {
    const main = document.getElementById('main');
    main.innerHTML = "";
    main.appendChild(createMenu());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);

/***/ }),

/***/ "./src/site.js":
/*!*********************!*\
  !*** ./src/site.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



function renderSite() {
    // All elements get appended to content element
    const content = document.getElementById('content');

    (function createHeader() {
        const header = document.createElement('div');
        header.setAttribute('id', 'header');

        // Container for flexbox
        const headerContent = document.createElement('div');
        
        // Logo
        const title = document.createElement('h1');
        title.setAttribute('id', 'title');
        title.textContent = `Satterfield's`;

        // Home, Menu, and Contact navigation tabs
        const homeTab = document.createElement('h2');
        homeTab.setAttribute('id', 'homeTab');
        homeTab.classList.add('tab');
        homeTab.textContent = 'Home';

        const menuTab = document.createElement('h2');
        menuTab.setAttribute('id', 'menuTab');
        menuTab.classList.add('tab');
        menuTab.textContent = 'Menu';

        const contactTab = document.createElement('h2');
        contactTab.setAttribute('id', 'contactTab');
        contactTab.classList.add('tab');
        contactTab.textContent = 'Contact'
            
        content.appendChild(header);
        header.appendChild(headerContent);
        headerContent.appendChild(title);
        headerContent.appendChild(homeTab);
        headerContent.appendChild(menuTab);
        headerContent.appendChild(contactTab);
    })();

    // Create body and append to content
    (function createMain() {
        const main = document.createElement('div');
        main.setAttribute('id', 'main');

        content.appendChild(main);
    })();

    //Create footer and append to content
    (function createFooter() {
        const footer = document.createElement('div');
        footer.setAttribute('id', 'footer');

        const tele = document.createElement('p');
        tele.textContent = '(919) 919 - 9191';

        const addr = document.createElement('p');
        addr.textContent = '3161 Cahaba Heights Road, Birmingham, AL 35243'; 

        content.appendChild(footer);
        footer.appendChild(tele);
        footer.appendChild(addr);
    })();

    // Initialize by loading home tab
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    homeTab.classList.add('active');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderSite);

/***/ }),

/***/ "./src/images/chef.png":
/*!*****************************!*\
  !*** ./src/images/chef.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b7d44ac103d149354e0.png";

/***/ }),

/***/ "./src/images/menu.png":
/*!*****************************!*\
  !*** ./src/images/menu.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1481f0f00c7879967fd6.png";

/***/ }),

/***/ "./src/images/satterfields.png":
/*!*************************************!*\
  !*** ./src/images/satterfields.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e275473015d059facc3b.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QlU7QUFDZDs7QUFFckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLElBQUksb0RBQVU7QUFDZDtBQUNBOztBQUVBLGlFQUFlLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2l0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvc2F0dGVyZmllbGRzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29ybW9yYW50K1VwcmlnaHQmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWxpZ2h0OiByZ2JhKDI0OSwgMjUwLCAyNTEsIDEpO1xcbiAgICAtLXByaW1hcnktZGFyazogcmdiYSgwLDAsMCwgMC43NSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCBjYWxjKC41ZW0gKyAwLjV2dyksIDEuNzVyZW0pO1xcbn1cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNoZWFkZXIgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxufVxcbiNoZWFkZXIgPiBkaXYgPiBoMSB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IFVwcmlnaHQnLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbn1cXG4udGFiIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5cXG59XFxuLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgdHJhbnNpdGlvbjogNW1zO1xcbn1cXG4jaG9tZVRhYiB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IC00IC8gLTM7XFxufVxcbiNtZW51VGFiIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogLTMgLyAtMjtcXG59XFxuI2NvbnRhY3RUYWIge1xcbiAgICBncmlkLXJvdzogLTIgLyAtMTtcXG4gICAgZ3JpZC1jb2x1bW46IC0yIC8gLTE7XFxufVxcbiNtYWluIHtcXG4gICAgbWF4LWhlaWdodDogNTByZW07XFxuICAgIG1heC13aWR0aDogMzVyZW07XFxuICAgIG1hcmdpbjogNXJlbSAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAzcmVtIDEwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuI2hvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcbiNob21lID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBsaW5lLWhlaWdodDogMi41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxufVxcbiNob21lID4gaW1nIHtcXG4gICAgd2lkdGg6IDIzcmVtO1xcbiAgICBoZWlnaHQ6IDIycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbiNtZW51ID4gaW1nIHtcXG4gICAgd2lkdGg6IDM1cmVtO1xcbiAgICBoZWlnaHQ6IDUwcmVtO1xcbn1cXG4jY29udGFjdCA+IGZvcm0ge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxZnIgNGZyIDAuNWZyO1xcbiAgICBjb2x1bW4tZ2FwOiAycmVtO1xcbiAgICByb3ctZ2FwOiAyLjVyZW07XFxufVxcbmZvcm0gPiBsZWdlbmQge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuZm9ybSA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC4yNXJlbTtcXG59XFxuI25hbWUsXFxuI2VtYWlsIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcbmZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpIHtcXG4gICAgd2lkdGg6IDI1cmVtO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcbiNtZXNzYWdlIHtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4jc3VibWl0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbiNmb290ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMnJlbSAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cmVtO1xcbn1cXG4jZm9vdGVyID4gcCB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHVDQUF1QztJQUN2QyxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLG1EQUFtRDtBQUN2RDtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDtBQUNBO0lBQ0kseURBQWdEO0lBQ2hELDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCx1Q0FBdUM7SUFDdkMsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9COztBQUV4QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQywyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsdUNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxjQUFjO0lBQ2QsY0FBYztJQUNkLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29ybW9yYW50K1VwcmlnaHQmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnktbGlnaHQ6IHJnYmEoMjQ5LCAyNTAsIDI1MSwgMSk7XFxuICAgIC0tcHJpbWFyeS1kYXJrOiByZ2JhKDAsMCwwLCAwLjc1KTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIGNhbGMoLjVlbSArIDAuNXZ3KSwgMS43NXJlbSk7XFxufVxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvc2F0dGVyZmllbGRzLnBuZyk7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI2hlYWRlciB7XFxuICAgIGhlaWdodDogMTByZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jaGVhZGVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbn1cXG4jaGVhZGVyID4gZGl2ID4gaDEge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbiAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBVcHJpZ2h0Jywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcXG59XFxuLnRhYiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFxufVxcbi5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRyYW5zaXRpb246IDVtcztcXG59XFxuI2hvbWVUYWIge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAtNCAvIC0zO1xcbn1cXG4jbWVudVRhYiB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IC0zIC8gLTI7XFxufVxcbiNjb250YWN0VGFiIHtcXG4gICAgZ3JpZC1yb3c6IC0yIC8gLTE7XFxuICAgIGdyaWQtY29sdW1uOiAtMiAvIC0xO1xcbn1cXG4jbWFpbiB7XFxuICAgIG1heC1oZWlnaHQ6IDUwcmVtO1xcbiAgICBtYXgtd2lkdGg6IDM1cmVtO1xcbiAgICBtYXJnaW46IDVyZW0gMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZzogM3JlbSAxMHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbiNob21lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG4jaG9tZSA+IHAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xcbn1cXG4jaG9tZSA+IGltZyB7XFxuICAgIHdpZHRoOiAyM3JlbTtcXG4gICAgaGVpZ2h0OiAyMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4jbWVudSA+IGltZyB7XFxuICAgIHdpZHRoOiAzNXJlbTtcXG4gICAgaGVpZ2h0OiA1MHJlbTtcXG59XFxuI2NvbnRhY3QgPiBmb3JtIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMWZyIDRmciAwLjVmcjtcXG4gICAgY29sdW1uLWdhcDogMnJlbTtcXG4gICAgcm93LWdhcDogMi41cmVtO1xcbn1cXG5mb3JtID4gbGVnZW5kIHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcbmZvcm0gPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuMjVyZW07XFxufVxcbiNuYW1lLFxcbiNlbWFpbCB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5mb3JtID4gZGl2Om50aC1jaGlsZCg0KSB7XFxuICAgIHdpZHRoOiAyNXJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG4jbWVzc2FnZSB7XFxuICAgIGhlaWdodDogMTVyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuI3N1Ym1pdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4jZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDJyZW0gMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXJlbTtcXG59XFxuI2Zvb3RlciA+IHAge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QnKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdwb3N0Jyk7XG5cbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBcIlF1ZXN0aW9ucyBvciBjb21tZW50cz9cIjtcblxuICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWVcIjtcblxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xuXG4gICAgbmFtZURpdi5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIG5hbWVEaXYuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAgIGNvbnN0IGVtYWlsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBlbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBlbWFpbExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2VtYWlsJyk7XG4gICAgZW1haWxMYWJlbC50ZXh0Q29udGVudCA9IFwiRW1haWxcIjtcblxuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2VtYWlsJyk7XG4gICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZW1haWwnKTtcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZW1haWwnKTtcblxuICAgIGVtYWlsRGl2LmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuICAgIGVtYWlsRGl2LmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xuXG4gICAgY29uc3QgbWVzc2FnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIGNvbnN0IG1lc3NhZ2VMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbWVzc2FnZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ21lc3NhZ2UnKTtcbiAgICBtZXNzYWdlTGFiZWwudGV4dENvbnRlbnQgPSBcIk1lc3NhZ2VcIjtcblxuICAgIGNvbnN0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgbWVzc2FnZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdtZXNzYWdlJyk7XG4gICAgbWVzc2FnZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZScpO1xuXG4gICAgbWVzc2FnZURpdi5hcHBlbmRDaGlsZChtZXNzYWdlTGFiZWwpO1xuICAgIG1lc3NhZ2VEaXYuYXBwZW5kQ2hpbGQobWVzc2FnZUlucHV0KTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0Jyk7XG4gICAgc3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsZWdlbmQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZURpdik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChlbWFpbERpdik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlRGl2KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIHJldHVybiBjb250YWN0O1xufVxuXG5mdW5jdGlvbiByZW5kZXJDb250YWN0KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNvbnRhY3Q7IiwiaW1wb3J0IGNoZWYgZnJvbSAnLi9pbWFnZXMvY2hlZi5wbmcnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWUuc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7XG5cbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dC50ZXh0Q29udGVudCA9ICdCZXN0IGFuZCBmcmVzaGVzdCBpbmdyZWRpZW50cy4gXFxyXFxuIEZyaWVuZGx5IGFuZCBrbm93bGVkZ2FibGUgc3RhZmYuIFxcclxcbiBFbGVnYW50IGFtYmllbmNlLic7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdDaGVmIEJlY2t5IFNhdHRlcmZpZWxkJztcblxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBjaGVmO1xuICAgIGltZy5hbHQgPSBcIkJlY2t5IFNhdHRlcmZpZWxkXCI7XG4gICAgXG4gICAgaG9tZS5hcHBlbmRDaGlsZChhYm91dCk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChpbWcpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIGhvbWU7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckhvbWUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySG9tZTsiLCJpbXBvcnQgcmVuZGVyU2l0ZSBmcm9tICcuL3NpdGUuanMnO1xuaW1wb3J0IHJlbmRlckhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCByZW5kZXJNZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgcmVuZGVyQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5yZW5kZXJTaXRlKCk7XG5cbmNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZVRhYicpO1xuaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICBzZXRBY3RpdmVUYWIoaG9tZVRhYik7XG4gICAgcmVuZGVySG9tZSgpO1xufSk7XG5cbmNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudVRhYicpO1xubWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICBzZXRBY3RpdmVUYWIobWVudVRhYik7XG4gICAgcmVuZGVyTWVudSgpO1xufSk7XG5cbmNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdFRhYicpO1xuY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICBzZXRBY3RpdmVUYWIoY29udGFjdFRhYik7XG4gICAgcmVuZGVyQ29udGFjdCgpO1xufSk7XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZVRhYih0YWIpIHtcbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuXG4gICAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgaWYgKHRhYiAhPSB0aGlzKSB7XG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0iLCJpbXBvcnQgY3VycmVudE1lbnUgZnJvbSAnLi9pbWFnZXMvbWVudS5wbmcnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XG4gICAgXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9IGN1cnJlbnRNZW51O1xuICAgIGltZy5hbHQgPSBcIk1lbnVcIjtcbiAgICBcbiAgICBtZW51LmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNZW51OyIsImltcG9ydCByZW5kZXJIb21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gcmVuZGVyU2l0ZSgpIHtcbiAgICAvLyBBbGwgZWxlbWVudHMgZ2V0IGFwcGVuZGVkIHRvIGNvbnRlbnQgZWxlbWVudFxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgKGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xuXG4gICAgICAgIC8vIENvbnRhaW5lciBmb3IgZmxleGJveFxuICAgICAgICBjb25zdCBoZWFkZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIFxuICAgICAgICAvLyBMb2dvXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGBTYXR0ZXJmaWVsZCdzYDtcblxuICAgICAgICAvLyBIb21lLCBNZW51LCBhbmQgQ29udGFjdCBuYXZpZ2F0aW9uIHRhYnNcbiAgICAgICAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGhvbWVUYWIuc2V0QXR0cmlidXRlKCdpZCcsICdob21lVGFiJyk7XG4gICAgICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgICAgIGhvbWVUYWIudGV4dENvbnRlbnQgPSAnSG9tZSc7XG5cbiAgICAgICAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIG1lbnVUYWIuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51VGFiJyk7XG4gICAgICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgICAgIG1lbnVUYWIudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICAgICAgY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGNvbnRhY3RUYWIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0VGFiJyk7XG4gICAgICAgIGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgICAgIGNvbnRhY3RUYWIudGV4dENvbnRlbnQgPSAnQ29udGFjdCdcbiAgICAgICAgICAgIFxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJDb250ZW50KTtcbiAgICAgICAgaGVhZGVyQ29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGhlYWRlckNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG4gICAgICAgIGhlYWRlckNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVRhYik7XG4gICAgICAgIGhlYWRlckNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XG4gICAgfSkoKTtcblxuICAgIC8vIENyZWF0ZSBib2R5IGFuZCBhcHBlbmQgdG8gY29udGVudFxuICAgIChmdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgICB9KSgpO1xuXG4gICAgLy9DcmVhdGUgZm9vdGVyIGFuZCBhcHBlbmQgdG8gY29udGVudFxuICAgIChmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcblxuICAgICAgICBjb25zdCB0ZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0ZWxlLnRleHRDb250ZW50ID0gJyg5MTkpIDkxOSAtIDkxOTEnO1xuXG4gICAgICAgIGNvbnN0IGFkZHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGFkZHIudGV4dENvbnRlbnQgPSAnMzE2MSBDYWhhYmEgSGVpZ2h0cyBSb2FkLCBCaXJtaW5naGFtLCBBTCAzNTI0Myc7IFxuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKHRlbGUpO1xuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYWRkcik7XG4gICAgfSkoKTtcblxuICAgIC8vIEluaXRpYWxpemUgYnkgbG9hZGluZyBob21lIHRhYlxuICAgIHJlbmRlckhvbWUoKTtcbiAgICBob21lVGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJTaXRlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==