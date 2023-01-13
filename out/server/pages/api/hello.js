"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 8064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./lib/mongodb.js


if (false) {}

const uri = "mongodb+srv://leo:y4riYeM7Mv7KKYz@cluster0.oqmmoyw.mongodb.net/retryWrites=truew=majority";
const options = {};
let client;
let clientPromise = external_mongodb_namespaceObject.MongoClient;

if (false) {} else {
  // In production mode, it's best to not use a global variable.
  client = new external_mongodb_namespaceObject.MongoClient(uri, options);
  clientPromise = client.connect();
} // Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.


/* harmony default export */ const mongodb = (clientPromise);
;// CONCATENATED MODULE: ./pages/api/hello.js
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function handler(req, res) {
  try {
    const client = await mongodb;
    const db = client.db("my_Database");
    const collection = await db.collection("test");
    const data = await collection.find({}).limit(20).toArray(); //console.log(data)

    res.status(200).json({
      data: data
    });
  } catch (e) {
    res.status(500).json({
      message: e.message
    });
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8064));
module.exports = __webpack_exports__;

})();