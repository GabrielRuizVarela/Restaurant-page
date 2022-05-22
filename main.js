/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./victoria-shes-UC0HZdUitWY-unsplash.jpg */ "./src/victoria-shes-UC0HZdUitWY-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Koulen&family=Lato:ital,wght@1,300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n* {\n/* border: 1px solid black; */\n}\n\n:root {\n    --color-1: #134159;\n    --color-2: #591C21;\n    --color-3: #044040;\n    --color-4: #f5f5f4;\n    background-color: var(--color-4);\n    font-family: 'Koulen', cursive;\n}\n\nhtml,\nbody,\n#content {\n    height: 100%;\n}\n\na {\n    color: inherit;\n    text-decoration: none;\n    cursor: pointer;\n    padding: 0 0.3rem;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\n/* ---Header--- */\n\nheader {\n    display: flex;\n    justify-content: space-around;\n    padding: 1rem 8rem;\n    color: var(--color-2);\n    box-shadow: 0px 0px 8px  var(--color-2);\n    z-index: 1;\n}\n\nheader div::after {\n    content:\"\";\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 2px;\n    background: var(--color-2);\n    transform: scaleX(0);\n    transform-origin: right;\n    transition: transform 250ms ease-in;\n}\n\nheader div:hover::after {\n    transform: scaleX(1);\n    transform-origin: left;\n}\n\nheader div{\n    cursor: pointer;\n    font-size: 1.1rem;\n    position: relative;\n}\n\n/* ---Footer--- */\n\nfooter {\n    position: absolute;\n    top: 100%;\n    width: 100%;\n    display: grid;\n    justify-content: center;\n}\n/* ---Home--- */\n\n.home {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n#home-left {\n    display: grid;\n    margin-top: 5rem;\n    gap: 1rem;\n    align-items: center;\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: 1fr auto;\n}\n\n#horizontal-line {\n    border-bottom: 1px solid black;\n    align-self: top;\n}\n\n#home-right {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-position: center;\n    border: 1px solid black;\n}\n\nbutton{\n    color: var(--color-4);\n    background-color: var(--color-2);\n    font-family: 'Koulen', cursive;\n    font-size: 1.1rem;\n    padding: 1rem 3rem;\n    border-radius: 3px;\n}\n\nbutton:hover {\n    cursor: pointer;\n    transform: scale(0.95);\n    background-color: var(--color-4);\n    color: var(--color-2);\n}\n\n/* ---Menu--- */\n.menu{\n    padding-top: 2rem;\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    grid-template-rows: repeat(2,auto) 1fr 0.2fr;\n}\n\n#menu-name, \n#about-name {\n    position: relative;\n    margin-bottom: 2rem;\n}\n#menu-name::after,\n#about-name::after {\n    content:\"\";\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 2px;\n    background: var(--color-2);\n}\n\n#menu-container {\n    margin-top: 1rem;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    gap: 2rem;\n    width: 70%;\n    background-color: var(--color-2);\n    color: var(--color-4);\n    padding: 4rem;\n    box-shadow: 0px 4px 15px 1px black;\n    border: 1px solid black;\n    border-radius: 5px;\n}\n\n.menu-item {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-template-rows: auto auto;\n    font-size: 0.9rem;\n    align-items: end;\n}\n.description {\n    font-size: 0.7rem;\n    font-family: 'Lato', sans-serif;\n    align-self: start;\n}\n\n.price {\n    grid-row: 1/2;\n    grid-column: 2/3;\n}\n\n/* ---About--- */\n.about {\n    /* color: var(--color-4); */\n    display: grid;\n    grid-template-rows: auto auto auto 1fr;\n    justify-items: center;\n    margin-top: 2rem;\n    /* gap: 1rem; */\n    /* background-color: var(--color-2); */\n}\n\n#p-about{\n    /* width: 70%;\n    border: 1px solid black;\n    padding: 2rem; */\n    margin-top: 1rem;\n    /* display: grid; */\n    /* grid-template-columns: repeat(2,1fr); */\n    gap: 2rem;\n    width: 50%;\n    background-color: var(--color-2);\n    color: var(--color-4);\n    padding: 4rem;\n    box-shadow: 0px 4px 15px 1px black;\n    border: 1px solid black;\n    border-radius: 5px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;IAGI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;AACA,6BAA6B;AAC7B;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,gCAAgC;IAChC,8BAA8B;AAClC;;AAEA;;;IAGI,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,4BAA4B;AAChC;;AAEA,iBAAiB;;AAEjB;IACI,aAAa;IACb,6BAA6B;IAC7B,kBAAkB;IAClB,qBAAqB;IACrB,uCAAuC;IACvC,UAAU;AACd;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,WAAW;IACX,WAAW;IACX,0BAA0B;IAC1B,oBAAoB;IACpB,uBAAuB;IACvB,mCAAmC;AACvC;;AAEA;IACI,oBAAoB;IACpB,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA,iBAAiB;;AAEjB;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,aAAa;IACb,uBAAuB;AAC3B;AACA,eAAe;;AAEf;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,SAAS;IACT,mBAAmB;IACnB,oCAAoC;IACpC,4BAA4B;AAChC;;AAEA;IACI,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,yDAA+D;IAC/D,sBAAsB;IACtB,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;IACrB,gCAAgC;IAChC,8BAA8B;IAC9B,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,gCAAgC;IAChC,qBAAqB;AACzB;;AAEA,eAAe;AACf;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,4CAA4C;AAChD;;AAEA;;IAEI,kBAAkB;IAClB,mBAAmB;AACvB;AACA;;IAEI,UAAU;IACV,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,WAAW;IACX,WAAW;IACX,0BAA0B;AAC9B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,oCAAoC;IACpC,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,qBAAqB;IACrB,aAAa;IACb,kCAAkC;IAClC,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,6BAA6B;IAC7B,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,iBAAiB;IACjB,+BAA+B;IAC/B,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA,gBAAgB;AAChB;IACI,2BAA2B;IAC3B,aAAa;IACb,sCAAsC;IACtC,qBAAqB;IACrB,gBAAgB;IAChB,eAAe;IACf,sCAAsC;AAC1C;;AAEA;IACI;;oBAEgB;IAChB,gBAAgB;IAChB,mBAAmB;IACnB,0CAA0C;IAC1C,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,qBAAqB;IACrB,aAAa;IACb,kCAAkC;IAClC,uBAAuB;IACvB,kBAAkB;AACtB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Koulen&family=Lato:ital,wght@1,300&display=swap');\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n* {\n/* border: 1px solid black; */\n}\n\n:root {\n    --color-1: #134159;\n    --color-2: #591C21;\n    --color-3: #044040;\n    --color-4: #f5f5f4;\n    background-color: var(--color-4);\n    font-family: 'Koulen', cursive;\n}\n\nhtml,\nbody,\n#content {\n    height: 100%;\n}\n\na {\n    color: inherit;\n    text-decoration: none;\n    cursor: pointer;\n    padding: 0 0.3rem;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\n/* ---Header--- */\n\nheader {\n    display: flex;\n    justify-content: space-around;\n    padding: 1rem 8rem;\n    color: var(--color-2);\n    box-shadow: 0px 0px 8px  var(--color-2);\n    z-index: 1;\n}\n\nheader div::after {\n    content:\"\";\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 2px;\n    background: var(--color-2);\n    transform: scaleX(0);\n    transform-origin: right;\n    transition: transform 250ms ease-in;\n}\n\nheader div:hover::after {\n    transform: scaleX(1);\n    transform-origin: left;\n}\n\nheader div{\n    cursor: pointer;\n    font-size: 1.1rem;\n    position: relative;\n}\n\n/* ---Footer--- */\n\nfooter {\n    position: absolute;\n    top: 100%;\n    width: 100%;\n    display: grid;\n    justify-content: center;\n}\n/* ---Home--- */\n\n.home {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n#home-left {\n    display: grid;\n    margin-top: 5rem;\n    gap: 1rem;\n    align-items: center;\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: 1fr auto;\n}\n\n#horizontal-line {\n    border-bottom: 1px solid black;\n    align-self: top;\n}\n\n#home-right {\n    background-image: url(./victoria-shes-UC0HZdUitWY-unsplash.jpg);\n    background-size: cover;\n    background-position: center;\n    border: 1px solid black;\n}\n\nbutton{\n    color: var(--color-4);\n    background-color: var(--color-2);\n    font-family: 'Koulen', cursive;\n    font-size: 1.1rem;\n    padding: 1rem 3rem;\n    border-radius: 3px;\n}\n\nbutton:hover {\n    cursor: pointer;\n    transform: scale(0.95);\n    background-color: var(--color-4);\n    color: var(--color-2);\n}\n\n/* ---Menu--- */\n.menu{\n    padding-top: 2rem;\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    grid-template-rows: repeat(2,auto) 1fr 0.2fr;\n}\n\n#menu-name, \n#about-name {\n    position: relative;\n    margin-bottom: 2rem;\n}\n#menu-name::after,\n#about-name::after {\n    content:\"\";\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 2px;\n    background: var(--color-2);\n}\n\n#menu-container {\n    margin-top: 1rem;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    gap: 2rem;\n    width: 70%;\n    background-color: var(--color-2);\n    color: var(--color-4);\n    padding: 4rem;\n    box-shadow: 0px 4px 15px 1px black;\n    border: 1px solid black;\n    border-radius: 5px;\n}\n\n.menu-item {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-template-rows: auto auto;\n    font-size: 0.9rem;\n    align-items: end;\n}\n.description {\n    font-size: 0.7rem;\n    font-family: 'Lato', sans-serif;\n    align-self: start;\n}\n\n.price {\n    grid-row: 1/2;\n    grid-column: 2/3;\n}\n\n/* ---About--- */\n.about {\n    /* color: var(--color-4); */\n    display: grid;\n    grid-template-rows: auto auto auto 1fr;\n    justify-items: center;\n    margin-top: 2rem;\n    /* gap: 1rem; */\n    /* background-color: var(--color-2); */\n}\n\n#p-about{\n    /* width: 70%;\n    border: 1px solid black;\n    padding: 2rem; */\n    margin-top: 1rem;\n    /* display: grid; */\n    /* grid-template-columns: repeat(2,1fr); */\n    gap: 2rem;\n    width: 50%;\n    background-color: var(--color-2);\n    color: var(--color-4);\n    padding: 4rem;\n    box-shadow: 0px 4px 15px 1px black;\n    border: 1px solid black;\n    border-radius: 5px;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/lorem-ipsum/dist/constants/formats.js":
/*!************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/constants/formats.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FORMATS = exports.FORMAT_PLAIN = exports.FORMAT_HTML = void 0;
var FORMAT_HTML = "html";
exports.FORMAT_HTML = FORMAT_HTML;
var FORMAT_PLAIN = "plain";
exports.FORMAT_PLAIN = FORMAT_PLAIN;
var FORMATS = [FORMAT_HTML, FORMAT_PLAIN];
exports.FORMATS = FORMATS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvZm9ybWF0cy50cyJdLCJuYW1lcyI6WyJGT1JNQVRfSFRNTCIsIkZPUk1BVF9QTEFJTiIsIkZPUk1BVFMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQU1BLFdBQVcsR0FBRyxNQUFwQjs7QUFDQSxJQUFNQyxZQUFZLEdBQUcsT0FBckI7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLENBQUNGLFdBQUQsRUFBY0MsWUFBZCxDQUFoQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBGT1JNQVRfSFRNTCA9IFwiaHRtbFwiO1xyXG5leHBvcnQgY29uc3QgRk9STUFUX1BMQUlOID0gXCJwbGFpblwiO1xyXG5leHBvcnQgY29uc3QgRk9STUFUUyA9IFtGT1JNQVRfSFRNTCwgRk9STUFUX1BMQUlOXTtcclxuZXhwb3J0IHR5cGUgTG9yZW1Gb3JtYXQgPSBcInBsYWluXCIgfCBcImh0bWxcIjtcclxuIl19

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/constants/lineEndings.js":
/*!****************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/constants/lineEndings.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LINE_ENDINGS = void 0;
var LINE_ENDINGS = {
  POSIX: "\n",
  WIN32: "\r\n"
};
exports.LINE_ENDINGS = LINE_ENDINGS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvbGluZUVuZGluZ3MudHMiXSwibmFtZXMiOlsiTElORV9FTkRJTkdTIiwiUE9TSVgiLCJXSU4zMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQzFCQyxFQUFBQSxLQUFLLEVBQUUsSUFEbUI7QUFFMUJDLEVBQUFBLEtBQUssRUFBRTtBQUZtQixDQUFyQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBMSU5FX0VORElOR1MgPSB7XHJcbiAgUE9TSVg6IFwiXFxuXCIsXHJcbiAgV0lOMzI6IFwiXFxyXFxuXCIsXHJcbn07XHJcbiJdfQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/constants/platforms.js":
/*!**************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/constants/platforms.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SUPPORTED_PLATFORMS = void 0;
var SUPPORTED_PLATFORMS = {
  DARWIN: "darwin",
  LINUX: "linux",
  WIN32: "win32"
};
exports.SUPPORTED_PLATFORMS = SUPPORTED_PLATFORMS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvcGxhdGZvcm1zLnRzIl0sIm5hbWVzIjpbIlNVUFBPUlRFRF9QTEFURk9STVMiLCJEQVJXSU4iLCJMSU5VWCIsIldJTjMyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxJQUFNQSxtQkFBbUIsR0FBRztBQUNqQ0MsRUFBQUEsTUFBTSxFQUFFLFFBRHlCO0FBRWpDQyxFQUFBQSxLQUFLLEVBQUUsT0FGMEI7QUFHakNDLEVBQUFBLEtBQUssRUFBRTtBQUgwQixDQUE1QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTVVBQT1JURURfUExBVEZPUk1TID0ge1xyXG4gIERBUldJTjogXCJkYXJ3aW5cIixcclxuICBMSU5VWDogXCJsaW51eFwiLFxyXG4gIFdJTjMyOiBcIndpbjMyXCIsXHJcbn07XHJcbiJdfQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/constants/units.js":
/*!**********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/constants/units.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UNITS = exports.UNIT_PARAGRAPH = exports.UNIT_PARAGRAPHS = exports.UNIT_SENTENCE = exports.UNIT_SENTENCES = exports.UNIT_WORD = exports.UNIT_WORDS = void 0;
var UNIT_WORDS = "words";
exports.UNIT_WORDS = UNIT_WORDS;
var UNIT_WORD = "word";
exports.UNIT_WORD = UNIT_WORD;
var UNIT_SENTENCES = "sentences";
exports.UNIT_SENTENCES = UNIT_SENTENCES;
var UNIT_SENTENCE = "sentence";
exports.UNIT_SENTENCE = UNIT_SENTENCE;
var UNIT_PARAGRAPHS = "paragraphs";
exports.UNIT_PARAGRAPHS = UNIT_PARAGRAPHS;
var UNIT_PARAGRAPH = "paragraph";
exports.UNIT_PARAGRAPH = UNIT_PARAGRAPH;
var UNITS = [UNIT_WORDS, UNIT_WORD, UNIT_SENTENCES, UNIT_SENTENCE, UNIT_PARAGRAPHS, UNIT_PARAGRAPH];
exports.UNITS = UNITS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvdW5pdHMudHMiXSwibmFtZXMiOlsiVU5JVF9XT1JEUyIsIlVOSVRfV09SRCIsIlVOSVRfU0VOVEVOQ0VTIiwiVU5JVF9TRU5URU5DRSIsIlVOSVRfUEFSQUdSQVBIUyIsIlVOSVRfUEFSQUdSQVBIIiwiVU5JVFMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQU1BLFVBQVUsR0FBRyxPQUFuQjs7QUFDQSxJQUFNQyxTQUFTLEdBQUcsTUFBbEI7O0FBQ0EsSUFBTUMsY0FBYyxHQUFHLFdBQXZCOztBQUNBLElBQU1DLGFBQWEsR0FBRyxVQUF0Qjs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsWUFBeEI7O0FBQ0EsSUFBTUMsY0FBYyxHQUFHLFdBQXZCOztBQUNBLElBQU1DLEtBQUssR0FBRyxDQUNuQk4sVUFEbUIsRUFFbkJDLFNBRm1CLEVBR25CQyxjQUhtQixFQUluQkMsYUFKbUIsRUFLbkJDLGVBTG1CLEVBTW5CQyxjQU5tQixDQUFkIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFVOSVRfV09SRFMgPSBcIndvcmRzXCI7XG5leHBvcnQgY29uc3QgVU5JVF9XT1JEID0gXCJ3b3JkXCI7XG5leHBvcnQgY29uc3QgVU5JVF9TRU5URU5DRVMgPSBcInNlbnRlbmNlc1wiO1xuZXhwb3J0IGNvbnN0IFVOSVRfU0VOVEVOQ0UgPSBcInNlbnRlbmNlXCI7XG5leHBvcnQgY29uc3QgVU5JVF9QQVJBR1JBUEhTID0gXCJwYXJhZ3JhcGhzXCI7XG5leHBvcnQgY29uc3QgVU5JVF9QQVJBR1JBUEggPSBcInBhcmFncmFwaFwiO1xuZXhwb3J0IGNvbnN0IFVOSVRTID0gW1xuICBVTklUX1dPUkRTLFxuICBVTklUX1dPUkQsXG4gIFVOSVRfU0VOVEVOQ0VTLFxuICBVTklUX1NFTlRFTkNFLFxuICBVTklUX1BBUkFHUkFQSFMsXG4gIFVOSVRfUEFSQUdSQVBILFxuXTtcbmV4cG9ydCB0eXBlIExvcmVtVW5pdCA9IFwid29yZHNcIiB8IFwid29yZFwiIHwgXCJzZW50ZW5jZXNcIiB8IFwic2VudGVuY2VcIiB8IFwicGFyYWdyYXBoc1wiIHwgXCJwYXJhZ3JhcGhcIjtcbiJdfQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/constants/words.js":
/*!**********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/constants/words.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WORDS = void 0;
var WORDS = ["ad", "adipisicing", "aliqua", "aliquip", "amet", "anim", "aute", "cillum", "commodo", "consectetur", "consequat", "culpa", "cupidatat", "deserunt", "do", "dolor", "dolore", "duis", "ea", "eiusmod", "elit", "enim", "esse", "est", "et", "eu", "ex", "excepteur", "exercitation", "fugiat", "id", "in", "incididunt", "ipsum", "irure", "labore", "laboris", "laborum", "Lorem", "magna", "minim", "mollit", "nisi", "non", "nostrud", "nulla", "occaecat", "officia", "pariatur", "proident", "qui", "quis", "reprehenderit", "sint", "sit", "sunt", "tempor", "ullamco", "ut", "velit", "veniam", "voluptate"];
exports.WORDS = WORDS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvd29yZHMudHMiXSwibmFtZXMiOlsiV09SRFMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQU1BLEtBQUssR0FBRyxDQUNuQixJQURtQixFQUVuQixhQUZtQixFQUduQixRQUhtQixFQUluQixTQUptQixFQUtuQixNQUxtQixFQU1uQixNQU5tQixFQU9uQixNQVBtQixFQVFuQixRQVJtQixFQVNuQixTQVRtQixFQVVuQixhQVZtQixFQVduQixXQVhtQixFQVluQixPQVptQixFQWFuQixXQWJtQixFQWNuQixVQWRtQixFQWVuQixJQWZtQixFQWdCbkIsT0FoQm1CLEVBaUJuQixRQWpCbUIsRUFrQm5CLE1BbEJtQixFQW1CbkIsSUFuQm1CLEVBb0JuQixTQXBCbUIsRUFxQm5CLE1BckJtQixFQXNCbkIsTUF0Qm1CLEVBdUJuQixNQXZCbUIsRUF3Qm5CLEtBeEJtQixFQXlCbkIsSUF6Qm1CLEVBMEJuQixJQTFCbUIsRUEyQm5CLElBM0JtQixFQTRCbkIsV0E1Qm1CLEVBNkJuQixjQTdCbUIsRUE4Qm5CLFFBOUJtQixFQStCbkIsSUEvQm1CLEVBZ0NuQixJQWhDbUIsRUFpQ25CLFlBakNtQixFQWtDbkIsT0FsQ21CLEVBbUNuQixPQW5DbUIsRUFvQ25CLFFBcENtQixFQXFDbkIsU0FyQ21CLEVBc0NuQixTQXRDbUIsRUF1Q25CLE9BdkNtQixFQXdDbkIsT0F4Q21CLEVBeUNuQixPQXpDbUIsRUEwQ25CLFFBMUNtQixFQTJDbkIsTUEzQ21CLEVBNENuQixLQTVDbUIsRUE2Q25CLFNBN0NtQixFQThDbkIsT0E5Q21CLEVBK0NuQixVQS9DbUIsRUFnRG5CLFNBaERtQixFQWlEbkIsVUFqRG1CLEVBa0RuQixVQWxEbUIsRUFtRG5CLEtBbkRtQixFQW9EbkIsTUFwRG1CLEVBcURuQixlQXJEbUIsRUFzRG5CLE1BdERtQixFQXVEbkIsS0F2RG1CLEVBd0RuQixNQXhEbUIsRUF5RG5CLFFBekRtQixFQTBEbkIsU0ExRG1CLEVBMkRuQixJQTNEbUIsRUE0RG5CLE9BNURtQixFQTZEbkIsUUE3RG1CLEVBOERuQixXQTlEbUIsQ0FBZCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBXT1JEUyA9IFtcclxuICBcImFkXCIsXHJcbiAgXCJhZGlwaXNpY2luZ1wiLFxyXG4gIFwiYWxpcXVhXCIsXHJcbiAgXCJhbGlxdWlwXCIsXHJcbiAgXCJhbWV0XCIsXHJcbiAgXCJhbmltXCIsXHJcbiAgXCJhdXRlXCIsXHJcbiAgXCJjaWxsdW1cIixcclxuICBcImNvbW1vZG9cIixcclxuICBcImNvbnNlY3RldHVyXCIsXHJcbiAgXCJjb25zZXF1YXRcIixcclxuICBcImN1bHBhXCIsXHJcbiAgXCJjdXBpZGF0YXRcIixcclxuICBcImRlc2VydW50XCIsXHJcbiAgXCJkb1wiLFxyXG4gIFwiZG9sb3JcIixcclxuICBcImRvbG9yZVwiLFxyXG4gIFwiZHVpc1wiLFxyXG4gIFwiZWFcIixcclxuICBcImVpdXNtb2RcIixcclxuICBcImVsaXRcIixcclxuICBcImVuaW1cIixcclxuICBcImVzc2VcIixcclxuICBcImVzdFwiLFxyXG4gIFwiZXRcIixcclxuICBcImV1XCIsXHJcbiAgXCJleFwiLFxyXG4gIFwiZXhjZXB0ZXVyXCIsXHJcbiAgXCJleGVyY2l0YXRpb25cIixcclxuICBcImZ1Z2lhdFwiLFxyXG4gIFwiaWRcIixcclxuICBcImluXCIsXHJcbiAgXCJpbmNpZGlkdW50XCIsXHJcbiAgXCJpcHN1bVwiLFxyXG4gIFwiaXJ1cmVcIixcclxuICBcImxhYm9yZVwiLFxyXG4gIFwibGFib3Jpc1wiLFxyXG4gIFwibGFib3J1bVwiLFxyXG4gIFwiTG9yZW1cIixcclxuICBcIm1hZ25hXCIsXHJcbiAgXCJtaW5pbVwiLFxyXG4gIFwibW9sbGl0XCIsXHJcbiAgXCJuaXNpXCIsXHJcbiAgXCJub25cIixcclxuICBcIm5vc3RydWRcIixcclxuICBcIm51bGxhXCIsXHJcbiAgXCJvY2NhZWNhdFwiLFxyXG4gIFwib2ZmaWNpYVwiLFxyXG4gIFwicGFyaWF0dXJcIixcclxuICBcInByb2lkZW50XCIsXHJcbiAgXCJxdWlcIixcclxuICBcInF1aXNcIixcclxuICBcInJlcHJlaGVuZGVyaXRcIixcclxuICBcInNpbnRcIixcclxuICBcInNpdFwiLFxyXG4gIFwic3VudFwiLFxyXG4gIFwidGVtcG9yXCIsXHJcbiAgXCJ1bGxhbWNvXCIsXHJcbiAgXCJ1dFwiLFxyXG4gIFwidmVsaXRcIixcclxuICBcInZlbmlhbVwiLFxyXG4gIFwidm9sdXB0YXRlXCIsXHJcbl07XHJcbiJdfQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "LoremIpsum", ({
  enumerable: true,
  get: function get() {
    return _LoremIpsum["default"];
  }
}));
exports.loremIpsum = void 0;

var _formats = __webpack_require__(/*! ./constants/formats */ "./node_modules/lorem-ipsum/dist/constants/formats.js");

var _units = __webpack_require__(/*! ./constants/units */ "./node_modules/lorem-ipsum/dist/constants/units.js");

var _words = __webpack_require__(/*! ./constants/words */ "./node_modules/lorem-ipsum/dist/constants/words.js");

