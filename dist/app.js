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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/categoryRowStyling.js":
/*!***********************************!*\
  !*** ./src/categoryRowStyling.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nconst observer = new MutationObserver((mutationsList, observer) => {\n  for (const mutation of mutationsList) {\n    const { target } = mutation;\n    if (\n      target instanceof HTMLTableCellElement &&\n      target.classList.contains(\"cat\")\n    ) {\n      const { textContent } = target\n      const { classList } = target.parentNode\n      \n      if (textContent.startsWith(\"_\")) {\n        classList.remove(\n          \"make-better-row-incomplete\",\n          \"make-better-row-ignored\"\n        );\n      } else {\n        classList.add(\n          textContent.startsWith(\"Hide from Budget\") || textContent === \"Income\"\n            ? \"make-better-row-ignored\"\n            : \"make-better-row-incomplete\"\n        );\n      }\n    }\n  }\n});\n\nobserver.observe(document.body, { childList: true, subtree: true });\n\n\n//# sourceURL=webpack:///./src/categoryRowStyling.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: HIDE_CATEGORY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HIDE_CATEGORY\", function() { return HIDE_CATEGORY; });\nconst HIDE_CATEGORY = 'Hide from Budgets & Trends'\n\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/keyboardNavigation.js":
/*!***********************************!*\
  !*** ./src/keyboardNavigation.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nfunction findCategoryText(str) {\n  str = str.toLowerCase();\n  if (\"uncategorized\".startsWith(str)) return \"Uncategorized\";\n  if (\"hide\".startsWith(str)) return _constants__WEBPACK_IMPORTED_MODULE_0__[\"HIDE_CATEGORY\"];\n  for (const node of document.querySelectorAll(\"#menu-category ul ul li\")) {\n    if (node.textContent.toLowerCase().startsWith(str)) return node.textContent;\n  }\n}\n\nfunction clickEl(elOrId) {\n  if (typeof elOrId === \"string\") elOrId = document.getElementById(elOrId);\n  elOrId.dispatchEvent(new Event(\"click\"));\n}\n\ndocument.addEventListener(\"keypress\", e => {\n  if (!e.ctrlKey) return;\n  switch (e.key) {\n    case \"c\":\n      const input = document.getElementById(\"txnEdit-category_input\");\n      let inputVal = \"_\";\n      input.value = inputVal;\n      const valCaptureListener = e => {\n        // Strange that we need to cache the value here. For some reason, `input.value` will be the\n        // original value when we try passing it to `findCategoryText`.\n        inputVal = input.value;\n      };\n\n      const categoryListener = e => {\n        if (e.key !== \"Enter\") return;\n        input.value = findCategoryText(inputVal);\n        input.removeEventListener(\"keydown\", categoryListener);\n        input.removeEventListener(\"keyup\", categoryListener);\n      };\n\n      input.addEventListener(\"keydown\", categoryListener, true); // Must use capture phase to change value before default Enter key functionality\n      input.addEventListener(\"keyup\", valCaptureListener);\n      clickEl(\"txnEdit-category_picker\");\n      break;\n\n    case \"n\":\n      document.getElementById(\"txnEdit-merchant_input\").focus();\n      break;\n\n    case \"s\": {\n      const { scrollY } = window;\n      document.addEventListener(\"scroll\", () => window.scrollTo(0, scrollY), {\n        once: true\n      });\n      document.getElementById(\"txnEdit-createRule\").checked = true;\n      clickEl(\"txnEdit-submit\");\n      break;\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./src/keyboardNavigation.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _replaceCategory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./replaceCategory */ \"./src/replaceCategory.js\");\n/* harmony import */ var _replaceCategory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_replaceCategory__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _categoryRowStyling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categoryRowStyling */ \"./src/categoryRowStyling.js\");\n/* harmony import */ var _keyboardNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboardNavigation */ \"./src/keyboardNavigation.js\");\n\n\n\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/replaceCategory.js":
/*!********************************!*\
  !*** ./src/replaceCategory.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.info(\"Mint Make Better\");\n\nconst AUTO = \"Auto & Transport\";\nconst BILLS = \"Bills & Utilities\";\nconst BUSINESS = \"Business Services\";\nconst EDUCATION = \"Education\";\n\nconst oldCategories = [AUTO, BILLS, BUSINESS, EDUCATION];\nconst newCategoryMap = {\n  [AUTO]: \"Fixed\",\n  [BILLS]: \"Variable Bills\",\n  [BUSINESS]: \"Life Costs\",\n  [EDUCATION]: \"Discretionary\"\n};\n\nconst observer = new MutationObserver((mutationsList, observer) => {\n  for (const mutation of mutationsList) {\n    for (const node of mutation.addedNodes) {\n      if (node instanceof SVGTSpanElement) {\n        const cat = oldCategories.find(c => node.textContent.includes(c.toUpperCase()))\n        if (cat) node.textContent = newCategoryMap[cat].toUpperCase()\n      } else if (oldCategories.some(c => node.textContent.includes(c))) {\n        changeNode(node);\n      }\n    }\n  }\n});\n\nfunction changeNode(node) {\n  if (node.nodeType === Node.TEXT_NODE) {\n    for (const category of oldCategories) {\n      node.textContent = node.textContent.replace(\n        category,\n        newCategoryMap[category]\n      );\n    }\n  } else {\n    for (const child of node.childNodes) changeNode(child);\n  }\n}\n\nobserver.observe(document.body, { childList: true, subtree: true });\n\n\n//# sourceURL=webpack:///./src/replaceCategory.js?");

/***/ })

/******/ });