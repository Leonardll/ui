"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n\nif (false) {}\n\nconst uri = \"mongodb+srv://leo:y4riYeM7Mv7KKYz@cluster0.oqmmoyw.mongodb.net/retryWrites=truew=majority\";\nconst options = {};\nlet client;\nlet clientPromise = mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient;\n\nif (true) {\n  // In development mode, use a global variable so that the value\n  // is preserved across module reloads caused by HMR (Hot Module Replacement).\n  if (!global._mongoClientPromise) {\n    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n    global._mongoClientPromise = client.connect();\n  }\n\n  clientPromise = global._mongoClientPromise;\n} else {} // Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxJQUFJLEtBQUosRUFBMEMsRUFFekM7O0FBRUQsTUFBTUssR0FBRyxHQUFHSiwyRkFBWjtBQUNBLE1BQU1LLE9BQU8sR0FBRyxFQUFoQjtBQUVBLElBQUlDLE1BQUo7QUFDQSxJQUFJQyxhQUFhLEdBQUdSLGdEQUFwQjs7QUFFQSxJQUFJLE1BQXdDO0VBQ3hDO0VBQ0E7RUFDQSxJQUFJLENBQUNTLE1BQU0sQ0FBQ0MsbUJBQVosRUFBaUM7SUFDN0JILE1BQU0sR0FBRyxJQUFJUCxnREFBSixDQUFnQkssR0FBaEIsRUFBcUJDLE9BQXJCLENBQVQ7SUFDQUcsTUFBTSxDQUFDQyxtQkFBUCxHQUE2QkgsTUFBTSxDQUFDSSxPQUFQLEVBQTdCO0VBQ0g7O0VBQ0RILGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxtQkFBdkI7QUFDSCxDQVJELE1BUU8sR0FNUDtBQUNBOzs7QUFDQSxpRUFBZUYsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL2xpYi9tb25nb2RiLmpzP2Q5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiXG5cbmlmICghcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09EQl9VUkkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQvTWlzc2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZTogXCJNT05HT0RCX1VSSVwiJylcbn1cblxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09EQl9VUklcbmNvbnN0IG9wdGlvbnMgPSB7fVxuXG5sZXQgY2xpZW50XG5sZXQgY2xpZW50UHJvbWlzZSA9IE1vbmdvQ2xpZW50XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXG4gICAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cbiAgICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XG4gICAgICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXG4gICAgICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxuICAgIH1cbiAgICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2Vcbn0gZWxzZSB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxuICAgIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXG59XG5cbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXG4vLyBzZXBhcmF0ZSBtb2R1bGUsIHRoZSBjbGllbnQgY2FuIGJlIHNoYXJlZCBhY3Jvc3MgZnVuY3Rpb25zLlxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZVxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX01PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/hello.js":
/*!****************************!*\
  !*** ./pages/api/hello.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(req, res) {\n  try {\n    const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const db = client.db(\"my_Database\");\n    const collection = await db.collection(\"test\");\n    const collection2 = await db.collection(\"portfolio\");\n    const data = await collection.find({}).limit(20).toArray();\n    const data2 = await collection2.find({}).limit(20).toArray();\n    return res.status(200).json({\n      data,\n      data2\n    });\n  } catch (e) {\n    res.status(500).json({\n      message: e.message\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGVsbG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ2UsZUFBZUMsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0VBQzVDLElBQUk7SUFDQSxNQUFNQyxNQUFNLEdBQUcsTUFBTUosb0RBQXJCO0lBQ0EsTUFBTUssRUFBRSxHQUFHRCxNQUFNLENBQUNDLEVBQVAsQ0FBVSxhQUFWLENBQVg7SUFFQSxNQUFNQyxVQUFVLEdBQUcsTUFBTUQsRUFBRSxDQUFDQyxVQUFILENBQWMsTUFBZCxDQUF6QjtJQUNBLE1BQU1DLFdBQVcsR0FBRyxNQUFNRixFQUFFLENBQUNDLFVBQUgsQ0FBYyxXQUFkLENBQTFCO0lBQ0EsTUFBTUUsSUFBSSxHQUFHLE1BQU1GLFVBQVUsQ0FBQ0csSUFBWCxDQUFnQixFQUFoQixFQUFvQkMsS0FBcEIsQ0FBMEIsRUFBMUIsRUFBOEJDLE9BQTlCLEVBQW5CO0lBQ0EsTUFBTUMsS0FBSyxHQUFHLE1BQU1MLFdBQVcsQ0FBQ0UsSUFBWixDQUFpQixFQUFqQixFQUFxQkMsS0FBckIsQ0FBMkIsRUFBM0IsRUFBK0JDLE9BQS9CLEVBQXBCO0lBRUEsT0FBT1IsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7TUFBRU4sSUFBRjtNQUFRSTtJQUFSLENBQXJCLENBQVA7RUFDSCxDQVZELENBVUUsT0FBT0csQ0FBUCxFQUFVO0lBQ1JaLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO01BQUVFLE9BQU8sRUFBRUQsQ0FBQyxDQUFDQztJQUFiLENBQXJCO0VBQ0g7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL3BhZ2VzL2FwaS9oZWxsby5qcz8xZjc0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vbGliL21vbmdvZGJcIlxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2VcbiAgICAgICAgY29uc3QgZGIgPSBjbGllbnQuZGIoXCJteV9EYXRhYmFzZVwiKVxuXG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidGVzdFwiKVxuICAgICAgICBjb25zdCBjb2xsZWN0aW9uMiA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJwb3J0Zm9saW9cIilcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZCh7fSkubGltaXQoMjApLnRvQXJyYXkoKVxuICAgICAgICBjb25zdCBkYXRhMiA9IGF3YWl0IGNvbGxlY3Rpb24yLmZpbmQoe30pLmxpbWl0KDIwKS50b0FycmF5KClcblxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhLCBkYXRhMiB9KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlLm1lc3NhZ2UgfSlcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjbGllbnQiLCJkYiIsImNvbGxlY3Rpb24iLCJjb2xsZWN0aW9uMiIsImRhdGEiLCJmaW5kIiwibGltaXQiLCJ0b0FycmF5IiwiZGF0YTIiLCJzdGF0dXMiLCJqc29uIiwiZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/hello.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/hello.js"));
module.exports = __webpack_exports__;

})();