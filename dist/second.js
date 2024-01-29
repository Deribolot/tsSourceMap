(self["webpackChunkwebpack_ts"] = self["webpackChunkwebpack_ts"] || []).push([["second"],{

/***/ "./node_modules/lodash/join.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/join.js ***!
  \*************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeJoin = arrayProto.join;

/**
 * Converts all elements in `array` into a string separated by `separator`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to convert.
 * @param {string} [separator=','] The element separator.
 * @returns {string} Returns the joined string.
 * @example
 *
 * _.join(['a', 'b', 'c'], '~');
 * // => 'a~b~c'
 */
function join(array, separator) {
  return array == null ? '' : nativeJoin.call(array, separator);
}

module.exports = join;


/***/ }),

/***/ "./src/hy.ts":
/*!*******************!*\
  !*** ./src/hy.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/join */ "./node_modules/lodash/join.js");
/* harmony import */ var lodash_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_join__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(num) {
    console.log(num);
    return lodash_join__WEBPACK_IMPORTED_MODULE_0___default()(['Hello', num, 'webpack'], ' ');
}


/***/ }),

/***/ "./src/index2.js":
/*!***********************!*\
  !*** ./src/index2.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hy */ "./src/hy.ts");
/* harmony import */ var _2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2.png */ "./src/2.png");



function component() {
    const element = document.createElement('div');

    element.innerHTML = (0,_hy__WEBPACK_IMPORTED_MODULE_0__["default"])(2);

    const image = new Image();
    image.src = _2_png__WEBPACK_IMPORTED_MODULE_1__;

    element.appendChild(image);

    return element;
}

document.body.appendChild(component());

/***/ }),

/***/ "./src/2.png":
/*!*******************!*\
  !*** ./src/2.png ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "944b1e6752caa2afd4c5.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index2.js"));
/******/ }
]);
//# sourceMappingURL=second.js.map