var _LoremIpsum = _interopRequireDefault(__webpack_require__(/*! ./lib/LoremIpsum */ "./node_modules/lorem-ipsum/dist/lib/LoremIpsum.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loremIpsum = function loremIpsum() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$count = _ref.count,
      count = _ref$count === void 0 ? 1 : _ref$count,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? _formats.FORMAT_PLAIN : _ref$format,
      _ref$paragraphLowerBo = _ref.paragraphLowerBound,
      paragraphLowerBound = _ref$paragraphLowerBo === void 0 ? 3 : _ref$paragraphLowerBo,
      _ref$paragraphUpperBo = _ref.paragraphUpperBound,
      paragraphUpperBound = _ref$paragraphUpperBo === void 0 ? 7 : _ref$paragraphUpperBo,
      random = _ref.random,
      _ref$sentenceLowerBou = _ref.sentenceLowerBound,
      sentenceLowerBound = _ref$sentenceLowerBou === void 0 ? 5 : _ref$sentenceLowerBou,
      _ref$sentenceUpperBou = _ref.sentenceUpperBound,
      sentenceUpperBound = _ref$sentenceUpperBou === void 0 ? 15 : _ref$sentenceUpperBou,
      _ref$units = _ref.units,
      units = _ref$units === void 0 ? _units.UNIT_SENTENCES : _ref$units,
      _ref$words = _ref.words,
      words = _ref$words === void 0 ? _words.WORDS : _ref$words,
      _ref$suffix = _ref.suffix,
      suffix = _ref$suffix === void 0 ? "" : _ref$suffix;

  var options = {
    random: random,
    sentencesPerParagraph: {
      max: paragraphUpperBound,
      min: paragraphLowerBound
    },
    words: words,
    wordsPerSentence: {
      max: sentenceUpperBound,
      min: sentenceLowerBound
    }
  };
  var lorem = new _LoremIpsum["default"](options, format, suffix);

  switch (units) {
    case _units.UNIT_PARAGRAPHS:
    case _units.UNIT_PARAGRAPH:
      return lorem.generateParagraphs(count);

    case _units.UNIT_SENTENCES:
    case _units.UNIT_SENTENCE:
      return lorem.generateSentences(count);

    case _units.UNIT_WORDS:
    case _units.UNIT_WORD:
      return lorem.generateWords(count);

    default:
      return "";
  }
};

exports.loremIpsum = loremIpsum;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJsb3JlbUlwc3VtIiwiY291bnQiLCJmb3JtYXQiLCJGT1JNQVRfUExBSU4iLCJwYXJhZ3JhcGhMb3dlckJvdW5kIiwicGFyYWdyYXBoVXBwZXJCb3VuZCIsInJhbmRvbSIsInNlbnRlbmNlTG93ZXJCb3VuZCIsInNlbnRlbmNlVXBwZXJCb3VuZCIsInVuaXRzIiwiVU5JVF9TRU5URU5DRVMiLCJ3b3JkcyIsIldPUkRTIiwic3VmZml4Iiwib3B0aW9ucyIsInNlbnRlbmNlc1BlclBhcmFncmFwaCIsIm1heCIsIm1pbiIsIndvcmRzUGVyU2VudGVuY2UiLCJsb3JlbSIsIkxvcmVtSXBzdW0iLCJVTklUX1BBUkFHUkFQSFMiLCJVTklUX1BBUkFHUkFQSCIsImdlbmVyYXRlUGFyYWdyYXBocyIsIlVOSVRfU0VOVEVOQ0UiLCJnZW5lcmF0ZVNlbnRlbmNlcyIsIlVOSVRfV09SRFMiLCJVTklUX1dPUkQiLCJnZW5lcmF0ZVdvcmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBU0E7O0FBRUE7Ozs7QUFlQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQVdtQjtBQUFBLGlGQUFmLEVBQWU7QUFBQSx3QkFWcENDLEtBVW9DO0FBQUEsTUFWcENBLEtBVW9DLDJCQVY1QixDQVU0QjtBQUFBLHlCQVRwQ0MsTUFTb0M7QUFBQSxNQVRwQ0EsTUFTb0MsNEJBVDNCQyxxQkFTMkI7QUFBQSxtQ0FScENDLG1CQVFvQztBQUFBLE1BUnBDQSxtQkFRb0Msc0NBUmQsQ0FRYztBQUFBLG1DQVBwQ0MsbUJBT29DO0FBQUEsTUFQcENBLG1CQU9vQyxzQ0FQZCxDQU9jO0FBQUEsTUFOcENDLE1BTW9DLFFBTnBDQSxNQU1vQztBQUFBLG1DQUxwQ0Msa0JBS29DO0FBQUEsTUFMcENBLGtCQUtvQyxzQ0FMZixDQUtlO0FBQUEsbUNBSnBDQyxrQkFJb0M7QUFBQSxNQUpwQ0Esa0JBSW9DLHNDQUpmLEVBSWU7QUFBQSx3QkFIcENDLEtBR29DO0FBQUEsTUFIcENBLEtBR29DLDJCQUg1QkMscUJBRzRCO0FBQUEsd0JBRnBDQyxLQUVvQztBQUFBLE1BRnBDQSxLQUVvQywyQkFGNUJDLFlBRTRCO0FBQUEseUJBRHBDQyxNQUNvQztBQUFBLE1BRHBDQSxNQUNvQyw0QkFEM0IsRUFDMkI7O0FBQ3BDLE1BQU1DLE9BQU8sR0FBRztBQUNkUixJQUFBQSxNQUFNLEVBQU5BLE1BRGM7QUFFZFMsSUFBQUEscUJBQXFCLEVBQUU7QUFDckJDLE1BQUFBLEdBQUcsRUFBRVgsbUJBRGdCO0FBRXJCWSxNQUFBQSxHQUFHLEVBQUViO0FBRmdCLEtBRlQ7QUFNZE8sSUFBQUEsS0FBSyxFQUFMQSxLQU5jO0FBT2RPLElBQUFBLGdCQUFnQixFQUFFO0FBQ2hCRixNQUFBQSxHQUFHLEVBQUVSLGtCQURXO0FBRWhCUyxNQUFBQSxHQUFHLEVBQUVWO0FBRlc7QUFQSixHQUFoQjtBQWFBLE1BQU1ZLEtBQWlCLEdBQUcsSUFBSUMsc0JBQUosQ0FBZU4sT0FBZixFQUF3QlosTUFBeEIsRUFBZ0NXLE1BQWhDLENBQTFCOztBQUVBLFVBQVFKLEtBQVI7QUFDRSxTQUFLWSxzQkFBTDtBQUNBLFNBQUtDLHFCQUFMO0FBQ0UsYUFBT0gsS0FBSyxDQUFDSSxrQkFBTixDQUF5QnRCLEtBQXpCLENBQVA7O0FBQ0YsU0FBS1MscUJBQUw7QUFDQSxTQUFLYyxvQkFBTDtBQUNFLGFBQU9MLEtBQUssQ0FBQ00saUJBQU4sQ0FBd0J4QixLQUF4QixDQUFQOztBQUNGLFNBQUt5QixpQkFBTDtBQUNBLFNBQUtDLGdCQUFMO0FBQ0UsYUFBT1IsS0FBSyxDQUFDUyxhQUFOLENBQW9CM0IsS0FBcEIsQ0FBUDs7QUFDRjtBQUNFLGFBQU8sRUFBUDtBQVhKO0FBYUQsQ0F4Q0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb3JlbUZvcm1hdCwgRk9STUFUX1BMQUlOIH0gZnJvbSBcIi4vY29uc3RhbnRzL2Zvcm1hdHNcIjtcclxuaW1wb3J0IHtcclxuICBMb3JlbVVuaXQsXHJcbiAgVU5JVF9QQVJBR1JBUEgsXHJcbiAgVU5JVF9QQVJBR1JBUEhTLFxyXG4gIFVOSVRfU0VOVEVOQ0VTLFxyXG4gIFVOSVRfU0VOVEVOQ0UsXHJcbiAgVU5JVF9XT1JEUyxcclxuICBVTklUX1dPUkQsXHJcbn0gZnJvbSBcIi4vY29uc3RhbnRzL3VuaXRzXCI7XHJcbmltcG9ydCB7IFdPUkRTIH0gZnJvbSBcIi4vY29uc3RhbnRzL3dvcmRzXCI7XHJcbmltcG9ydCB7IElQcm5nIH0gZnJvbSBcIi4vbGliL2dlbmVyYXRvclwiO1xyXG5pbXBvcnQgTG9yZW1JcHN1bSBmcm9tIFwiLi9saWIvTG9yZW1JcHN1bVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTG9yZW1JcHN1bVBhcmFtcyB7XHJcbiAgY291bnQ/OiBudW1iZXI7XHJcbiAgZm9ybWF0PzogTG9yZW1Gb3JtYXQ7XHJcbiAgcGFyYWdyYXBoTG93ZXJCb3VuZD86IG51bWJlcjtcclxuICBwYXJhZ3JhcGhVcHBlckJvdW5kPzogbnVtYmVyO1xyXG4gIHJhbmRvbT86IElQcm5nO1xyXG4gIHNlbnRlbmNlTG93ZXJCb3VuZD86IG51bWJlcjtcclxuICBzZW50ZW5jZVVwcGVyQm91bmQ/OiBudW1iZXI7XHJcbiAgdW5pdHM/OiBMb3JlbVVuaXQ7XHJcbiAgd29yZHM/OiBzdHJpbmdbXTtcclxuICBzdWZmaXg/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IGxvcmVtSXBzdW0gPSAoe1xyXG4gIGNvdW50ID0gMSxcclxuICBmb3JtYXQgPSBGT1JNQVRfUExBSU4sXHJcbiAgcGFyYWdyYXBoTG93ZXJCb3VuZCA9IDMsXHJcbiAgcGFyYWdyYXBoVXBwZXJCb3VuZCA9IDcsXHJcbiAgcmFuZG9tLFxyXG4gIHNlbnRlbmNlTG93ZXJCb3VuZCA9IDUsXHJcbiAgc2VudGVuY2VVcHBlckJvdW5kID0gMTUsXHJcbiAgdW5pdHMgPSBVTklUX1NFTlRFTkNFUyxcclxuICB3b3JkcyA9IFdPUkRTLFxyXG4gIHN1ZmZpeCA9IFwiXCIsXHJcbn06IElMb3JlbUlwc3VtUGFyYW1zID0ge30pOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICByYW5kb20sXHJcbiAgICBzZW50ZW5jZXNQZXJQYXJhZ3JhcGg6IHtcclxuICAgICAgbWF4OiBwYXJhZ3JhcGhVcHBlckJvdW5kLFxyXG4gICAgICBtaW46IHBhcmFncmFwaExvd2VyQm91bmQsXHJcbiAgICB9LFxyXG4gICAgd29yZHMsXHJcbiAgICB3b3Jkc1BlclNlbnRlbmNlOiB7XHJcbiAgICAgIG1heDogc2VudGVuY2VVcHBlckJvdW5kLFxyXG4gICAgICBtaW46IHNlbnRlbmNlTG93ZXJCb3VuZCxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9yZW06IExvcmVtSXBzdW0gPSBuZXcgTG9yZW1JcHN1bShvcHRpb25zLCBmb3JtYXQsIHN1ZmZpeCk7XHJcblxyXG4gIHN3aXRjaCAodW5pdHMpIHtcclxuICAgIGNhc2UgVU5JVF9QQVJBR1JBUEhTOlxyXG4gICAgY2FzZSBVTklUX1BBUkFHUkFQSDpcclxuICAgICAgcmV0dXJuIGxvcmVtLmdlbmVyYXRlUGFyYWdyYXBocyhjb3VudCk7XHJcbiAgICBjYXNlIFVOSVRfU0VOVEVOQ0VTOlxyXG4gICAgY2FzZSBVTklUX1NFTlRFTkNFOlxyXG4gICAgICByZXR1cm4gbG9yZW0uZ2VuZXJhdGVTZW50ZW5jZXMoY291bnQpO1xyXG4gICAgY2FzZSBVTklUX1dPUkRTOlxyXG4gICAgY2FzZSBVTklUX1dPUkQ6XHJcbiAgICAgIHJldHVybiBsb3JlbS5nZW5lcmF0ZVdvcmRzKGNvdW50KTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IGxvcmVtSXBzdW0sIExvcmVtSXBzdW0gfTtcclxuIl19

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/lib/LoremIpsum.js":
/*!*********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/lib/LoremIpsum.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _formats = __webpack_require__(/*! ../constants/formats */ "./node_modules/lorem-ipsum/dist/constants/formats.js");

var _lineEndings = __webpack_require__(/*! ../constants/lineEndings */ "./node_modules/lorem-ipsum/dist/constants/lineEndings.js");

var _generator = _interopRequireDefault(__webpack_require__(/*! ../lib/generator */ "./node_modules/lorem-ipsum/dist/lib/generator.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/lorem-ipsum/dist/util/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LoremIpsum = /*#__PURE__*/function () {
  function LoremIpsum() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _formats.FORMAT_PLAIN;
    var suffix = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, LoremIpsum);

    this.format = format;
    this.suffix = suffix;

    _defineProperty(this, "generator", void 0);

    if (_formats.FORMATS.indexOf(format.toLowerCase()) === -1) {
      throw new Error("".concat(format, " is an invalid format. Please use ").concat(_formats.FORMATS.join(" or "), "."));
    }

    this.generator = new _generator["default"](options);
  }

  _createClass(LoremIpsum, [{
    key: "getLineEnding",
    value: function getLineEnding() {
      if (this.suffix) {
        return this.suffix;
      }

      if (!(0, _util.isReactNative)() && (0, _util.isNode)() && (0, _util.isWindows)()) {
        return _lineEndings.LINE_ENDINGS.WIN32;
      }

      return _lineEndings.LINE_ENDINGS.POSIX;
    }
  }, {
    key: "formatString",
    value: function formatString(str) {
      if (this.format === _formats.FORMAT_HTML) {
        return "<p>".concat(str, "</p>");
      }

      return str;
    }
  }, {
    key: "formatStrings",
    value: function formatStrings(strings) {
      var _this = this;

      return strings.map(function (str) {
        return _this.formatString(str);
      });
    }
  }, {
    key: "generateWords",
    value: function generateWords(num) {
      return this.formatString(this.generator.generateRandomWords(num));
    }
  }, {
    key: "generateSentences",
    value: function generateSentences(num) {
      return this.formatString(this.generator.generateRandomParagraph(num));
    }
  }, {
    key: "generateParagraphs",
    value: function generateParagraphs(num) {
      var makeString = this.generator.generateRandomParagraph.bind(this.generator);
      return this.formatStrings((0, _util.makeArrayOfStrings)(num, makeString)).join(this.getLineEnding());
    }
  }]);

  return LoremIpsum;
}();

var _default = LoremIpsum;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvTG9yZW1JcHN1bS50cyJdLCJuYW1lcyI6WyJMb3JlbUlwc3VtIiwib3B0aW9ucyIsImZvcm1hdCIsIkZPUk1BVF9QTEFJTiIsInN1ZmZpeCIsIkZPUk1BVFMiLCJpbmRleE9mIiwidG9Mb3dlckNhc2UiLCJFcnJvciIsImpvaW4iLCJnZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJMSU5FX0VORElOR1MiLCJXSU4zMiIsIlBPU0lYIiwic3RyIiwiRk9STUFUX0hUTUwiLCJzdHJpbmdzIiwibWFwIiwiZm9ybWF0U3RyaW5nIiwibnVtIiwiZ2VuZXJhdGVSYW5kb21Xb3JkcyIsImdlbmVyYXRlUmFuZG9tUGFyYWdyYXBoIiwibWFrZVN0cmluZyIsImJpbmQiLCJmb3JtYXRTdHJpbmdzIiwiZ2V0TGluZUVuZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsVTtBQUdKLHdCQUlFO0FBQUEsUUFIQUMsT0FHQSx1RUFINkIsRUFHN0I7QUFBQSxRQUZPQyxNQUVQLHVFQUY2QkMscUJBRTdCO0FBQUEsUUFET0MsTUFDUDs7QUFBQTs7QUFBQSxTQUZPRixNQUVQLEdBRk9BLE1BRVA7QUFBQSxTQURPRSxNQUNQLEdBRE9BLE1BQ1A7O0FBQUE7O0FBQ0EsUUFBSUMsaUJBQVFDLE9BQVIsQ0FBZ0JKLE1BQU0sQ0FBQ0ssV0FBUCxFQUFoQixNQUEwQyxDQUFDLENBQS9DLEVBQWtEO0FBQ2hELFlBQU0sSUFBSUMsS0FBSixXQUNETixNQURDLCtDQUMwQ0csaUJBQVFJLElBQVIsQ0FBYSxNQUFiLENBRDFDLE9BQU47QUFHRDs7QUFDRCxTQUFLQyxTQUFMLEdBQWlCLElBQUlDLHFCQUFKLENBQWNWLE9BQWQsQ0FBakI7QUFDRDs7OztXQUVELHlCQUF1QjtBQUNyQixVQUFJLEtBQUtHLE1BQVQsRUFBaUI7QUFDZixlQUFPLEtBQUtBLE1BQVo7QUFDRDs7QUFFRCxVQUFJLENBQUMsMEJBQUQsSUFBb0IsbUJBQXBCLElBQWdDLHNCQUFwQyxFQUFpRDtBQUMvQyxlQUFPUSwwQkFBYUMsS0FBcEI7QUFDRDs7QUFFRCxhQUFPRCwwQkFBYUUsS0FBcEI7QUFDRDs7O1dBRUQsc0JBQW9CQyxHQUFwQixFQUF5QztBQUN2QyxVQUFJLEtBQUtiLE1BQUwsS0FBZ0JjLG9CQUFwQixFQUFpQztBQUMvQiw0QkFBYUQsR0FBYjtBQUNEOztBQUNELGFBQU9BLEdBQVA7QUFDRDs7O1dBRUQsdUJBQXFCRSxPQUFyQixFQUFrRDtBQUFBOztBQUNoRCxhQUFPQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFDSCxHQUFEO0FBQUEsZUFBUyxLQUFJLENBQUNJLFlBQUwsQ0FBa0JKLEdBQWxCLENBQVQ7QUFBQSxPQUFaLENBQVA7QUFDRDs7O1dBRUQsdUJBQXFCSyxHQUFyQixFQUEyQztBQUN6QyxhQUFPLEtBQUtELFlBQUwsQ0FBa0IsS0FBS1QsU0FBTCxDQUFlVyxtQkFBZixDQUFtQ0QsR0FBbkMsQ0FBbEIsQ0FBUDtBQUNEOzs7V0FFRCwyQkFBeUJBLEdBQXpCLEVBQStDO0FBQzdDLGFBQU8sS0FBS0QsWUFBTCxDQUFrQixLQUFLVCxTQUFMLENBQWVZLHVCQUFmLENBQXVDRixHQUF2QyxDQUFsQixDQUFQO0FBQ0Q7OztXQUVELDRCQUEwQkEsR0FBMUIsRUFBK0M7QUFDN0MsVUFBTUcsVUFBVSxHQUFHLEtBQUtiLFNBQUwsQ0FBZVksdUJBQWYsQ0FBdUNFLElBQXZDLENBQ2pCLEtBQUtkLFNBRFksQ0FBbkI7QUFHQSxhQUFPLEtBQUtlLGFBQUwsQ0FBbUIsOEJBQW1CTCxHQUFuQixFQUF3QkcsVUFBeEIsQ0FBbkIsRUFBd0RkLElBQXhELENBQ0wsS0FBS2lCLGFBQUwsRUFESyxDQUFQO0FBR0Q7Ozs7OztlQUdZMUIsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZPUk1BVF9IVE1MLCBGT1JNQVRfUExBSU4sIEZPUk1BVFMsIExvcmVtRm9ybWF0IH0gZnJvbSBcIi4uL2NvbnN0YW50cy9mb3JtYXRzXCI7XHJcbmltcG9ydCB7IExJTkVfRU5ESU5HUyB9IGZyb20gXCIuLi9jb25zdGFudHMvbGluZUVuZGluZ3NcIjtcclxuaW1wb3J0IEdlbmVyYXRvciwgeyBJR2VuZXJhdG9yT3B0aW9ucyB9IGZyb20gXCIuLi9saWIvZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IGlzTm9kZSwgaXNSZWFjdE5hdGl2ZSwgaXNXaW5kb3dzLCBtYWtlQXJyYXlPZlN0cmluZ3MgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5cclxuY2xhc3MgTG9yZW1JcHN1bSB7XHJcbiAgcHVibGljIGdlbmVyYXRvcjogR2VuZXJhdG9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG9wdGlvbnM6IElHZW5lcmF0b3JPcHRpb25zID0ge30sXHJcbiAgICBwdWJsaWMgZm9ybWF0OiBMb3JlbUZvcm1hdCA9IEZPUk1BVF9QTEFJTixcclxuICAgIHB1YmxpYyBzdWZmaXg/OiBzdHJpbmcsXHJcbiAgKSB7XHJcbiAgICBpZiAoRk9STUFUUy5pbmRleE9mKGZvcm1hdC50b0xvd2VyQ2FzZSgpKSA9PT0gLTEpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIGAke2Zvcm1hdH0gaXMgYW4gaW52YWxpZCBmb3JtYXQuIFBsZWFzZSB1c2UgJHtGT1JNQVRTLmpvaW4oXCIgb3IgXCIpfS5gLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nZW5lcmF0b3IgPSBuZXcgR2VuZXJhdG9yKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExpbmVFbmRpbmcoKSB7XHJcbiAgICBpZiAodGhpcy5zdWZmaXgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3VmZml4O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghaXNSZWFjdE5hdGl2ZSgpICYmIGlzTm9kZSgpICYmIGlzV2luZG93cygpKSB7XHJcbiAgICAgIHJldHVybiBMSU5FX0VORElOR1MuV0lOMzI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIExJTkVfRU5ESU5HUy5QT1NJWDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmb3JtYXRTdHJpbmcoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0ID09PSBGT1JNQVRfSFRNTCkge1xyXG4gICAgICByZXR1cm4gYDxwPiR7c3RyfTwvcD5gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmb3JtYXRTdHJpbmdzKHN0cmluZ3M6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHN0cmluZ3MubWFwKChzdHIpID0+IHRoaXMuZm9ybWF0U3RyaW5nKHN0cikpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdlbmVyYXRlV29yZHMobnVtPzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm1hdFN0cmluZyh0aGlzLmdlbmVyYXRvci5nZW5lcmF0ZVJhbmRvbVdvcmRzKG51bSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdlbmVyYXRlU2VudGVuY2VzKG51bT86IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtYXRTdHJpbmcodGhpcy5nZW5lcmF0b3IuZ2VuZXJhdGVSYW5kb21QYXJhZ3JhcGgobnVtKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2VuZXJhdGVQYXJhZ3JhcGhzKG51bTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG1ha2VTdHJpbmcgPSB0aGlzLmdlbmVyYXRvci5nZW5lcmF0ZVJhbmRvbVBhcmFncmFwaC5iaW5kKFxyXG4gICAgICB0aGlzLmdlbmVyYXRvcixcclxuICAgICk7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtYXRTdHJpbmdzKG1ha2VBcnJheU9mU3RyaW5ncyhudW0sIG1ha2VTdHJpbmcpKS5qb2luKFxyXG4gICAgICB0aGlzLmdldExpbmVFbmRpbmcoKSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb3JlbUlwc3VtO1xyXG4iXX0=

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/lib/generator.js":
/*!********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/lib/generator.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _words = __webpack_require__(/*! ../constants/words */ "./node_modules/lorem-ipsum/dist/constants/words.js");

var _util = __webpack_require__(/*! ../util */ "./node_modules/lorem-ipsum/dist/util/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Generator = /*#__PURE__*/function () {
  function Generator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$sentencesPerPara = _ref.sentencesPerParagraph,
        sentencesPerParagraph = _ref$sentencesPerPara === void 0 ? {
      max: 7,
      min: 3
    } : _ref$sentencesPerPara,
        _ref$wordsPerSentence = _ref.wordsPerSentence,
        wordsPerSentence = _ref$wordsPerSentence === void 0 ? {
      max: 15,
      min: 5
    } : _ref$wordsPerSentence,
        random = _ref.random,
        seed = _ref.seed,
        _ref$words = _ref.words,
        words = _ref$words === void 0 ? _words.WORDS : _ref$words;

    _classCallCheck(this, Generator);

    _defineProperty(this, "sentencesPerParagraph", void 0);

    _defineProperty(this, "wordsPerSentence", void 0);

    _defineProperty(this, "random", void 0);

    _defineProperty(this, "words", void 0);

    if (sentencesPerParagraph.min > sentencesPerParagraph.max) {
      throw new Error("Minimum number of sentences per paragraph (".concat(sentencesPerParagraph.min, ") cannot exceed maximum (").concat(sentencesPerParagraph.max, ")."));
    }

    if (wordsPerSentence.min > wordsPerSentence.max) {
      throw new Error("Minimum number of words per sentence (".concat(wordsPerSentence.min, ") cannot exceed maximum (").concat(wordsPerSentence.max, ")."));
    }

    this.sentencesPerParagraph = sentencesPerParagraph;
    this.words = words;
    this.wordsPerSentence = wordsPerSentence;
    this.random = random || Math.random;
  }

  _createClass(Generator, [{
    key: "generateRandomInteger",
    value: function generateRandomInteger(min, max) {
      return Math.floor(this.random() * (max - min + 1) + min);
    }
  }, {
    key: "generateRandomWords",
    value: function generateRandomWords(num) {
      var _this = this;

      var _this$wordsPerSentenc = this.wordsPerSentence,
          min = _this$wordsPerSentenc.min,
          max = _this$wordsPerSentenc.max;
      var length = num || this.generateRandomInteger(min, max);
      return (0, _util.makeArrayOfLength)(length).reduce(function (accumulator, index) {
        return "".concat(_this.pluckRandomWord(), " ").concat(accumulator);
      }, "").trim();
    }
  }, {
    key: "generateRandomSentence",
    value: function generateRandomSentence(num) {
      return "".concat((0, _util.capitalize)(this.generateRandomWords(num)), ".");
    }
  }, {
    key: "generateRandomParagraph",
    value: function generateRandomParagraph(num) {
      var _this2 = this;

      var _this$sentencesPerPar = this.sentencesPerParagraph,
          min = _this$sentencesPerPar.min,
          max = _this$sentencesPerPar.max;
      var length = num || this.generateRandomInteger(min, max);
      return (0, _util.makeArrayOfLength)(length).reduce(function (accumulator, index) {
        return "".concat(_this2.generateRandomSentence(), " ").concat(accumulator);
      }, "").trim();
    }
  }, {
    key: "pluckRandomWord",
    value: function pluckRandomWord() {
      var min = 0;
      var max = this.words.length - 1;
      var index = this.generateRandomInteger(min, max);
      return this.words[index];
    }
  }]);

  return Generator;
}();

