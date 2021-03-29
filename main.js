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

eval("// Fn to toggle class.\nfunction toggleClass(el, cls) {\n    // Decide if complete class needs to be removed or added.\n    const action = el.classList.contains(cls) ? 'remove' : 'add';\n    // Remove/add the class.\n    el.classList[action](cls);\n}\n\nclass MenuItem {\n    constructor(el, name, index) {\n        this.el = el;\n        this.name = name;\n        this.index = index;\n        this.height = parseInt(window.getComputedStyle(el).height);\n        this.distanceFromTop = this.height * (this.index + 1);\n    }\n    toggleDisplay(isVisible) {\n        if (isVisible) {\n            this.hide();\n        } else {\n            this.show();\n        }\n        this.triggerFade();\n    }\n    show() {\n        this.el.style.transform = `translate(0, ${this.distanceFromTop}px)`;\n    }\n    hide() {\n        this.el.style.transform = 'translate(0, 0)';\n    }\n    triggerFade() {\n        if (\n            !this.el.classList.contains('fade-in') &&\n            !this.el.classList.contains('fade-out')\n        ) {\n            this.el.classList.add('fade-in');\n        } else {\n            toggleClass(this.el, 'fade-in');\n            toggleClass(this.el, 'fade-out');\n        }\n    }\n}\n\nclass Menu {\n    constructor(titleEl, colorMode, itemsArray) {\n        this.items = itemsArray || [];\n        this.titleEl = titleEl;\n        this.titleEl.addEventListener('click', () => this.toggleMenuItems());\n        this._colorMode = colorMode;\n        this.itemsVisible = false;\n    }\n    get colorMode() {\n        return this._colorMode;\n    }\n    set colorMode(mode) {\n        // Remove spaces and standardize case of string.\n        const uniformMode = mode.replace(/[\\W_]/g, '').toLowerCase();\n        if (uniformMode !== 'monochrome' && uniformMode !== 'hues') {\n            alert('Invalid color mode. Please choose \"monochrome\" or \"hues\".');\n            return;\n        } else {\n            this._colorMode = uniformMode;\n        }\n    }\n    setZIndices() {\n        let z = this.items.length;\n        this.titleEl.style.zIndex = z + 1;\n        this.items.forEach((item) => {\n            item.el.style.zIndex = z;\n            z--;\n        });\n    }\n    setFilters() {\n        if (this.colorMode === 'monochrome') {\n            let bright = 0.9;\n            let sat = 1.1;\n            for (let i = 0; i < this.items.length; i++) {\n                this.items[i].el.style.filter =\n                    `brightness(${bright}) ` + `saturate(${sat})`;\n                bright -= 0.1;\n                sat += 0.1;\n            }\n        } else if (this.colorMode === 'hues') {\n            let n = 45;\n            for (let i = 0; i < this.items.length; i++) {\n                this.items[i].el.style.filter = `hue-rotate(${n}deg)`;\n                n += 45;\n            }\n        } else {\n            console.log('Please set a color mode.');\n        }\n    }\n    toggleMenuItems() {\n        this.items.forEach((item) => {\n            item.toggleDisplay(this.itemsVisible);\n        });\n        this.itemsVisible = !this.itemsVisible;\n    }\n}\n\n// Store all instances of menu class.\nconst allMenus = document.querySelectorAll('.menu');\n\nallMenus.forEach((menuEl) => {\n    const title = menuEl.querySelector('.menu-title');\n    // Create objects for each menu.\n    const menu = new Menu(title, 'hues');\n    const items = [...menuEl.querySelectorAll('.menu-item')];\n    items.forEach((itemEl) => {\n        // Create objects for each menu item.\n        const item = new MenuItem(\n            itemEl,\n            itemEl.textContent,\n            items.indexOf(itemEl)\n        );\n        menu.items.push(item);\n    });\n    // Set the z index style for each item.\n    menu.setZIndices();\n    menu.setFilters();\n});\n\n\n//# sourceURL=webpack://nav-menus/./src/index.js?");

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