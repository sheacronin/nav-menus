/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menus\": () => (/* binding */ menus)\n/* harmony export */ });\n/* harmony import */ var _nav_menus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-menus */ \"./src/nav-menus.js\");\n\n\nconst menus = (function createMenus() {\n    // Store all instances of menu class.\n    const menuElements = document.querySelectorAll('.menu, .mobile-menu');\n\n    const menus = [];\n\n    menuElements.forEach((menuEl) => {\n        const title = menuEl.querySelector('.menu-title');\n        // Create objects for each menu.\n        // The second parameter in the constructor takes 'hues' or 'monochrome'\n        // as an argument for the menu's color mode.\n        const menu = new _nav_menus__WEBPACK_IMPORTED_MODULE_0__.Menu(title, 'hues');\n        // Create objects for each menu item.\n        const ItemClass = menuEl.classList.contains('mobile-menu')\n            ? _nav_menus__WEBPACK_IMPORTED_MODULE_0__.MobileMenuItem\n            : _nav_menus__WEBPACK_IMPORTED_MODULE_0__.MenuItem;\n        const items = [...menuEl.querySelectorAll('.menu-item')];\n        items.forEach((itemEl) => {\n            const item = new ItemClass(\n                itemEl,\n                itemEl.textContent,\n                items.indexOf(itemEl)\n            );\n            menu.items.push(item);\n        });\n        // Set the z index style for each item.\n        menu.setZIndices();\n        menu.setFilters();\n        // Push each menu object into the menus array to be returned.\n        menus.push(menu);\n    });\n    return menus;\n})();\n\n\n\n\n//# sourceURL=webpack://nav-menus/./src/index.js?");

/***/ }),

/***/ "./src/nav-menus.js":
/*!**************************!*\
  !*** ./src/nav-menus.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MenuItem\": () => (/* binding */ MenuItem),\n/* harmony export */   \"MobileMenuItem\": () => (/* binding */ MobileMenuItem),\n/* harmony export */   \"Menu\": () => (/* binding */ Menu)\n/* harmony export */ });\n// Helper fn to toggle class.\nfunction toggleClass(el, cls) {\n    // Decide if complete class needs to be removed or added.\n    const action = el.classList.contains(cls) ? 'remove' : 'add';\n    // Remove/add the class.\n    el.classList[action](cls);\n}\n\nclass MenuItem {\n    constructor(el, name, index) {\n        this.el = el;\n        this.name = name;\n        this.index = index;\n        this.measuredDimension = 'height';\n        this._distanceFromStart;\n    }\n    get distanceFromStart() {\n        const measurement = parseInt(\n            window.getComputedStyle(this.el)[this.measuredDimension]\n        );\n        return measurement * (this.index + 1);\n    }\n    toggleDisplay(isVisible) {\n        if (isVisible) {\n            this.hide();\n        } else {\n            this.show();\n        }\n        this.triggerFade();\n    }\n    show() {\n        this.el.style.transform = `translate(0, ${this.distanceFromStart}px)`;\n    }\n    hide() {\n        this.el.style.transform = 'translate(0, 0)';\n    }\n    triggerFade() {\n        if (\n            !this.el.classList.contains('fade-in') &&\n            !this.el.classList.contains('fade-out')\n        ) {\n            this.el.classList.add('fade-in');\n        } else {\n            toggleClass(this.el, 'fade-in');\n            toggleClass(this.el, 'fade-out');\n        }\n    }\n}\n\nclass MobileMenuItem extends MenuItem {\n    constructor(el, name, index) {\n        super(el, name, index);\n        this.measuredDimension = 'width';\n    }\n    show() {\n        this.el.style.transform = `translate(${this.distanceFromStart}px, 0)`;\n    }\n}\n\nclass Menu {\n    constructor(titleEl, colorMode, itemsArray) {\n        this.items = itemsArray || [];\n        this.titleEl = titleEl;\n        this.titleEl.addEventListener('click', () => this.toggleMenuItems());\n        this._colorMode = colorMode;\n        this.itemsVisible = false;\n    }\n    get colorMode() {\n        return this._colorMode;\n    }\n    set colorMode(mode) {\n        // Remove spaces and standardize case of string.\n        const uniformMode = mode.replace(/[\\W_]/g, '').toLowerCase();\n        if (uniformMode !== 'monochrome' && uniformMode !== 'hues') {\n            alert('Invalid color mode. Please choose \"monochrome\" or \"hues\".');\n            return;\n        } else {\n            this._colorMode = uniformMode;\n        }\n    }\n    setZIndices() {\n        let z = this.items.length;\n        this.titleEl.style.zIndex = z + 1;\n        this.items.forEach((item) => {\n            item.el.style.zIndex = z;\n            z--;\n        });\n    }\n    setFilters() {\n        if (this.colorMode === 'monochrome') {\n            let bright = 0.9;\n            let sat = 1.1;\n            for (let i = 0; i < this.items.length; i++) {\n                this.items[i].el.style.filter =\n                    `brightness(${bright}) ` + `saturate(${sat})`;\n                bright -= 0.1;\n                sat += 0.1;\n            }\n        } else if (this.colorMode === 'hues') {\n            let n = 45;\n            for (let i = 0; i < this.items.length; i++) {\n                this.items[i].el.style.filter = `hue-rotate(${n}deg)`;\n                n += 45;\n            }\n        } else {\n            console.log('Please set a color mode.');\n        }\n    }\n    toggleMenuItems() {\n        this.items.forEach((item) => {\n            item.toggleDisplay(this.itemsVisible);\n        });\n        this.itemsVisible = !this.itemsVisible;\n    }\n}\n\n\n\n\n//# sourceURL=webpack://nav-menus/./src/nav-menus.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;