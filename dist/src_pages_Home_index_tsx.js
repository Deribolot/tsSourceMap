"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_pages_Home_index_tsx"],{

/***/ 1245:
/*!**********************************!*\
  !*** ./src/pages/Home/index.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ 7671);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 4914);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./1.jpg */ 8458);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



function getImageContent(src) {
    return __awaiter(this, void 0, void 0, function () {
        var img, imgResponse, blob;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!src) return [3 /*break*/, 3];
                    return [4 /*yield*/, fetch(src)];
                case 1:
                    imgResponse = _a.sent();
                    if (!imgResponse) return [3 /*break*/, 3];
                    return [4 /*yield*/, imgResponse.blob()];
                case 2:
                    blob = _a.sent();
                    img = URL.createObjectURL(blob);
                    _a.label = 3;
                case 3: return [2 /*return*/, img];
            }
        });
    });
}
var defImg;
getImageContent(_1_jpg__WEBPACK_IMPORTED_MODULE_2__).then(function (newImg) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        defImg = newImg;
        return [2 /*return*/];
    });
}); });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defImg), img = _a[0], setImg = _a[1];
    var loadImage = function () { return __awaiter(void 0, void 0, void 0, function () {
        var newImg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (defImg) {
                        setImg(defImg);
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, getImageContent(_1_jpg__WEBPACK_IMPORTED_MODULE_2__)];
                case 1:
                    newImg = _a.sent();
                    setImg(newImg);
                    return [2 /*return*/];
            }
        });
    }); };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [img && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: img, alt: "cat" }), !img && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: loadImage, type: 'button', className: 'theme', children: "load image" })] }));
});


/***/ }),

/***/ 8458:
/*!******************************!*\
  !*** ./src/pages/Home/1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a95670f8dfa89f97dcd5.jpg";

/***/ })

}]);
//# sourceMappingURL=src_pages_Home_index_tsx.js.map