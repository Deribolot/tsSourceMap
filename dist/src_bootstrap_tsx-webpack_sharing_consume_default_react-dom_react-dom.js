(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_bootstrap_tsx-webpack_sharing_consume_default_react-dom_react-dom"],{

/***/ 4589:
/*!****************************!*\
  !*** ./src/App/index.less ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"main":"i4JUY1kmcIJXbewaPiTs","menu":"m0Uuj7z2rBbu6tdxx9Uj","content":"YBqjOmPODgDTEj0gIKUR"});

/***/ }),

/***/ 8908:
/*!***************************!*\
  !*** ./src/App/index.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ 7671);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 4914);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menuContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuContext */ 4346);
/* harmony import */ var lodash_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/split */ 5761);
/* harmony import */ var lodash_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/reduce */ 2019);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_lowerFirst__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/lowerFirst */ 2364);
/* harmony import */ var lodash_lowerFirst__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_lowerFirst__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ 7073);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.less */ 4589);








var Menu = react__WEBPACK_IMPORTED_MODULE_1___default().lazy(function () { return __webpack_require__.e(/*! import() */ "webpack_container_remote_lib_Menu").then(__webpack_require__.t.bind(__webpack_require__, /*! lib/Menu */ 3118, 23)); });
function RenderingComponent(_a) {
    var Component = _a.Component;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {});
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('home'), activeKey = _a[0], setActiveKey = _a[1];
    var menuItems = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () { return lodash_reduce__WEBPACK_IMPORTED_MODULE_4___default()(_menuContext__WEBPACK_IMPORTED_MODULE_2__["default"].keys(), function (result, filePath) {
        var filePathStrings = lodash_split__WEBPACK_IMPORTED_MODULE_3___default()(filePath, '/');
        var fileName = filePathStrings[filePathStrings.length - 1];
        var fileNameStrings = lodash_split__WEBPACK_IMPORTED_MODULE_3___default()(fileName, '.');
        var name = lodash_lowerFirst__WEBPACK_IMPORTED_MODULE_5___default()(fileNameStrings[0]);
        if (name === 'index' && filePathStrings.length > 1) {
            name = lodash_lowerFirst__WEBPACK_IMPORTED_MODULE_5___default()(filePathStrings[filePathStrings.length - 2]);
        }
        result[name] = filePath;
        return result;
    }, {}); }, [_menuContext__WEBPACK_IMPORTED_MODULE_2__["default"]]);
    var menuComponents = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return lodash_reduce__WEBPACK_IMPORTED_MODULE_4___default()(Object.entries(menuItems), function (result, _a) {
            var name = _a[0], filePath = _a[1];
            result[name] = react__WEBPACK_IMPORTED_MODULE_1___default().lazy(function () { return (0,_menuContext__WEBPACK_IMPORTED_MODULE_2__["default"])(filePath); });
            return result;
        }, {});
    }, [menuItems]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('main', _index_less__WEBPACK_IMPORTED_MODULE_7__["default"].main), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, { fallback: 'Loading', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Menu, { items: menuItems, activeKey: activeKey, setActiveKey: setActiveKey, className: _index_less__WEBPACK_IMPORTED_MODULE_7__["default"].menu }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: _index_less__WEBPACK_IMPORTED_MODULE_7__["default"].content, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, { fallback: 'Loading', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RenderingComponent, { Component: menuComponents[activeKey] }) }) })] }));
}


/***/ }),

/***/ 4346:
/*!********************************!*\
  !*** ./src/App/menuContext.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__(4019));


/***/ }),

/***/ 4950:
/*!***************************!*\
  !*** ./src/bootstrap.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ 7671);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ 4723);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ 8908);

console.log('hy2');


var domNode = document.getElementById('root');
if (!domNode) {
    domNode = document.createElement('div');
    domNode.id = 'root';
    document.body.appendChild(domNode);
}
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(domNode);
root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}));


/***/ }),

/***/ 4019:
/*!**************************************!*\
  !*** ./src/pages/ lazy .(ts%7Ctsx)$ ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Home/index.tsx": [
		1245,
		"src_pages_Home_index_tsx"
	],
	"./about.ts": [
		958,
		"src_pages_about_ts"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 4019;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_bootstrap_tsx-webpack_sharing_consume_default_react-dom_react-dom.js.map