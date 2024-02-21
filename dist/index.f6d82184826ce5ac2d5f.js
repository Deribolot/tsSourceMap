(self["webpackChunkwebpack_ts"] = self["webpackChunkwebpack_ts"] || []).push([["index"],{

/***/ 9518:
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

/***/ 4858:
/*!****************************************!*\
  !*** ./src/components/Menu/index.less ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"menu":"gugJUuU9ER28AKx_X7cQ","item":"uAaWgugOj3kZsl5yGwNV"});

/***/ }),

/***/ 1264:
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ 5337:
/*!***************************!*\
  !*** ./src/App/index.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ 3823);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 5466);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menuContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuContext */ 6212);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Menu */ 4245);
/* harmony import */ var lodash_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/split */ 4880);
/* harmony import */ var lodash_split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_split__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/reduce */ 1734);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_lowerFirst__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/lowerFirst */ 650);
/* harmony import */ var lodash_lowerFirst__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_lowerFirst__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ 8098);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.less */ 9518);









function RenderingComponent(_a) {
    var Component = _a.Component;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {});
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('home'), activeKey = _a[0], setActiveKey = _a[1];
    var menuItems = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () { return lodash_reduce__WEBPACK_IMPORTED_MODULE_5___default()(_menuContext__WEBPACK_IMPORTED_MODULE_2__["default"].keys(), function (result, filePath) {
        var filePathStrings = lodash_split__WEBPACK_IMPORTED_MODULE_4___default()(filePath, '/');
        var fileName = filePathStrings[filePathStrings.length - 1];
        var fileNameStrings = lodash_split__WEBPACK_IMPORTED_MODULE_4___default()(fileName, '.');
        var name = lodash_lowerFirst__WEBPACK_IMPORTED_MODULE_6___default()(fileNameStrings[0]);
        if (name === 'index' && filePathStrings.length > 1) {
            name = lodash_lowerFirst__WEBPACK_IMPORTED_MODULE_6___default()(filePathStrings[filePathStrings.length - 2]);
        }
        result[name] = filePath;
        return result;
    }, {}); }, [_menuContext__WEBPACK_IMPORTED_MODULE_2__["default"]]);
    var menuComponent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return lodash_reduce__WEBPACK_IMPORTED_MODULE_5___default()(Object.entries(menuItems), function (result, _a) {
            var name = _a[0], filePath = _a[1];
            result[name] = react__WEBPACK_IMPORTED_MODULE_1___default().lazy(function () { return (0,_menuContext__WEBPACK_IMPORTED_MODULE_2__["default"])(filePath); });
            return result;
        }, {});
    }, [menuItems]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('main', _index_less__WEBPACK_IMPORTED_MODULE_8__["default"].main), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], { items: menuItems, activeKey: activeKey, setActiveKey: setActiveKey, className: _index_less__WEBPACK_IMPORTED_MODULE_8__["default"].menu }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: _index_less__WEBPACK_IMPORTED_MODULE_8__["default"].content, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, { fallback: 'Loading', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RenderingComponent, { Component: menuComponent[activeKey] }) }) })] }));
}


/***/ }),

/***/ 6212:
/*!********************************!*\
  !*** ./src/App/menuContext.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__(5044));


/***/ }),

/***/ 4245:
/*!***************************************!*\
  !*** ./src/components/Menu/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ 3823);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 5466);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/reduce */ 1734);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ 8098);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ 4858);





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_a) {
    var items = _a.items, activeKey = _a.activeKey, setActiveKey = _a.setActiveKey, className = _a.className;
    var onItemClicks = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return lodash_reduce__WEBPACK_IMPORTED_MODULE_2___default()(Object.entries(items), function (result, _a) {
            var key = _a[0];
            result[key] = function () {
                setActiveKey(key);
            };
            return result;
        }, {});
    }, [items, setActiveKey]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_index_less__WEBPACK_IMPORTED_MODULE_4__["default"].menu, 'tooltipRoot', className), children: Object.keys(items).map(function (key) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_index_less__WEBPACK_IMPORTED_MODULE_4__["default"].item, 'withTooltip', activeKey === key ? 'primary' : ''), onClick: onItemClicks[key], type: "button", children: [key, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('tooltip', 'theme'), children: key })] }, key)); }) }));
}


/***/ }),

/***/ 2629:
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ 3823);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ 3897);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! normalize.css */ 6183);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ 1264);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/App */ 5337);




// сделать разные урлы для разных пунктов меню

var domNode = document.getElementById('root');
if (!domNode) {
    domNode = document.createElement('div');
    domNode.id = 'root';
    document.body.appendChild(domNode);
}
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(domNode);
root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {}));


/***/ }),

/***/ 5044:
/*!**************************************!*\
  !*** ./src/pages/ lazy .(ts%7Ctsx)$ ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Home/index.tsx": [
		40,
		"src_pages_Home_index_tsx"
	],
	"./about.ts": [
		2274,
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
webpackAsyncContext.id = 5044;
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(2629)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.f6d82184826ce5ac2d5f.js.map