var _default = Generator;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvZ2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbIkdlbmVyYXRvciIsInNlbnRlbmNlc1BlclBhcmFncmFwaCIsIm1heCIsIm1pbiIsIndvcmRzUGVyU2VudGVuY2UiLCJyYW5kb20iLCJzZWVkIiwid29yZHMiLCJXT1JEUyIsIkVycm9yIiwiTWF0aCIsImZsb29yIiwibnVtIiwibGVuZ3RoIiwiZ2VuZXJhdGVSYW5kb21JbnRlZ2VyIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJpbmRleCIsInBsdWNrUmFuZG9tV29yZCIsInRyaW0iLCJnZW5lcmF0ZVJhbmRvbVdvcmRzIiwiZ2VuZXJhdGVSYW5kb21TZW50ZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7O0lBdUJNQSxTO0FBTUosdUJBTTJCO0FBQUEsbUZBQUosRUFBSTtBQUFBLHFDQUx6QkMscUJBS3lCO0FBQUEsUUFMekJBLHFCQUt5QixzQ0FMRDtBQUFFQyxNQUFBQSxHQUFHLEVBQUUsQ0FBUDtBQUFVQyxNQUFBQSxHQUFHLEVBQUU7QUFBZixLQUtDO0FBQUEscUNBSnpCQyxnQkFJeUI7QUFBQSxRQUp6QkEsZ0JBSXlCLHNDQUpOO0FBQUVGLE1BQUFBLEdBQUcsRUFBRSxFQUFQO0FBQVdDLE1BQUFBLEdBQUcsRUFBRTtBQUFoQixLQUlNO0FBQUEsUUFIekJFLE1BR3lCLFFBSHpCQSxNQUd5QjtBQUFBLFFBRnpCQyxJQUV5QixRQUZ6QkEsSUFFeUI7QUFBQSwwQkFEekJDLEtBQ3lCO0FBQUEsUUFEekJBLEtBQ3lCLDJCQURqQkMsWUFDaUI7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ3pCLFFBQUlQLHFCQUFxQixDQUFDRSxHQUF0QixHQUE0QkYscUJBQXFCLENBQUNDLEdBQXRELEVBQTJEO0FBQ3pELFlBQU0sSUFBSU8sS0FBSixzREFFRlIscUJBQXFCLENBQUNFLEdBRnBCLHNDQUd3QkYscUJBQXFCLENBQUNDLEdBSDlDLFFBQU47QUFLRDs7QUFFRCxRQUFJRSxnQkFBZ0IsQ0FBQ0QsR0FBakIsR0FBdUJDLGdCQUFnQixDQUFDRixHQUE1QyxFQUFpRDtBQUMvQyxZQUFNLElBQUlPLEtBQUosaURBRUZMLGdCQUFnQixDQUFDRCxHQUZmLHNDQUd3QkMsZ0JBQWdCLENBQUNGLEdBSHpDLFFBQU47QUFLRDs7QUFFRCxTQUFLRCxxQkFBTCxHQUE2QkEscUJBQTdCO0FBQ0EsU0FBS00sS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0gsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBTSxJQUFJSyxJQUFJLENBQUNMLE1BQTdCO0FBQ0Q7Ozs7V0FFRCwrQkFBNkJGLEdBQTdCLEVBQTBDRCxHQUExQyxFQUErRDtBQUM3RCxhQUFPUSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLTixNQUFMLE1BQWlCSCxHQUFHLEdBQUdDLEdBQU4sR0FBWSxDQUE3QixJQUFrQ0EsR0FBN0MsQ0FBUDtBQUNEOzs7V0FFRCw2QkFBMkJTLEdBQTNCLEVBQWlEO0FBQUE7O0FBQy9DLGtDQUFxQixLQUFLUixnQkFBMUI7QUFBQSxVQUFRRCxHQUFSLHlCQUFRQSxHQUFSO0FBQUEsVUFBYUQsR0FBYix5QkFBYUEsR0FBYjtBQUNBLFVBQU1XLE1BQU0sR0FBR0QsR0FBRyxJQUFJLEtBQUtFLHFCQUFMLENBQTJCWCxHQUEzQixFQUFnQ0QsR0FBaEMsQ0FBdEI7QUFDQSxhQUFPLDZCQUFrQlcsTUFBbEIsRUFDSkUsTUFESSxDQUNHLFVBQUNDLFdBQUQsRUFBc0JDLEtBQXRCLEVBQWdEO0FBQ3RELHlCQUFVLEtBQUksQ0FBQ0MsZUFBTCxFQUFWLGNBQW9DRixXQUFwQztBQUNELE9BSEksRUFHRixFQUhFLEVBSUpHLElBSkksRUFBUDtBQUtEOzs7V0FFRCxnQ0FBOEJQLEdBQTlCLEVBQW9EO0FBQ2xELHVCQUFVLHNCQUFXLEtBQUtRLG1CQUFMLENBQXlCUixHQUF6QixDQUFYLENBQVY7QUFDRDs7O1dBRUQsaUNBQStCQSxHQUEvQixFQUFxRDtBQUFBOztBQUNuRCxrQ0FBcUIsS0FBS1gscUJBQTFCO0FBQUEsVUFBUUUsR0FBUix5QkFBUUEsR0FBUjtBQUFBLFVBQWFELEdBQWIseUJBQWFBLEdBQWI7QUFDQSxVQUFNVyxNQUFNLEdBQUdELEdBQUcsSUFBSSxLQUFLRSxxQkFBTCxDQUEyQlgsR0FBM0IsRUFBZ0NELEdBQWhDLENBQXRCO0FBQ0EsYUFBTyw2QkFBa0JXLE1BQWxCLEVBQ0pFLE1BREksQ0FDRyxVQUFDQyxXQUFELEVBQXNCQyxLQUF0QixFQUFnRDtBQUN0RCx5QkFBVSxNQUFJLENBQUNJLHNCQUFMLEVBQVYsY0FBMkNMLFdBQTNDO0FBQ0QsT0FISSxFQUdGLEVBSEUsRUFJSkcsSUFKSSxFQUFQO0FBS0Q7OztXQUVELDJCQUFpQztBQUMvQixVQUFNaEIsR0FBRyxHQUFHLENBQVo7QUFDQSxVQUFNRCxHQUFHLEdBQUcsS0FBS0ssS0FBTCxDQUFXTSxNQUFYLEdBQW9CLENBQWhDO0FBQ0EsVUFBTUksS0FBSyxHQUFHLEtBQUtILHFCQUFMLENBQTJCWCxHQUEzQixFQUFnQ0QsR0FBaEMsQ0FBZDtBQUNBLGFBQU8sS0FBS0ssS0FBTCxDQUFXVSxLQUFYLENBQVA7QUFDRDs7Ozs7O2VBR1lqQixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV09SRFMgfSBmcm9tIFwiLi4vY29uc3RhbnRzL3dvcmRzXCI7XHJcbmltcG9ydCB7IGNhcGl0YWxpemUsIG1ha2VBcnJheU9mTGVuZ3RoIH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJvdW5kcyB7XHJcbiAgbWluOiBudW1iZXI7XHJcbiAgbWF4OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIElQcm5nID0gKCkgPT4gbnVtYmVyO1xyXG5cclxuZXhwb3J0IHR5cGUgSVNlZWRSYW5kb20gPSBuZXcgKHNlZWQ/OiBzdHJpbmcpID0+IElQcm5nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTWF0aCB7XHJcbiAgc2VlZHJhbmRvbTogSVNlZWRSYW5kb207XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdlbmVyYXRvck9wdGlvbnMge1xyXG4gIHNlbnRlbmNlc1BlclBhcmFncmFwaD86IElCb3VuZHM7XHJcbiAgd29yZHNQZXJTZW50ZW5jZT86IElCb3VuZHM7XHJcbiAgcmFuZG9tPzogSVBybmc7XHJcbiAgc2VlZD86IHN0cmluZztcclxuICB3b3Jkcz86IHN0cmluZ1tdO1xyXG59XHJcblxyXG5jbGFzcyBHZW5lcmF0b3Ige1xyXG4gIHB1YmxpYyBzZW50ZW5jZXNQZXJQYXJhZ3JhcGg6IElCb3VuZHM7XHJcbiAgcHVibGljIHdvcmRzUGVyU2VudGVuY2U6IElCb3VuZHM7XHJcbiAgcHVibGljIHJhbmRvbTogSVBybmc7XHJcbiAgcHVibGljIHdvcmRzOiBzdHJpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3Ioe1xyXG4gICAgc2VudGVuY2VzUGVyUGFyYWdyYXBoID0geyBtYXg6IDcsIG1pbjogMyB9LFxyXG4gICAgd29yZHNQZXJTZW50ZW5jZSA9IHsgbWF4OiAxNSwgbWluOiA1IH0sXHJcbiAgICByYW5kb20sXHJcbiAgICBzZWVkLFxyXG4gICAgd29yZHMgPSBXT1JEUyxcclxuICB9OiBJR2VuZXJhdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBpZiAoc2VudGVuY2VzUGVyUGFyYWdyYXBoLm1pbiA+IHNlbnRlbmNlc1BlclBhcmFncmFwaC5tYXgpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIGBNaW5pbXVtIG51bWJlciBvZiBzZW50ZW5jZXMgcGVyIHBhcmFncmFwaCAoJHtcclxuICAgICAgICAgIHNlbnRlbmNlc1BlclBhcmFncmFwaC5taW5cclxuICAgICAgICB9KSBjYW5ub3QgZXhjZWVkIG1heGltdW0gKCR7c2VudGVuY2VzUGVyUGFyYWdyYXBoLm1heH0pLmAsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHdvcmRzUGVyU2VudGVuY2UubWluID4gd29yZHNQZXJTZW50ZW5jZS5tYXgpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIGBNaW5pbXVtIG51bWJlciBvZiB3b3JkcyBwZXIgc2VudGVuY2UgKCR7XHJcbiAgICAgICAgICB3b3Jkc1BlclNlbnRlbmNlLm1pblxyXG4gICAgICAgIH0pIGNhbm5vdCBleGNlZWQgbWF4aW11bSAoJHt3b3Jkc1BlclNlbnRlbmNlLm1heH0pLmAsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZW50ZW5jZXNQZXJQYXJhZ3JhcGggPSBzZW50ZW5jZXNQZXJQYXJhZ3JhcGg7XHJcbiAgICB0aGlzLndvcmRzID0gd29yZHM7XHJcbiAgICB0aGlzLndvcmRzUGVyU2VudGVuY2UgPSB3b3Jkc1BlclNlbnRlbmNlO1xyXG4gICAgdGhpcy5yYW5kb20gPSByYW5kb20gfHwgTWF0aC5yYW5kb207XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2VuZXJhdGVSYW5kb21JbnRlZ2VyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZVJhbmRvbVdvcmRzKG51bT86IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCB7IG1pbiwgbWF4IH0gPSB0aGlzLndvcmRzUGVyU2VudGVuY2U7XHJcbiAgICBjb25zdCBsZW5ndGggPSBudW0gfHwgdGhpcy5nZW5lcmF0ZVJhbmRvbUludGVnZXIobWluLCBtYXgpO1xyXG4gICAgcmV0dXJuIG1ha2VBcnJheU9mTGVuZ3RoKGxlbmd0aClcclxuICAgICAgLnJlZHVjZSgoYWNjdW11bGF0b3I6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMucGx1Y2tSYW5kb21Xb3JkKCl9ICR7YWNjdW11bGF0b3J9YDtcclxuICAgICAgfSwgXCJcIilcclxuICAgICAgLnRyaW0oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZVJhbmRvbVNlbnRlbmNlKG51bT86IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7Y2FwaXRhbGl6ZSh0aGlzLmdlbmVyYXRlUmFuZG9tV29yZHMobnVtKSl9LmA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2VuZXJhdGVSYW5kb21QYXJhZ3JhcGgobnVtPzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHsgbWluLCBtYXggfSA9IHRoaXMuc2VudGVuY2VzUGVyUGFyYWdyYXBoO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gbnVtIHx8IHRoaXMuZ2VuZXJhdGVSYW5kb21JbnRlZ2VyKG1pbiwgbWF4KTtcclxuICAgIHJldHVybiBtYWtlQXJyYXlPZkxlbmd0aChsZW5ndGgpXHJcbiAgICAgIC5yZWR1Y2UoKGFjY3VtdWxhdG9yOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdlbmVyYXRlUmFuZG9tU2VudGVuY2UoKX0gJHthY2N1bXVsYXRvcn1gO1xyXG4gICAgICB9LCBcIlwiKVxyXG4gICAgICAudHJpbSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBsdWNrUmFuZG9tV29yZCgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbWluID0gMDtcclxuICAgIGNvbnN0IG1heCA9IHRoaXMud29yZHMubGVuZ3RoIC0gMTtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZW5lcmF0ZVJhbmRvbUludGVnZXIobWluLCBtYXgpO1xyXG4gICAgcmV0dXJuIHRoaXMud29yZHNbaW5kZXhdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2VuZXJhdG9yO1xyXG4iXX0=

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/capitalize.js":
/*!**********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/capitalize.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * @param str  A string that may or may not be capitalized.
 * @returns    A capitalized string.
 */
var capitalize = function capitalize(str) {
  var trimmed = str.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
};

var _default = capitalize;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2NhcGl0YWxpemUudHMiXSwibmFtZXMiOlsiY2FwaXRhbGl6ZSIsInN0ciIsInRyaW1tZWQiLCJ0cmltIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsR0FBRCxFQUF5QjtBQUMxQyxNQUFNQyxPQUFPLEdBQUdELEdBQUcsQ0FBQ0UsSUFBSixFQUFoQjtBQUNBLFNBQU9ELE9BQU8sQ0FBQ0UsTUFBUixDQUFlLENBQWYsRUFBa0JDLFdBQWxCLEtBQWtDSCxPQUFPLENBQUNJLEtBQVIsQ0FBYyxDQUFkLENBQXpDO0FBQ0QsQ0FIRDs7ZUFLZU4sVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAcGFyYW0gc3RyICBBIHN0cmluZyB0aGF0IG1heSBvciBtYXkgbm90IGJlIGNhcGl0YWxpemVkLlxyXG4gKiBAcmV0dXJucyAgICBBIGNhcGl0YWxpemVkIHN0cmluZy5cclxuICovXHJcbmNvbnN0IGNhcGl0YWxpemUgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IHRyaW1tZWQgPSBzdHIudHJpbSgpO1xyXG4gIHJldHVybiB0cmltbWVkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHJpbW1lZC5zbGljZSgxKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcGl0YWxpemU7XHJcbiJdfQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "capitalize", ({
  enumerable: true,
  get: function get() {
    return _capitalize["default"];
  }
}));
Object.defineProperty(exports, "isNode", ({
  enumerable: true,
  get: function get() {
    return _isNode["default"];
  }
}));
Object.defineProperty(exports, "isReactNative", ({
  enumerable: true,
  get: function get() {
    return _isReactNative["default"];
  }
}));
Object.defineProperty(exports, "isWindows", ({
  enumerable: true,
  get: function get() {
    return _isWindows["default"];
  }
}));
Object.defineProperty(exports, "makeArrayOfLength", ({
  enumerable: true,
  get: function get() {
    return _makeArrayOfLength["default"];
  }
}));
Object.defineProperty(exports, "makeArrayOfStrings", ({
  enumerable: true,
  get: function get() {
    return _makeArrayOfStrings["default"];
  }
}));

var _capitalize = _interopRequireDefault(__webpack_require__(/*! ./capitalize */ "./node_modules/lorem-ipsum/dist/util/capitalize.js"));

var _isNode = _interopRequireDefault(__webpack_require__(/*! ./isNode */ "./node_modules/lorem-ipsum/dist/util/isNode.js"));

var _isReactNative = _interopRequireDefault(__webpack_require__(/*! ./isReactNative */ "./node_modules/lorem-ipsum/dist/util/isReactNative.js"));

var _isWindows = _interopRequireDefault(__webpack_require__(/*! ./isWindows */ "./node_modules/lorem-ipsum/dist/util/isWindows.js"));

var _makeArrayOfLength = _interopRequireDefault(__webpack_require__(/*! ./makeArrayOfLength */ "./node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js"));

var _makeArrayOfStrings = _interopRequireDefault(__webpack_require__(/*! ./makeArrayOfStrings */ "./node_modules/lorem-ipsum/dist/util/makeArrayOfStrings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNhcGl0YWxpemUgZnJvbSBcIi4vY2FwaXRhbGl6ZVwiO1xyXG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xyXG5pbXBvcnQgaXNSZWFjdE5hdGl2ZSBmcm9tIFwiLi9pc1JlYWN0TmF0aXZlXCI7XHJcbmltcG9ydCBpc1dpbmRvd3MgZnJvbSBcIi4vaXNXaW5kb3dzXCI7XHJcbmltcG9ydCBtYWtlQXJyYXlPZkxlbmd0aCBmcm9tIFwiLi9tYWtlQXJyYXlPZkxlbmd0aFwiO1xyXG5pbXBvcnQgbWFrZUFycmF5T2ZTdHJpbmdzIGZyb20gXCIuL21ha2VBcnJheU9mU3RyaW5nc1wiO1xyXG5cclxuZXhwb3J0IHtcclxuICBjYXBpdGFsaXplLFxyXG4gIGlzTm9kZSxcclxuICBpc1JlYWN0TmF0aXZlLFxyXG4gIGlzV2luZG93cyxcclxuICBtYWtlQXJyYXlPZkxlbmd0aCxcclxuICBtYWtlQXJyYXlPZlN0cmluZ3MsXHJcbn07XHJcbiJdfQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/isNode.js":
/*!******************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/isNode.js ***!
  \******************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * @returns  True if the runtime is NodeJS.
 */
var isNode = function isNode() {
  return  true && !!module.exports;
};

var _default = isNode;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2lzTm9kZS50cyJdLCJuYW1lcyI6WyJpc05vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBZTtBQUM1QixTQUFPLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsQ0FBQyxDQUFDQSxNQUFNLENBQUNDLE9BQWpEO0FBQ0QsQ0FGRDs7ZUFJZUYsTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAcmV0dXJucyAgVHJ1ZSBpZiB0aGUgcnVudGltZSBpcyBOb2RlSlMuXHJcbiAqL1xyXG5jb25zdCBpc05vZGUgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgcmV0dXJuIHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgISFtb2R1bGUuZXhwb3J0cztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzTm9kZTtcclxuIl19

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/isReactNative.js":
/*!*************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/isReactNative.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * Check if runtime is ReactNative.
 * Solution based on https://github.com/knicklabs/lorem-ipsum.js/pull/52/files
 *
 * @returns  True if runtime is ReactNative.
 */
var isReactNative = function isReactNative() {
  var isReactNativeResult = false;

  try {
    isReactNativeResult = navigator.product === "ReactNative";
  } catch (e) {
    isReactNativeResult = false;
  }

  return isReactNativeResult;
};

var _default = isReactNative;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2lzUmVhY3ROYXRpdmUudHMiXSwibmFtZXMiOlsiaXNSZWFjdE5hdGl2ZSIsImlzUmVhY3ROYXRpdmVSZXN1bHQiLCJuYXZpZ2F0b3IiLCJwcm9kdWN0IiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBZTtBQUNuQyxNQUFJQyxtQkFBNEIsR0FBRyxLQUFuQzs7QUFFQSxNQUFJO0FBQ0ZBLElBQUFBLG1CQUFtQixHQUFHQyxTQUFTLENBQUNDLE9BQVYsS0FBc0IsYUFBNUM7QUFDRCxHQUZELENBRUUsT0FBT0MsQ0FBUCxFQUFVO0FBQ1ZILElBQUFBLG1CQUFtQixHQUFHLEtBQXRCO0FBQ0Q7O0FBRUQsU0FBT0EsbUJBQVA7QUFDRCxDQVZEOztlQVllRCxhIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENoZWNrIGlmIHJ1bnRpbWUgaXMgUmVhY3ROYXRpdmUuXHJcbiAqIFNvbHV0aW9uIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rbmlja2xhYnMvbG9yZW0taXBzdW0uanMvcHVsbC81Mi9maWxlc1xyXG4gKlxyXG4gKiBAcmV0dXJucyAgVHJ1ZSBpZiBydW50aW1lIGlzIFJlYWN0TmF0aXZlLlxyXG4gKi9cclxuY29uc3QgaXNSZWFjdE5hdGl2ZSA9ICgpOiBib29sZWFuID0+IHtcclxuICBsZXQgaXNSZWFjdE5hdGl2ZVJlc3VsdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICB0cnkge1xyXG4gICAgaXNSZWFjdE5hdGl2ZVJlc3VsdCA9IG5hdmlnYXRvci5wcm9kdWN0ID09PSBcIlJlYWN0TmF0aXZlXCI7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaXNSZWFjdE5hdGl2ZVJlc3VsdCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGlzUmVhY3ROYXRpdmVSZXN1bHQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpc1JlYWN0TmF0aXZlO1xyXG4iXX0=

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/isWindows.js":
/*!*********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/isWindows.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _platforms = __webpack_require__(/*! ../constants/platforms */ "./node_modules/lorem-ipsum/dist/constants/platforms.js");

/**
 * @returns True if process is windows.
 */
var isWindows = function isWindows() {
  var isWindowsResult = false;

  try {
    isWindowsResult = process.platform === _platforms.SUPPORTED_PLATFORMS.WIN32;
  } catch (e) {
    isWindowsResult = false;
  }

  return isWindowsResult;
};

var _default = isWindows;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2lzV2luZG93cy50cyJdLCJuYW1lcyI6WyJpc1dpbmRvd3MiLCJpc1dpbmRvd3NSZXN1bHQiLCJwcm9jZXNzIiwicGxhdGZvcm0iLCJTVVBQT1JURURfUExBVEZPUk1TIiwiV0lOMzIiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBZTtBQUMvQixNQUFJQyxlQUF3QixHQUFHLEtBQS9COztBQUNBLE1BQUk7QUFDRkEsSUFBQUEsZUFBZSxHQUFHQyxPQUFPLENBQUNDLFFBQVIsS0FBcUJDLCtCQUFvQkMsS0FBM0Q7QUFDRCxHQUZELENBRUUsT0FBT0MsQ0FBUCxFQUFVO0FBQ1ZMLElBQUFBLGVBQWUsR0FBRyxLQUFsQjtBQUNEOztBQUNELFNBQU9BLGVBQVA7QUFDRCxDQVJEOztlQVVlRCxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU1VQUE9SVEVEX1BMQVRGT1JNUyB9IGZyb20gXCIuLi9jb25zdGFudHMvcGxhdGZvcm1zXCI7XHJcblxyXG4vKipcclxuICogQHJldHVybnMgVHJ1ZSBpZiBwcm9jZXNzIGlzIHdpbmRvd3MuXHJcbiAqL1xyXG5jb25zdCBpc1dpbmRvd3MgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgbGV0IGlzV2luZG93c1Jlc3VsdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHRyeSB7XHJcbiAgICBpc1dpbmRvd3NSZXN1bHQgPSBwcm9jZXNzLnBsYXRmb3JtID09PSBTVVBQT1JURURfUExBVEZPUk1TLldJTjMyO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlzV2luZG93c1Jlc3VsdCA9IGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gaXNXaW5kb3dzUmVzdWx0O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXNXaW5kb3dzO1xyXG4iXX0=

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * @param length Length "x".
 * @returns      An array of indexes of length "x".
 */
var makeArrayOfLength = function makeArrayOfLength() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return Array.apply(null, Array(length)).map(function (item, index) {
    return index;
  });
};

var _default = makeArrayOfLength;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL21ha2VBcnJheU9mTGVuZ3RoLnRzIl0sIm5hbWVzIjpbIm1ha2VBcnJheU9mTGVuZ3RoIiwibGVuZ3RoIiwiQXJyYXkiLCJhcHBseSIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFrQztBQUFBLE1BQWpDQyxNQUFpQyx1RUFBaEIsQ0FBZ0I7QUFDMUQsU0FBT0MsS0FBSyxDQUFDQyxLQUFOLENBQVksSUFBWixFQUFrQkQsS0FBSyxDQUFDRCxNQUFELENBQXZCLEVBQWlDRyxHQUFqQyxDQUNMLFVBQUNDLElBQUQsRUFBWUMsS0FBWjtBQUFBLFdBQXNDQSxLQUF0QztBQUFBLEdBREssQ0FBUDtBQUdELENBSkQ7O2VBTWVOLGlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBwYXJhbSBsZW5ndGggTGVuZ3RoIFwieFwiLlxyXG4gKiBAcmV0dXJucyAgICAgIEFuIGFycmF5IG9mIGluZGV4ZXMgb2YgbGVuZ3RoIFwieFwiLlxyXG4gKi9cclxuY29uc3QgbWFrZUFycmF5T2ZMZW5ndGggPSAobGVuZ3RoOiBudW1iZXIgPSAwKTogbnVtYmVyW10gPT4ge1xyXG4gIHJldHVybiBBcnJheS5hcHBseShudWxsLCBBcnJheShsZW5ndGgpKS5tYXAoXHJcbiAgICAoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKTogbnVtYmVyID0+IGluZGV4LFxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlQXJyYXlPZkxlbmd0aDtcclxuIl19

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/makeArrayOfStrings.js":
/*!******************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/makeArrayOfStrings.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _ = __webpack_require__(/*! . */ "./node_modules/lorem-ipsum/dist/util/index.js");

/**
 * @param length  Length "x".
 * @returns       An array of strings of length "x".
 */
var makeArrayOfStrings = function makeArrayOfStrings(length, makeString) {
  var arr = (0, _.makeArrayOfLength)(length);
  return arr.map(function () {
    return makeString();
  });
};

var _default = makeArrayOfStrings;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL21ha2VBcnJheU9mU3RyaW5ncy50cyJdLCJuYW1lcyI6WyJtYWtlQXJyYXlPZlN0cmluZ3MiLCJsZW5ndGgiLCJtYWtlU3RyaW5nIiwiYXJyIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQ3pCQyxNQUR5QixFQUV6QkMsVUFGeUIsRUFHWjtBQUNiLE1BQU1DLEdBQUcsR0FBRyx5QkFBa0JGLE1BQWxCLENBQVo7QUFDQSxTQUFPRSxHQUFHLENBQUNDLEdBQUosQ0FBUTtBQUFBLFdBQU1GLFVBQVUsRUFBaEI7QUFBQSxHQUFSLENBQVA7QUFDRCxDQU5EOztlQVFlRixrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VBcnJheU9mTGVuZ3RoIH0gZnJvbSBcIi5cIjtcclxuLyoqXHJcbiAqIEBwYXJhbSBsZW5ndGggIExlbmd0aCBcInhcIi5cclxuICogQHJldHVybnMgICAgICAgQW4gYXJyYXkgb2Ygc3RyaW5ncyBvZiBsZW5ndGggXCJ4XCIuXHJcbiAqL1xyXG5jb25zdCBtYWtlQXJyYXlPZlN0cmluZ3MgPSAoXHJcbiAgbGVuZ3RoOiBudW1iZXIsXHJcbiAgbWFrZVN0cmluZzogKCkgPT4gc3RyaW5nLFxyXG4pOiBzdHJpbmdbXSA9PiB7XHJcbiAgY29uc3QgYXJyID0gbWFrZUFycmF5T2ZMZW5ndGgobGVuZ3RoKTtcclxuICByZXR1cm4gYXJyLm1hcCgoKSA9PiBtYWtlU3RyaW5nKCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFrZUFycmF5T2ZTdHJpbmdzO1xyXG4iXX0=

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

/***/ "./src/createAndAppend.js":
/*!********************************!*\
  !*** ./src/createAndAppend.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createAndAppend(node, elemenType, textContent, id, classToAdd){
    // console.log(classToAdd)
    const element = document.createElement(elemenType);
    element.textContent = textContent;
    if(classToAdd){ element.classList.add(classToAdd) }
    if(id){ element.id = id }
    return node.appendChild(element);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAndAppend);

/***/ }),

/***/ "./src/generateAbout.js":
/*!******************************!*\
  !*** ./src/generateAbout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createAndAppend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAndAppend */ "./src/createAndAppend.js");
/* harmony import */ var lorem_ipsum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lorem-ipsum */ "./node_modules/lorem-ipsum/dist/index.js");


// const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new lorem_ipsum__WEBPACK_IMPORTED_MODULE_1__.LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

