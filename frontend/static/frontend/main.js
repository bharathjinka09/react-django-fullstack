/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/src/components/App.js":
/*!****************************************!*\
  !*** ./frontend/src/components/App.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/mieone/Downloads/lead_manager_react_django/frontend/src/components/App.js: Unterminated JSX contents (38:23)\\n\\n\\u001b[0m \\u001b[90m 36 | \\u001b[39m}\\u001b[0m\\n\\u001b[0m \\u001b[90m 37 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 38 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m\\\"app\\\"\\u001b[39m))\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                       \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 39 | \\u001b[39m\\u001b[0m\\n    at Object._raise (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:764:17)\\n    at Object.raiseWithData (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:757:17)\\n    at Object.raise (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:751:17)\\n    at Object.jsxReadToken (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:4313:20)\\n    at Object.getTokenFromCode (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:4695:19)\\n    at Object.nextToken (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:7723:12)\\n    at Object.next (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:7648:10)\\n    at Object.eat (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:7653:12)\\n    at Object.expect (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:8913:10)\\n    at Object.jsxParseOpeningElementAfterName (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:4580:10)\\n    at Object.jsxParseOpeningElementAt (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:4568:17)\\n    at Object.jsxParseElementAt (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:4600:33)\\n    at Object.jsxParseElementAt (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:4616:32)\\n    at Object.jsxParseElementAt (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:4616:32)\\n    at Object.jsxParseElement (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:4674:17)\\n    at Object.parseExprAtom (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:4681:19)\\n    at Object.parseExprSubscripts (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:9789:23)\\n    at Object.parseUpdate (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:9769:21)\\n    at Object.parseMaybeUnary (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:9758:17)\\n    at Object.parseExprOps (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:9628:23)\\n    at Object.parseMaybeConditional (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:9602:23)\\n    at Object.parseMaybeAssign (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:9565:21)\\n    at Object.parseParenAndDistinguishExpression (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:10418:28)\\n    at Object.parseExprAtom (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:10122:21)\\n    at Object.parseExprAtom (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:4686:20)\\n    at Object.parseExprSubscripts (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:9789:23)\\n    at Object.parseUpdate (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:9769:21)\\n    at Object.parseMaybeUnary (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:9758:17)\\n    at Object.parseExprOps (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:9628:23)\\n    at Object.parseMaybeConditional (/home/mieone/Downloads/lead_manager_react_django/node_modules/@babel/parser/lib/index.js:9602:23)\");\n\n//# sourceURL=webpack:///./frontend/src/components/App.js?");

/***/ }),

/***/ "./frontend/src/index.js":
/*!*******************************!*\
  !*** ./frontend/src/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ \"./frontend/src/components/App.js\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_App__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./frontend/src/index.js?");

/***/ })

/******/ });