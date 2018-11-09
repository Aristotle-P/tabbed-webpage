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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tab_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-1 */ \"./src/tab-1.js\");\n/* harmony import */ var _tab_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-2 */ \"./src/tab-2.js\");\n/* harmony import */ var _tab_3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-3 */ \"./src/tab-3.js\");\n\n\n\nconst titleNode = document.createElement(\"p\");\nconst textForTitleNode = document.createTextNode(\"Aristotle's Famous New York Hot Wings\");\nconst blurbNode = document.createElement(\"p\");\nconst textForBlurbNode = document.createTextNode(\"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis repudiandae fugit voluptate! Illum nostrum deserunt, quae ipsa nobis voluptatem provident beatae harum aut fuga sit fugit molestiae ducimus! Vero, mollitia?\");\nconst imgNode = document.createElement(\"IMG\");\ntitleNode.appendChild(textForTitleNode);\nblurbNode.appendChild(textForBlurbNode);\nimgNode.setAttribute(\"src\", \"../images/rest.jpg\");\nimgNode.setAttribute(\"width\", \"500\");\nimgNode.setAttribute(\"height\", \"300\");\n\ndocument.getElementById(\"content\").appendChild(titleNode);\ndocument.getElementById(\"content\").appendChild(imgNode);\ndocument.getElementById(\"content\").appendChild(blurbNode);\n\ndocument.body.appendChild(Object(_tab_1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\ndocument.getElementById(\"tab-1\").addEventListener(\"click\", function(e) {\n  let div = document.getElementById(\"tab\");\n  div.parentNode.removeChild(div);\n  if (e.target && e.target.nodeName == \"LI\") {\n    document.body.appendChild(Object(_tab_1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  }\n});\n\ndocument.getElementById(\"tab-2\").addEventListener(\"click\", function(e) {\n  let div = document.getElementById(\"tab\");\n  div.parentNode.removeChild(div);\n  if (e.target && e.target.nodeName == \"LI\") {\n    document.body.appendChild(Object(_tab_2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  }\n});\n\ndocument.getElementById(\"tab-3\").addEventListener(\"click\", function(e) {\n  let div = document.getElementById(\"tab\");\n  div.parentNode.removeChild(div);\n  if (e.target && e.target.nodeName == \"LI\") {\n    document.body.appendChild(Object(_tab_3__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/tab-1.js":
/*!**********************!*\
  !*** ./src/tab-1.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction tabOne() {\n  let element = document.createElement('div');\n\n  element.id = \"tab\"\n  element.innerHTML = \"Lorem ipsum dolor amet aesthetic mumblecore copper\";\n  return element;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tabOne);\n\n//# sourceURL=webpack:///./src/tab-1.js?");

/***/ }),

/***/ "./src/tab-2.js":
/*!**********************!*\
  !*** ./src/tab-2.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction tabTwo() {\n  let element = document.createElement('div');\n\n  element.id = \"tab\"\n  element.innerHTML = \"Lorem ipsum dolor amet godard glossier bushwick XOXO hashtag\";\n  return element;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tabTwo);\n\n//# sourceURL=webpack:///./src/tab-2.js?");

/***/ }),

/***/ "./src/tab-3.js":
/*!**********************!*\
  !*** ./src/tab-3.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction tabThree() {\n  let element = document.createElement('div');\n\n  element.id = \"tab\"\n  element.innerHTML = \"Lorem ipsum dolor amet distillery wayfarers shoreditch flannel\";\n  return element;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tabThree);\n\n//# sourceURL=webpack:///./src/tab-3.js?");

/***/ })

/******/ });