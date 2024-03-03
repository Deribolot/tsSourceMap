(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_bootstrap_jsx-webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume-c0d0cf"],{

/***/ 1451:
/*!***************************!*\
  !*** ./src/App/index.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 4914);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menuContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuContext */ 4346);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Menu */ 4571);
/* harmony import */ var lodash_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/split */ 5761);
/* harmony import */ var lodash_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/reduce */ 2019);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_lowerFirst__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/lowerFirst */ 2364);
/* harmony import */ var lodash_lowerFirst__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_lowerFirst__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ 8845);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.less */ 4589);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








console.log(__webpack_require__.e(/*! import() */ "webpack_container_remote_componentLibrary").then(__webpack_require__.t.bind(__webpack_require__, /*! componentLibrary */ 1533, 23)));
function RenderingComponent(_ref) {
  var Component = _ref.Component;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, null);
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('home'),
    _useState2 = _slicedToArray(_useState, 2),
    activeKey = _useState2[0],
    setActiveKey = _useState2[1];
  var menuItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return lodash_reduce__WEBPACK_IMPORTED_MODULE_4___default()(_menuContext__WEBPACK_IMPORTED_MODULE_1__["default"].keys(), function (result, filePath) {
      var filePathStrings = lodash_split__WEBPACK_IMPORTED_MODULE_3___default()(filePath, '/');
      var fileName = filePathStrings[filePathStrings.length - 1];
      var fileNameStrings = lodash_split__WEBPACK_IMPORTED_MODULE_3___default()(fileName, '.');
      var name = lodash_lowerFirst__WEBPACK_IMPORTED_MODULE_5___default()(fileNameStrings[0]);
      if (name === 'index' && filePathStrings.length > 1) {
        name = lodash_lowerFirst__WEBPACK_IMPORTED_MODULE_5___default()(filePathStrings[filePathStrings.length - 2]);
      }
      result[name] = filePath;
      return result;
    }, {});
  }, [_menuContext__WEBPACK_IMPORTED_MODULE_1__["default"]]);
  var menuComponents = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return lodash_reduce__WEBPACK_IMPORTED_MODULE_4___default()(Object.entries(menuItems), function (result, _ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        name = _ref3[0],
        filePath = _ref3[1];
      result[name] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
        return (0,_menuContext__WEBPACK_IMPORTED_MODULE_1__["default"])(filePath);
      });
      return result;
    }, {});
  }, [menuItems]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('main', _index_less__WEBPACK_IMPORTED_MODULE_7__["default"].main)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: 'Loading'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: menuItems,
    activeKey: activeKey,
    setActiveKey: setActiveKey,
    className: _index_less__WEBPACK_IMPORTED_MODULE_7__["default"].menu
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_7__["default"].content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: 'Loading'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RenderingComponent, {
    Component: menuComponents[activeKey]
  }))));
}

/***/ }),

/***/ 2805:
/*!***************************!*\
  !*** ./src/bootstrap.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ 4723);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalize.css */ 8641);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ 801);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/App */ 1451);




console.log('hy');
var domNode = document.getElementById('root');
if (!domNode) {
  domNode = document.createElement('div');
  domNode.id = 'root';
  document.body.appendChild(domNode);
}
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(domNode);
root.render( /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null));

/***/ }),

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

/***/ 1852:
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

/***/ 801:
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

/***/ 4571:
/*!***************************************!*\
  !*** ./src/components/Menu/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ 7671);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 4914);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/reduce */ 2019);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ 8845);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ 1852);





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
//# sourceMappingURL=src_bootstrap_jsx-webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume-c0d0cf.f63c00cae04ab4dfadfa.js.map