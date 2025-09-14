"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 2677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API rotes support file-based routing.
// They are located in the pages/api directory.
// Each file in this directory is mapped to /api/* and will be treated as an API endpoint instead of a page.
function handler(req, res) {
    res.status(200).json({
        name: "S. Kailash"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2677));
module.exports = __webpack_exports__;

})();