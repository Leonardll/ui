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

/***/ "./components/contact/index.js":
/*!*************************************!*\
  !*** ./components/contact/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sectionHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sectionHeader */ \"./components/sectionHeader/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/root/Projects/crelatorDesign/ui/components/contact/index.js\";\n\n\n\n\nvar inputData = [{\n  id: \"1\",\n  type: \"text\",\n  placeholder: \"Name\",\n  ariaLabel: \"Full Name\"\n}, {\n  id: \"2\",\n  type: \"email\",\n  placeholder: \"Email\",\n  ariaLabel: \"email\"\n}, {\n  id: \"3\",\n  type: \"tel\",\n  placeholder: \"Phone Number\",\n  ariaLabel: \"Phone Number\"\n}, {\n  id: \"4\",\n  type: \"text\",\n  placeholder: \"Message\",\n  ariaLabel: \"Message\"\n}];\nvar subFooterData = [{\n  id: \"location\",\n  title: \"Location\",\n  content: \"London, United Kingdom\"\n}, {\n  id: \"aroundTheWeb\",\n  title: \"Around The Web\",\n  content: \"\"\n}, {\n  id: \"mindset\",\n  title: \"Mindset\",\n  content: \"'Knowledge economy is the only asset in which purchasing power only depends on your attention and time. Idriss Aberkane'\"\n}];\n\nfunction FormItems() {\n  var _this = this;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n    action: \"\",\n    className: \"col-span-1 p-5 mx-auto\",\n    children: inputData.map(function (input) {\n      return input.placeholder === \"Message\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n        className: \" bg-transparent form-textarea placeholder-white border-b-4 border-t-0 border-r-0 border-l-0 border-white w-full text-3xl text-black min-h-[8em] py-3 focus:outline-0  focus:border-transparant focus:ring-transparent  focus:border-slate-300 focus:border-opacity-50\",\n        type: input.type,\n        placeholder: input.placeholder,\n        \"aria-label\": input.ariaLabel\n      }, input.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 21\n      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n        className: \" bg-transparent form-input placeholder-white border-b-4 border-t-0 border-r-0 border-l-0 border-white w-full text-3xl text-white py-3  focus:border-transparant focus:ring-transparent focus:ring-opacity-20 focus:border-slate-300 focus:border-opacity-50\",\n        type: input.type,\n        placeholder: input.placeholder,\n        \"aria-label\": input.ariaLabel\n      }, input.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 21\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 9\n  }, this);\n}\n\n_c = FormItems;\n\nfunction Formbutton() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n    className: \"bg-white w-[5em] text-[#1abc9c] text-xl font-semibold rounded px-4 py-2 m-5\",\n    children: [\"Send\", \" \"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 9\n  }, this);\n}\n\n_c2 = Formbutton;\n\nfunction FormContainer() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"container mx-auto w-full md:w-1/2\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"grid grid-cols-1  place-content-center place-items-center px-3 py-5\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FormItems, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Formbutton, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 9\n  }, this);\n}\n\n_c3 = FormContainer;\n\nfunction SubFooter() {\n  var _this2 = this;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"grid grid-cols-1 mx-auto md:grid-cols-3 w-full p-5 md:p-10 bg-[#2c3e50] place-content-center gap-3\",\n    children: subFooterData.map(function (data) {\n      return data.id === \"aroundTheWeb\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"col-span-1 p-2 md:p-5 \",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n          className: \"text-white text-3xl font-semibold p-3\",\n          children: data.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 25\n        }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"flex flex-col md:flex-row  justify-around 2xl:justify-center items-center m-5\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaLinkedinIn, {\n            className: \"text-white text-3xl rounded-2xl outline outline-4 m-2 2xl:mx-[1/4] h-full py-2 px-3 w-auto\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 29\n          }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaGithub, {\n            className: \"text-white text-3xl  rounded-2xl outline outline-4 py-2 m-2 px-3 h-full w-auto 2xl:mx-[1/4]\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 29\n          }, _this2)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 25\n        }, _this2)]\n      }, data.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 21\n      }, _this2) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"col-span-1 p-2 md:p-5 \",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n          className: \"text-white text-3xl font-semibold p-3\",\n          children: data.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 25\n        }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n          className: \"text-white text-lg w-full inline-block ont-semibold  p-2 md:p-4 m-2\",\n          children: data.content\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 25\n        }, _this2)]\n      }, data.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 21\n      }, _this2);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 96,\n    columnNumber: 9\n  }, this);\n}\n\n_c4 = SubFooter;\n\nfunction Contact() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n    id: \"contact\",\n    className: \"w-full h-full bg-[#1abc9c] \",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"container w-full mx-auto\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_sectionHeader__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        title: \"Contact\",\n        titleColor: \"text-white\",\n        bgColor: \"bg-white\",\n        borderColor: \"border-[#2c3e50]\",\n        textColor: \"text-white\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FormContainer, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SubFooter, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 121,\n    columnNumber: 9\n  }, this);\n}\n\n_c5 = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"FormItems\");\n$RefreshReg$(_c2, \"Formbutton\");\n$RefreshReg$(_c3, \"FormContainer\");\n$RefreshReg$(_c4, \"SubFooter\");\n$RefreshReg$(_c5, \"Contact\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRhY3QvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1LLFNBQVMsR0FBRyxDQUNkO0VBQ0lDLEVBQUUsRUFBRSxHQURSO0VBRUlDLElBQUksRUFBRSxNQUZWO0VBR0lDLFdBQVcsRUFBRSxNQUhqQjtFQUlJQyxTQUFTLEVBQUU7QUFKZixDQURjLEVBT2Q7RUFDSUgsRUFBRSxFQUFFLEdBRFI7RUFFSUMsSUFBSSxFQUFFLE9BRlY7RUFHSUMsV0FBVyxFQUFFLE9BSGpCO0VBSUlDLFNBQVMsRUFBRTtBQUpmLENBUGMsRUFhZDtFQUNJSCxFQUFFLEVBQUUsR0FEUjtFQUVJQyxJQUFJLEVBQUUsS0FGVjtFQUdJQyxXQUFXLEVBQUUsY0FIakI7RUFJSUMsU0FBUyxFQUFFO0FBSmYsQ0FiYyxFQW1CZDtFQUNJSCxFQUFFLEVBQUUsR0FEUjtFQUVJQyxJQUFJLEVBQUUsTUFGVjtFQUdJQyxXQUFXLEVBQUUsU0FIakI7RUFJSUMsU0FBUyxFQUFFO0FBSmYsQ0FuQmMsQ0FBbEI7QUEyQkEsSUFBTUMsYUFBYSxHQUFHLENBQ2xCO0VBQ0lKLEVBQUUsRUFBRSxVQURSO0VBRUlLLEtBQUssRUFBRSxVQUZYO0VBR0lDLE9BQU8sRUFBRTtBQUhiLENBRGtCLEVBTWxCO0VBQ0lOLEVBQUUsRUFBRSxjQURSO0VBRUlLLEtBQUssRUFBRSxnQkFGWDtFQUdJQyxPQUFPLEVBQUU7QUFIYixDQU5rQixFQVdsQjtFQUNJTixFQUFFLEVBQUUsU0FEUjtFQUVJSyxLQUFLLEVBQUUsU0FGWDtFQUdJQyxPQUFPLEVBQ0g7QUFKUixDQVhrQixDQUF0Qjs7QUFtQkEsU0FBU0MsU0FBVCxHQUFxQjtFQUFBOztFQUNqQixvQkFDSTtJQUFNLE1BQU0sRUFBQyxFQUFiO0lBQWdCLFNBQVMsRUFBQyx3QkFBMUI7SUFBQSxVQUNLUixTQUFTLENBQUNTLEdBQVYsQ0FBYyxVQUFDQyxLQUFELEVBQVc7TUFDdEIsT0FBT0EsS0FBSyxDQUFDUCxXQUFOLEtBQXNCLFNBQXRCLGdCQUNIO1FBRUksU0FBUyxFQUFDLHVRQUZkO1FBR0ksSUFBSSxFQUFFTyxLQUFLLENBQUNSLElBSGhCO1FBSUksV0FBVyxFQUFFUSxLQUFLLENBQUNQLFdBSnZCO1FBS0ksY0FBWU8sS0FBSyxDQUFDTjtNQUx0QixHQUNTTSxLQUFLLENBQUNULEVBRGY7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQURHLGdCQVNIO1FBRUksU0FBUyxFQUFDLDZQQUZkO1FBR0ksSUFBSSxFQUFFUyxLQUFLLENBQUNSLElBSGhCO1FBSUksV0FBVyxFQUFFUSxLQUFLLENBQUNQLFdBSnZCO1FBS0ksY0FBWU8sS0FBSyxDQUFDTjtNQUx0QixHQUNTTSxLQUFLLENBQUNULEVBRGY7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQVRKO0lBaUJILENBbEJBO0VBREw7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURKO0FBdUJIOztLQXhCUU87O0FBeUJULFNBQVNHLFVBQVQsR0FBc0I7RUFDbEIsb0JBQ0k7SUFBUSxTQUFTLEVBQUMsNkVBQWxCO0lBQUEsbUJBQ1MsR0FEVDtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFESjtBQUtIOztNQU5RQTs7QUFPVCxTQUFTQyxhQUFULEdBQXlCO0VBQ3JCLG9CQUNJO0lBQUssU0FBUyxFQUFDLG1DQUFmO0lBQUEsdUJBQ0k7TUFBSyxTQUFTLEVBQUMscUVBQWY7TUFBQSx3QkFDSSw4REFBQyxTQUFEO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFESixlQUVJLDhEQUFDLFVBQUQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUZKO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURKO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFESjtBQVFIOztNQVRRQTs7QUFXVCxTQUFTQyxTQUFULEdBQXFCO0VBQUE7O0VBQ2pCLG9CQUNJO0lBQUssU0FBUyxFQUFDLG9HQUFmO0lBQUEsVUFDS1IsYUFBYSxDQUFDSSxHQUFkLENBQWtCLFVBQUNLLElBQUQsRUFBVTtNQUN6QixPQUFPQSxJQUFJLENBQUNiLEVBQUwsS0FBWSxjQUFaLGdCQUNIO1FBQUssU0FBUyxFQUFDLHdCQUFmO1FBQUEsd0JBQ0k7VUFBSSxTQUFTLEVBQUMsdUNBQWQ7VUFBQSxVQUF1RGEsSUFBSSxDQUFDUjtRQUE1RDtVQUFBO1VBQUE7VUFBQTtRQUFBLFVBREosZUFFSTtVQUFLLFNBQVMsRUFBQywrRUFBZjtVQUFBLHdCQUNJLDhEQUFDLHdEQUFEO1lBQWMsU0FBUyxFQUFDO1VBQXhCO1lBQUE7WUFBQTtZQUFBO1VBQUEsVUFESixlQUdJLDhEQUFDLG9EQUFEO1lBQVUsU0FBUyxFQUFDO1VBQXBCO1lBQUE7WUFBQTtZQUFBO1VBQUEsVUFISjtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsVUFGSjtNQUFBLEdBQTZDUSxJQUFJLENBQUNiLEVBQWxEO1FBQUE7UUFBQTtRQUFBO01BQUEsVUFERyxnQkFVSDtRQUFLLFNBQVMsRUFBQyx3QkFBZjtRQUFBLHdCQUNJO1VBQUksU0FBUyxFQUFDLHVDQUFkO1VBQUEsVUFBdURhLElBQUksQ0FBQ1I7UUFBNUQ7VUFBQTtVQUFBO1VBQUE7UUFBQSxVQURKLGVBRUk7VUFBRyxTQUFTLEVBQUMscUVBQWI7VUFBQSxVQUNLUSxJQUFJLENBQUNQO1FBRFY7VUFBQTtVQUFBO1VBQUE7UUFBQSxVQUZKO01BQUEsR0FBNkNPLElBQUksQ0FBQ2IsRUFBbEQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxVQVZKO0lBaUJILENBbEJBO0VBREw7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURKO0FBdUJIOztNQXhCUVk7O0FBeUJULFNBQVNFLE9BQVQsR0FBbUI7RUFDZixvQkFDSTtJQUFTLEVBQUUsRUFBQyxTQUFaO0lBQXNCLFNBQVMsRUFBQyw2QkFBaEM7SUFBQSx3QkFDSTtNQUFLLFNBQVMsRUFBQywwQkFBZjtNQUFBLHVCQUNJLDhEQUFDLHNEQUFEO1FBQ0ksS0FBSyxFQUFFLFNBRFg7UUFFSSxVQUFVLEVBQUUsWUFGaEI7UUFHSSxPQUFPLEVBQUUsVUFIYjtRQUlJLFdBQVcsRUFBRSxrQkFKakI7UUFLSSxTQUFTLEVBQUU7TUFMZjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREo7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURKLGVBVUksOERBQUMsYUFBRDtNQUFBO01BQUE7TUFBQTtJQUFBLFFBVkosZUFXSSw4REFBQyxTQUFEO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFYSjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFESjtBQWVIOztNQWhCUUE7QUFrQlQsK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2luZGV4LmpzPzFhZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcIi4uL3NlY3Rpb25IZWFkZXJcIlxuaW1wb3J0IHsgRmFMaW5rZWRpbkluLCBGYUdpdGh1YiB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiXG5pbXBvcnQgeyBBaUZpbGxMaW5rZWRpbiwgQWlGaWxsR2l0aHViIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCJcblxuY29uc3QgaW5wdXREYXRhID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IFwiMVwiLFxuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiTmFtZVwiLFxuICAgICAgICBhcmlhTGFiZWw6IFwiRnVsbCBOYW1lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiBcIjJcIixcbiAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogXCJFbWFpbFwiLFxuICAgICAgICBhcmlhTGFiZWw6IFwiZW1haWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IFwiM1wiLFxuICAgICAgICB0eXBlOiBcInRlbFwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogXCJQaG9uZSBOdW1iZXJcIixcbiAgICAgICAgYXJpYUxhYmVsOiBcIlBob25lIE51bWJlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogXCI0XCIsXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogXCJNZXNzYWdlXCIsXG4gICAgICAgIGFyaWFMYWJlbDogXCJNZXNzYWdlXCIsXG4gICAgfSxcbl1cblxuY29uc3Qgc3ViRm9vdGVyRGF0YSA9IFtcbiAgICB7XG4gICAgICAgIGlkOiBcImxvY2F0aW9uXCIsXG4gICAgICAgIHRpdGxlOiBcIkxvY2F0aW9uXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiTG9uZG9uLCBVbml0ZWQgS2luZ2RvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogXCJhcm91bmRUaGVXZWJcIixcbiAgICAgICAgdGl0bGU6IFwiQXJvdW5kIFRoZSBXZWJcIixcbiAgICAgICAgY29udGVudDogXCJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IFwibWluZHNldFwiLFxuICAgICAgICB0aXRsZTogXCJNaW5kc2V0XCIsXG4gICAgICAgIGNvbnRlbnQ6XG4gICAgICAgICAgICBcIidLbm93bGVkZ2UgZWNvbm9teSBpcyB0aGUgb25seSBhc3NldCBpbiB3aGljaCBwdXJjaGFzaW5nIHBvd2VyIG9ubHkgZGVwZW5kcyBvbiB5b3VyIGF0dGVudGlvbiBhbmQgdGltZS4gSWRyaXNzIEFiZXJrYW5lJ1wiLFxuICAgIH0sXG5dXG5cbmZ1bmN0aW9uIEZvcm1JdGVtcygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIHAtNSBteC1hdXRvXCI+XG4gICAgICAgICAgICB7aW5wdXREYXRhLm1hcCgoaW5wdXQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQucGxhY2Vob2xkZXIgPT09IFwiTWVzc2FnZVwiID8gKFxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5wdXQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYmctdHJhbnNwYXJlbnQgZm9ybS10ZXh0YXJlYSBwbGFjZWhvbGRlci13aGl0ZSBib3JkZXItYi00IGJvcmRlci10LTAgYm9yZGVyLXItMCBib3JkZXItbC0wIGJvcmRlci13aGl0ZSB3LWZ1bGwgdGV4dC0zeGwgdGV4dC1ibGFjayBtaW4taC1bOGVtXSBweS0zIGZvY3VzOm91dGxpbmUtMCAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyYW50IGZvY3VzOnJpbmctdHJhbnNwYXJlbnQgIGZvY3VzOmJvcmRlci1zbGF0ZS0zMDAgZm9jdXM6Ym9yZGVyLW9wYWNpdHktNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17aW5wdXQudHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpbnB1dC5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2lucHV0LmFyaWFMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5wdXQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYmctdHJhbnNwYXJlbnQgZm9ybS1pbnB1dCBwbGFjZWhvbGRlci13aGl0ZSBib3JkZXItYi00IGJvcmRlci10LTAgYm9yZGVyLXItMCBib3JkZXItbC0wIGJvcmRlci13aGl0ZSB3LWZ1bGwgdGV4dC0zeGwgdGV4dC13aGl0ZSBweS0zICBmb2N1czpib3JkZXItdHJhbnNwYXJhbnQgZm9jdXM6cmluZy10cmFuc3BhcmVudCBmb2N1czpyaW5nLW9wYWNpdHktMjAgZm9jdXM6Ym9yZGVyLXNsYXRlLTMwMCBmb2N1czpib3JkZXItb3BhY2l0eS01MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtpbnB1dC50eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2lucHV0LnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aW5wdXQuYXJpYUxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuZnVuY3Rpb24gRm9ybWJ1dHRvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIHctWzVlbV0gdGV4dC1bIzFhYmM5Y10gdGV4dC14bCBmb250LXNlbWlib2xkIHJvdW5kZWQgcHgtNCBweS0yIG0tNVwiPlxuICAgICAgICAgICAgU2VuZHtcIiBcIn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgKVxufVxuZnVuY3Rpb24gRm9ybUNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHctZnVsbCBtZDp3LTEvMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xICBwbGFjZS1jb250ZW50LWNlbnRlciBwbGFjZS1pdGVtcy1jZW50ZXIgcHgtMyBweS01XCI+XG4gICAgICAgICAgICAgICAgPEZvcm1JdGVtcyAvPlxuICAgICAgICAgICAgICAgIDxGb3JtYnV0dG9uIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTdWJGb290ZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG14LWF1dG8gbWQ6Z3JpZC1jb2xzLTMgdy1mdWxsIHAtNSBtZDpwLTEwIGJnLVsjMmMzZTUwXSBwbGFjZS1jb250ZW50LWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAge3N1YkZvb3RlckRhdGEubWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuaWQgPT09IFwiYXJvdW5kVGhlV2ViXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBwLTIgbWQ6cC01IFwiIGtleT17ZGF0YS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTN4bCBmb250LXNlbWlib2xkIHAtM1wiPntkYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgIGp1c3RpZnktYXJvdW5kIDJ4bDpqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbS01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhTGlua2VkaW5JbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtM3hsIHJvdW5kZWQtMnhsIG91dGxpbmUgb3V0bGluZS00IG0tMiAyeGw6bXgtWzEvNF0gaC1mdWxsIHB5LTIgcHgtMyB3LWF1dG9cIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhR2l0aHViIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0zeGwgIHJvdW5kZWQtMnhsIG91dGxpbmUgb3V0bGluZS00IHB5LTIgbS0yIHB4LTMgaC1mdWxsIHctYXV0byAyeGw6bXgtWzEvNF1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBwLTIgbWQ6cC01IFwiIGtleT17ZGF0YS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTN4bCBmb250LXNlbWlib2xkIHAtM1wiPntkYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtbGcgdy1mdWxsIGlubGluZS1ibG9jayBvbnQtc2VtaWJvbGQgIHAtMiBtZDpwLTQgbS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJjb250YWN0XCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBiZy1bIzFhYmM5Y10gXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB3LWZ1bGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIkNvbnRhY3RcIn1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGVDb2xvcj17XCJ0ZXh0LXdoaXRlXCJ9XG4gICAgICAgICAgICAgICAgICAgIGJnQ29sb3I9e1wiYmctd2hpdGVcIn1cbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9e1wiYm9yZGVyLVsjMmMzZTUwXVwifVxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9e1widGV4dC13aGl0ZVwifVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxGb3JtQ29udGFpbmVyIC8+XG4gICAgICAgICAgICA8U3ViRm9vdGVyIC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RcbiJdLCJuYW1lcyI6WyJTZWN0aW9uSGVhZGVyIiwiRmFMaW5rZWRpbkluIiwiRmFHaXRodWIiLCJBaUZpbGxMaW5rZWRpbiIsIkFpRmlsbEdpdGh1YiIsImlucHV0RGF0YSIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYXJpYUxhYmVsIiwic3ViRm9vdGVyRGF0YSIsInRpdGxlIiwiY29udGVudCIsIkZvcm1JdGVtcyIsIm1hcCIsImlucHV0IiwiRm9ybWJ1dHRvbiIsIkZvcm1Db250YWluZXIiLCJTdWJGb290ZXIiLCJkYXRhIiwiQ29udGFjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/contact/index.js\n"));

/***/ })

});