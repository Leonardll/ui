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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header/index.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ \"./components/footer/index.js\");\n/* harmony import */ var _components_stackSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/stackSection */ \"./components/stackSection/index.js\");\n/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/about */ \"./components/about/index.js\");\n/* harmony import */ var _components_portfolio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/portfolio */ \"./components/portfolio/index.js\");\n/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/contact */ \"./components/contact/index.js\");\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../loader */ \"./loader.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\nvar _jsxFileName = \"/root/Projects/crelatorDesign/ui/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n // import clientPromise from \"../lib/mongodb\"\n\n\n\n\n\nvar fetcher = function fetcher(url) {\n  return fetch(url).then(function (res) {\n    return res.json();\n  });\n};\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      stackdata = _useState[0],\n      setStackdata = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      isLoading = _useState2[0],\n      setIsLoading = _useState2[1];\n\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(\"/api/hello\", fetcher),\n      data = _useSWR.data,\n      error = _useSWR.error; // useEffect(() => {\n  //     if (stackdata) setIsLoading(true)\n  //     // fetch(\"/api/hello\")\n  //     //     .then((res) => res.json())\n  //     //     .then((data) => {\n  //     setStackdata(data)\n  //     setIsLoading(false)\n  //     // })\n  // }, [])\n  //console.log(stackdata)\n  //isConnected = isConnected\n  //? console.log(\"Connected to MongoDB\", stackdata)\n  //: console.log(\"Not Connected to MongoDB\")\n\n\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 23\n  }, this);\n  if (!data) return null;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n    className: \"flex flex-1 min-h-screen  flex-col items-center justify-center scroll-smooth\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"title\", {\n        children: \"Create Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"meta\", {\n        name: \"CreLatorDesign\",\n        content: \"Generated by create next app\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      loader: _loader__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"main\", {\n      className: \"flex w-full flex-1 flex-col items-center justify-center text-center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_stackSection__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        stackData: stackdata,\n        loader: _loader__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_about__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_portfolio__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        loader: _loader__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_contact__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 9\n  }, this);\n} //export async function getServerSideProps(context) {\n//try {\n// await clientPromise\n// `await clientPromise` will use the default database passed in the MONGODB_URI\n// However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:\n//\n//const client = await clientPromise\n//const db = client.db(\"my_Database\")\n//const collection = await db.collection(\"test\").find({}).toArray()\n//const newCollection = await db.createCollection(\"test\")\n//const data = await collection\n//console.log(db.collection(\"test\"))\n//const newData = await db.collection(\"test\").insertOne({ cardData })\n//\n// Then you can execute queries against your database like so:\n//    }\n//}\n\n_s(Home, \"98jZ1d7D8Ll0n86aQ94LcVJ+e7w=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_10__[\"default\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7OztBQUVBLElBQU1ZLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQ7RUFBQSxPQUFTQyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUFXRSxJQUFYLENBQWdCLFVBQUNDLEdBQUQ7SUFBQSxPQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtFQUFBLENBQWhCLENBQVQ7QUFBQSxDQUFoQjs7QUFDZSxTQUFTQyxJQUFULEdBQWdCO0VBQUE7O0VBQzNCLGdCQUFrQ2pCLCtDQUFRLENBQUMsSUFBRCxDQUExQztFQUFBLElBQU9rQixTQUFQO0VBQUEsSUFBa0JDLFlBQWxCOztFQUNBLGlCQUFrQ25CLCtDQUFRLENBQUMsSUFBRCxDQUExQztFQUFBLElBQU9vQixTQUFQO0VBQUEsSUFBa0JDLFlBQWxCOztFQUVBLGNBQXdCWCxnREFBTSxDQUFDLFlBQUQsRUFBZUMsT0FBZixDQUE5QjtFQUFBLElBQVFXLElBQVIsV0FBUUEsSUFBUjtFQUFBLElBQWNDLEtBQWQsV0FBY0EsS0FBZCxDQUoyQixDQUszQjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTs7O0VBQ0EsSUFBSUEsS0FBSixFQUFXLG9CQUFPO0lBQUE7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBQVA7RUFDWCxJQUFJLENBQUNELElBQUwsRUFBVyxPQUFPLElBQVA7RUFFWCxvQkFDSTtJQUFLLFNBQVMsRUFBQyw4RUFBZjtJQUFBLHdCQUNJLCtEQUFDLGtEQUFEO01BQUEsd0JBQ0k7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFESixlQUVJO1FBQU0sSUFBSSxFQUFDLGdCQUFYO1FBQTRCLE9BQU8sRUFBQztNQUFwQztRQUFBO1FBQUE7UUFBQTtNQUFBLFFBRkosZUFHSTtRQUFNLEdBQUcsRUFBQyxNQUFWO1FBQWlCLElBQUksRUFBQztNQUF0QjtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBSEo7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREosZUFNSSwrREFBQywwREFBRDtNQUFBO01BQUE7TUFBQTtJQUFBLFFBTkosZUFPSSwrREFBQywwREFBRDtNQUFVLE1BQU0sRUFBRWIsK0NBQWFBO0lBQS9CO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFQSixlQVNJO01BQU0sU0FBUyxFQUFDLHFFQUFoQjtNQUFBLHdCQUNJLCtEQUFDLGdFQUFEO1FBQWMsU0FBUyxFQUFFUyxTQUF6QjtRQUFvQyxNQUFNLEVBQUVULCtDQUFhQTtNQUF6RDtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREosZUFFSSwrREFBQyx5REFBRDtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBRkosZUFHSSwrREFBQyw2REFBRDtRQUFXLE1BQU0sRUFBRUEsK0NBQWFBO01BQWhDO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFISixlQUlJLCtEQUFDLDJEQUFEO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFKSjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFUSixlQWdCSSwrREFBQywwREFBRDtNQUFBO01BQUE7TUFBQTtJQUFBLFFBaEJKO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURKO0FBb0JILEVBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7R0E5RHdCUTtVQUlJUDs7O0tBSkpPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCJcbmltcG9ydCBNYXN0SGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIlxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXJcIlxuaW1wb3J0IFN0YWNrU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9zdGFja1NlY3Rpb25cIlxuaW1wb3J0IEFib3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2Fib3V0XCJcbmltcG9ydCBQb3J0Zm9saW8gZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9ydGZvbGlvXCJcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRhY3RcIlxuLy8gaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uL2xpYi9tb25nb2RiXCJcbmltcG9ydCBteUltYWdlTG9hZGVyIGZyb20gXCIuLi9sb2FkZXJcIlxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCJcblxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBbc3RhY2tkYXRhLCBzZXRTdGFja2RhdGFdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcIi9hcGkvaGVsbG9cIiwgZmV0Y2hlcilcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBpZiAoc3RhY2tkYXRhKSBzZXRJc0xvYWRpbmcodHJ1ZSlcbiAgICAvLyAgICAgLy8gZmV0Y2goXCIvYXBpL2hlbGxvXCIpXG4gICAgLy8gICAgIC8vICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC8vICAgICAvLyAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAvLyAgICAgc2V0U3RhY2tkYXRhKGRhdGEpXG4gICAgLy8gICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAvLyAgICAgLy8gfSlcbiAgICAvLyB9LCBbXSlcblxuICAgIC8vY29uc29sZS5sb2coc3RhY2tkYXRhKVxuICAgIC8vaXNDb25uZWN0ZWQgPSBpc0Nvbm5lY3RlZFxuICAgIC8vPyBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byBNb25nb0RCXCIsIHN0YWNrZGF0YSlcbiAgICAvLzogY29uc29sZS5sb2coXCJOb3QgQ29ubmVjdGVkIHRvIE1vbmdvREJcIilcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICBpZiAoIWRhdGEpIHJldHVybiBudWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIG1pbi1oLXNjcmVlbiAgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNjcm9sbC1zbW9vdGhcIj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJDcmVMYXRvckRlc2lnblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgICAgICA8TWFzdEhlYWQgbG9hZGVyPXtteUltYWdlTG9hZGVyfSAvPlxuXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LTEgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPFN0YWNrU2VjdGlvbiBzdGFja0RhdGE9e3N0YWNrZGF0YX0gbG9hZGVyPXtteUltYWdlTG9hZGVyfSAvPlxuICAgICAgICAgICAgICAgIDxBYm91dCAvPlxuICAgICAgICAgICAgICAgIDxQb3J0Zm9saW8gbG9hZGVyPXtteUltYWdlTG9hZGVyfSAvPlxuICAgICAgICAgICAgICAgIDxDb250YWN0IC8+XG4gICAgICAgICAgICA8L21haW4+XG5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG4vL2V4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuLy90cnkge1xuLy8gYXdhaXQgY2xpZW50UHJvbWlzZVxuLy8gYGF3YWl0IGNsaWVudFByb21pc2VgIHdpbGwgdXNlIHRoZSBkZWZhdWx0IGRhdGFiYXNlIHBhc3NlZCBpbiB0aGUgTU9OR09EQl9VUklcbi8vIEhvd2V2ZXIgeW91IGNhbiB1c2UgYW5vdGhlciBkYXRhYmFzZSAoZS5nLiBteURhdGFiYXNlKSBieSByZXBsYWNpbmcgdGhlIGBhd2FpdCBjbGllbnRQcm9taXNlYCB3aXRoIHRoZSBmb2xsb3dpbmcgY29kZTpcbi8vXG4vL2NvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2Vcbi8vY29uc3QgZGIgPSBjbGllbnQuZGIoXCJteV9EYXRhYmFzZVwiKVxuXG4vL2NvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidGVzdFwiKS5maW5kKHt9KS50b0FycmF5KClcbi8vY29uc3QgbmV3Q29sbGVjdGlvbiA9IGF3YWl0IGRiLmNyZWF0ZUNvbGxlY3Rpb24oXCJ0ZXN0XCIpXG4vL2NvbnN0IGRhdGEgPSBhd2FpdCBjb2xsZWN0aW9uXG4vL2NvbnNvbGUubG9nKGRiLmNvbGxlY3Rpb24oXCJ0ZXN0XCIpKVxuLy9jb25zdCBuZXdEYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbihcInRlc3RcIikuaW5zZXJ0T25lKHsgY2FyZERhdGEgfSlcbi8vXG4vLyBUaGVuIHlvdSBjYW4gZXhlY3V0ZSBxdWVyaWVzIGFnYWluc3QgeW91ciBkYXRhYmFzZSBsaWtlIHNvOlxuXG4vLyAgICB9XG4vL31cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOYXZCYXIiLCJNYXN0SGVhZCIsIkZvb3RlciIsIlN0YWNrU2VjdGlvbiIsIkFib3V0IiwiUG9ydGZvbGlvIiwiQ29udGFjdCIsIm15SW1hZ2VMb2FkZXIiLCJ1c2VTV1IiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIkhvbWUiLCJzdGFja2RhdGEiLCJzZXRTdGFja2RhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJkYXRhIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});