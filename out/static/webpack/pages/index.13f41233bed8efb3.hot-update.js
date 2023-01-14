"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header/index.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ \"./components/footer/index.js\");\n/* harmony import */ var _components_stackSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/stackSection */ \"./components/stackSection/index.js\");\n/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/about */ \"./components/about/index.js\");\n/* harmony import */ var _components_portfolio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/portfolio */ \"./components/portfolio/index.js\");\n/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/contact */ \"./components/contact/index.js\");\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../loader */ \"./loader.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\nvar _jsxFileName = \"/root/Projects/crelatorDesign/ui/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n // import clientPromise from \"../lib/mongodb\"\n\n\n\n\n\nvar fetcher = function fetcher(url) {\n  return fetch(url).then(function (res) {\n    return res.json();\n  });\n};\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      stackdata = _useState[0],\n      setStackdata = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      isLoading = _useState2[0],\n      setIsLoading = _useState2[1];\n\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(\"/api/hello\", fetcher),\n      data = _useSWR.data,\n      error = _useSWR.error;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (stackdata) setIsLoading(true); //     // fetch(\"/api/hello\")\n    //     //     .then((res) => res.json())\n    //     //     .then((data) => {\n\n    setStackdata(data);\n    setIsLoading(false); //     // })\n  }, []); //console.log(stackdata)\n  //isConnected = isConnected\n  //? console.log(\"Connected to MongoDB\", stackdata)\n  //: console.log(\"Not Connected to MongoDB\")\n\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 23\n  }, this);\n  if (!data) return null;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n    className: \"flex flex-1 min-h-screen  flex-col items-center justify-center scroll-smooth\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"title\", {\n        children: \"Create Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"meta\", {\n        name: \"CreLatorDesign\",\n        content: \"Generated by create next app\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      loader: _loader__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"main\", {\n      className: \"flex w-full flex-1 flex-col items-center justify-center text-center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_stackSection__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        stackData: stackdata,\n        loader: _loader__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_about__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_portfolio__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        loader: _loader__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_contact__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 9\n  }, this);\n} //export async function getServerSideProps(context) {\n//try {\n// await clientPromise\n// `await clientPromise` will use the default database passed in the MONGODB_URI\n// However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:\n//\n//const client = await clientPromise\n//const db = client.db(\"my_Database\")\n//const collection = await db.collection(\"test\").find({}).toArray()\n//const newCollection = await db.createCollection(\"test\")\n//const data = await collection\n//console.log(db.collection(\"test\"))\n//const newData = await db.collection(\"test\").insertOne({ cardData })\n//\n// Then you can execute queries against your database like so:\n//    }\n//}\n\n_s(Home, \"E9xRtZWVzQaCsO5p3mc/RLgw2Sc=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_10__[\"default\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7OztBQUVBLElBQU1ZLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQ7RUFBQSxPQUFTQyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUFXRSxJQUFYLENBQWdCLFVBQUNDLEdBQUQ7SUFBQSxPQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtFQUFBLENBQWhCLENBQVQ7QUFBQSxDQUFoQjs7QUFDZSxTQUFTQyxJQUFULEdBQWdCO0VBQUE7O0VBQzNCLGdCQUFrQ2pCLCtDQUFRLENBQUMsSUFBRCxDQUExQztFQUFBLElBQU9rQixTQUFQO0VBQUEsSUFBa0JDLFlBQWxCOztFQUNBLGlCQUFrQ25CLCtDQUFRLENBQUMsSUFBRCxDQUExQztFQUFBLElBQU9vQixTQUFQO0VBQUEsSUFBa0JDLFlBQWxCOztFQUVBLGNBQXdCWCxnREFBTSxDQUFDLFlBQUQsRUFBZUMsT0FBZixDQUE5QjtFQUFBLElBQVFXLElBQVIsV0FBUUEsSUFBUjtFQUFBLElBQWNDLEtBQWQsV0FBY0EsS0FBZDs7RUFDQXRCLGdEQUFTLENBQUMsWUFBTTtJQUNaLElBQUlpQixTQUFKLEVBQWVHLFlBQVksQ0FBQyxJQUFELENBQVosQ0FESCxDQUVaO0lBQ0E7SUFDQTs7SUFDQUYsWUFBWSxDQUFDRyxJQUFELENBQVo7SUFDQUQsWUFBWSxDQUFDLEtBQUQsQ0FBWixDQU5ZLENBT1o7RUFDSCxDQVJRLEVBUU4sRUFSTSxDQUFULENBTDJCLENBZTNCO0VBQ0E7RUFDQTtFQUNBOztFQUNBLElBQUlFLEtBQUosRUFBVyxvQkFBTztJQUFBO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQUFQO0VBQ1gsSUFBSSxDQUFDRCxJQUFMLEVBQVcsT0FBTyxJQUFQO0VBRVgsb0JBQ0k7SUFBSyxTQUFTLEVBQUMsOEVBQWY7SUFBQSx3QkFDSSwrREFBQyxrREFBRDtNQUFBLHdCQUNJO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREosZUFFSTtRQUFNLElBQUksRUFBQyxnQkFBWDtRQUE0QixPQUFPLEVBQUM7TUFBcEM7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUZKLGVBR0k7UUFBTSxHQUFHLEVBQUMsTUFBVjtRQUFpQixJQUFJLEVBQUM7TUFBdEI7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUhKO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURKLGVBTUksK0RBQUMsMERBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxRQU5KLGVBT0ksK0RBQUMsMERBQUQ7TUFBVSxNQUFNLEVBQUViLCtDQUFhQTtJQUEvQjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBUEosZUFTSTtNQUFNLFNBQVMsRUFBQyxxRUFBaEI7TUFBQSx3QkFDSSwrREFBQyxnRUFBRDtRQUFjLFNBQVMsRUFBRVMsU0FBekI7UUFBb0MsTUFBTSxFQUFFVCwrQ0FBYUE7TUFBekQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURKLGVBRUksK0RBQUMseURBQUQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUZKLGVBR0ksK0RBQUMsNkRBQUQ7UUFBVyxNQUFNLEVBQUVBLCtDQUFhQTtNQUFoQztRQUFBO1FBQUE7UUFBQTtNQUFBLFFBSEosZUFJSSwrREFBQywyREFBRDtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBSko7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBVEosZUFnQkksK0RBQUMsMERBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxRQWhCSjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFESjtBQW9CSCxFQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0dBOUR3QlE7VUFJSVA7OztLQUpKTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiXG5pbXBvcnQgTWFzdEhlYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCJcbmltcG9ydCBTdGFja1NlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvc3RhY2tTZWN0aW9uXCJcbmltcG9ydCBBYm91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9hYm91dFwiXG5pbXBvcnQgUG9ydGZvbGlvIGZyb20gXCIuLi9jb21wb25lbnRzL3BvcnRmb2xpb1wiXG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250YWN0XCJcbi8vIGltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi9saWIvbW9uZ29kYlwiXG5pbXBvcnQgbXlJbWFnZUxvYWRlciBmcm9tIFwiLi4vbG9hZGVyXCJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiXG5cbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW3N0YWNrZGF0YSwgc2V0U3RhY2tkYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXCIvYXBpL2hlbGxvXCIsIGZldGNoZXIpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHN0YWNrZGF0YSkgc2V0SXNMb2FkaW5nKHRydWUpXG4gICAgICAgIC8vICAgICAvLyBmZXRjaChcIi9hcGkvaGVsbG9cIilcbiAgICAgICAgLy8gICAgIC8vICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAvLyAgICAgLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldFN0YWNrZGF0YShkYXRhKVxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgICAgIC8vICAgICAvLyB9KVxuICAgIH0sIFtdKVxuXG4gICAgLy9jb25zb2xlLmxvZyhzdGFja2RhdGEpXG4gICAgLy9pc0Nvbm5lY3RlZCA9IGlzQ29ubmVjdGVkXG4gICAgLy8/IGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIE1vbmdvREJcIiwgc3RhY2tkYXRhKVxuICAgIC8vOiBjb25zb2xlLmxvZyhcIk5vdCBDb25uZWN0ZWQgdG8gTW9uZ29EQlwiKVxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgIGlmICghZGF0YSkgcmV0dXJuIG51bGxcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgbWluLWgtc2NyZWVuICBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2Nyb2xsLXNtb290aFwiPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIkNyZUxhdG9yRGVzaWduXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxOYXZCYXIgLz5cbiAgICAgICAgICAgIDxNYXN0SGVhZCBsb2FkZXI9e215SW1hZ2VMb2FkZXJ9IC8+XG5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGZsZXgtMSBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8U3RhY2tTZWN0aW9uIHN0YWNrRGF0YT17c3RhY2tkYXRhfSBsb2FkZXI9e215SW1hZ2VMb2FkZXJ9IC8+XG4gICAgICAgICAgICAgICAgPEFib3V0IC8+XG4gICAgICAgICAgICAgICAgPFBvcnRmb2xpbyBsb2FkZXI9e215SW1hZ2VMb2FkZXJ9IC8+XG4gICAgICAgICAgICAgICAgPENvbnRhY3QgLz5cbiAgICAgICAgICAgIDwvbWFpbj5cblxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbi8vZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4vL3RyeSB7XG4vLyBhd2FpdCBjbGllbnRQcm9taXNlXG4vLyBgYXdhaXQgY2xpZW50UHJvbWlzZWAgd2lsbCB1c2UgdGhlIGRlZmF1bHQgZGF0YWJhc2UgcGFzc2VkIGluIHRoZSBNT05HT0RCX1VSSVxuLy8gSG93ZXZlciB5b3UgY2FuIHVzZSBhbm90aGVyIGRhdGFiYXNlIChlLmcuIG15RGF0YWJhc2UpIGJ5IHJlcGxhY2luZyB0aGUgYGF3YWl0IGNsaWVudFByb21pc2VgIHdpdGggdGhlIGZvbGxvd2luZyBjb2RlOlxuLy9cbi8vY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZVxuLy9jb25zdCBkYiA9IGNsaWVudC5kYihcIm15X0RhdGFiYXNlXCIpXG5cbi8vY29uc3QgY29sbGVjdGlvbiA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ0ZXN0XCIpLmZpbmQoe30pLnRvQXJyYXkoKVxuLy9jb25zdCBuZXdDb2xsZWN0aW9uID0gYXdhaXQgZGIuY3JlYXRlQ29sbGVjdGlvbihcInRlc3RcIilcbi8vY29uc3QgZGF0YSA9IGF3YWl0IGNvbGxlY3Rpb25cbi8vY29uc29sZS5sb2coZGIuY29sbGVjdGlvbihcInRlc3RcIikpXG4vL2NvbnN0IG5ld0RhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidGVzdFwiKS5pbnNlcnRPbmUoeyBjYXJkRGF0YSB9KVxuLy9cbi8vIFRoZW4geW91IGNhbiBleGVjdXRlIHF1ZXJpZXMgYWdhaW5zdCB5b3VyIGRhdGFiYXNlIGxpa2Ugc286XG5cbi8vICAgIH1cbi8vfVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdkJhciIsIk1hc3RIZWFkIiwiRm9vdGVyIiwiU3RhY2tTZWN0aW9uIiwiQWJvdXQiLCJQb3J0Zm9saW8iLCJDb250YWN0IiwibXlJbWFnZUxvYWRlciIsInVzZVNXUiIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiSG9tZSIsInN0YWNrZGF0YSIsInNldFN0YWNrZGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImRhdGEiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});