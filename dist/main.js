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

eval("const menuTitle = document.querySelector('.menu-title');\nconst menuItems = document.querySelectorAll('.menu-item');\n\nconst root = document.documentElement;\nroot.style.setProperty('--distance', '50px');\n\nlet menuItemsVisible = false;\n\n// Fn to toggle class.\nfunction toggleClass(el, cls) {\n    // Decide if complete class needs to be removed or added.\n    const action = el.classList.contains(cls) ? 'remove' : 'add';\n    // Remove/add the class.\n    el.classList[action](cls);\n}\n\n(function setZIndices() {\n    let z = menuItems.length;\n    menuTitle.style.zIndex = z + 1;\n    menuItems.forEach((item) => {\n        item.style.zIndex = z;\n        z--;\n    });\n})();\n\nfunction triggerFade(item) {\n    if (\n        !item.classList.contains('fade-in') &&\n        !item.classList.contains('fade-out')\n    ) {\n        item.classList.add('fade-in');\n    } else {\n        toggleClass(item, 'fade-in');\n        toggleClass(item, 'fade-out');\n    }\n}\n\nfunction toggleMenuItems() {\n    let distance = 50;\n\n    menuItems.forEach((item) => {\n        if (menuItemsVisible) {\n            item.style.transform = 'translate(0, 0)';\n        } else {\n            item.style.transform = `translate(0, ${distance}px)`;\n            distance += 50;\n        }\n        triggerFade(item);\n    });\n    menuItemsVisible = !menuItemsVisible;\n}\n\nmenuTitle.addEventListener('click', toggleMenuItems);\n\n\n//# sourceURL=webpack://nav-menus/./src/index.js?");

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