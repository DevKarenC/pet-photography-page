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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header */ \"./src/modules/header.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_pricing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/pricing */ \"./src/modules/pricing.js\");\n/* harmony import */ var _modules_contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contacts */ \"./src/modules/contacts.js\");\n\n\n\n\n\nconst contentDiv = document.querySelector(\".content\");\nconst header = (0,_modules_header__WEBPACK_IMPORTED_MODULE_0__.default)();\nconst homePage = (0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.default)();\nconst pricingPage = (0,_modules_pricing__WEBPACK_IMPORTED_MODULE_2__.default)();\nconst contactPage = (0,_modules_contacts__WEBPACK_IMPORTED_MODULE_3__.default)();\ncontentDiv.append(header, homePage);\n\nconst tabs = document.querySelectorAll(\"li\");\n\ntabs.forEach((tab) => {\n  tab.addEventListener(\"click\", changeTab);\n});\n\nfunction changeTab() {\n  if (this.textContent === \"HOME\") {\n    contentDiv.removeChild(contentDiv.lastChild);\n    contentDiv.append(homePage);\n    contentDiv.classList.remove(\"content-pricing\");\n    contentDiv.classList.add(\"content\");\n  } else if (this.textContent === \"PRICING\") {\n    contentDiv.removeChild(contentDiv.lastChild);\n    contentDiv.append(pricingPage);\n    contentDiv.classList.remove(\"content\");\n    contentDiv.classList.add(\"content-pricing\");\n  } else if (this.textContent === \"CONTACT\") {\n    contentDiv.removeChild(contentDiv.lastChild);\n    contentDiv.append(contactPage);\n    contentDiv.classList.remove(\"content\", \"content-pricing\");\n  }\n}\n\n\n//# sourceURL=webpack://pet-photography-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contacts.js":
/*!*********************************!*\
  !*** ./src/modules/contacts.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contacts() {\n  const contactDiv = document.createElement(\"div\");\n  const contactListDiv = document.createElement(\"div\");\n  const contactUs = document.createElement(\"p\");\n  contactListDiv.append(\n    phoneContact(),\n    emailContact(),\n    locationAddress(),\n    businessHours()\n  );\n  contactUs.textContent = \"CONTACT US\";\n  contactDiv.classList.add(\"contact-div\");\n  contactDiv.append(contactUs, contactListDiv);\n  return contactDiv;\n}\n\nfunction phoneContact() {\n  const phoneNumber = document.createElement(\"p\");\n  const phoneIcon = document.createElement(\"i\");\n  const phoneDiv = document.createElement(\"div\");\n  phoneIcon.classList.add(\"fas\", \"fa-phone-alt\");\n  phoneDiv.classList.add(\"contact-inner-div\");\n  phoneNumber.textContent = \"746-864-7274\";\n  phoneDiv.append(phoneIcon, phoneNumber);\n  return phoneDiv;\n}\n\nfunction emailContact() {\n  const emailAddress = document.createElement(\"p\");\n  const emailIcon = document.createElement(\"i\");\n  const emailDiv = document.createElement(\"div\");\n  emailIcon.classList.add(\"far\", \"fa-paper-plane\");\n  emailDiv.classList.add(\"contact-inner-div\");\n  emailAddress.textContent = \"yourstruly@petphotography.com\";\n  emailDiv.append(emailIcon, emailAddress);\n  return emailDiv;\n}\n\nfunction locationAddress() {\n  const address = document.createElement(\"p\");\n  const addressIcon = document.createElement(\"i\");\n  const addressDiv = document.createElement(\"div\");\n  addressIcon.classList.add(\"fas\", \"fa-map-marker-alt\");\n  addressDiv.classList.add(\"contact-inner-div\");\n  address.textContent = \"2674 Parrish Avenue, Salinas, CA\";\n  addressDiv.append(addressIcon, address);\n  return addressDiv;\n}\n\nfunction businessHours() {\n  const businessHours = document.createElement(\"p\");\n  const hoursIcon = document.createElement(\"i\");\n  const hoursDiv = document.createElement(\"div\");\n  hoursIcon.classList.add(\"far\", \"fa-clock\");\n  hoursDiv.classList.add(\"contact-inner-div\");\n  businessHours.textContent = \"9AM - 9PM (PST) Monday - Sunday\";\n  hoursDiv.append(hoursIcon, businessHours);\n  return hoursDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contacts);\n\n\n//# sourceURL=webpack://pet-photography-page/./src/modules/contacts.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction appendHeader() {\n  const header = document.createElement(\"header\");\n  const h1 = document.createElement(\"h1\");\n  const span1 = document.createElement(\"span\");\n  const span2 = document.createElement(\"span\");\n  const nav = document.createElement(\"nav\");\n  const ul = document.createElement(\"ul\");\n  const tabs = [\"HOME\", \"PRICING\", \"CONTACT\"];\n\n  ul.innerHTML = tabs.map((tab) => `<li>${tab}</li>`).join(\"\");\n  nav.append(ul);\n  span1.textContent = \"YOURS TRULY\";\n  span2.textContent = \"PET PHOTOGRAPHY\";\n  span1.classList.add(\"yours-truly\");\n  span2.classList.add(\"pet-photography\");\n  h1.append(span1, span2);\n  header.append(h1, nav);\n  return header;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendHeader);\n\n\n//# sourceURL=webpack://pet-photography-page/./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction home() {\n  const homeText = document.createElement(\"div\");\n  const h2 = document.createElement(\"h2\");\n  const p = document.createElement(\"p\");\n  const span = document.createElement(\"span\");\n\n  h2.textContent = \"A Flawless Moment.\";\n  span.textContent = \"Book a session today.\";\n  p.textContent =\n    \"We help you capture moments from today and create memories for a lifetime with your pet. Over 500 memories captured. Let your pet's true colors shine through. \";\n  p.append(span);\n  homeText.classList.add(\"home-text\");\n  homeText.append(h2, p);\n  return homeText;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n\n//# sourceURL=webpack://pet-photography-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/pricing.js":
/*!********************************!*\
  !*** ./src/modules/pricing.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction pricing() {\n  const pricingDiv = document.createElement(\"div\");\n  const prices = document.createElement(\"p\");\n  const offerText = document.createElement(\"p\");\n  offerText.textContent = \"WHAT WE OFFER\";\n\n  prices.classList.add(\"prices\");\n  pricingDiv.classList.add(\"pricing\");\n  pricingDiv.append(offerText, createCard(), priceButtons());\n  return pricingDiv;\n}\n\nfunction createCard() {\n  const offerDiv = document.createElement(\"div\");\n  const offerList = [\n    \"Lively and dedicated photo session up to 2 hours\",\n    \"Various toys, treats, and costumes for your pet\",\n    \"Quality samples of photos for your best decision\",\n    \"Private, online gallery with 100 best images\",\n    \"Seven professional photo prints with digital copies\",\n    \"Lasting memories and adding colors to your moments\",\n  ];\n  offerDiv.classList.add(\"offer-div\");\n  offerList.forEach((offer) => {\n    const offerLineDiv = document.createElement(\"div\");\n    const offerLineP = document.createElement(\"p\");\n    offerLineP.textContent = offer;\n    offerLineP.classList.add(\"offer-line-para\");\n    offerLineDiv.append(offerLineP);\n    offerLineDiv.classList.add(\"offer-line-div\");\n    offerDiv.append(offerLineDiv);\n  });\n  return offerDiv;\n}\n\nfunction priceButtons() {\n  const buttonsDiv = document.createElement(\"div\");\n  const price = document.createElement(\"button\");\n\n  price.textContent = \"$499 per session\";\n  price.classList.add(\"price-button\");\n  buttonsDiv.classList.add(\"buttons-div\");\n  buttonsDiv.append(price);\n  return buttonsDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pricing);\n\n\n//# sourceURL=webpack://pet-photography-page/./src/modules/pricing.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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