function generateAbout(main){
  (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(main, 'h2', 'Prime House', 'about-name');
  (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(main, 'h1', 'About us', 'about-title');
  (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(main, 'p', lorem.generateParagraphs(3), 'p-about');
  (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(main, 'div', '');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateAbout);

/***/ }),

/***/ "./src/generateContent.js":
/*!********************************!*\
  !*** ./src/generateContent.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createAndAppend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAndAppend */ "./src/createAndAppend.js");


function generateContent(content){
    // ---Header--- //
    const header = document.createElement('header');
    content.appendChild(header);
    // createAndAppend(createAndAppend(header, 'a','','home'), 'div', 'Home');
    // createAndAppend(createAndAppend(header, 'a'), 'div', 'Menu', 'menu');
    // createAndAppend(createAndAppend(header, 'a'), 'div', 'About', 'about');
    (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(header, 'div', 'Home', 'home');
    (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(header, 'div', 'Menu', 'menu');
    (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(header, 'div', 'About', 'about');
    header.querySelectorAll('a').forEach(a=>a.href='');
    // ---Main--- //
    (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(content, 'div', '', 'main');
    // ---Footer--- //
    (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(content,'a'), 'footer', 'By Gabriel Ruiz Varela');
    document.querySelector('#content>a').href = 'https://github.com/GabrielRuizVarela';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateContent);


/***/ }),

/***/ "./src/generateHome.js":
/*!*****************************!*\
  !*** ./src/generateHome.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createAndAppend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAndAppend */ "./src/createAndAppend.js");

// import { mdiInstagram } from '@mdi/js';

function generateHome(home){
    const homeLeft = (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(home, 'div', '', 'home-left');
    (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(homeLeft, 'span', '', '');
    const homeText = (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(homeLeft, 'div', '', 'home-text');
    (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(homeText, 'h3', 'Welcome to')
    ;(0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(homeText, 'h1', 'Prime House')
    ;(0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(homeText, 'button', 'Menu')
    ;(0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(homeLeft, 'span', '', 'horizontal-line');
    const homeIcons = (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(homeLeft, 'div', '', 'homeIcons');
    (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(homeIcons,'a'),'span', '', '', 'iconify-inline').dataset.icon = 'akar-icons:instagram-fill';
    (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(homeIcons,'a'),'span', '', '', 'iconify-inline').dataset.icon = 'akar-icons:facebook-fill';
    (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(homeIcons,'a'),'span', '', '', 'iconify-inline').dataset.icon = 'akar-icons:whatsapp-fill';
    homeIcons.querySelectorAll('a').forEach(a=>a.href='');

    const homeRight = (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(home, 'div', '', 'home-right'); 
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateHome);

/***/ }),

/***/ "./src/generateMenu.js":
/*!*****************************!*\
  !*** ./src/generateMenu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createAndAppend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAndAppend */ "./src/createAndAppend.js");


// const plate, description, price;
const plate = [
    'Crispy Brick Chicken',
    'Double Cut Lamb Chops',
    '10oz Double Wagyu Cheeseburger',
    'Prime Rib French Dip',
    'Honey Peppered Ora King Salmon',
    'Bone-In Filet Mignon'
];

const description = [
    'slow roasted sweet garlic, crushed oregano, natural jus',
    'roasted garlic, rosemary and a few olives',
    'griddled and pressed snake river farms wagyu with american cheese, pickles, and dijonnaise',
    'swiss cheese, natural jus',
    'aromatic brown butter & lemon',
    '16oz, bearnaise sauce, steak salt',
];

const price = ['$37', '$75', '$35', '$38', '$45', '$89'];


function generateMenu(main){
    (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(main, 'h2', 'Prime House', 'menu-name');
    (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(main, 'h1', 'Menu', 'menu-title');
    const menu = (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(main, 'div', '', 'menu-container');
    for (let i = 0; i < price.length; i++) {
        let menuItem = (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(menu, 'div', '', '', 'menu-item');
        (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(menuItem, 'div', plate[i], '', 'plate');
        (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(menuItem, 'div', description[i], '', 'description');
        (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(menuItem, 'div', price[i], '', 'price');
        (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(menuItem, 'div', '');
    }
    (0,_createAndAppend__WEBPACK_IMPORTED_MODULE_0__["default"])(main,'div', '');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMenu);

/***/ }),

/***/ "./src/victoria-shes-UC0HZdUitWY-unsplash.jpg":
/*!****************************************************!*\
  !*** ./src/victoria-shes-UC0HZdUitWY-unsplash.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "636c1eb7a1212a5c90f7.jpg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _generateContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateContent */ "./src/generateContent.js");
/* harmony import */ var _generateHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateHome */ "./src/generateHome.js");
/* harmony import */ var _generateMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateMenu */ "./src/generateMenu.js");
/* harmony import */ var _generateAbout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateAbout */ "./src/generateAbout.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







const content = document.querySelector('#content');
(0,_generateContent__WEBPACK_IMPORTED_MODULE_0__["default"])(content);
const main = document.querySelector('#main')
const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const about = document.querySelector('#about');

// homeSelected();
aboutSelected();

home.addEventListener('click', homeSelected);
menu.addEventListener('click', menuSelected);
about.addEventListener('click', aboutSelected);


// 
function homeSelected(){
    main.innerHTML='';
    main.classList.remove('menu');
    main.classList.remove('about');
    (0,_generateHome__WEBPACK_IMPORTED_MODULE_1__["default"])(main);
    main.classList.add('home');
    let menuButton = document.querySelector('button');
    menuButton.addEventListener('click', menuSelected);
};

function menuSelected(){
    let menuButton = document.querySelector('button');
    if(menuButton){
        menuButton.removeEventListener('click',menuSelected);
    }
    main.innerHTML='';
    main.classList.remove('home');
    main.classList.remove('about');
    (0,_generateMenu__WEBPACK_IMPORTED_MODULE_2__["default"])(main);
    main.classList.add('menu');
};

function aboutSelected(){
    let menuButton = document.querySelector('button');
    if(menuButton){
        menuButton.removeEventListener('click',menuSelected);
    }
    main.innerHTML='';
    main.classList.remove('home');
    main.classList.remove('menu');
    (0,_generateAbout__WEBPACK_IMPORTED_MODULE_3__["default"])(main);
    main.classList.add('about');
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZ0Q7QUFDTjtBQUNBO0FBQ0U7QUFDdkI7OztBQUdyQjtBQUNBLDREQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFZO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQWE7QUFDakI7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL2Rpc3QvY29uc3RhbnRzL2Zvcm1hdHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL2Rpc3QvY29uc3RhbnRzL2xpbmVFbmRpbmdzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L2NvbnN0YW50cy9wbGF0Zm9ybXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL2Rpc3QvY29uc3RhbnRzL3VuaXRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L2NvbnN0YW50cy93b3Jkcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC9saWIvTG9yZW1JcHN1bS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC9saWIvZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L3V0aWwvY2FwaXRhbGl6ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC91dGlsL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L3V0aWwvaXNOb2RlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L3V0aWwvaXNSZWFjdE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC91dGlsL2lzV2luZG93cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC91dGlsL21ha2VBcnJheU9mTGVuZ3RoLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L3V0aWwvbWFrZUFycmF5T2ZTdHJpbmdzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jcmVhdGVBbmRBcHBlbmQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2dlbmVyYXRlQWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2dlbmVyYXRlQ29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZ2VuZXJhdGVIb21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9nZW5lcmF0ZU1lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vdmljdG9yaWEtc2hlcy1VQzBIWmRVaXRXWS11bnNwbGFzaC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUtvdWxlbiZmYW1pbHk9TGF0bzppdGFsLHdnaHRAMSwzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4qIHtcXG4vKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWNvbG9yLTE6ICMxMzQxNTk7XFxuICAgIC0tY29sb3ItMjogIzU5MUMyMTtcXG4gICAgLS1jb2xvci0zOiAjMDQ0MDQwO1xcbiAgICAtLWNvbG9yLTQ6ICNmNWY1ZjQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgICBmb250LWZhbWlseTogJ0tvdWxlbicsIGN1cnNpdmU7XFxufVxcblxcbmh0bWwsXFxuYm9keSxcXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMCAwLjNyZW07XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxuXFxuLyogLS0tSGVhZGVyLS0tICovXFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHBhZGRpbmc6IDFyZW0gOHJlbTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAgdmFyKC0tY29sb3ItMik7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbmhlYWRlciBkaXY6OmFmdGVyIHtcXG4gICAgY29udGVudDpcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW47XFxufVxcblxcbmhlYWRlciBkaXY6aG92ZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxufVxcblxcbmhlYWRlciBkaXZ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogLS0tRm9vdGVyLS0tICovXFxuXFxuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLyogLS0tSG9tZS0tLSAqL1xcblxcbi5ob21lIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5cXG4jaG9tZS1sZWZ0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxufVxcblxcbiNob3Jpem9udGFsLWxpbmUge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGFsaWduLXNlbGY6IHRvcDtcXG59XFxuXFxuI2hvbWUtcmlnaHQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5idXR0b257XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxuICAgIGZvbnQtZmFtaWx5OiAnS291bGVuJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItMik7XFxufVxcblxcbi8qIC0tLU1lbnUtLS0gKi9cXG4ubWVudXtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsYXV0bykgMWZyIDAuMmZyO1xcbn1cXG5cXG4jbWVudS1uYW1lLCBcXG4jYWJvdXQtbmFtZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuI21lbnUtbmFtZTo6YWZ0ZXIsXFxuI2Fib3V0LW5hbWU6OmFmdGVyIHtcXG4gICAgY29udGVudDpcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMik7XFxufVxcblxcbiNtZW51LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDE1cHggMXB4IGJsYWNrO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbn1cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbi5wcmljZSB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbi8qIC0tLUFib3V0LS0tICovXFxuLmFib3V0IHtcXG4gICAgLyogY29sb3I6IHZhcigtLWNvbG9yLTQpOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICAvKiBnYXA6IDFyZW07ICovXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpOyAqL1xcbn1cXG5cXG4jcC1hYm91dHtcXG4gICAgLyogd2lkdGg6IDcwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDJyZW07ICovXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7ICovXFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTsgKi9cXG4gICAgZ2FwOiAycmVtO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDE1cHggMXB4IGJsYWNrO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7SUFHSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsOEJBQThCO0FBQ2xDOztBQUVBOzs7SUFHSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtBQUNoQzs7QUFFQSxpQkFBaUI7O0FBRWpCO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHVDQUF1QztJQUN2QyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUEsaUJBQWlCOztBQUVqQjtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQSxlQUFlOztBQUVmO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5REFBK0Q7SUFDL0Qsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtBQUN6Qjs7QUFFQSxlQUFlO0FBQ2Y7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsNENBQTRDO0FBQ2hEOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJOztvQkFFZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsU0FBUztJQUNULFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Lb3VsZW4mZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDEsMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4qIHtcXG4vKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWNvbG9yLTE6ICMxMzQxNTk7XFxuICAgIC0tY29sb3ItMjogIzU5MUMyMTtcXG4gICAgLS1jb2xvci0zOiAjMDQ0MDQwO1xcbiAgICAtLWNvbG9yLTQ6ICNmNWY1ZjQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgICBmb250LWZhbWlseTogJ0tvdWxlbicsIGN1cnNpdmU7XFxufVxcblxcbmh0bWwsXFxuYm9keSxcXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMCAwLjNyZW07XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxuXFxuLyogLS0tSGVhZGVyLS0tICovXFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHBhZGRpbmc6IDFyZW0gOHJlbTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAgdmFyKC0tY29sb3ItMik7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbmhlYWRlciBkaXY6OmFmdGVyIHtcXG4gICAgY29udGVudDpcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW47XFxufVxcblxcbmhlYWRlciBkaXY6aG92ZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxufVxcblxcbmhlYWRlciBkaXZ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogLS0tRm9vdGVyLS0tICovXFxuXFxuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLyogLS0tSG9tZS0tLSAqL1xcblxcbi5ob21lIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5cXG4jaG9tZS1sZWZ0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxufVxcblxcbiNob3Jpem9udGFsLWxpbmUge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGFsaWduLXNlbGY6IHRvcDtcXG59XFxuXFxuI2hvbWUtcmlnaHQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi92aWN0b3JpYS1zaGVzLVVDMEhaZFVpdFdZLXVuc3BsYXNoLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmJ1dHRvbntcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdLb3VsZW4nLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXG59XFxuXFxuLyogLS0tTWVudS0tLSAqL1xcbi5tZW51e1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMixhdXRvKSAxZnIgMC4yZnI7XFxufVxcblxcbiNtZW51LW5hbWUsIFxcbiNhYm91dC1uYW1lIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG4jbWVudS1uYW1lOjphZnRlcixcXG4jYWJvdXQtbmFtZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OlxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0yKTtcXG59XFxuXFxuI21lbnUtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTVweCAxcHggYmxhY2s7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxufVxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuLnByaWNlIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuXFxuLyogLS0tQWJvdXQtLS0gKi9cXG4uYWJvdXQge1xcbiAgICAvKiBjb2xvcjogdmFyKC0tY29sb3ItNCk7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIC8qIGdhcDogMXJlbTsgKi9cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7ICovXFxufVxcblxcbiNwLWFib3V0e1xcbiAgICAvKiB3aWR0aDogNzAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMnJlbTsgKi9cXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgLyogZGlzcGxheTogZ3JpZDsgKi9cXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpOyAqL1xcbiAgICBnYXA6IDJyZW07XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTVweCAxcHggYmxhY2s7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5GT1JNQVRTID0gZXhwb3J0cy5GT1JNQVRfUExBSU4gPSBleHBvcnRzLkZPUk1BVF9IVE1MID0gdm9pZCAwO1xudmFyIEZPUk1BVF9IVE1MID0gXCJodG1sXCI7XG5leHBvcnRzLkZPUk1BVF9IVE1MID0gRk9STUFUX0hUTUw7XG52YXIgRk9STUFUX1BMQUlOID0gXCJwbGFpblwiO1xuZXhwb3J0cy5GT1JNQVRfUExBSU4gPSBGT1JNQVRfUExBSU47XG52YXIgRk9STUFUUyA9IFtGT1JNQVRfSFRNTCwgRk9STUFUX1BMQUlOXTtcbmV4cG9ydHMuRk9STUFUUyA9IEZPUk1BVFM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlqYjI1emRHRnVkSE12Wm05eWJXRjBjeTUwY3lKZExDSnVZVzFsY3lJNld5SkdUMUpOUVZSZlNGUk5UQ0lzSWtaUFVrMUJWRjlRVEVGSlRpSXNJa1pQVWsxQlZGTWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVGUExFbEJRVTFCTEZkQlFWY3NSMEZCUnl4TlFVRndRanM3UVVGRFFTeEpRVUZOUXl4WlFVRlpMRWRCUVVjc1QwRkJja0k3TzBGQlEwRXNTVUZCVFVNc1QwRkJUeXhIUVVGSExFTkJRVU5HTEZkQlFVUXNSVUZCWTBNc1dVRkJaQ3hEUVVGb1FpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQmpiMjV6ZENCR1QxSk5RVlJmU0ZSTlRDQTlJRndpYUhSdGJGd2lPMXh5WEc1bGVIQnZjblFnWTI5dWMzUWdSazlTVFVGVVgxQk1RVWxPSUQwZ1hDSndiR0ZwYmx3aU8xeHlYRzVsZUhCdmNuUWdZMjl1YzNRZ1JrOVNUVUZVVXlBOUlGdEdUMUpOUVZSZlNGUk5UQ3dnUms5U1RVRlVYMUJNUVVsT1hUdGNjbHh1Wlhod2IzSjBJSFI1Y0dVZ1RHOXlaVzFHYjNKdFlYUWdQU0JjSW5Cc1lXbHVYQ0lnZkNCY0ltaDBiV3hjSWp0Y2NseHVJbDE5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkxJTkVfRU5ESU5HUyA9IHZvaWQgMDtcbnZhciBMSU5FX0VORElOR1MgPSB7XG4gIFBPU0lYOiBcIlxcblwiLFxuICBXSU4zMjogXCJcXHJcXG5cIlxufTtcbmV4cG9ydHMuTElORV9FTkRJTkdTID0gTElORV9FTkRJTkdTO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5amIyNXpkR0Z1ZEhNdmJHbHVaVVZ1WkdsdVozTXVkSE1pWFN3aWJtRnRaWE1pT2xzaVRFbE9SVjlGVGtSSlRrZFRJaXdpVUU5VFNWZ2lMQ0pYU1U0ek1pSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUVU4c1NVRkJUVUVzV1VGQldTeEhRVUZITzBGQlF6RkNReXhGUVVGQlFTeExRVUZMTEVWQlFVVXNTVUZFYlVJN1FVRkZNVUpETEVWQlFVRkJMRXRCUVVzc1JVRkJSVHRCUVVadFFpeERRVUZ5UWlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCamIyNXpkQ0JNU1U1RlgwVk9SRWxPUjFNZ1BTQjdYSEpjYmlBZ1VFOVRTVmc2SUZ3aVhGeHVYQ0lzWEhKY2JpQWdWMGxPTXpJNklGd2lYRnh5WEZ4dVhDSXNYSEpjYm4wN1hISmNiaUpkZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5TVVBQT1JURURfUExBVEZPUk1TID0gdm9pZCAwO1xudmFyIFNVUFBPUlRFRF9QTEFURk9STVMgPSB7XG4gIERBUldJTjogXCJkYXJ3aW5cIixcbiAgTElOVVg6IFwibGludXhcIixcbiAgV0lOMzI6IFwid2luMzJcIlxufTtcbmV4cG9ydHMuU1VQUE9SVEVEX1BMQVRGT1JNUyA9IFNVUFBPUlRFRF9QTEFURk9STVM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlqYjI1emRHRnVkSE12Y0d4aGRHWnZjbTF6TG5SeklsMHNJbTVoYldWeklqcGJJbE5WVUZCUFVsUkZSRjlRVEVGVVJrOVNUVk1pTENKRVFWSlhTVTRpTENKTVNVNVZXQ0lzSWxkSlRqTXlJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlR5eEpRVUZOUVN4dFFrRkJiVUlzUjBGQlJ6dEJRVU5xUTBNc1JVRkJRVUVzVFVGQlRTeEZRVUZGTEZGQlJIbENPMEZCUldwRFF5eEZRVUZCUVN4TFFVRkxMRVZCUVVVc1QwRkdNRUk3UVVGSGFrTkRMRVZCUVVGQkxFdEJRVXNzUlVGQlJUdEJRVWd3UWl4RFFVRTFRaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1WNGNHOXlkQ0JqYjI1emRDQlRWVkJRVDFKVVJVUmZVRXhCVkVaUFVrMVRJRDBnZTF4eVhHNGdJRVJCVWxkSlRqb2dYQ0prWVhKM2FXNWNJaXhjY2x4dUlDQk1TVTVWV0RvZ1hDSnNhVzUxZUZ3aUxGeHlYRzRnSUZkSlRqTXlPaUJjSW5kcGJqTXlYQ0lzWEhKY2JuMDdYSEpjYmlKZGZRPT0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVU5JVFMgPSBleHBvcnRzLlVOSVRfUEFSQUdSQVBIID0gZXhwb3J0cy5VTklUX1BBUkFHUkFQSFMgPSBleHBvcnRzLlVOSVRfU0VOVEVOQ0UgPSBleHBvcnRzLlVOSVRfU0VOVEVOQ0VTID0gZXhwb3J0cy5VTklUX1dPUkQgPSBleHBvcnRzLlVOSVRfV09SRFMgPSB2b2lkIDA7XG52YXIgVU5JVF9XT1JEUyA9IFwid29yZHNcIjtcbmV4cG9ydHMuVU5JVF9XT1JEUyA9IFVOSVRfV09SRFM7XG52YXIgVU5JVF9XT1JEID0gXCJ3b3JkXCI7XG5leHBvcnRzLlVOSVRfV09SRCA9IFVOSVRfV09SRDtcbnZhciBVTklUX1NFTlRFTkNFUyA9IFwic2VudGVuY2VzXCI7XG5leHBvcnRzLlVOSVRfU0VOVEVOQ0VTID0gVU5JVF9TRU5URU5DRVM7XG52YXIgVU5JVF9TRU5URU5DRSA9IFwic2VudGVuY2VcIjtcbmV4cG9ydHMuVU5JVF9TRU5URU5DRSA9IFVOSVRfU0VOVEVOQ0U7XG52YXIgVU5JVF9QQVJBR1JBUEhTID0gXCJwYXJhZ3JhcGhzXCI7XG5leHBvcnRzLlVOSVRfUEFSQUdSQVBIUyA9IFVOSVRfUEFSQUdSQVBIUztcbnZhciBVTklUX1BBUkFHUkFQSCA9IFwicGFyYWdyYXBoXCI7XG5leHBvcnRzLlVOSVRfUEFSQUdSQVBIID0gVU5JVF9QQVJBR1JBUEg7XG52YXIgVU5JVFMgPSBbVU5JVF9XT1JEUywgVU5JVF9XT1JELCBVTklUX1NFTlRFTkNFUywgVU5JVF9TRU5URU5DRSwgVU5JVF9QQVJBR1JBUEhTLCBVTklUX1BBUkFHUkFQSF07XG5leHBvcnRzLlVOSVRTID0gVU5JVFM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlqYjI1emRHRnVkSE12ZFc1cGRITXVkSE1pWFN3aWJtRnRaWE1pT2xzaVZVNUpWRjlYVDFKRVV5SXNJbFZPU1ZSZlYwOVNSQ0lzSWxWT1NWUmZVMFZPVkVWT1EwVlRJaXdpVlU1SlZGOVRSVTVVUlU1RFJTSXNJbFZPU1ZSZlVFRlNRVWRTUVZCSVV5SXNJbFZPU1ZSZlVFRlNRVWRTUVZCSUlpd2lWVTVKVkZNaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZQTEVsQlFVMUJMRlZCUVZVc1IwRkJSeXhQUVVGdVFqczdRVUZEUVN4SlFVRk5ReXhUUVVGVExFZEJRVWNzVFVGQmJFSTdPMEZCUTBFc1NVRkJUVU1zWTBGQll5eEhRVUZITEZkQlFYWkNPenRCUVVOQkxFbEJRVTFETEdGQlFXRXNSMEZCUnl4VlFVRjBRanM3UVVGRFFTeEpRVUZOUXl4bFFVRmxMRWRCUVVjc1dVRkJlRUk3TzBGQlEwRXNTVUZCVFVNc1kwRkJZeXhIUVVGSExGZEJRWFpDT3p0QlFVTkJMRWxCUVUxRExFdEJRVXNzUjBGQlJ5eERRVU51UWs0c1ZVRkViVUlzUlVGRmJrSkRMRk5CUm0xQ0xFVkJSMjVDUXl4alFVaHRRaXhGUVVsdVFrTXNZVUZLYlVJc1JVRkxia0pETEdWQlRHMUNMRVZCVFc1Q1F5eGpRVTV0UWl4RFFVRmtJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWlhod2IzSjBJR052Ym5OMElGVk9TVlJmVjA5U1JGTWdQU0JjSW5kdmNtUnpYQ0k3WEc1bGVIQnZjblFnWTI5dWMzUWdWVTVKVkY5WFQxSkVJRDBnWENKM2IzSmtYQ0k3WEc1bGVIQnZjblFnWTI5dWMzUWdWVTVKVkY5VFJVNVVSVTVEUlZNZ1BTQmNJbk5sYm5SbGJtTmxjMXdpTzF4dVpYaHdiM0owSUdOdmJuTjBJRlZPU1ZSZlUwVk9WRVZPUTBVZ1BTQmNJbk5sYm5SbGJtTmxYQ0k3WEc1bGVIQnZjblFnWTI5dWMzUWdWVTVKVkY5UVFWSkJSMUpCVUVoVElEMGdYQ0p3WVhKaFozSmhjR2h6WENJN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnVlU1SlZGOVFRVkpCUjFKQlVFZ2dQU0JjSW5CaGNtRm5jbUZ3YUZ3aU8xeHVaWGh3YjNKMElHTnZibk4wSUZWT1NWUlRJRDBnVzF4dUlDQlZUa2xVWDFkUFVrUlRMRnh1SUNCVlRrbFVYMWRQVWtRc1hHNGdJRlZPU1ZSZlUwVk9WRVZPUTBWVExGeHVJQ0JWVGtsVVgxTkZUbFJGVGtORkxGeHVJQ0JWVGtsVVgxQkJVa0ZIVWtGUVNGTXNYRzRnSUZWT1NWUmZVRUZTUVVkU1FWQklMRnh1WFR0Y2JtVjRjRzl5ZENCMGVYQmxJRXh2Y21WdFZXNXBkQ0E5SUZ3aWQyOXlaSE5jSWlCOElGd2lkMjl5WkZ3aUlId2dYQ0p6Wlc1MFpXNWpaWE5jSWlCOElGd2ljMlZ1ZEdWdVkyVmNJaUI4SUZ3aWNHRnlZV2R5WVhCb2Mxd2lJSHdnWENKd1lYSmhaM0poY0doY0lqdGNiaUpkZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5XT1JEUyA9IHZvaWQgMDtcbnZhciBXT1JEUyA9IFtcImFkXCIsIFwiYWRpcGlzaWNpbmdcIiwgXCJhbGlxdWFcIiwgXCJhbGlxdWlwXCIsIFwiYW1ldFwiLCBcImFuaW1cIiwgXCJhdXRlXCIsIFwiY2lsbHVtXCIsIFwiY29tbW9kb1wiLCBcImNvbnNlY3RldHVyXCIsIFwiY29uc2VxdWF0XCIsIFwiY3VscGFcIiwgXCJjdXBpZGF0YXRcIiwgXCJkZXNlcnVudFwiLCBcImRvXCIsIFwiZG9sb3JcIiwgXCJkb2xvcmVcIiwgXCJkdWlzXCIsIFwiZWFcIiwgXCJlaXVzbW9kXCIsIFwiZWxpdFwiLCBcImVuaW1cIiwgXCJlc3NlXCIsIFwiZXN0XCIsIFwiZXRcIiwgXCJldVwiLCBcImV4XCIsIFwiZXhjZXB0ZXVyXCIsIFwiZXhlcmNpdGF0aW9uXCIsIFwiZnVnaWF0XCIsIFwiaWRcIiwgXCJpblwiLCBcImluY2lkaWR1bnRcIiwgXCJpcHN1bVwiLCBcImlydXJlXCIsIFwibGFib3JlXCIsIFwibGFib3Jpc1wiLCBcImxhYm9ydW1cIiwgXCJMb3JlbVwiLCBcIm1hZ25hXCIsIFwibWluaW1cIiwgXCJtb2xsaXRcIiwgXCJuaXNpXCIsIFwibm9uXCIsIFwibm9zdHJ1ZFwiLCBcIm51bGxhXCIsIFwib2NjYWVjYXRcIiwgXCJvZmZpY2lhXCIsIFwicGFyaWF0dXJcIiwgXCJwcm9pZGVudFwiLCBcInF1aVwiLCBcInF1aXNcIiwgXCJyZXByZWhlbmRlcml0XCIsIFwic2ludFwiLCBcInNpdFwiLCBcInN1bnRcIiwgXCJ0ZW1wb3JcIiwgXCJ1bGxhbWNvXCIsIFwidXRcIiwgXCJ2ZWxpdFwiLCBcInZlbmlhbVwiLCBcInZvbHVwdGF0ZVwiXTtcbmV4cG9ydHMuV09SRFMgPSBXT1JEUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWpiMjV6ZEdGdWRITXZkMjl5WkhNdWRITWlYU3dpYm1GdFpYTWlPbHNpVjA5U1JGTWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVGUExFbEJRVTFCTEV0QlFVc3NSMEZCUnl4RFFVTnVRaXhKUVVSdFFpeEZRVVZ1UWl4aFFVWnRRaXhGUVVkdVFpeFJRVWh0UWl4RlFVbHVRaXhUUVVwdFFpeEZRVXR1UWl4TlFVeHRRaXhGUVUxdVFpeE5RVTV0UWl4RlFVOXVRaXhOUVZCdFFpeEZRVkZ1UWl4UlFWSnRRaXhGUVZOdVFpeFRRVlJ0UWl4RlFWVnVRaXhoUVZadFFpeEZRVmR1UWl4WFFWaHRRaXhGUVZsdVFpeFBRVnB0UWl4RlFXRnVRaXhYUVdKdFFpeEZRV051UWl4VlFXUnRRaXhGUVdWdVFpeEpRV1p0UWl4RlFXZENia0lzVDBGb1FtMUNMRVZCYVVKdVFpeFJRV3BDYlVJc1JVRnJRbTVDTEUxQmJFSnRRaXhGUVcxQ2JrSXNTVUZ1UW0xQ0xFVkJiMEp1UWl4VFFYQkNiVUlzUlVGeFFtNUNMRTFCY2tKdFFpeEZRWE5DYmtJc1RVRjBRbTFDTEVWQmRVSnVRaXhOUVhaQ2JVSXNSVUYzUW01Q0xFdEJlRUp0UWl4RlFYbENia0lzU1VGNlFtMUNMRVZCTUVKdVFpeEpRVEZDYlVJc1JVRXlRbTVDTEVsQk0wSnRRaXhGUVRSQ2JrSXNWMEUxUW0xQ0xFVkJOa0p1UWl4alFUZENiVUlzUlVFNFFtNUNMRkZCT1VKdFFpeEZRU3RDYmtJc1NVRXZRbTFDTEVWQlowTnVRaXhKUVdoRGJVSXNSVUZwUTI1Q0xGbEJha050UWl4RlFXdERia0lzVDBGc1EyMUNMRVZCYlVOdVFpeFBRVzVEYlVJc1JVRnZRMjVDTEZGQmNFTnRRaXhGUVhGRGJrSXNVMEZ5UTIxQ0xFVkJjME51UWl4VFFYUkRiVUlzUlVGMVEyNUNMRTlCZGtOdFFpeEZRWGREYmtJc1QwRjRRMjFDTEVWQmVVTnVRaXhQUVhwRGJVSXNSVUV3UTI1Q0xGRkJNVU50UWl4RlFUSkRia0lzVFVFelEyMUNMRVZCTkVOdVFpeExRVFZEYlVJc1JVRTJRMjVDTEZOQk4wTnRRaXhGUVRoRGJrSXNUMEU1UTIxQ0xFVkJLME51UWl4VlFTOURiVUlzUlVGblJHNUNMRk5CYUVSdFFpeEZRV2xFYmtJc1ZVRnFSRzFDTEVWQmEwUnVRaXhWUVd4RWJVSXNSVUZ0Ukc1Q0xFdEJia1J0UWl4RlFXOUVia0lzVFVGd1JHMUNMRVZCY1VSdVFpeGxRWEpFYlVJc1JVRnpSRzVDTEUxQmRFUnRRaXhGUVhWRWJrSXNTMEYyUkcxQ0xFVkJkMFJ1UWl4TlFYaEViVUlzUlVGNVJHNUNMRkZCZWtSdFFpeEZRVEJFYmtJc1UwRXhSRzFDTEVWQk1rUnVRaXhKUVRORWJVSXNSVUUwUkc1Q0xFOUJOVVJ0UWl4RlFUWkVia0lzVVVFM1JHMUNMRVZCT0VSdVFpeFhRVGxFYlVJc1EwRkJaQ0lzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1WNGNHOXlkQ0JqYjI1emRDQlhUMUpFVXlBOUlGdGNjbHh1SUNCY0ltRmtYQ0lzWEhKY2JpQWdYQ0poWkdsd2FYTnBZMmx1WjF3aUxGeHlYRzRnSUZ3aVlXeHBjWFZoWENJc1hISmNiaUFnWENKaGJHbHhkV2x3WENJc1hISmNiaUFnWENKaGJXVjBYQ0lzWEhKY2JpQWdYQ0poYm1sdFhDSXNYSEpjYmlBZ1hDSmhkWFJsWENJc1hISmNiaUFnWENKamFXeHNkVzFjSWl4Y2NseHVJQ0JjSW1OdmJXMXZaRzljSWl4Y2NseHVJQ0JjSW1OdmJuTmxZM1JsZEhWeVhDSXNYSEpjYmlBZ1hDSmpiMjV6WlhGMVlYUmNJaXhjY2x4dUlDQmNJbU4xYkhCaFhDSXNYSEpjYmlBZ1hDSmpkWEJwWkdGMFlYUmNJaXhjY2x4dUlDQmNJbVJsYzJWeWRXNTBYQ0lzWEhKY2JpQWdYQ0prYjF3aUxGeHlYRzRnSUZ3aVpHOXNiM0pjSWl4Y2NseHVJQ0JjSW1SdmJHOXlaVndpTEZ4eVhHNGdJRndpWkhWcGMxd2lMRnh5WEc0Z0lGd2laV0ZjSWl4Y2NseHVJQ0JjSW1WcGRYTnRiMlJjSWl4Y2NseHVJQ0JjSW1Wc2FYUmNJaXhjY2x4dUlDQmNJbVZ1YVcxY0lpeGNjbHh1SUNCY0ltVnpjMlZjSWl4Y2NseHVJQ0JjSW1WemRGd2lMRnh5WEc0Z0lGd2laWFJjSWl4Y2NseHVJQ0JjSW1WMVhDSXNYSEpjYmlBZ1hDSmxlRndpTEZ4eVhHNGdJRndpWlhoalpYQjBaWFZ5WENJc1hISmNiaUFnWENKbGVHVnlZMmwwWVhScGIyNWNJaXhjY2x4dUlDQmNJbVoxWjJsaGRGd2lMRnh5WEc0Z0lGd2lhV1JjSWl4Y2NseHVJQ0JjSW1sdVhDSXNYSEpjYmlBZ1hDSnBibU5wWkdsa2RXNTBYQ0lzWEhKY2JpQWdYQ0pwY0hOMWJWd2lMRnh5WEc0Z0lGd2lhWEoxY21WY0lpeGNjbHh1SUNCY0lteGhZbTl5WlZ3aUxGeHlYRzRnSUZ3aWJHRmliM0pwYzF3aUxGeHlYRzRnSUZ3aWJHRmliM0oxYlZ3aUxGeHlYRzRnSUZ3aVRHOXlaVzFjSWl4Y2NseHVJQ0JjSW0xaFoyNWhYQ0lzWEhKY2JpQWdYQ0p0YVc1cGJWd2lMRnh5WEc0Z0lGd2liVzlzYkdsMFhDSXNYSEpjYmlBZ1hDSnVhWE5wWENJc1hISmNiaUFnWENKdWIyNWNJaXhjY2x4dUlDQmNJbTV2YzNSeWRXUmNJaXhjY2x4dUlDQmNJbTUxYkd4aFhDSXNYSEpjYmlBZ1hDSnZZMk5oWldOaGRGd2lMRnh5WEc0Z0lGd2liMlptYVdOcFlWd2lMRnh5WEc0Z0lGd2ljR0Z5YVdGMGRYSmNJaXhjY2x4dUlDQmNJbkJ5YjJsa1pXNTBYQ0lzWEhKY2JpQWdYQ0p4ZFdsY0lpeGNjbHh1SUNCY0luRjFhWE5jSWl4Y2NseHVJQ0JjSW5KbGNISmxhR1Z1WkdWeWFYUmNJaXhjY2x4dUlDQmNJbk5wYm5SY0lpeGNjbHh1SUNCY0luTnBkRndpTEZ4eVhHNGdJRndpYzNWdWRGd2lMRnh5WEc0Z0lGd2lkR1Z0Y0c5eVhDSXNYSEpjYmlBZ1hDSjFiR3hoYldOdlhDSXNYSEpjYmlBZ1hDSjFkRndpTEZ4eVhHNGdJRndpZG1Wc2FYUmNJaXhjY2x4dUlDQmNJblpsYm1saGJWd2lMRnh5WEc0Z0lGd2lkbTlzZFhCMFlYUmxYQ0lzWEhKY2JsMDdYSEpjYmlKZGZRPT0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkxvcmVtSXBzdW1cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX0xvcmVtSXBzdW1bXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbmV4cG9ydHMubG9yZW1JcHN1bSA9IHZvaWQgMDtcblxudmFyIF9mb3JtYXRzID0gcmVxdWlyZShcIi4vY29uc3RhbnRzL2Zvcm1hdHNcIik7XG5cbnZhciBfdW5pdHMgPSByZXF1aXJlKFwiLi9jb25zdGFudHMvdW5pdHNcIik7XG5cbnZhciBfd29yZHMgPSByZXF1aXJlKFwiLi9jb25zdGFudHMvd29yZHNcIik7XG5cbnZhciBfTG9yZW1JcHN1bSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL0xvcmVtSXBzdW1cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIGxvcmVtSXBzdW0gPSBmdW5jdGlvbiBsb3JlbUlwc3VtKCkge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICBfcmVmJGNvdW50ID0gX3JlZi5jb3VudCxcbiAgICAgIGNvdW50ID0gX3JlZiRjb3VudCA9PT0gdm9pZCAwID8gMSA6IF9yZWYkY291bnQsXG4gICAgICBfcmVmJGZvcm1hdCA9IF9yZWYuZm9ybWF0LFxuICAgICAgZm9ybWF0ID0gX3JlZiRmb3JtYXQgPT09IHZvaWQgMCA/IF9mb3JtYXRzLkZPUk1BVF9QTEFJTiA6IF9yZWYkZm9ybWF0LFxuICAgICAgX3JlZiRwYXJhZ3JhcGhMb3dlckJvID0gX3JlZi5wYXJhZ3JhcGhMb3dlckJvdW5kLFxuICAgICAgcGFyYWdyYXBoTG93ZXJCb3VuZCA9IF9yZWYkcGFyYWdyYXBoTG93ZXJCbyA9PT0gdm9pZCAwID8gMyA6IF9yZWYkcGFyYWdyYXBoTG93ZXJCbyxcbiAgICAgIF9yZWYkcGFyYWdyYXBoVXBwZXJCbyA9IF9yZWYucGFyYWdyYXBoVXBwZXJCb3VuZCxcbiAgICAgIHBhcmFncmFwaFVwcGVyQm91bmQgPSBfcmVmJHBhcmFncmFwaFVwcGVyQm8gPT09IHZvaWQgMCA/IDcgOiBfcmVmJHBhcmFncmFwaFVwcGVyQm8sXG4gICAgICByYW5kb20gPSBfcmVmLnJhbmRvbSxcbiAgICAgIF9yZWYkc2VudGVuY2VMb3dlckJvdSA9IF9yZWYuc2VudGVuY2VMb3dlckJvdW5kLFxuICAgICAgc2VudGVuY2VMb3dlckJvdW5kID0gX3JlZiRzZW50ZW5jZUxvd2VyQm91ID09PSB2b2lkIDAgPyA1IDogX3JlZiRzZW50ZW5jZUxvd2VyQm91LFxuICAgICAgX3JlZiRzZW50ZW5jZVVwcGVyQm91ID0gX3JlZi5zZW50ZW5jZVVwcGVyQm91bmQsXG4gICAgICBzZW50ZW5jZVVwcGVyQm91bmQgPSBfcmVmJHNlbnRlbmNlVXBwZXJCb3UgPT09IHZvaWQgMCA/IDE1IDogX3JlZiRzZW50ZW5jZVVwcGVyQm91LFxuICAgICAgX3JlZiR1bml0cyA9IF9yZWYudW5pdHMsXG4gICAgICB1bml0cyA9IF9yZWYkdW5pdHMgPT09IHZvaWQgMCA/IF91bml0cy5VTklUX1NFTlRFTkNFUyA6IF9yZWYkdW5pdHMsXG4gICAgICBfcmVmJHdvcmRzID0gX3JlZi53b3JkcyxcbiAgICAgIHdvcmRzID0gX3JlZiR3b3JkcyA9PT0gdm9pZCAwID8gX3dvcmRzLldPUkRTIDogX3JlZiR3b3JkcyxcbiAgICAgIF9yZWYkc3VmZml4ID0gX3JlZi5zdWZmaXgsXG4gICAgICBzdWZmaXggPSBfcmVmJHN1ZmZpeCA9PT0gdm9pZCAwID8gXCJcIiA6IF9yZWYkc3VmZml4O1xuXG4gIHZhciBvcHRpb25zID0ge1xuICAgIHJhbmRvbTogcmFuZG9tLFxuICAgIHNlbnRlbmNlc1BlclBhcmFncmFwaDoge1xuICAgICAgbWF4OiBwYXJhZ3JhcGhVcHBlckJvdW5kLFxuICAgICAgbWluOiBwYXJhZ3JhcGhMb3dlckJvdW5kXG4gICAgfSxcbiAgICB3b3Jkczogd29yZHMsXG4gICAgd29yZHNQZXJTZW50ZW5jZToge1xuICAgICAgbWF4OiBzZW50ZW5jZVVwcGVyQm91bmQsXG4gICAgICBtaW46IHNlbnRlbmNlTG93ZXJCb3VuZFxuICAgIH1cbiAgfTtcbiAgdmFyIGxvcmVtID0gbmV3IF9Mb3JlbUlwc3VtW1wiZGVmYXVsdFwiXShvcHRpb25zLCBmb3JtYXQsIHN1ZmZpeCk7XG5cbiAgc3dpdGNoICh1bml0cykge1xuICAgIGNhc2UgX3VuaXRzLlVOSVRfUEFSQUdSQVBIUzpcbiAgICBjYXNlIF91bml0cy5VTklUX1BBUkFHUkFQSDpcbiAgICAgIHJldHVybiBsb3JlbS5nZW5lcmF0ZVBhcmFncmFwaHMoY291bnQpO1xuXG4gICAgY2FzZSBfdW5pdHMuVU5JVF9TRU5URU5DRVM6XG4gICAgY2FzZSBfdW5pdHMuVU5JVF9TRU5URU5DRTpcbiAgICAgIHJldHVybiBsb3JlbS5nZW5lcmF0ZVNlbnRlbmNlcyhjb3VudCk7XG5cbiAgICBjYXNlIF91bml0cy5VTklUX1dPUkRTOlxuICAgIGNhc2UgX3VuaXRzLlVOSVRfV09SRDpcbiAgICAgIHJldHVybiBsb3JlbS5nZW5lcmF0ZVdvcmRzKGNvdW50KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJcIjtcbiAgfVxufTtcblxuZXhwb3J0cy5sb3JlbUlwc3VtID0gbG9yZW1JcHN1bTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5cGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNld5SnNiM0psYlVsd2MzVnRJaXdpWTI5MWJuUWlMQ0ptYjNKdFlYUWlMQ0pHVDFKTlFWUmZVRXhCU1U0aUxDSndZWEpoWjNKaGNHaE1iM2RsY2tKdmRXNWtJaXdpY0dGeVlXZHlZWEJvVlhCd1pYSkNiM1Z1WkNJc0luSmhibVJ2YlNJc0luTmxiblJsYm1ObFRHOTNaWEpDYjNWdVpDSXNJbk5sYm5SbGJtTmxWWEJ3WlhKQ2IzVnVaQ0lzSW5WdWFYUnpJaXdpVlU1SlZGOVRSVTVVUlU1RFJWTWlMQ0ozYjNKa2N5SXNJbGRQVWtSVElpd2ljM1ZtWm1sNElpd2liM0IwYVc5dWN5SXNJbk5sYm5SbGJtTmxjMUJsY2xCaGNtRm5jbUZ3YUNJc0ltMWhlQ0lzSW0xcGJpSXNJbmR2Y21SelVHVnlVMlZ1ZEdWdVkyVWlMQ0pzYjNKbGJTSXNJa3h2Y21WdFNYQnpkVzBpTENKVlRrbFVYMUJCVWtGSFVrRlFTRk1pTENKVlRrbFVYMUJCVWtGSFVrRlFTQ0lzSW1kbGJtVnlZWFJsVUdGeVlXZHlZWEJvY3lJc0lsVk9TVlJmVTBWT1ZFVk9RMFVpTENKblpXNWxjbUYwWlZObGJuUmxibU5sY3lJc0lsVk9TVlJmVjA5U1JGTWlMQ0pWVGtsVVgxZFBVa1FpTENKblpXNWxjbUYwWlZkdmNtUnpJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPMEZCUVVFN08wRkJRMEU3TzBGQlUwRTdPMEZCUlVFN096czdRVUZsUVN4SlFVRk5RU3hWUVVGVkxFZEJRVWNzVTBGQllrRXNWVUZCWVN4SFFWZHRRanRCUVVGQkxHbEdRVUZtTEVWQlFXVTdRVUZCUVN4M1FrRldjRU5ETEV0QlZXOURPMEZCUVVFc1RVRldjRU5CTEV0QlZXOURMREpDUVZZMVFpeERRVlUwUWp0QlFVRkJMSGxDUVZSd1EwTXNUVUZUYjBNN1FVRkJRU3hOUVZSd1EwRXNUVUZUYjBNc05FSkJWRE5DUXl4eFFrRlRNa0k3UVVGQlFTeHRRMEZTY0VORExHMUNRVkZ2UXp0QlFVRkJMRTFCVW5CRFFTeHRRa0ZSYjBNc2MwTkJVbVFzUTBGUll6dEJRVUZCTEcxRFFWQndRME1zYlVKQlQyOURPMEZCUVVFc1RVRlFjRU5CTEcxQ1FVOXZReXh6UTBGUVpDeERRVTlqTzBGQlFVRXNUVUZPY0VORExFMUJUVzlETEZGQlRuQkRRU3hOUVUxdlF6dEJRVUZCTEcxRFFVeHdRME1zYTBKQlMyOURPMEZCUVVFc1RVRk1jRU5CTEd0Q1FVdHZReXh6UTBGTVppeERRVXRsTzBGQlFVRXNiVU5CU25CRFF5eHJRa0ZKYjBNN1FVRkJRU3hOUVVwd1EwRXNhMEpCU1c5RExITkRRVXBtTEVWQlNXVTdRVUZCUVN4M1FrRkljRU5ETEV0QlIyOURPMEZCUVVFc1RVRkljRU5CTEV0QlIyOURMREpDUVVnMVFrTXNjVUpCUnpSQ08wRkJRVUVzZDBKQlJuQkRReXhMUVVWdlF6dEJRVUZCTEUxQlJuQkRRU3hMUVVWdlF5d3lRa0ZHTlVKRExGbEJSVFJDTzBGQlFVRXNlVUpCUkhCRFF5eE5RVU52UXp0QlFVRkJMRTFCUkhCRFFTeE5RVU52UXl3MFFrRkVNMElzUlVGRE1rSTdPMEZCUTNCRExFMUJRVTFETEU5QlFVOHNSMEZCUnp0QlFVTmtVaXhKUVVGQlFTeE5RVUZOTEVWQlFVNUJMRTFCUkdNN1FVRkZaRk1zU1VGQlFVRXNjVUpCUVhGQ0xFVkJRVVU3UVVGRGNrSkRMRTFCUVVGQkxFZEJRVWNzUlVGQlJWZ3NiVUpCUkdkQ08wRkJSWEpDV1N4TlFVRkJRU3hIUVVGSExFVkJRVVZpTzBGQlJtZENMRXRCUmxRN1FVRk5aRThzU1VGQlFVRXNTMEZCU3l4RlFVRk1RU3hMUVU1ak8wRkJUMlJQTEVsQlFVRkJMR2RDUVVGblFpeEZRVUZGTzBGQlEyaENSaXhOUVVGQlFTeEhRVUZITEVWQlFVVlNMR3RDUVVSWE8wRkJSV2hDVXl4TlFVRkJRU3hIUVVGSExFVkJRVVZXTzBGQlJsYzdRVUZRU2l4SFFVRm9RanRCUVdGQkxFMUJRVTFaTEV0QlFXbENMRWRCUVVjc1NVRkJTVU1zYzBKQlFVb3NRMEZCWlU0c1QwRkJaaXhGUVVGM1Fsb3NUVUZCZUVJc1JVRkJaME5YTEUxQlFXaERMRU5CUVRGQ096dEJRVVZCTEZWQlFWRktMRXRCUVZJN1FVRkRSU3hUUVVGTFdTeHpRa0ZCVER0QlFVTkJMRk5CUVV0RExIRkNRVUZNTzBGQlEwVXNZVUZCVDBnc1MwRkJTeXhEUVVGRFNTeHJRa0ZCVGl4RFFVRjVRblJDTEV0QlFYcENMRU5CUVZBN08wRkJRMFlzVTBGQlMxTXNjVUpCUVV3N1FVRkRRU3hUUVVGTFl5eHZRa0ZCVER0QlFVTkZMR0ZCUVU5TUxFdEJRVXNzUTBGQlEwMHNhVUpCUVU0c1EwRkJkMEo0UWl4TFFVRjRRaXhEUVVGUU96dEJRVU5HTEZOQlFVdDVRaXhwUWtGQlREdEJRVU5CTEZOQlFVdERMR2RDUVVGTU8wRkJRMFVzWVVGQlQxSXNTMEZCU3l4RFFVRkRVeXhoUVVGT0xFTkJRVzlDTTBJc1MwRkJjRUlzUTBGQlVEczdRVUZEUmp0QlFVTkZMR0ZCUVU4c1JVRkJVRHRCUVZoS08wRkJZVVFzUTBGNFEwUWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJNYjNKbGJVWnZjbTFoZEN3Z1JrOVNUVUZVWDFCTVFVbE9JSDBnWm5KdmJTQmNJaTR2WTI5dWMzUmhiblJ6TDJadmNtMWhkSE5jSWp0Y2NseHVhVzF3YjNKMElIdGNjbHh1SUNCTWIzSmxiVlZ1YVhRc1hISmNiaUFnVlU1SlZGOVFRVkpCUjFKQlVFZ3NYSEpjYmlBZ1ZVNUpWRjlRUVZKQlIxSkJVRWhUTEZ4eVhHNGdJRlZPU1ZSZlUwVk9WRVZPUTBWVExGeHlYRzRnSUZWT1NWUmZVMFZPVkVWT1EwVXNYSEpjYmlBZ1ZVNUpWRjlYVDFKRVV5eGNjbHh1SUNCVlRrbFVYMWRQVWtRc1hISmNibjBnWm5KdmJTQmNJaTR2WTI5dWMzUmhiblJ6TDNWdWFYUnpYQ0k3WEhKY2JtbHRjRzl5ZENCN0lGZFBVa1JUSUgwZ1puSnZiU0JjSWk0dlkyOXVjM1JoYm5SekwzZHZjbVJ6WENJN1hISmNibWx0Y0c5eWRDQjdJRWxRY201bklIMGdabkp2YlNCY0lpNHZiR2xpTDJkbGJtVnlZWFJ2Y2x3aU8xeHlYRzVwYlhCdmNuUWdURzl5WlcxSmNITjFiU0JtY205dElGd2lMaTlzYVdJdlRHOXlaVzFKY0hOMWJWd2lPMXh5WEc1Y2NseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQkpURzl5WlcxSmNITjFiVkJoY21GdGN5QjdYSEpjYmlBZ1kyOTFiblEvT2lCdWRXMWlaWEk3WEhKY2JpQWdabTl5YldGMFB6b2dURzl5WlcxR2IzSnRZWFE3WEhKY2JpQWdjR0Z5WVdkeVlYQm9URzkzWlhKQ2IzVnVaRDg2SUc1MWJXSmxjanRjY2x4dUlDQndZWEpoWjNKaGNHaFZjSEJsY2tKdmRXNWtQem9nYm5WdFltVnlPMXh5WEc0Z0lISmhibVJ2YlQ4NklFbFFjbTVuTzF4eVhHNGdJSE5sYm5SbGJtTmxURzkzWlhKQ2IzVnVaRDg2SUc1MWJXSmxjanRjY2x4dUlDQnpaVzUwWlc1alpWVndjR1Z5UW05MWJtUS9PaUJ1ZFcxaVpYSTdYSEpjYmlBZ2RXNXBkSE0vT2lCTWIzSmxiVlZ1YVhRN1hISmNiaUFnZDI5eVpITS9PaUJ6ZEhKcGJtZGJYVHRjY2x4dUlDQnpkV1ptYVhnL09pQnpkSEpwYm1jN1hISmNibjFjY2x4dVhISmNibU52Ym5OMElHeHZjbVZ0U1hCemRXMGdQU0FvZTF4eVhHNGdJR052ZFc1MElEMGdNU3hjY2x4dUlDQm1iM0p0WVhRZ1BTQkdUMUpOUVZSZlVFeEJTVTRzWEhKY2JpQWdjR0Z5WVdkeVlYQm9URzkzWlhKQ2IzVnVaQ0E5SURNc1hISmNiaUFnY0dGeVlXZHlZWEJvVlhCd1pYSkNiM1Z1WkNBOUlEY3NYSEpjYmlBZ2NtRnVaRzl0TEZ4eVhHNGdJSE5sYm5SbGJtTmxURzkzWlhKQ2IzVnVaQ0E5SURVc1hISmNiaUFnYzJWdWRHVnVZMlZWY0hCbGNrSnZkVzVrSUQwZ01UVXNYSEpjYmlBZ2RXNXBkSE1nUFNCVlRrbFVYMU5GVGxSRlRrTkZVeXhjY2x4dUlDQjNiM0prY3lBOUlGZFBVa1JUTEZ4eVhHNGdJSE4xWm1acGVDQTlJRndpWENJc1hISmNibjA2SUVsTWIzSmxiVWx3YzNWdFVHRnlZVzF6SUQwZ2UzMHBPaUJ6ZEhKcGJtY2dQVDRnZTF4eVhHNGdJR052Ym5OMElHOXdkR2x2Ym5NZ1BTQjdYSEpjYmlBZ0lDQnlZVzVrYjIwc1hISmNiaUFnSUNCelpXNTBaVzVqWlhOUVpYSlFZWEpoWjNKaGNHZzZJSHRjY2x4dUlDQWdJQ0FnYldGNE9pQndZWEpoWjNKaGNHaFZjSEJsY2tKdmRXNWtMRnh5WEc0Z0lDQWdJQ0J0YVc0NklIQmhjbUZuY21Gd2FFeHZkMlZ5UW05MWJtUXNYSEpjYmlBZ0lDQjlMRnh5WEc0Z0lDQWdkMjl5WkhNc1hISmNiaUFnSUNCM2IzSmtjMUJsY2xObGJuUmxibU5sT2lCN1hISmNiaUFnSUNBZ0lHMWhlRG9nYzJWdWRHVnVZMlZWY0hCbGNrSnZkVzVrTEZ4eVhHNGdJQ0FnSUNCdGFXNDZJSE5sYm5SbGJtTmxURzkzWlhKQ2IzVnVaQ3hjY2x4dUlDQWdJSDBzWEhKY2JpQWdmVHRjY2x4dVhISmNiaUFnWTI5dWMzUWdiRzl5WlcwNklFeHZjbVZ0U1hCemRXMGdQU0J1WlhjZ1RHOXlaVzFKY0hOMWJTaHZjSFJwYjI1ekxDQm1iM0p0WVhRc0lITjFabVpwZUNrN1hISmNibHh5WEc0Z0lITjNhWFJqYUNBb2RXNXBkSE1wSUh0Y2NseHVJQ0FnSUdOaGMyVWdWVTVKVkY5UVFWSkJSMUpCVUVoVE9seHlYRzRnSUNBZ1kyRnpaU0JWVGtsVVgxQkJVa0ZIVWtGUVNEcGNjbHh1SUNBZ0lDQWdjbVYwZFhKdUlHeHZjbVZ0TG1kbGJtVnlZWFJsVUdGeVlXZHlZWEJvY3loamIzVnVkQ2s3WEhKY2JpQWdJQ0JqWVhObElGVk9TVlJmVTBWT1ZFVk9RMFZUT2x4eVhHNGdJQ0FnWTJGelpTQlZUa2xVWDFORlRsUkZUa05GT2x4eVhHNGdJQ0FnSUNCeVpYUjFjbTRnYkc5eVpXMHVaMlZ1WlhKaGRHVlRaVzUwWlc1alpYTW9ZMjkxYm5RcE8xeHlYRzRnSUNBZ1kyRnpaU0JWVGtsVVgxZFBVa1JUT2x4eVhHNGdJQ0FnWTJGelpTQlZUa2xVWDFkUFVrUTZYSEpjYmlBZ0lDQWdJSEpsZEhWeWJpQnNiM0psYlM1blpXNWxjbUYwWlZkdmNtUnpLR052ZFc1MEtUdGNjbHh1SUNBZ0lHUmxabUYxYkhRNlhISmNiaUFnSUNBZ0lISmxkSFZ5YmlCY0lsd2lPMXh5WEc0Z0lIMWNjbHh1ZlR0Y2NseHVYSEpjYm1WNGNHOXlkQ0I3SUd4dmNtVnRTWEJ6ZFcwc0lFeHZjbVZ0U1hCemRXMGdmVHRjY2x4dUlsMTkiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2Zvcm1hdHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL2Zvcm1hdHNcIik7XG5cbnZhciBfbGluZUVuZGluZ3MgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL2xpbmVFbmRpbmdzXCIpO1xuXG52YXIgX2dlbmVyYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xpYi9nZW5lcmF0b3JcIikpO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKFwiLi4vdXRpbFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIExvcmVtSXBzdW0gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBMb3JlbUlwc3VtKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB2YXIgZm9ybWF0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBfZm9ybWF0cy5GT1JNQVRfUExBSU47XG4gICAgdmFyIHN1ZmZpeCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvcmVtSXBzdW0pO1xuXG4gICAgdGhpcy5mb3JtYXQgPSBmb3JtYXQ7XG4gICAgdGhpcy5zdWZmaXggPSBzdWZmaXg7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZW5lcmF0b3JcIiwgdm9pZCAwKTtcblxuICAgIGlmIChfZm9ybWF0cy5GT1JNQVRTLmluZGV4T2YoZm9ybWF0LnRvTG93ZXJDYXNlKCkpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KGZvcm1hdCwgXCIgaXMgYW4gaW52YWxpZCBmb3JtYXQuIFBsZWFzZSB1c2UgXCIpLmNvbmNhdChfZm9ybWF0cy5GT1JNQVRTLmpvaW4oXCIgb3IgXCIpLCBcIi5cIikpO1xuICAgIH1cblxuICAgIHRoaXMuZ2VuZXJhdG9yID0gbmV3IF9nZW5lcmF0b3JbXCJkZWZhdWx0XCJdKG9wdGlvbnMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExvcmVtSXBzdW0sIFt7XG4gICAga2V5OiBcImdldExpbmVFbmRpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TGluZUVuZGluZygpIHtcbiAgICAgIGlmICh0aGlzLnN1ZmZpeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWZmaXg7XG4gICAgICB9XG5cbiAgICAgIGlmICghKDAsIF91dGlsLmlzUmVhY3ROYXRpdmUpKCkgJiYgKDAsIF91dGlsLmlzTm9kZSkoKSAmJiAoMCwgX3V0aWwuaXNXaW5kb3dzKSgpKSB7XG4gICAgICAgIHJldHVybiBfbGluZUVuZGluZ3MuTElORV9FTkRJTkdTLldJTjMyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2xpbmVFbmRpbmdzLkxJTkVfRU5ESU5HUy5QT1NJWDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9ybWF0U3RyaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdFN0cmluZyhzdHIpIHtcbiAgICAgIGlmICh0aGlzLmZvcm1hdCA9PT0gX2Zvcm1hdHMuRk9STUFUX0hUTUwpIHtcbiAgICAgICAgcmV0dXJuIFwiPHA+XCIuY29uY2F0KHN0ciwgXCI8L3A+XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb3JtYXRTdHJpbmdzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdFN0cmluZ3Moc3RyaW5ncykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgcmV0dXJuIHN0cmluZ3MubWFwKGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmZvcm1hdFN0cmluZyhzdHIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdlbmVyYXRlV29yZHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVXb3JkcyhudW0pIHtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdFN0cmluZyh0aGlzLmdlbmVyYXRvci5nZW5lcmF0ZVJhbmRvbVdvcmRzKG51bSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZW5lcmF0ZVNlbnRlbmNlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZVNlbnRlbmNlcyhudW0pIHtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdFN0cmluZyh0aGlzLmdlbmVyYXRvci5nZW5lcmF0ZVJhbmRvbVBhcmFncmFwaChudW0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2VuZXJhdGVQYXJhZ3JhcGhzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlUGFyYWdyYXBocyhudW0pIHtcbiAgICAgIHZhciBtYWtlU3RyaW5nID0gdGhpcy5nZW5lcmF0b3IuZ2VuZXJhdGVSYW5kb21QYXJhZ3JhcGguYmluZCh0aGlzLmdlbmVyYXRvcik7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXRTdHJpbmdzKCgwLCBfdXRpbC5tYWtlQXJyYXlPZlN0cmluZ3MpKG51bSwgbWFrZVN0cmluZykpLmpvaW4odGhpcy5nZXRMaW5lRW5kaW5nKCkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMb3JlbUlwc3VtO1xufSgpO1xuXG52YXIgX2RlZmF1bHQgPSBMb3JlbUlwc3VtO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXNhV0l2VEc5eVpXMUpjSE4xYlM1MGN5SmRMQ0p1WVcxbGN5STZXeUpNYjNKbGJVbHdjM1Z0SWl3aWIzQjBhVzl1Y3lJc0ltWnZjbTFoZENJc0lrWlBVazFCVkY5UVRFRkpUaUlzSW5OMVptWnBlQ0lzSWtaUFVrMUJWRk1pTENKcGJtUmxlRTltSWl3aWRHOU1iM2RsY2tOaGMyVWlMQ0pGY25KdmNpSXNJbXB2YVc0aUxDSm5aVzVsY21GMGIzSWlMQ0pIWlc1bGNtRjBiM0lpTENKTVNVNUZYMFZPUkVsT1IxTWlMQ0pYU1U0ek1pSXNJbEJQVTBsWUlpd2ljM1J5SWl3aVJrOVNUVUZVWDBoVVRVd2lMQ0p6ZEhKcGJtZHpJaXdpYldGd0lpd2labTl5YldGMFUzUnlhVzVuSWl3aWJuVnRJaXdpWjJWdVpYSmhkR1ZTWVc1a2IyMVhiM0prY3lJc0ltZGxibVZ5WVhSbFVtRnVaRzl0VUdGeVlXZHlZWEJvSWl3aWJXRnJaVk4wY21sdVp5SXNJbUpwYm1RaUxDSm1iM0p0WVhSVGRISnBibWR6SWl3aVoyVjBUR2x1WlVWdVpHbHVaeUpkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3p0QlFVRkJPenRCUVVOQk96dEJRVU5CT3p0QlFVTkJPenM3T3pzN096czdPenM3U1VGRlRVRXNWVHRCUVVkS0xIZENRVWxGTzBGQlFVRXNVVUZJUVVNc1QwRkhRU3gxUlVGSU5rSXNSVUZITjBJN1FVRkJRU3hSUVVaUFF5eE5RVVZRTEhWRlFVWTJRa01zY1VKQlJUZENPMEZCUVVFc1VVRkVUME1zVFVGRFVEczdRVUZCUVRzN1FVRkJRU3hUUVVaUFJpeE5RVVZRTEVkQlJrOUJMRTFCUlZBN1FVRkJRU3hUUVVSUFJTeE5RVU5RTEVkQlJFOUJMRTFCUTFBN08wRkJRVUU3TzBGQlEwRXNVVUZCU1VNc2FVSkJRVkZETEU5QlFWSXNRMEZCWjBKS0xFMUJRVTBzUTBGQlEwc3NWMEZCVUN4RlFVRm9RaXhOUVVFd1F5eERRVUZETEVOQlFTOURMRVZCUVd0RU8wRkJRMmhFTEZsQlFVMHNTVUZCU1VNc1MwRkJTaXhYUVVORVRpeE5RVVJETEN0RFFVTXdRMGNzYVVKQlFWRkpMRWxCUVZJc1EwRkJZU3hOUVVGaUxFTkJSREZETEU5QlFVNDdRVUZIUkRzN1FVRkRSQ3hUUVVGTFF5eFRRVUZNTEVkQlFXbENMRWxCUVVsRExIRkNRVUZLTEVOQlFXTldMRTlCUVdRc1EwRkJha0k3UVVGRFJEczdPenRYUVVWRUxIbENRVUYxUWp0QlFVTnlRaXhWUVVGSkxFdEJRVXRITEUxQlFWUXNSVUZCYVVJN1FVRkRaaXhsUVVGUExFdEJRVXRCTEUxQlFWbzdRVUZEUkRzN1FVRkZSQ3hWUVVGSkxFTkJRVU1zTUVKQlFVUXNTVUZCYjBJc2JVSkJRWEJDTEVsQlFXZERMSE5DUVVGd1F5eEZRVUZwUkR0QlFVTXZReXhsUVVGUFVTd3dRa0ZCWVVNc1MwRkJjRUk3UVVGRFJEczdRVUZGUkN4aFFVRlBSQ3d3UWtGQllVVXNTMEZCY0VJN1FVRkRSRHM3TzFkQlJVUXNjMEpCUVc5Q1F5eEhRVUZ3UWl4RlFVRjVRenRCUVVOMlF5eFZRVUZKTEV0QlFVdGlMRTFCUVV3c1MwRkJaMEpqTEc5Q1FVRndRaXhGUVVGcFF6dEJRVU12UWl3MFFrRkJZVVFzUjBGQllqdEJRVU5FT3p0QlFVTkVMR0ZCUVU5QkxFZEJRVkE3UVVGRFJEczdPMWRCUlVRc2RVSkJRWEZDUlN4UFFVRnlRaXhGUVVGclJEdEJRVUZCT3p0QlFVTm9SQ3hoUVVGUFFTeFBRVUZQTEVOQlFVTkRMRWRCUVZJc1EwRkJXU3hWUVVGRFNDeEhRVUZFTzBGQlFVRXNaVUZCVXl4TFFVRkpMRU5CUVVOSkxGbEJRVXdzUTBGQmEwSktMRWRCUVd4Q0xFTkJRVlE3UVVGQlFTeFBRVUZhTEVOQlFWQTdRVUZEUkRzN08xZEJSVVFzZFVKQlFYRkNTeXhIUVVGeVFpeEZRVUV5UXp0QlFVTjZReXhoUVVGUExFdEJRVXRFTEZsQlFVd3NRMEZCYTBJc1MwRkJTMVFzVTBGQlRDeERRVUZsVnl4dFFrRkJaaXhEUVVGdFEwUXNSMEZCYmtNc1EwRkJiRUlzUTBGQlVEdEJRVU5FT3pzN1YwRkZSQ3d5UWtGQmVVSkJMRWRCUVhwQ0xFVkJRU3RETzBGQlF6ZERMR0ZCUVU4c1MwRkJTMFFzV1VGQlRDeERRVUZyUWl4TFFVRkxWQ3hUUVVGTUxFTkJRV1ZaTEhWQ1FVRm1MRU5CUVhWRFJpeEhRVUYyUXl4RFFVRnNRaXhEUVVGUU8wRkJRMFE3T3p0WFFVVkVMRFJDUVVFd1FrRXNSMEZCTVVJc1JVRkJLME03UVVGRE4wTXNWVUZCVFVjc1ZVRkJWU3hIUVVGSExFdEJRVXRpTEZOQlFVd3NRMEZCWlZrc2RVSkJRV1lzUTBGQmRVTkZMRWxCUVhaRExFTkJRMnBDTEV0QlFVdGtMRk5CUkZrc1EwRkJia0k3UVVGSFFTeGhRVUZQTEV0QlFVdGxMR0ZCUVV3c1EwRkJiVUlzT0VKQlFXMUNUQ3hIUVVGdVFpeEZRVUYzUWtjc1ZVRkJlRUlzUTBGQmJrSXNSVUZCZDBSa0xFbEJRWGhFTEVOQlEwd3NTMEZCUzJsQ0xHRkJRVXdzUlVGRVN5eERRVUZRTzBGQlIwUTdPenM3T3p0bFFVZFpNVUlzVlNJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lFWlBVazFCVkY5SVZFMU1MQ0JHVDFKTlFWUmZVRXhCU1U0c0lFWlBVazFCVkZNc0lFeHZjbVZ0Um05eWJXRjBJSDBnWm5KdmJTQmNJaTR1TDJOdmJuTjBZVzUwY3k5bWIzSnRZWFJ6WENJN1hISmNibWx0Y0c5eWRDQjdJRXhKVGtWZlJVNUVTVTVIVXlCOUlHWnliMjBnWENJdUxpOWpiMjV6ZEdGdWRITXZiR2x1WlVWdVpHbHVaM05jSWp0Y2NseHVhVzF3YjNKMElFZGxibVZ5WVhSdmNpd2dleUJKUjJWdVpYSmhkRzl5VDNCMGFXOXVjeUI5SUdaeWIyMGdYQ0l1TGk5c2FXSXZaMlZ1WlhKaGRHOXlYQ0k3WEhKY2JtbHRjRzl5ZENCN0lHbHpUbTlrWlN3Z2FYTlNaV0ZqZEU1aGRHbDJaU3dnYVhOWGFXNWtiM2R6TENCdFlXdGxRWEp5WVhsUFpsTjBjbWx1WjNNZ2ZTQm1jbTl0SUZ3aUxpNHZkWFJwYkZ3aU8xeHlYRzVjY2x4dVkyeGhjM01nVEc5eVpXMUpjSE4xYlNCN1hISmNiaUFnY0hWaWJHbGpJR2RsYm1WeVlYUnZjam9nUjJWdVpYSmhkRzl5TzF4eVhHNWNjbHh1SUNCamIyNXpkSEoxWTNSdmNpaGNjbHh1SUNBZ0lHOXdkR2x2Ym5NNklFbEhaVzVsY21GMGIzSlBjSFJwYjI1eklEMGdlMzBzWEhKY2JpQWdJQ0J3ZFdKc2FXTWdabTl5YldGME9pQk1iM0psYlVadmNtMWhkQ0E5SUVaUFVrMUJWRjlRVEVGSlRpeGNjbHh1SUNBZ0lIQjFZbXhwWXlCemRXWm1hWGcvT2lCemRISnBibWNzWEhKY2JpQWdLU0I3WEhKY2JpQWdJQ0JwWmlBb1JrOVNUVUZVVXk1cGJtUmxlRTltS0dadmNtMWhkQzUwYjB4dmQyVnlRMkZ6WlNncEtTQTlQVDBnTFRFcElIdGNjbHh1SUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtGeHlYRzRnSUNBZ0lDQWdJR0FrZTJadmNtMWhkSDBnYVhNZ1lXNGdhVzUyWVd4cFpDQm1iM0p0WVhRdUlGQnNaV0Z6WlNCMWMyVWdKSHRHVDFKTlFWUlRMbXB2YVc0b1hDSWdiM0lnWENJcGZTNWdMRnh5WEc0Z0lDQWdJQ0FwTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnZEdocGN5NW5aVzVsY21GMGIzSWdQU0J1WlhjZ1IyVnVaWEpoZEc5eUtHOXdkR2x2Ym5NcE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2NIVmliR2xqSUdkbGRFeHBibVZGYm1ScGJtY29LU0I3WEhKY2JpQWdJQ0JwWmlBb2RHaHBjeTV6ZFdabWFYZ3BJSHRjY2x4dUlDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWMzVm1abWw0TzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHbG1JQ2doYVhOU1pXRmpkRTVoZEdsMlpTZ3BJQ1ltSUdselRtOWtaU2dwSUNZbUlHbHpWMmx1Wkc5M2N5Z3BLU0I3WEhKY2JpQWdJQ0FnSUhKbGRIVnliaUJNU1U1RlgwVk9SRWxPUjFNdVYwbE9Nekk3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2NtVjBkWEp1SUV4SlRrVmZSVTVFU1U1SFV5NVFUMU5KV0R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhCMVlteHBZeUJtYjNKdFlYUlRkSEpwYm1jb2MzUnlPaUJ6ZEhKcGJtY3BPaUJ6ZEhKcGJtY2dlMXh5WEc0Z0lDQWdhV1lnS0hSb2FYTXVabTl5YldGMElEMDlQU0JHVDFKTlFWUmZTRlJOVENrZ2UxeHlYRzRnSUNBZ0lDQnlaWFIxY200Z1lEeHdQaVI3YzNSeWZUd3ZjRDVnTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnY21WMGRYSnVJSE4wY2p0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhCMVlteHBZeUJtYjNKdFlYUlRkSEpwYm1kektITjBjbWx1WjNNNklITjBjbWx1WjF0ZEtUb2djM1J5YVc1blcxMGdlMXh5WEc0Z0lDQWdjbVYwZFhKdUlITjBjbWx1WjNNdWJXRndLQ2h6ZEhJcElEMCtJSFJvYVhNdVptOXliV0YwVTNSeWFXNW5LSE4wY2lrcE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2NIVmliR2xqSUdkbGJtVnlZWFJsVjI5eVpITW9iblZ0UHpvZ2JuVnRZbVZ5S1RvZ2MzUnlhVzVuSUh0Y2NseHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtWnZjbTFoZEZOMGNtbHVaeWgwYUdsekxtZGxibVZ5WVhSdmNpNW5aVzVsY21GMFpWSmhibVJ2YlZkdmNtUnpLRzUxYlNrcE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2NIVmliR2xqSUdkbGJtVnlZWFJsVTJWdWRHVnVZMlZ6S0c1MWJUODZJRzUxYldKbGNpazZJSE4wY21sdVp5QjdYSEpjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVtYjNKdFlYUlRkSEpwYm1jb2RHaHBjeTVuWlc1bGNtRjBiM0l1WjJWdVpYSmhkR1ZTWVc1a2IyMVFZWEpoWjNKaGNHZ29iblZ0S1NrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCd2RXSnNhV01nWjJWdVpYSmhkR1ZRWVhKaFozSmhjR2h6S0c1MWJUb2diblZ0WW1WeUtUb2djM1J5YVc1bklIdGNjbHh1SUNBZ0lHTnZibk4wSUcxaGEyVlRkSEpwYm1jZ1BTQjBhR2x6TG1kbGJtVnlZWFJ2Y2k1blpXNWxjbUYwWlZKaGJtUnZiVkJoY21GbmNtRndhQzVpYVc1a0tGeHlYRzRnSUNBZ0lDQjBhR2x6TG1kbGJtVnlZWFJ2Y2l4Y2NseHVJQ0FnSUNrN1hISmNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NW1iM0p0WVhSVGRISnBibWR6S0cxaGEyVkJjbkpoZVU5bVUzUnlhVzVuY3lodWRXMHNJRzFoYTJWVGRISnBibWNwS1M1cWIybHVLRnh5WEc0Z0lDQWdJQ0IwYUdsekxtZGxkRXhwYm1WRmJtUnBibWNvS1N4Y2NseHVJQ0FnSUNrN1hISmNiaUFnZlZ4eVhHNTlYSEpjYmx4eVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCTWIzSmxiVWx3YzNWdE8xeHlYRzRpWFgwPSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfd29yZHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL3dvcmRzXCIpO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKFwiLi4vdXRpbFwiKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgR2VuZXJhdG9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge1xuICAgIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgICAgX3JlZiRzZW50ZW5jZXNQZXJQYXJhID0gX3JlZi5zZW50ZW5jZXNQZXJQYXJhZ3JhcGgsXG4gICAgICAgIHNlbnRlbmNlc1BlclBhcmFncmFwaCA9IF9yZWYkc2VudGVuY2VzUGVyUGFyYSA9PT0gdm9pZCAwID8ge1xuICAgICAgbWF4OiA3LFxuICAgICAgbWluOiAzXG4gICAgfSA6IF9yZWYkc2VudGVuY2VzUGVyUGFyYSxcbiAgICAgICAgX3JlZiR3b3Jkc1BlclNlbnRlbmNlID0gX3JlZi53b3Jkc1BlclNlbnRlbmNlLFxuICAgICAgICB3b3Jkc1BlclNlbnRlbmNlID0gX3JlZiR3b3Jkc1BlclNlbnRlbmNlID09PSB2b2lkIDAgPyB7XG4gICAgICBtYXg6IDE1LFxuICAgICAgbWluOiA1XG4gICAgfSA6IF9yZWYkd29yZHNQZXJTZW50ZW5jZSxcbiAgICAgICAgcmFuZG9tID0gX3JlZi5yYW5kb20sXG4gICAgICAgIHNlZWQgPSBfcmVmLnNlZWQsXG4gICAgICAgIF9yZWYkd29yZHMgPSBfcmVmLndvcmRzLFxuICAgICAgICB3b3JkcyA9IF9yZWYkd29yZHMgPT09IHZvaWQgMCA/IF93b3Jkcy5XT1JEUyA6IF9yZWYkd29yZHM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2VuZXJhdG9yKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNlbnRlbmNlc1BlclBhcmFncmFwaFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwid29yZHNQZXJTZW50ZW5jZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicmFuZG9tXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ3b3Jkc1wiLCB2b2lkIDApO1xuXG4gICAgaWYgKHNlbnRlbmNlc1BlclBhcmFncmFwaC5taW4gPiBzZW50ZW5jZXNQZXJQYXJhZ3JhcGgubWF4KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaW5pbXVtIG51bWJlciBvZiBzZW50ZW5jZXMgcGVyIHBhcmFncmFwaCAoXCIuY29uY2F0KHNlbnRlbmNlc1BlclBhcmFncmFwaC5taW4sIFwiKSBjYW5ub3QgZXhjZWVkIG1heGltdW0gKFwiKS5jb25jYXQoc2VudGVuY2VzUGVyUGFyYWdyYXBoLm1heCwgXCIpLlwiKSk7XG4gICAgfVxuXG4gICAgaWYgKHdvcmRzUGVyU2VudGVuY2UubWluID4gd29yZHNQZXJTZW50ZW5jZS5tYXgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pbmltdW0gbnVtYmVyIG9mIHdvcmRzIHBlciBzZW50ZW5jZSAoXCIuY29uY2F0KHdvcmRzUGVyU2VudGVuY2UubWluLCBcIikgY2Fubm90IGV4Y2VlZCBtYXhpbXVtIChcIikuY29uY2F0KHdvcmRzUGVyU2VudGVuY2UubWF4LCBcIikuXCIpKTtcbiAgICB9XG5cbiAgICB0aGlzLnNlbnRlbmNlc1BlclBhcmFncmFwaCA9IHNlbnRlbmNlc1BlclBhcmFncmFwaDtcbiAgICB0aGlzLndvcmRzID0gd29yZHM7XG4gICAgdGhpcy53b3Jkc1BlclNlbnRlbmNlID0gd29yZHNQZXJTZW50ZW5jZTtcbiAgICB0aGlzLnJhbmRvbSA9IHJhbmRvbSB8fCBNYXRoLnJhbmRvbTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHZW5lcmF0b3IsIFt7XG4gICAga2V5OiBcImdlbmVyYXRlUmFuZG9tSW50ZWdlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUludGVnZXIobWluLCBtYXgpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZW5lcmF0ZVJhbmRvbVdvcmRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tV29yZHMobnVtKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkd29yZHNQZXJTZW50ZW5jID0gdGhpcy53b3Jkc1BlclNlbnRlbmNlLFxuICAgICAgICAgIG1pbiA9IF90aGlzJHdvcmRzUGVyU2VudGVuYy5taW4sXG4gICAgICAgICAgbWF4ID0gX3RoaXMkd29yZHNQZXJTZW50ZW5jLm1heDtcbiAgICAgIHZhciBsZW5ndGggPSBudW0gfHwgdGhpcy5nZW5lcmF0ZVJhbmRvbUludGVnZXIobWluLCBtYXgpO1xuICAgICAgcmV0dXJuICgwLCBfdXRpbC5tYWtlQXJyYXlPZkxlbmd0aCkobGVuZ3RoKS5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoX3RoaXMucGx1Y2tSYW5kb21Xb3JkKCksIFwiIFwiKS5jb25jYXQoYWNjdW11bGF0b3IpO1xuICAgICAgfSwgXCJcIikudHJpbSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZW5lcmF0ZVJhbmRvbVNlbnRlbmNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tU2VudGVuY2UobnVtKSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQoKDAsIF91dGlsLmNhcGl0YWxpemUpKHRoaXMuZ2VuZXJhdGVSYW5kb21Xb3JkcyhudW0pKSwgXCIuXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZW5lcmF0ZVJhbmRvbVBhcmFncmFwaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVBhcmFncmFwaChudW0pIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkc2VudGVuY2VzUGVyUGFyID0gdGhpcy5zZW50ZW5jZXNQZXJQYXJhZ3JhcGgsXG4gICAgICAgICAgbWluID0gX3RoaXMkc2VudGVuY2VzUGVyUGFyLm1pbixcbiAgICAgICAgICBtYXggPSBfdGhpcyRzZW50ZW5jZXNQZXJQYXIubWF4O1xuICAgICAgdmFyIGxlbmd0aCA9IG51bSB8fCB0aGlzLmdlbmVyYXRlUmFuZG9tSW50ZWdlcihtaW4sIG1heCk7XG4gICAgICByZXR1cm4gKDAsIF91dGlsLm1ha2VBcnJheU9mTGVuZ3RoKShsZW5ndGgpLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChfdGhpczIuZ2VuZXJhdGVSYW5kb21TZW50ZW5jZSgpLCBcIiBcIikuY29uY2F0KGFjY3VtdWxhdG9yKTtcbiAgICAgIH0sIFwiXCIpLnRyaW0oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicGx1Y2tSYW5kb21Xb3JkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBsdWNrUmFuZG9tV29yZCgpIHtcbiAgICAgIHZhciBtaW4gPSAwO1xuICAgICAgdmFyIG1heCA9IHRoaXMud29yZHMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2VuZXJhdGVSYW5kb21JbnRlZ2VyKG1pbiwgbWF4KTtcbiAgICAgIHJldHVybiB0aGlzLndvcmRzW2luZGV4XTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR2VuZXJhdG9yO1xufSgpO1xuXG52YXIgX2RlZmF1bHQgPSBHZW5lcmF0b3I7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5c2FXSXZaMlZ1WlhKaGRHOXlMblJ6SWwwc0ltNWhiV1Z6SWpwYklrZGxibVZ5WVhSdmNpSXNJbk5sYm5SbGJtTmxjMUJsY2xCaGNtRm5jbUZ3YUNJc0ltMWhlQ0lzSW0xcGJpSXNJbmR2Y21SelVHVnlVMlZ1ZEdWdVkyVWlMQ0p5WVc1a2IyMGlMQ0p6WldWa0lpd2lkMjl5WkhNaUxDSlhUMUpFVXlJc0lrVnljbTl5SWl3aVRXRjBhQ0lzSW1ac2IyOXlJaXdpYm5WdElpd2liR1Z1WjNSb0lpd2laMlZ1WlhKaGRHVlNZVzVrYjIxSmJuUmxaMlZ5SWl3aWNtVmtkV05sSWl3aVlXTmpkVzExYkdGMGIzSWlMQ0pwYm1SbGVDSXNJbkJzZFdOclVtRnVaRzl0VjI5eVpDSXNJblJ5YVcwaUxDSm5aVzVsY21GMFpWSmhibVJ2YlZkdmNtUnpJaXdpWjJWdVpYSmhkR1ZTWVc1a2IyMVRaVzUwWlc1alpTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenRCUVVGQk96dEJRVU5CT3pzN096czdPenM3TzBsQmRVSk5RU3hUTzBGQlRVb3NkVUpCVFRKQ08wRkJRVUVzYlVaQlFVb3NSVUZCU1R0QlFVRkJMSEZEUVV4NlFrTXNjVUpCUzNsQ08wRkJRVUVzVVVGTWVrSkJMSEZDUVV0NVFpeHpRMEZNUkR0QlFVRkZReXhOUVVGQlFTeEhRVUZITEVWQlFVVXNRMEZCVUR0QlFVRlZReXhOUVVGQlFTeEhRVUZITEVWQlFVVTdRVUZCWml4TFFVdERPMEZCUVVFc2NVTkJTbnBDUXl4blFrRkplVUk3UVVGQlFTeFJRVXA2UWtFc1owSkJTWGxDTEhORFFVcE9PMEZCUVVWR0xFMUJRVUZCTEVkQlFVY3NSVUZCUlN4RlFVRlFPMEZCUVZkRExFMUJRVUZCTEVkQlFVY3NSVUZCUlR0QlFVRm9RaXhMUVVsTk8wRkJRVUVzVVVGSWVrSkZMRTFCUjNsQ0xGRkJTSHBDUVN4TlFVZDVRanRCUVVGQkxGRkJSbnBDUXl4SlFVVjVRaXhSUVVaNlFrRXNTVUZGZVVJN1FVRkJRU3d3UWtGRWVrSkRMRXRCUTNsQ08wRkJRVUVzVVVGRWVrSkJMRXRCUTNsQ0xESkNRVVJxUWtNc1dVRkRhVUk3TzBGQlFVRTdPMEZCUVVFN08wRkJRVUU3TzBGQlFVRTdPMEZCUVVFN08wRkJRM3BDTEZGQlFVbFFMSEZDUVVGeFFpeERRVUZEUlN4SFFVRjBRaXhIUVVFMFFrWXNjVUpCUVhGQ0xFTkJRVU5ETEVkQlFYUkVMRVZCUVRKRU8wRkJRM3BFTEZsQlFVMHNTVUZCU1U4c1MwRkJTaXh6UkVGRlJsSXNjVUpCUVhGQ0xFTkJRVU5GTEVkQlJuQkNMSE5EUVVkM1FrWXNjVUpCUVhGQ0xFTkJRVU5ETEVkQlNEbERMRkZCUVU0N1FVRkxSRHM3UVVGRlJDeFJRVUZKUlN4blFrRkJaMElzUTBGQlEwUXNSMEZCYWtJc1IwRkJkVUpETEdkQ1FVRm5RaXhEUVVGRFJpeEhRVUUxUXl4RlFVRnBSRHRCUVVNdlF5eFpRVUZOTEVsQlFVbFBMRXRCUVVvc2FVUkJSVVpNTEdkQ1FVRm5RaXhEUVVGRFJDeEhRVVptTEhORFFVZDNRa01zWjBKQlFXZENMRU5CUVVOR0xFZEJTSHBETEZGQlFVNDdRVUZMUkRzN1FVRkZSQ3hUUVVGTFJDeHhRa0ZCVEN4SFFVRTJRa0VzY1VKQlFUZENPMEZCUTBFc1UwRkJTMDBzUzBGQlRDeEhRVUZoUVN4TFFVRmlPMEZCUTBFc1UwRkJTMGdzWjBKQlFVd3NSMEZCZDBKQkxHZENRVUY0UWp0QlFVTkJMRk5CUVV0RExFMUJRVXdzUjBGQlkwRXNUVUZCVFN4SlFVRkpTeXhKUVVGSkxFTkJRVU5NTEUxQlFUZENPMEZCUTBRN096czdWMEZGUkN3clFrRkJOa0pHTEVkQlFUZENMRVZCUVRCRFJDeEhRVUV4UXl4RlFVRXJSRHRCUVVNM1JDeGhRVUZQVVN4SlFVRkpMRU5CUVVORExFdEJRVXdzUTBGQlZ5eExRVUZMVGl4TlFVRk1MRTFCUVdsQ1NDeEhRVUZITEVkQlFVZERMRWRCUVU0c1IwRkJXU3hEUVVFM1FpeEpRVUZyUTBFc1IwRkJOME1zUTBGQlVEdEJRVU5FT3pzN1YwRkZSQ3cyUWtGQk1rSlRMRWRCUVROQ0xFVkJRV2xFTzBGQlFVRTdPMEZCUXk5RExHdERRVUZ4UWl4TFFVRkxVaXhuUWtGQk1VSTdRVUZCUVN4VlFVRlJSQ3hIUVVGU0xIbENRVUZSUVN4SFFVRlNPMEZCUVVFc1ZVRkJZVVFzUjBGQllpeDVRa0ZCWVVFc1IwRkJZanRCUVVOQkxGVkJRVTFYTEUxQlFVMHNSMEZCUjBRc1IwRkJSeXhKUVVGSkxFdEJRVXRGTEhGQ1FVRk1MRU5CUVRKQ1dDeEhRVUV6UWl4RlFVRm5RMFFzUjBGQmFFTXNRMEZCZEVJN1FVRkRRU3hoUVVGUExEWkNRVUZyUWxjc1RVRkJiRUlzUlVGRFNrVXNUVUZFU1N4RFFVTkhMRlZCUVVORExGZEJRVVFzUlVGQmMwSkRMRXRCUVhSQ0xFVkJRV2RFTzBGQlEzUkVMSGxDUVVGVkxFdEJRVWtzUTBGQlEwTXNaVUZCVEN4RlFVRldMR05CUVc5RFJpeFhRVUZ3UXp0QlFVTkVMRTlCU0Vrc1JVRkhSaXhGUVVoRkxFVkJTVXBITEVsQlNra3NSVUZCVUR0QlFVdEVPenM3VjBGRlJDeG5RMEZCT0VKUUxFZEJRVGxDTEVWQlFXOUVPMEZCUTJ4RUxIVkNRVUZWTEhOQ1FVRlhMRXRCUVV0UkxHMUNRVUZNTEVOQlFYbENVaXhIUVVGNlFpeERRVUZZTEVOQlFWWTdRVUZEUkRzN08xZEJSVVFzYVVOQlFTdENRU3hIUVVFdlFpeEZRVUZ4UkR0QlFVRkJPenRCUVVOdVJDeHJRMEZCY1VJc1MwRkJTMWdzY1VKQlFURkNPMEZCUVVFc1ZVRkJVVVVzUjBGQlVpeDVRa0ZCVVVFc1IwRkJVanRCUVVGQkxGVkJRV0ZFTEVkQlFXSXNlVUpCUVdGQkxFZEJRV0k3UVVGRFFTeFZRVUZOVnl4TlFVRk5MRWRCUVVkRUxFZEJRVWNzU1VGQlNTeExRVUZMUlN4eFFrRkJUQ3hEUVVFeVFsZ3NSMEZCTTBJc1JVRkJaME5FTEVkQlFXaERMRU5CUVhSQ08wRkJRMEVzWVVGQlR5dzJRa0ZCYTBKWExFMUJRV3hDTEVWQlEwcEZMRTFCUkVrc1EwRkRSeXhWUVVGRFF5eFhRVUZFTEVWQlFYTkNReXhMUVVGMFFpeEZRVUZuUkR0QlFVTjBSQ3g1UWtGQlZTeE5RVUZKTEVOQlFVTkpMSE5DUVVGTUxFVkJRVllzWTBGQk1rTk1MRmRCUVRORE8wRkJRMFFzVDBGSVNTeEZRVWRHTEVWQlNFVXNSVUZKU2tjc1NVRktTU3hGUVVGUU8wRkJTMFE3T3p0WFFVVkVMREpDUVVGcFF6dEJRVU12UWl4VlFVRk5hRUlzUjBGQlJ5eEhRVUZITEVOQlFWbzdRVUZEUVN4VlFVRk5SQ3hIUVVGSExFZEJRVWNzUzBGQlMwc3NTMEZCVEN4RFFVRlhUU3hOUVVGWUxFZEJRVzlDTEVOQlFXaERPMEZCUTBFc1ZVRkJUVWtzUzBGQlN5eEhRVUZITEV0QlFVdElMSEZDUVVGTUxFTkJRVEpDV0N4SFFVRXpRaXhGUVVGblEwUXNSMEZCYUVNc1EwRkJaRHRCUVVOQkxHRkJRVThzUzBGQlMwc3NTMEZCVEN4RFFVRlhWU3hMUVVGWUxFTkJRVkE3UVVGRFJEczdPenM3TzJWQlIxbHFRaXhUSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1YwOVNSRk1nZlNCbWNtOXRJRndpTGk0dlkyOXVjM1JoYm5SekwzZHZjbVJ6WENJN1hISmNibWx0Y0c5eWRDQjdJR05oY0dsMFlXeHBlbVVzSUcxaGEyVkJjbkpoZVU5bVRHVnVaM1JvSUgwZ1puSnZiU0JjSWk0dUwzVjBhV3hjSWp0Y2NseHVYSEpjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnU1VKdmRXNWtjeUI3WEhKY2JpQWdiV2x1T2lCdWRXMWlaWEk3WEhKY2JpQWdiV0Y0T2lCdWRXMWlaWEk3WEhKY2JuMWNjbHh1WEhKY2JtVjRjRzl5ZENCMGVYQmxJRWxRY201bklEMGdLQ2tnUFQ0Z2JuVnRZbVZ5TzF4eVhHNWNjbHh1Wlhod2IzSjBJSFI1Y0dVZ1NWTmxaV1JTWVc1a2IyMGdQU0J1WlhjZ0tITmxaV1EvT2lCemRISnBibWNwSUQwK0lFbFFjbTVuTzF4eVhHNWNjbHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JKVFdGMGFDQjdYSEpjYmlBZ2MyVmxaSEpoYm1SdmJUb2dTVk5sWldSU1lXNWtiMjA3WEhKY2JuMWNjbHh1WEhKY2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1NVZGxibVZ5WVhSdmNrOXdkR2x2Ym5NZ2UxeHlYRzRnSUhObGJuUmxibU5sYzFCbGNsQmhjbUZuY21Gd2FEODZJRWxDYjNWdVpITTdYSEpjYmlBZ2QyOXlaSE5RWlhKVFpXNTBaVzVqWlQ4NklFbENiM1Z1WkhNN1hISmNiaUFnY21GdVpHOXRQem9nU1ZCeWJtYzdYSEpjYmlBZ2MyVmxaRDg2SUhOMGNtbHVaenRjY2x4dUlDQjNiM0prY3o4NklITjBjbWx1WjF0ZE8xeHlYRzU5WEhKY2JseHlYRzVqYkdGemN5QkhaVzVsY21GMGIzSWdlMXh5WEc0Z0lIQjFZbXhwWXlCelpXNTBaVzVqWlhOUVpYSlFZWEpoWjNKaGNHZzZJRWxDYjNWdVpITTdYSEpjYmlBZ2NIVmliR2xqSUhkdmNtUnpVR1Z5VTJWdWRHVnVZMlU2SUVsQ2IzVnVaSE03WEhKY2JpQWdjSFZpYkdsaklISmhibVJ2YlRvZ1NWQnlibWM3WEhKY2JpQWdjSFZpYkdsaklIZHZjbVJ6T2lCemRISnBibWRiWFR0Y2NseHVYSEpjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9lMXh5WEc0Z0lDQWdjMlZ1ZEdWdVkyVnpVR1Z5VUdGeVlXZHlZWEJvSUQwZ2V5QnRZWGc2SURjc0lHMXBiam9nTXlCOUxGeHlYRzRnSUNBZ2QyOXlaSE5RWlhKVFpXNTBaVzVqWlNBOUlIc2diV0Y0T2lBeE5Td2diV2x1T2lBMUlIMHNYSEpjYmlBZ0lDQnlZVzVrYjIwc1hISmNiaUFnSUNCelpXVmtMRnh5WEc0Z0lDQWdkMjl5WkhNZ1BTQlhUMUpFVXl4Y2NseHVJQ0I5T2lCSlIyVnVaWEpoZEc5eVQzQjBhVzl1Y3lBOUlIdDlLU0I3WEhKY2JpQWdJQ0JwWmlBb2MyVnVkR1Z1WTJWelVHVnlVR0Z5WVdkeVlYQm9MbTFwYmlBK0lITmxiblJsYm1ObGMxQmxjbEJoY21GbmNtRndhQzV0WVhncElIdGNjbHh1SUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtGeHlYRzRnSUNBZ0lDQWdJR0JOYVc1cGJYVnRJRzUxYldKbGNpQnZaaUJ6Wlc1MFpXNWpaWE1nY0dWeUlIQmhjbUZuY21Gd2FDQW9KSHRjY2x4dUlDQWdJQ0FnSUNBZ0lITmxiblJsYm1ObGMxQmxjbEJoY21GbmNtRndhQzV0YVc1Y2NseHVJQ0FnSUNBZ0lDQjlLU0JqWVc1dWIzUWdaWGhqWldWa0lHMWhlR2x0ZFcwZ0tDUjdjMlZ1ZEdWdVkyVnpVR1Z5VUdGeVlXZHlZWEJvTG0xaGVIMHBMbUFzWEhKY2JpQWdJQ0FnSUNrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdhV1lnS0hkdmNtUnpVR1Z5VTJWdWRHVnVZMlV1YldsdUlENGdkMjl5WkhOUVpYSlRaVzUwWlc1alpTNXRZWGdwSUh0Y2NseHVJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0Z4eVhHNGdJQ0FnSUNBZ0lHQk5hVzVwYlhWdElHNTFiV0psY2lCdlppQjNiM0prY3lCd1pYSWdjMlZ1ZEdWdVkyVWdLQ1I3WEhKY2JpQWdJQ0FnSUNBZ0lDQjNiM0prYzFCbGNsTmxiblJsYm1ObExtMXBibHh5WEc0Z0lDQWdJQ0FnSUgwcElHTmhibTV2ZENCbGVHTmxaV1FnYldGNGFXMTFiU0FvSkh0M2IzSmtjMUJsY2xObGJuUmxibU5sTG0xaGVIMHBMbUFzWEhKY2JpQWdJQ0FnSUNrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdkR2hwY3k1elpXNTBaVzVqWlhOUVpYSlFZWEpoWjNKaGNHZ2dQU0J6Wlc1MFpXNWpaWE5RWlhKUVlYSmhaM0poY0dnN1hISmNiaUFnSUNCMGFHbHpMbmR2Y21SeklEMGdkMjl5WkhNN1hISmNiaUFnSUNCMGFHbHpMbmR2Y21SelVHVnlVMlZ1ZEdWdVkyVWdQU0IzYjNKa2MxQmxjbE5sYm5SbGJtTmxPMXh5WEc0Z0lDQWdkR2hwY3k1eVlXNWtiMjBnUFNCeVlXNWtiMjBnZkh3Z1RXRjBhQzV5WVc1a2IyMDdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQndkV0pzYVdNZ1oyVnVaWEpoZEdWU1lXNWtiMjFKYm5SbFoyVnlLRzFwYmpvZ2JuVnRZbVZ5TENCdFlYZzZJRzUxYldKbGNpazZJRzUxYldKbGNpQjdYSEpjYmlBZ0lDQnlaWFIxY200Z1RXRjBhQzVtYkc5dmNpaDBhR2x6TG5KaGJtUnZiU2dwSUNvZ0tHMWhlQ0F0SUcxcGJpQXJJREVwSUNzZ2JXbHVLVHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSEIxWW14cFl5Qm5aVzVsY21GMFpWSmhibVJ2YlZkdmNtUnpLRzUxYlQ4NklHNTFiV0psY2lrNklITjBjbWx1WnlCN1hISmNiaUFnSUNCamIyNXpkQ0I3SUcxcGJpd2diV0Y0SUgwZ1BTQjBhR2x6TG5kdmNtUnpVR1Z5VTJWdWRHVnVZMlU3WEhKY2JpQWdJQ0JqYjI1emRDQnNaVzVuZEdnZ1BTQnVkVzBnZkh3Z2RHaHBjeTVuWlc1bGNtRjBaVkpoYm1SdmJVbHVkR1ZuWlhJb2JXbHVMQ0J0WVhncE8xeHlYRzRnSUNBZ2NtVjBkWEp1SUcxaGEyVkJjbkpoZVU5bVRHVnVaM1JvS0d4bGJtZDBhQ2xjY2x4dUlDQWdJQ0FnTG5KbFpIVmpaU2dvWVdOamRXMTFiR0YwYjNJNklITjBjbWx1Wnl3Z2FXNWtaWGc2SUc1MWJXSmxjaWs2SUhOMGNtbHVaeUE5UGlCN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHQWtlM1JvYVhNdWNHeDFZMnRTWVc1a2IyMVhiM0prS0NsOUlDUjdZV05qZFcxMWJHRjBiM0o5WUR0Y2NseHVJQ0FnSUNBZ2ZTd2dYQ0pjSWlsY2NseHVJQ0FnSUNBZ0xuUnlhVzBvS1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhCMVlteHBZeUJuWlc1bGNtRjBaVkpoYm1SdmJWTmxiblJsYm1ObEtHNTFiVDg2SUc1MWJXSmxjaWs2SUhOMGNtbHVaeUI3WEhKY2JpQWdJQ0J5WlhSMWNtNGdZQ1I3WTJGd2FYUmhiR2w2WlNoMGFHbHpMbWRsYm1WeVlYUmxVbUZ1Wkc5dFYyOXlaSE1vYm5WdEtTbDlMbUE3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0J3ZFdKc2FXTWdaMlZ1WlhKaGRHVlNZVzVrYjIxUVlYSmhaM0poY0dnb2JuVnRQem9nYm5WdFltVnlLVG9nYzNSeWFXNW5JSHRjY2x4dUlDQWdJR052Ym5OMElIc2diV2x1TENCdFlYZ2dmU0E5SUhSb2FYTXVjMlZ1ZEdWdVkyVnpVR1Z5VUdGeVlXZHlZWEJvTzF4eVhHNGdJQ0FnWTI5dWMzUWdiR1Z1WjNSb0lEMGdiblZ0SUh4OElIUm9hWE11WjJWdVpYSmhkR1ZTWVc1a2IyMUpiblJsWjJWeUtHMXBiaXdnYldGNEtUdGNjbHh1SUNBZ0lISmxkSFZ5YmlCdFlXdGxRWEp5WVhsUFpreGxibWQwYUNoc1pXNW5kR2dwWEhKY2JpQWdJQ0FnSUM1eVpXUjFZMlVvS0dGalkzVnRkV3hoZEc5eU9pQnpkSEpwYm1jc0lHbHVaR1Y0T2lCdWRXMWlaWElwT2lCemRISnBibWNnUFQ0Z2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmdKSHQwYUdsekxtZGxibVZ5WVhSbFVtRnVaRzl0VTJWdWRHVnVZMlVvS1gwZ0pIdGhZMk4xYlhWc1lYUnZjbjFnTzF4eVhHNGdJQ0FnSUNCOUxDQmNJbHdpS1Z4eVhHNGdJQ0FnSUNBdWRISnBiU2dwTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnY0hWaWJHbGpJSEJzZFdOclVtRnVaRzl0VjI5eVpDZ3BPaUJ6ZEhKcGJtY2dlMXh5WEc0Z0lDQWdZMjl1YzNRZ2JXbHVJRDBnTUR0Y2NseHVJQ0FnSUdOdmJuTjBJRzFoZUNBOUlIUm9hWE11ZDI5eVpITXViR1Z1WjNSb0lDMGdNVHRjY2x4dUlDQWdJR052Ym5OMElHbHVaR1Y0SUQwZ2RHaHBjeTVuWlc1bGNtRjBaVkpoYm1SdmJVbHVkR1ZuWlhJb2JXbHVMQ0J0WVhncE8xeHlYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVkMjl5WkhOYmFXNWtaWGhkTzF4eVhHNGdJSDFjY2x4dWZWeHlYRzVjY2x4dVpYaHdiM0owSUdSbFptRjFiSFFnUjJWdVpYSmhkRzl5TzF4eVhHNGlYWDA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxuLyoqXHJcbiAqIEBwYXJhbSBzdHIgIEEgc3RyaW5nIHRoYXQgbWF5IG9yIG1heSBub3QgYmUgY2FwaXRhbGl6ZWQuXHJcbiAqIEByZXR1cm5zICAgIEEgY2FwaXRhbGl6ZWQgc3RyaW5nLlxyXG4gKi9cbnZhciBjYXBpdGFsaXplID0gZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcbiAgdmFyIHRyaW1tZWQgPSBzdHIudHJpbSgpO1xuICByZXR1cm4gdHJpbW1lZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRyaW1tZWQuc2xpY2UoMSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBjYXBpdGFsaXplO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OTFkR2xzTDJOaGNHbDBZV3hwZW1VdWRITWlYU3dpYm1GdFpYTWlPbHNpWTJGd2FYUmhiR2w2WlNJc0luTjBjaUlzSW5SeWFXMXRaV1FpTENKMGNtbHRJaXdpWTJoaGNrRjBJaXdpZEc5VmNIQmxja05oYzJVaUxDSnpiR2xqWlNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096dEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJUVUVzVlVGQlZTeEhRVUZITEZOQlFXSkJMRlZCUVdFc1EwRkJRME1zUjBGQlJDeEZRVUY1UWp0QlFVTXhReXhOUVVGTlF5eFBRVUZQTEVkQlFVZEVMRWRCUVVjc1EwRkJRMFVzU1VGQlNpeEZRVUZvUWp0QlFVTkJMRk5CUVU5RUxFOUJRVThzUTBGQlEwVXNUVUZCVWl4RFFVRmxMRU5CUVdZc1JVRkJhMEpETEZkQlFXeENMRXRCUVd0RFNDeFBRVUZQTEVOQlFVTkpMRXRCUVZJc1EwRkJZeXhEUVVGa0xFTkJRWHBETzBGQlEwUXNRMEZJUkRzN1pVRkxaVTRzVlNJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLbHh5WEc0Z0tpQkFjR0Z5WVcwZ2MzUnlJQ0JCSUhOMGNtbHVaeUIwYUdGMElHMWhlU0J2Y2lCdFlYa2dibTkwSUdKbElHTmhjR2wwWVd4cGVtVmtMbHh5WEc0Z0tpQkFjbVYwZFhKdWN5QWdJQ0JCSUdOaGNHbDBZV3hwZW1Wa0lITjBjbWx1Wnk1Y2NseHVJQ292WEhKY2JtTnZibk4wSUdOaGNHbDBZV3hwZW1VZ1BTQW9jM1J5T2lCemRISnBibWNwT2lCemRISnBibWNnUFQ0Z2UxeHlYRzRnSUdOdmJuTjBJSFJ5YVcxdFpXUWdQU0J6ZEhJdWRISnBiU2dwTzF4eVhHNGdJSEpsZEhWeWJpQjBjbWx0YldWa0xtTm9ZWEpCZENnd0tTNTBiMVZ3Y0dWeVEyRnpaU2dwSUNzZ2RISnBiVzFsWkM1emJHbGpaU2d4S1R0Y2NseHVmVHRjY2x4dVhISmNibVY0Y0c5eWRDQmtaV1poZFd4MElHTmhjR2wwWVd4cGVtVTdYSEpjYmlKZGZRPT0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNhcGl0YWxpemVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NhcGl0YWxpemVbXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzTm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaXNOb2RlW1wiZGVmYXVsdFwiXTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc1JlYWN0TmF0aXZlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pc1JlYWN0TmF0aXZlW1wiZGVmYXVsdFwiXTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc1dpbmRvd3NcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lzV2luZG93c1tcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWFrZUFycmF5T2ZMZW5ndGhcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21ha2VBcnJheU9mTGVuZ3RoW1wiZGVmYXVsdFwiXTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtYWtlQXJyYXlPZlN0cmluZ3NcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21ha2VBcnJheU9mU3RyaW5nc1tcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuXG52YXIgX2NhcGl0YWxpemUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NhcGl0YWxpemVcIikpO1xuXG52YXIgX2lzTm9kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaXNOb2RlXCIpKTtcblxudmFyIF9pc1JlYWN0TmF0aXZlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pc1JlYWN0TmF0aXZlXCIpKTtcblxudmFyIF9pc1dpbmRvd3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2lzV2luZG93c1wiKSk7XG5cbnZhciBfbWFrZUFycmF5T2ZMZW5ndGggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21ha2VBcnJheU9mTGVuZ3RoXCIpKTtcblxudmFyIF9tYWtlQXJyYXlPZlN0cmluZ3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21ha2VBcnJheU9mU3RyaW5nc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5MWRHbHNMMmx1WkdWNExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFVRkJPenRCUVVOQk96dEJRVU5CT3p0QlFVTkJPenRCUVVOQk96dEJRVU5CSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdOaGNHbDBZV3hwZW1VZ1puSnZiU0JjSWk0dlkyRndhWFJoYkdsNlpWd2lPMXh5WEc1cGJYQnZjblFnYVhOT2IyUmxJR1p5YjIwZ1hDSXVMMmx6VG05a1pWd2lPMXh5WEc1cGJYQnZjblFnYVhOU1pXRmpkRTVoZEdsMlpTQm1jbTl0SUZ3aUxpOXBjMUpsWVdOMFRtRjBhWFpsWENJN1hISmNibWx0Y0c5eWRDQnBjMWRwYm1SdmQzTWdabkp2YlNCY0lpNHZhWE5YYVc1a2IzZHpYQ0k3WEhKY2JtbHRjRzl5ZENCdFlXdGxRWEp5WVhsUFpreGxibWQwYUNCbWNtOXRJRndpTGk5dFlXdGxRWEp5WVhsUFpreGxibWQwYUZ3aU8xeHlYRzVwYlhCdmNuUWdiV0ZyWlVGeWNtRjVUMlpUZEhKcGJtZHpJR1p5YjIwZ1hDSXVMMjFoYTJWQmNuSmhlVTltVTNSeWFXNW5jMXdpTzF4eVhHNWNjbHh1Wlhod2IzSjBJSHRjY2x4dUlDQmpZWEJwZEdGc2FYcGxMRnh5WEc0Z0lHbHpUbTlrWlN4Y2NseHVJQ0JwYzFKbFlXTjBUbUYwYVhabExGeHlYRzRnSUdselYybHVaRzkzY3l4Y2NseHVJQ0J0WVd0bFFYSnlZWGxQWmt4bGJtZDBhQ3hjY2x4dUlDQnRZV3RsUVhKeVlYbFBabE4wY21sdVozTXNYSEpjYm4wN1hISmNiaUpkZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbi8qKlxyXG4gKiBAcmV0dXJucyAgVHJ1ZSBpZiB0aGUgcnVudGltZSBpcyBOb2RlSlMuXHJcbiAqL1xudmFyIGlzTm9kZSA9IGZ1bmN0aW9uIGlzTm9kZSgpIHtcbiAgcmV0dXJuIHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgISFtb2R1bGUuZXhwb3J0cztcbn07XG5cbnZhciBfZGVmYXVsdCA9IGlzTm9kZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTkxZEdsc0wybHpUbTlrWlM1MGN5SmRMQ0p1WVcxbGN5STZXeUpwYzA1dlpHVWlMQ0p0YjJSMWJHVWlMQ0psZUhCdmNuUnpJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3TzBGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJUVUVzVFVGQlRTeEhRVUZITEZOQlFWUkJMRTFCUVZNc1IwRkJaVHRCUVVNMVFpeFRRVUZQTEU5QlFVOURMRTFCUVZBc1MwRkJhMElzVjBGQmJFSXNTVUZCYVVNc1EwRkJReXhEUVVGRFFTeE5RVUZOTEVOQlFVTkRMRTlCUVdwRU8wRkJRMFFzUTBGR1JEczdaVUZKWlVZc1RTSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxS2x4eVhHNGdLaUJBY21WMGRYSnVjeUFnVkhKMVpTQnBaaUIwYUdVZ2NuVnVkR2x0WlNCcGN5Qk9iMlJsU2xNdVhISmNiaUFxTDF4eVhHNWpiMjV6ZENCcGMwNXZaR1VnUFNBb0tUb2dZbTl2YkdWaGJpQTlQaUI3WEhKY2JpQWdjbVYwZFhKdUlIUjVjR1Z2WmlCdGIyUjFiR1VnSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lnSmlZZ0lTRnRiMlIxYkdVdVpYaHdiM0owY3p0Y2NseHVmVHRjY2x4dVhISmNibVY0Y0c5eWRDQmtaV1poZFd4MElHbHpUbTlrWlR0Y2NseHVJbDE5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxuLyoqXHJcbiAqIENoZWNrIGlmIHJ1bnRpbWUgaXMgUmVhY3ROYXRpdmUuXHJcbiAqIFNvbHV0aW9uIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rbmlja2xhYnMvbG9yZW0taXBzdW0uanMvcHVsbC81Mi9maWxlc1xyXG4gKlxyXG4gKiBAcmV0dXJucyAgVHJ1ZSBpZiBydW50aW1lIGlzIFJlYWN0TmF0aXZlLlxyXG4gKi9cbnZhciBpc1JlYWN0TmF0aXZlID0gZnVuY3Rpb24gaXNSZWFjdE5hdGl2ZSgpIHtcbiAgdmFyIGlzUmVhY3ROYXRpdmVSZXN1bHQgPSBmYWxzZTtcblxuICB0cnkge1xuICAgIGlzUmVhY3ROYXRpdmVSZXN1bHQgPSBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gXCJSZWFjdE5hdGl2ZVwiO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaXNSZWFjdE5hdGl2ZVJlc3VsdCA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzUmVhY3ROYXRpdmVSZXN1bHQ7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBpc1JlYWN0TmF0aXZlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OTFkR2xzTDJselVtVmhZM1JPWVhScGRtVXVkSE1pWFN3aWJtRnRaWE1pT2xzaWFYTlNaV0ZqZEU1aGRHbDJaU0lzSW1selVtVmhZM1JPWVhScGRtVlNaWE4xYkhRaUxDSnVZWFpwWjJGMGIzSWlMQ0p3Y205a2RXTjBJaXdpWlNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096dEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFbEJRVTFCTEdGQlFXRXNSMEZCUnl4VFFVRm9Ra0VzWVVGQlowSXNSMEZCWlR0QlFVTnVReXhOUVVGSlF5eHRRa0ZCTkVJc1IwRkJSeXhMUVVGdVF6czdRVUZGUVN4TlFVRkpPMEZCUTBaQkxFbEJRVUZCTEcxQ1FVRnRRaXhIUVVGSFF5eFRRVUZUTEVOQlFVTkRMRTlCUVZZc1MwRkJjMElzWVVGQk5VTTdRVUZEUkN4SFFVWkVMRU5CUlVVc1QwRkJUME1zUTBGQlVDeEZRVUZWTzBGQlExWklMRWxCUVVGQkxHMUNRVUZ0UWl4SFFVRkhMRXRCUVhSQ08wRkJRMFE3TzBGQlJVUXNVMEZCVDBFc2JVSkJRVkE3UVVGRFJDeERRVlpFT3p0bFFWbGxSQ3hoSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5b3FYSEpjYmlBcUlFTm9aV05ySUdsbUlISjFiblJwYldVZ2FYTWdVbVZoWTNST1lYUnBkbVV1WEhKY2JpQXFJRk52YkhWMGFXOXVJR0poYzJWa0lHOXVJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzlyYm1samEyeGhZbk12Ykc5eVpXMHRhWEJ6ZFcwdWFuTXZjSFZzYkM4MU1pOW1hV3hsYzF4eVhHNGdLbHh5WEc0Z0tpQkFjbVYwZFhKdWN5QWdWSEoxWlNCcFppQnlkVzUwYVcxbElHbHpJRkpsWVdOMFRtRjBhWFpsTGx4eVhHNGdLaTljY2x4dVkyOXVjM1FnYVhOU1pXRmpkRTVoZEdsMlpTQTlJQ2dwT2lCaWIyOXNaV0Z1SUQwK0lIdGNjbHh1SUNCc1pYUWdhWE5TWldGamRFNWhkR2wyWlZKbGMzVnNkRG9nWW05dmJHVmhiaUE5SUdaaGJITmxPMXh5WEc1Y2NseHVJQ0IwY25rZ2UxeHlYRzRnSUNBZ2FYTlNaV0ZqZEU1aGRHbDJaVkpsYzNWc2RDQTlJRzVoZG1sbllYUnZjaTV3Y205a2RXTjBJRDA5UFNCY0lsSmxZV04wVG1GMGFYWmxYQ0k3WEhKY2JpQWdmU0JqWVhSamFDQW9aU2tnZTF4eVhHNGdJQ0FnYVhOU1pXRmpkRTVoZEdsMlpWSmxjM1ZzZENBOUlHWmhiSE5sTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnY21WMGRYSnVJR2x6VW1WaFkzUk9ZWFJwZG1WU1pYTjFiSFE3WEhKY2JuMDdYSEpjYmx4eVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCcGMxSmxZV04wVG1GMGFYWmxPMXh5WEc0aVhYMD0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3BsYXRmb3JtcyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvcGxhdGZvcm1zXCIpO1xuXG4vKipcclxuICogQHJldHVybnMgVHJ1ZSBpZiBwcm9jZXNzIGlzIHdpbmRvd3MuXHJcbiAqL1xudmFyIGlzV2luZG93cyA9IGZ1bmN0aW9uIGlzV2luZG93cygpIHtcbiAgdmFyIGlzV2luZG93c1Jlc3VsdCA9IGZhbHNlO1xuXG4gIHRyeSB7XG4gICAgaXNXaW5kb3dzUmVzdWx0ID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gX3BsYXRmb3Jtcy5TVVBQT1JURURfUExBVEZPUk1TLldJTjMyO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaXNXaW5kb3dzUmVzdWx0ID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNXaW5kb3dzUmVzdWx0O1xufTtcblxudmFyIF9kZWZhdWx0ID0gaXNXaW5kb3dzO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OTFkR2xzTDJselYybHVaRzkzY3k1MGN5SmRMQ0p1WVcxbGN5STZXeUpwYzFkcGJtUnZkM01pTENKcGMxZHBibVJ2ZDNOU1pYTjFiSFFpTENKd2NtOWpaWE56SWl3aWNHeGhkR1p2Y20waUxDSlRWVkJRVDFKVVJVUmZVRXhCVkVaUFVrMVRJaXdpVjBsT016SWlMQ0psSWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08wRkJRVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJUVUVzVTBGQlV5eEhRVUZITEZOQlFWcEJMRk5CUVZrc1IwRkJaVHRCUVVNdlFpeE5RVUZKUXl4bFFVRjNRaXhIUVVGSExFdEJRUzlDT3p0QlFVTkJMRTFCUVVrN1FVRkRSa0VzU1VGQlFVRXNaVUZCWlN4SFFVRkhReXhQUVVGUExFTkJRVU5ETEZGQlFWSXNTMEZCY1VKRExDdENRVUZ2UWtNc1MwRkJNMFE3UVVGRFJDeEhRVVpFTEVOQlJVVXNUMEZCVDBNc1EwRkJVQ3hGUVVGVk8wRkJRMVpNTEVsQlFVRkJMR1ZCUVdVc1IwRkJSeXhMUVVGc1FqdEJRVU5FT3p0QlFVTkVMRk5CUVU5QkxHVkJRVkE3UVVGRFJDeERRVkpFT3p0bFFWVmxSQ3hUSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1UxVlFVRTlTVkVWRVgxQk1RVlJHVDFKTlV5QjlJR1p5YjIwZ1hDSXVMaTlqYjI1emRHRnVkSE12Y0d4aGRHWnZjbTF6WENJN1hISmNibHh5WEc0dktpcGNjbHh1SUNvZ1FISmxkSFZ5Ym5NZ1ZISjFaU0JwWmlCd2NtOWpaWE56SUdseklIZHBibVJ2ZDNNdVhISmNiaUFxTDF4eVhHNWpiMjV6ZENCcGMxZHBibVJ2ZDNNZ1BTQW9LVG9nWW05dmJHVmhiaUE5UGlCN1hISmNiaUFnYkdWMElHbHpWMmx1Wkc5M2MxSmxjM1ZzZERvZ1ltOXZiR1ZoYmlBOUlHWmhiSE5sTzF4eVhHNGdJSFJ5ZVNCN1hISmNiaUFnSUNCcGMxZHBibVJ2ZDNOU1pYTjFiSFFnUFNCd2NtOWpaWE56TG5Cc1lYUm1iM0p0SUQwOVBTQlRWVkJRVDFKVVJVUmZVRXhCVkVaUFVrMVRMbGRKVGpNeU8xeHlYRzRnSUgwZ1kyRjBZMmdnS0dVcElIdGNjbHh1SUNBZ0lHbHpWMmx1Wkc5M2MxSmxjM1ZzZENBOUlHWmhiSE5sTzF4eVhHNGdJSDFjY2x4dUlDQnlaWFIxY200Z2FYTlhhVzVrYjNkelVtVnpkV3gwTzF4eVhHNTlPMXh5WEc1Y2NseHVaWGh3YjNKMElHUmxabUYxYkhRZ2FYTlhhVzVrYjNkek8xeHlYRzRpWFgwPSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbi8qKlxyXG4gKiBAcGFyYW0gbGVuZ3RoIExlbmd0aCBcInhcIi5cclxuICogQHJldHVybnMgICAgICBBbiBhcnJheSBvZiBpbmRleGVzIG9mIGxlbmd0aCBcInhcIi5cclxuICovXG52YXIgbWFrZUFycmF5T2ZMZW5ndGggPSBmdW5jdGlvbiBtYWtlQXJyYXlPZkxlbmd0aCgpIHtcbiAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgcmV0dXJuIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KGxlbmd0aCkpLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH0pO1xufTtcblxudmFyIF9kZWZhdWx0ID0gbWFrZUFycmF5T2ZMZW5ndGg7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5MWRHbHNMMjFoYTJWQmNuSmhlVTltVEdWdVozUm9MblJ6SWwwc0ltNWhiV1Z6SWpwYkltMWhhMlZCY25KaGVVOW1UR1Z1WjNSb0lpd2liR1Z1WjNSb0lpd2lRWEp5WVhraUxDSmhjSEJzZVNJc0ltMWhjQ0lzSW1sMFpXMGlMQ0pwYm1SbGVDSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenRCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTVUZCVFVFc2FVSkJRV2xDTEVkQlFVY3NVMEZCY0VKQkxHbENRVUZ2UWl4SFFVRnJRenRCUVVGQkxFMUJRV3BEUXl4TlFVRnBReXgxUlVGQmFFSXNRMEZCWjBJN1FVRkRNVVFzVTBGQlQwTXNTMEZCU3l4RFFVRkRReXhMUVVGT0xFTkJRVmtzU1VGQldpeEZRVUZyUWtRc1MwRkJTeXhEUVVGRFJDeE5RVUZFTEVOQlFYWkNMRVZCUVdsRFJ5eEhRVUZxUXl4RFFVTk1MRlZCUVVORExFbEJRVVFzUlVGQldVTXNTMEZCV2p0QlFVRkJMRmRCUVhORFFTeExRVUYwUXp0QlFVRkJMRWRCUkVzc1EwRkJVRHRCUVVkRUxFTkJTa1E3TzJWQlRXVk9MR2xDSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5b3FYSEpjYmlBcUlFQndZWEpoYlNCc1pXNW5kR2dnVEdWdVozUm9JRndpZUZ3aUxseHlYRzRnS2lCQWNtVjBkWEp1Y3lBZ0lDQWdJRUZ1SUdGeWNtRjVJRzltSUdsdVpHVjRaWE1nYjJZZ2JHVnVaM1JvSUZ3aWVGd2lMbHh5WEc0Z0tpOWNjbHh1WTI5dWMzUWdiV0ZyWlVGeWNtRjVUMlpNWlc1bmRHZ2dQU0FvYkdWdVozUm9PaUJ1ZFcxaVpYSWdQU0F3S1RvZ2JuVnRZbVZ5VzEwZ1BUNGdlMXh5WEc0Z0lISmxkSFZ5YmlCQmNuSmhlUzVoY0hCc2VTaHVkV3hzTENCQmNuSmhlU2hzWlc1bmRHZ3BLUzV0WVhBb1hISmNiaUFnSUNBb2FYUmxiVG9nWVc1NUxDQnBibVJsZURvZ2JuVnRZbVZ5S1RvZ2JuVnRZbVZ5SUQwK0lHbHVaR1Y0TEZ4eVhHNGdJQ2s3WEhKY2JuMDdYSEpjYmx4eVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCdFlXdGxRWEp5WVhsUFpreGxibWQwYUR0Y2NseHVJbDE5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF8gPSByZXF1aXJlKFwiLlwiKTtcblxuLyoqXHJcbiAqIEBwYXJhbSBsZW5ndGggIExlbmd0aCBcInhcIi5cclxuICogQHJldHVybnMgICAgICAgQW4gYXJyYXkgb2Ygc3RyaW5ncyBvZiBsZW5ndGggXCJ4XCIuXHJcbiAqL1xudmFyIG1ha2VBcnJheU9mU3RyaW5ncyA9IGZ1bmN0aW9uIG1ha2VBcnJheU9mU3RyaW5ncyhsZW5ndGgsIG1ha2VTdHJpbmcpIHtcbiAgdmFyIGFyciA9ICgwLCBfLm1ha2VBcnJheU9mTGVuZ3RoKShsZW5ndGgpO1xuICByZXR1cm4gYXJyLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG1ha2VTdHJpbmcoKTtcbiAgfSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBtYWtlQXJyYXlPZlN0cmluZ3M7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5MWRHbHNMMjFoYTJWQmNuSmhlVTltVTNSeWFXNW5jeTUwY3lKZExDSnVZVzFsY3lJNld5SnRZV3RsUVhKeVlYbFBabE4wY21sdVozTWlMQ0pzWlc1bmRHZ2lMQ0p0WVd0bFUzUnlhVzVuSWl3aVlYSnlJaXdpYldGd0lsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPMEZCUVVFN08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SlFVRk5RU3hyUWtGQmEwSXNSMEZCUnl4VFFVRnlRa0VzYTBKQlFYRkNMRU5CUTNwQ1F5eE5RVVI1UWl4RlFVVjZRa01zVlVGR2VVSXNSVUZIV2p0QlFVTmlMRTFCUVUxRExFZEJRVWNzUjBGQlJ5eDVRa0ZCYTBKR0xFMUJRV3hDTEVOQlFWbzdRVUZEUVN4VFFVRlBSU3hIUVVGSExFTkJRVU5ETEVkQlFVb3NRMEZCVVR0QlFVRkJMRmRCUVUxR0xGVkJRVlVzUlVGQmFFSTdRVUZCUVN4SFFVRlNMRU5CUVZBN1FVRkRSQ3hEUVU1RU96dGxRVkZsUml4clFpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJRzFoYTJWQmNuSmhlVTltVEdWdVozUm9JSDBnWm5KdmJTQmNJaTVjSWp0Y2NseHVMeW9xWEhKY2JpQXFJRUJ3WVhKaGJTQnNaVzVuZEdnZ0lFeGxibWQwYUNCY0luaGNJaTVjY2x4dUlDb2dRSEpsZEhWeWJuTWdJQ0FnSUNBZ1FXNGdZWEp5WVhrZ2IyWWdjM1J5YVc1bmN5QnZaaUJzWlc1bmRHZ2dYQ0o0WENJdVhISmNiaUFxTDF4eVhHNWpiMjV6ZENCdFlXdGxRWEp5WVhsUFpsTjBjbWx1WjNNZ1BTQW9YSEpjYmlBZ2JHVnVaM1JvT2lCdWRXMWlaWElzWEhKY2JpQWdiV0ZyWlZOMGNtbHVaem9nS0NrZ1BUNGdjM1J5YVc1bkxGeHlYRzRwT2lCemRISnBibWRiWFNBOVBpQjdYSEpjYmlBZ1kyOXVjM1FnWVhKeUlEMGdiV0ZyWlVGeWNtRjVUMlpNWlc1bmRHZ29iR1Z1WjNSb0tUdGNjbHh1SUNCeVpYUjFjbTRnWVhKeUxtMWhjQ2dvS1NBOVBpQnRZV3RsVTNSeWFXNW5LQ2twTzF4eVhHNTlPMXh5WEc1Y2NseHVaWGh3YjNKMElHUmxabUYxYkhRZ2JXRnJaVUZ5Y21GNVQyWlRkSEpwYm1kek8xeHlYRzRpWFgwPSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVBbmRBcHBlbmQobm9kZSwgZWxlbWVuVHlwZSwgdGV4dENvbnRlbnQsIGlkLCBjbGFzc1RvQWRkKXtcbiAgICAvLyBjb25zb2xlLmxvZyhjbGFzc1RvQWRkKVxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lblR5cGUpO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICBpZihjbGFzc1RvQWRkKXsgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzVG9BZGQpIH1cbiAgICBpZihpZCl7IGVsZW1lbnQuaWQgPSBpZCB9XG4gICAgcmV0dXJuIG5vZGUuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFuZEFwcGVuZDsiLCJpbXBvcnQgY3JlYXRlQW5kQXBwZW5kIGZyb20gXCIuL2NyZWF0ZUFuZEFwcGVuZFwiO1xuaW1wb3J0IHsgTG9yZW1JcHN1bSB9IGZyb20gXCJsb3JlbS1pcHN1bVwiO1xuLy8gY29uc3QgTG9yZW1JcHN1bSA9IHJlcXVpcmUoXCJsb3JlbS1pcHN1bVwiKS5Mb3JlbUlwc3VtO1xuXG5jb25zdCBsb3JlbSA9IG5ldyBMb3JlbUlwc3VtKHtcbiAgc2VudGVuY2VzUGVyUGFyYWdyYXBoOiB7XG4gICAgbWF4OiA4LFxuICAgIG1pbjogNFxuICB9LFxuICB3b3Jkc1BlclNlbnRlbmNlOiB7XG4gICAgbWF4OiAxNixcbiAgICBtaW46IDRcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQWJvdXQobWFpbil7XG4gIGNyZWF0ZUFuZEFwcGVuZChtYWluLCAnaDInLCAnUHJpbWUgSG91c2UnLCAnYWJvdXQtbmFtZScpO1xuICBjcmVhdGVBbmRBcHBlbmQobWFpbiwgJ2gxJywgJ0Fib3V0IHVzJywgJ2Fib3V0LXRpdGxlJyk7XG4gIGNyZWF0ZUFuZEFwcGVuZChtYWluLCAncCcsIGxvcmVtLmdlbmVyYXRlUGFyYWdyYXBocygzKSwgJ3AtYWJvdXQnKTtcbiAgY3JlYXRlQW5kQXBwZW5kKG1haW4sICdkaXYnLCAnJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQWJvdXQ7IiwiaW1wb3J0IGNyZWF0ZUFuZEFwcGVuZCBmcm9tIFwiLi9jcmVhdGVBbmRBcHBlbmRcIjtcblxuZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50KGNvbnRlbnQpe1xuICAgIC8vIC0tLUhlYWRlci0tLSAvL1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAvLyBjcmVhdGVBbmRBcHBlbmQoY3JlYXRlQW5kQXBwZW5kKGhlYWRlciwgJ2EnLCcnLCdob21lJyksICdkaXYnLCAnSG9tZScpO1xuICAgIC8vIGNyZWF0ZUFuZEFwcGVuZChjcmVhdGVBbmRBcHBlbmQoaGVhZGVyLCAnYScpLCAnZGl2JywgJ01lbnUnLCAnbWVudScpO1xuICAgIC8vIGNyZWF0ZUFuZEFwcGVuZChjcmVhdGVBbmRBcHBlbmQoaGVhZGVyLCAnYScpLCAnZGl2JywgJ0Fib3V0JywgJ2Fib3V0Jyk7XG4gICAgY3JlYXRlQW5kQXBwZW5kKGhlYWRlciwgJ2RpdicsICdIb21lJywgJ2hvbWUnKTtcbiAgICBjcmVhdGVBbmRBcHBlbmQoaGVhZGVyLCAnZGl2JywgJ01lbnUnLCAnbWVudScpO1xuICAgIGNyZWF0ZUFuZEFwcGVuZChoZWFkZXIsICdkaXYnLCAnQWJvdXQnLCAnYWJvdXQnKTtcbiAgICBoZWFkZXIucXVlcnlTZWxlY3RvckFsbCgnYScpLmZvckVhY2goYT0+YS5ocmVmPScnKTtcbiAgICAvLyAtLS1NYWluLS0tIC8vXG4gICAgY3JlYXRlQW5kQXBwZW5kKGNvbnRlbnQsICdkaXYnLCAnJywgJ21haW4nKTtcbiAgICAvLyAtLS1Gb290ZXItLS0gLy9cbiAgICBjcmVhdGVBbmRBcHBlbmQoY3JlYXRlQW5kQXBwZW5kKGNvbnRlbnQsJ2EnKSwgJ2Zvb3RlcicsICdCeSBHYWJyaWVsIFJ1aXogVmFyZWxhJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQ+YScpLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL0dhYnJpZWxSdWl6VmFyZWxhJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVDb250ZW50O1xuIiwiaW1wb3J0IGNyZWF0ZUFuZEFwcGVuZCBmcm9tIFwiLi9jcmVhdGVBbmRBcHBlbmRcIjtcbi8vIGltcG9ydCB7IG1kaUluc3RhZ3JhbSB9IGZyb20gJ0BtZGkvanMnO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUhvbWUoaG9tZSl7XG4gICAgY29uc3QgaG9tZUxlZnQgPSBjcmVhdGVBbmRBcHBlbmQoaG9tZSwgJ2RpdicsICcnLCAnaG9tZS1sZWZ0Jyk7XG4gICAgY3JlYXRlQW5kQXBwZW5kKGhvbWVMZWZ0LCAnc3BhbicsICcnLCAnJyk7XG4gICAgY29uc3QgaG9tZVRleHQgPSBjcmVhdGVBbmRBcHBlbmQoaG9tZUxlZnQsICdkaXYnLCAnJywgJ2hvbWUtdGV4dCcpO1xuICAgIGNyZWF0ZUFuZEFwcGVuZChob21lVGV4dCwgJ2gzJywgJ1dlbGNvbWUgdG8nKVxuICAgIGNyZWF0ZUFuZEFwcGVuZChob21lVGV4dCwgJ2gxJywgJ1ByaW1lIEhvdXNlJylcbiAgICBjcmVhdGVBbmRBcHBlbmQoaG9tZVRleHQsICdidXR0b24nLCAnTWVudScpXG4gICAgY3JlYXRlQW5kQXBwZW5kKGhvbWVMZWZ0LCAnc3BhbicsICcnLCAnaG9yaXpvbnRhbC1saW5lJyk7XG4gICAgY29uc3QgaG9tZUljb25zID0gY3JlYXRlQW5kQXBwZW5kKGhvbWVMZWZ0LCAnZGl2JywgJycsICdob21lSWNvbnMnKTtcbiAgICBjcmVhdGVBbmRBcHBlbmQoY3JlYXRlQW5kQXBwZW5kKGhvbWVJY29ucywnYScpLCdzcGFuJywgJycsICcnLCAnaWNvbmlmeS1pbmxpbmUnKS5kYXRhc2V0Lmljb24gPSAnYWthci1pY29uczppbnN0YWdyYW0tZmlsbCc7XG4gICAgY3JlYXRlQW5kQXBwZW5kKGNyZWF0ZUFuZEFwcGVuZChob21lSWNvbnMsJ2EnKSwnc3BhbicsICcnLCAnJywgJ2ljb25pZnktaW5saW5lJykuZGF0YXNldC5pY29uID0gJ2FrYXItaWNvbnM6ZmFjZWJvb2stZmlsbCc7XG4gICAgY3JlYXRlQW5kQXBwZW5kKGNyZWF0ZUFuZEFwcGVuZChob21lSWNvbnMsJ2EnKSwnc3BhbicsICcnLCAnJywgJ2ljb25pZnktaW5saW5lJykuZGF0YXNldC5pY29uID0gJ2FrYXItaWNvbnM6d2hhdHNhcHAtZmlsbCc7XG4gICAgaG9tZUljb25zLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKS5mb3JFYWNoKGE9PmEuaHJlZj0nJyk7XG5cbiAgICBjb25zdCBob21lUmlnaHQgPSBjcmVhdGVBbmRBcHBlbmQoaG9tZSwgJ2RpdicsICcnLCAnaG9tZS1yaWdodCcpOyBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVIb21lOyIsImltcG9ydCBjcmVhdGVBbmRBcHBlbmQgZnJvbSBcIi4vY3JlYXRlQW5kQXBwZW5kXCI7XG5cbi8vIGNvbnN0IHBsYXRlLCBkZXNjcmlwdGlvbiwgcHJpY2U7XG5jb25zdCBwbGF0ZSA9IFtcbiAgICAnQ3Jpc3B5IEJyaWNrIENoaWNrZW4nLFxuICAgICdEb3VibGUgQ3V0IExhbWIgQ2hvcHMnLFxuICAgICcxMG96IERvdWJsZSBXYWd5dSBDaGVlc2VidXJnZXInLFxuICAgICdQcmltZSBSaWIgRnJlbmNoIERpcCcsXG4gICAgJ0hvbmV5IFBlcHBlcmVkIE9yYSBLaW5nIFNhbG1vbicsXG4gICAgJ0JvbmUtSW4gRmlsZXQgTWlnbm9uJ1xuXTtcblxuY29uc3QgZGVzY3JpcHRpb24gPSBbXG4gICAgJ3Nsb3cgcm9hc3RlZCBzd2VldCBnYXJsaWMsIGNydXNoZWQgb3JlZ2FubywgbmF0dXJhbCBqdXMnLFxuICAgICdyb2FzdGVkIGdhcmxpYywgcm9zZW1hcnkgYW5kIGEgZmV3IG9saXZlcycsXG4gICAgJ2dyaWRkbGVkIGFuZCBwcmVzc2VkIHNuYWtlIHJpdmVyIGZhcm1zIHdhZ3l1IHdpdGggYW1lcmljYW4gY2hlZXNlLCBwaWNrbGVzLCBhbmQgZGlqb25uYWlzZScsXG4gICAgJ3N3aXNzIGNoZWVzZSwgbmF0dXJhbCBqdXMnLFxuICAgICdhcm9tYXRpYyBicm93biBidXR0ZXIgJiBsZW1vbicsXG4gICAgJzE2b3osIGJlYXJuYWlzZSBzYXVjZSwgc3RlYWsgc2FsdCcsXG5dO1xuXG5jb25zdCBwcmljZSA9IFsnJDM3JywgJyQ3NScsICckMzUnLCAnJDM4JywgJyQ0NScsICckODknXTtcblxuXG5mdW5jdGlvbiBnZW5lcmF0ZU1lbnUobWFpbil7XG4gICAgY3JlYXRlQW5kQXBwZW5kKG1haW4sICdoMicsICdQcmltZSBIb3VzZScsICdtZW51LW5hbWUnKTtcbiAgICBjcmVhdGVBbmRBcHBlbmQobWFpbiwgJ2gxJywgJ01lbnUnLCAnbWVudS10aXRsZScpO1xuICAgIGNvbnN0IG1lbnUgPSBjcmVhdGVBbmRBcHBlbmQobWFpbiwgJ2RpdicsICcnLCAnbWVudS1jb250YWluZXInKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByaWNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBtZW51SXRlbSA9IGNyZWF0ZUFuZEFwcGVuZChtZW51LCAnZGl2JywgJycsICcnLCAnbWVudS1pdGVtJyk7XG4gICAgICAgIGNyZWF0ZUFuZEFwcGVuZChtZW51SXRlbSwgJ2RpdicsIHBsYXRlW2ldLCAnJywgJ3BsYXRlJyk7XG4gICAgICAgIGNyZWF0ZUFuZEFwcGVuZChtZW51SXRlbSwgJ2RpdicsIGRlc2NyaXB0aW9uW2ldLCAnJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNyZWF0ZUFuZEFwcGVuZChtZW51SXRlbSwgJ2RpdicsIHByaWNlW2ldLCAnJywgJ3ByaWNlJyk7XG4gICAgICAgIGNyZWF0ZUFuZEFwcGVuZChtZW51SXRlbSwgJ2RpdicsICcnKTtcbiAgICB9XG4gICAgY3JlYXRlQW5kQXBwZW5kKG1haW4sJ2RpdicsICcnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVNZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgZ2VuZXJhdGVDb250ZW50IGZyb20gJy4vZ2VuZXJhdGVDb250ZW50JztcbmltcG9ydCBnZW5lcmF0ZUhvbWUgZnJvbSAnLi9nZW5lcmF0ZUhvbWUnO1xuaW1wb3J0IGdlbmVyYXRlTWVudSBmcm9tICcuL2dlbmVyYXRlTWVudSc7XG5pbXBvcnQgZ2VuZXJhdGVBYm91dCBmcm9tICcuL2dlbmVyYXRlQWJvdXQnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5nZW5lcmF0ZUNvbnRlbnQoY29udGVudCk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKVxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJyk7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcbmNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fib3V0Jyk7XG5cbi8vIGhvbWVTZWxlY3RlZCgpO1xuYWJvdXRTZWxlY3RlZCgpO1xuXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaG9tZVNlbGVjdGVkKTtcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtZW51U2VsZWN0ZWQpO1xuYWJvdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhYm91dFNlbGVjdGVkKTtcblxuXG4vLyBcbmZ1bmN0aW9uIGhvbWVTZWxlY3RlZCgpe1xuICAgIG1haW4uaW5uZXJIVE1MPScnO1xuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnbWVudScpO1xuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnYWJvdXQnKTtcbiAgICBnZW5lcmF0ZUhvbWUobWFpbik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudVNlbGVjdGVkKTtcbn07XG5cbmZ1bmN0aW9uIG1lbnVTZWxlY3RlZCgpe1xuICAgIGxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gICAgaWYobWVudUJ1dHRvbil7XG4gICAgICAgIG1lbnVCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLG1lbnVTZWxlY3RlZCk7XG4gICAgfVxuICAgIG1haW4uaW5uZXJIVE1MPScnO1xuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnaG9tZScpO1xuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnYWJvdXQnKTtcbiAgICBnZW5lcmF0ZU1lbnUobWFpbik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG59O1xuXG5mdW5jdGlvbiBhYm91dFNlbGVjdGVkKCl7XG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICBpZihtZW51QnV0dG9uKXtcbiAgICAgICAgbWVudUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsbWVudVNlbGVjdGVkKTtcbiAgICB9XG4gICAgbWFpbi5pbm5lckhUTUw9Jyc7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdob21lJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51Jyk7XG4gICAgZ2VuZXJhdGVBYm91dChtYWluKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==