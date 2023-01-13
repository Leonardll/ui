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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n\nif (false) {}\n\nconst uri = \"mongodb+srv://leo:y4riYeM7Mv7KKYz@cluster0.oqmmoyw.mongodb.net/retryWrites=truew=majority\";\nconst options = {};\nlet client;\nlet clientPromise = mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient;\n\nif (true) {\n  // In development mode, use a global variable so that the value\n  // is preserved across module reloads caused by HMR (Hot Module Replacement).\n  if (!global._mongoClientPromise) {\n    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n    global._mongoClientPromise = client.connect(); // const dbName = \"websiteData\"\n    // async function uploadData() {\n    //     const db = client.db(dbName)\n    //     const col = db.collection(\"navbarData\")\n    //     const data = await collection.find({}).limit(20).toArray()\n    //     console.log(data)\n    // }\n    // upload data to mongodb\n  }\n\n  clientPromise = global._mongoClientPromise;\n} else {} // Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxJQUFJLEtBQUosRUFBMEMsRUFFekM7O0FBRUQsTUFBTUssR0FBRyxHQUFHSiwyRkFBWjtBQUNBLE1BQU1LLE9BQU8sR0FBRyxFQUFoQjtBQUVBLElBQUlDLE1BQUo7QUFDQSxJQUFJQyxhQUFhLEdBQUdSLGdEQUFwQjs7QUFFQSxJQUFJLE1BQXdDO0VBQ3hDO0VBQ0E7RUFDQSxJQUFJLENBQUNTLE1BQU0sQ0FBQ0MsbUJBQVosRUFBaUM7SUFDN0JILE1BQU0sR0FBRyxJQUFJUCxnREFBSixDQUFnQkssR0FBaEIsRUFBcUJDLE9BQXJCLENBQVQ7SUFDQUcsTUFBTSxDQUFDQyxtQkFBUCxHQUE2QkgsTUFBTSxDQUFDSSxPQUFQLEVBQTdCLENBRjZCLENBRzdCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFDSDs7RUFDREgsYUFBYSxHQUFHQyxNQUFNLENBQUNDLG1CQUF2QjtBQUNILENBaEJELE1BZ0JPLEdBTVA7QUFDQTs7O0FBQ0EsaUVBQWVGLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9saWIvbW9uZ29kYi5qcz9kOTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIlxuXG5pZiAoIXByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPREJfVVJJKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkL01pc3NpbmcgZW52aXJvbm1lbnQgdmFyaWFibGU6IFwiTU9OR09EQl9VUklcIicpXG59XG5cbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPREJfVVJJXG5jb25zdCBvcHRpb25zID0ge31cblxubGV0IGNsaWVudFxubGV0IGNsaWVudFByb21pc2UgPSBNb25nb0NsaWVudFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB2YWx1ZVxuICAgIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXG4gICAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xuICAgICAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxuICAgICAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcbiAgICAgICAgLy8gY29uc3QgZGJOYW1lID0gXCJ3ZWJzaXRlRGF0YVwiXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9uIHVwbG9hZERhdGEoKSB7XG4gICAgICAgIC8vICAgICBjb25zdCBkYiA9IGNsaWVudC5kYihkYk5hbWUpXG4gICAgICAgIC8vICAgICBjb25zdCBjb2wgPSBkYi5jb2xsZWN0aW9uKFwibmF2YmFyRGF0YVwiKVxuICAgICAgICAvLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZCh7fSkubGltaXQoMjApLnRvQXJyYXkoKVxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB1cGxvYWQgZGF0YSB0byBtb25nb2RiXG4gICAgfVxuICAgIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZVxufSBlbHNlIHtcbiAgICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXG4gICAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcbn1cblxuLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTU9OR09EQl9VUkkiLCJFcnJvciIsInVyaSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/hello.js":
/*!****************************!*\
  !*** ./pages/api/hello.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(req, res) {\n  try {\n    const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const db = client.db(\"my_Database\");\n    const collection = await db.collection(\"test\");\n    const data = await collection.find({}).limit(20).toArray(); //console.log(data)\n\n    res.status(200).json({\n      data: data\n    });\n  } catch (e) {\n    res.status(500).json({\n      message: e.message\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGVsbG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ2UsZUFBZUMsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0VBQzVDLElBQUk7SUFDQSxNQUFNQyxNQUFNLEdBQUcsTUFBTUosb0RBQXJCO0lBQ0EsTUFBTUssRUFBRSxHQUFHRCxNQUFNLENBQUNDLEVBQVAsQ0FBVSxhQUFWLENBQVg7SUFFQSxNQUFNQyxVQUFVLEdBQUcsTUFBTUQsRUFBRSxDQUFDQyxVQUFILENBQWMsTUFBZCxDQUF6QjtJQUNBLE1BQU1DLElBQUksR0FBRyxNQUFNRCxVQUFVLENBQUNFLElBQVgsQ0FBZ0IsRUFBaEIsRUFBb0JDLEtBQXBCLENBQTBCLEVBQTFCLEVBQThCQyxPQUE5QixFQUFuQixDQUxBLENBTUE7O0lBQ0FQLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO01BQUVMLElBQUksRUFBRUE7SUFBUixDQUFyQjtFQUNILENBUkQsQ0FRRSxPQUFPTSxDQUFQLEVBQVU7SUFDUlYsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7TUFBRUUsT0FBTyxFQUFFRCxDQUFDLENBQUNDO0lBQWIsQ0FBckI7RUFDSDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vcGFnZXMvYXBpL2hlbGxvLmpzPzFmNzQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi9saWIvbW9uZ29kYlwiXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZVxuICAgICAgICBjb25zdCBkYiA9IGNsaWVudC5kYihcIm15X0RhdGFiYXNlXCIpXG5cbiAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ0ZXN0XCIpXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmQoe30pLmxpbWl0KDIwKS50b0FycmF5KClcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IGRhdGEgfSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZS5tZXNzYWdlIH0pXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY2xpZW50IiwiZGIiLCJjb2xsZWN0aW9uIiwiZGF0YSIsImZpbmQiLCJsaW1pdCIsInRvQXJyYXkiLCJzdGF0dXMiLCJqc29uIiwiZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/hello.js\n");

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