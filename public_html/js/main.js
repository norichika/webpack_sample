webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sub__ = __webpack_require__(2);


__WEBPACK_IMPORTED_MODULE_0__sub__["a" /* default */].method1();
__WEBPACK_IMPORTED_MODULE_0__sub__["a" /* default */].method2();

timer(1000);

function timer(delay) {
	var myFirstPromise = new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve("Success!"); // Yay! Everything went well!
		}, delay);
	});

	myFirstPromise.then(function (successMessage) {
		// successMessage is whatever we passed in the resolve(...) function above.
		// It doesn't have to be a string, but if it is only a succeed message, it probably will be.
		console.log("Yay! " + successMessage);
	});
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
	function Utils() {
		_classCallCheck(this, Utils);
	}

	_createClass(Utils, null, [{
		key: 'method1',
		value: function method1() {
			console.log('method1');
		}
	}, {
		key: 'method2',
		value: function method2() {
			console.log('method2');
		}
	}]);

	return Utils;
}();

/* harmony default export */ __webpack_exports__["a"] = (Utils);

/***/ })
],[1]);
//# sourceMappingURL=main.js.map