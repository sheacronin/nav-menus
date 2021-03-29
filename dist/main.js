/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Fn to toggle class.\nfunction toggleClass(el, cls) {\n    // Decide if complete class needs to be removed or added.\n    const action = el.classList.contains(cls) ? 'remove' : 'add';\n    // Remove/add the class.\n    el.classList[action](cls);\n}\n\nclass MenuItem {\n    constructor(el, name, index) {\n        this.name = name;\n        this.index = index;\n        this.el = el;\n        this.height = parseInt(window.getComputedStyle(el).height);\n        this.distanceFromTop = this.height * (this.index + 1);\n        this.zIndex;\n    }\n    toggleDisplay(isVisible) {\n        console.log(isVisible);\n        if (isVisible) {\n            this.hide();\n        } else {\n            this.show();\n        }\n        this.triggerFade();\n    }\n    show() {\n        this.el.style.transform = `translate(0, ${this.distanceFromTop}px)`;\n    }\n    hide() {\n        this.el.style.transform = 'translate(0, 0)';\n    }\n    triggerFade() {\n        if (\n            !this.el.classList.contains('fade-in') &&\n            !this.el.classList.contains('fade-out')\n        ) {\n            this.el.classList.add('fade-in');\n        } else {\n            toggleClass(this.el, 'fade-in');\n            toggleClass(this.el, 'fade-out');\n        }\n    }\n}\n\nclass Menu {\n    constructor(titleEl, itemsArray) {\n        this.items = itemsArray || [];\n        this.titleEl = titleEl;\n        this.titleEl.addEventListener('click', () => this.toggleMenuItems());\n        this.itemsVisible = false;\n    }\n    setZIndices() {\n        let z = this.items.length;\n        this.titleEl.style.zIndex = z + 1;\n        this.items.forEach((item) => {\n            item.el.style.zIndex = z;\n            z--;\n        });\n    }\n    toggleMenuItems() {\n        console.log(this);\n        console.log(this.items);\n        this.items.forEach((item) => {\n            item.toggleDisplay(this.itemsVisible);\n        });\n        this.itemsVisible = !this.itemsVisible;\n    }\n}\n\nconst allMenus = document.querySelectorAll('.menu');\n\nallMenus.forEach((menuEl) => {\n    const title = menuEl.querySelector('.menu-title');\n    const menu = new Menu(title);\n    const items = [...menuEl.querySelectorAll('.menu-item')];\n    items.forEach((itemEl) => {\n        const item = new MenuItem(\n            itemEl,\n            itemEl.textContent,\n            items.indexOf(itemEl)\n        );\n        menu.items.push(item);\n    });\n    menu.setZIndices();\n});\n\n\n//# sourceURL=webpack://nav-menus/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;