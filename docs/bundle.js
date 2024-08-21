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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ``, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://wbgl/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://wbgl/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://wbgl/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/GLSL/particle/dummy.frag":
/*!**************************************!*\
  !*** ./src/GLSL/particle/dummy.frag ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"#version 300 es\\n\\nprecision highp float;\\n#define GLSLIFY 1\\n\\n// ダミーなのでなにもしない\\nvoid main() {\\n    discard;\\n}\");\n\n//# sourceURL=webpack://wbgl/./src/GLSL/particle/dummy.frag?");

/***/ }),

/***/ "./src/GLSL/particle/particle-render.frag":
/*!************************************************!*\
  !*** ./src/GLSL/particle/particle-render.frag ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"#version 300 es\\n\\nprecision highp float;\\n#define GLSLIFY 1\\n\\nout vec4 fragColor;\\n\\nvoid main() {\\n  fragColor = vec4(1.0); // 白色\\n}\");\n\n//# sourceURL=webpack://wbgl/./src/GLSL/particle/particle-render.frag?");

/***/ }),

/***/ "./src/GLSL/particle/particle-render.vert":
/*!************************************************!*\
  !*** ./src/GLSL/particle/particle-render.vert ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"#version 300 es\\n#define GLSLIFY 1\\n\\nin vec2 processedParticlePosition;\\n\\nvoid main() {\\n    gl_PointSize = 2.0;\\n    gl_Position = vec4(processedParticlePosition, 0.0, 1.0);\\n}\");\n\n//# sourceURL=webpack://wbgl/./src/GLSL/particle/particle-render.vert?");

/***/ }),

/***/ "./src/GLSL/particle/physicsCalc.vert":
/*!********************************************!*\
  !*** ./src/GLSL/particle/physicsCalc.vert ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"#version 300 es\\n#define GLSLIFY 1\\n\\n// パーティクルの初期発生位置。mouse eventから渡す\\nuniform vec2 origin;\\nuniform vec2 gravity;\\nuniform float deltaTime;\\n\\nin vec2 particlePosition;\\nin vec2 particleVelocity;\\nin float particleAge;\\nin float particleLifeSpan;\\n\\n// ↓ 処理後は下の変数に入る\\n\\nout vec2 processedParticlePosition;\\nout vec2 processedParticleVelocity;\\nout float processedParticleAge;\\nout float processedParticleLifeSpan;\\n\\nvoid main() {\\n    // 重力を適用\\n    processedParticleVelocity = particleVelocity + (gravity * deltaTime);\\n\\n    // 衝突していたら速度を反転 + 減衰\\n    if(particlePosition.y < -0.9) {\\n        processedParticleVelocity.y = -particleVelocity.y * 0.6;\\n    }\\n    // 横方向も速度を反転\\n    if(particlePosition.x < -0.9 || 0.9 < particlePosition.x) {\\n        processedParticleVelocity.x = -particleVelocity.x;\\n    }\\n\\n    // パーティクルのY方向速度がほぼ0になったら初期位置に戻す そうでないときは通常通り移動させるを進める\\n    if(particlePosition.y < -0.79999 && abs(processedParticleVelocity.y) < 0.000001) {\\n        processedParticlePosition = origin;\\n    }\\n    else {\\n        processedParticlePosition = particlePosition + (processedParticleVelocity * deltaTime);\\n    }\\n}\");\n\n//# sourceURL=webpack://wbgl/./src/GLSL/particle/physicsCalc.vert?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://wbgl/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://wbgl/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://wbgl/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://wbgl/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://wbgl/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://wbgl/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://wbgl/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _GLSL_particle_physicsCalc_vert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GLSL/particle/physicsCalc.vert */ \"./src/GLSL/particle/physicsCalc.vert\");\n/* harmony import */ var _GLSL_particle_dummy_frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GLSL/particle/dummy.frag */ \"./src/GLSL/particle/dummy.frag\");\n/* harmony import */ var _GLSL_particle_particle_render_vert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GLSL/particle/particle-render.vert */ \"./src/GLSL/particle/particle-render.vert\");\n/* harmony import */ var _GLSL_particle_particle_render_frag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GLSL/particle/particle-render.frag */ \"./src/GLSL/particle/particle-render.frag\");\n/* harmony import */ var _lib_webglUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/webglUtils */ \"./src/lib/webglUtils.ts\");\n/* harmony import */ var _lib_rollingArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/rollingArray */ \"./src/lib/rollingArray.ts\");\n\n\n\n\n\n\n\nvar WIDTH = 1600;\nvar HEIGHT = 900;\nvar c;\nvar gl;\nvar animationFrameId;\nvar roopParams = {\n    computer: 'GPU',\n    particleNum: 500,\n};\nvar originPoint = new Float32Array([0.0, 0.0]);\nfunction setup() {\n    c = document.getElementById('canvas');\n    c.width = WIDTH;\n    c.height = HEIGHT;\n    gl = c.getContext('webgl2');\n    gl.clearColor(0.0, 0.0, 0.0, 1.0);\n    // canvasを初期化\n    gl.clear(gl.COLOR_BUFFER_BIT);\n    c.addEventListener('mousemove', function (e) {\n        var rect = c.getBoundingClientRect();\n        var x = -1 + 2 * (e.clientX - rect.left + 1) / c.width;\n        var y = 1 - 2 * (e.clientY - rect.top + 1) / c.height;\n        if (Math.abs(x) < 0.89)\n            originPoint[0] = x;\n        if (Math.abs(y) < 0.89)\n            originPoint[1] = y;\n    });\n}\nfunction startLoop() {\n    if (animationFrameId)\n        cancelAnimationFrame(animationFrameId);\n    var particleNum = document.getElementById('particle-num');\n    var fps = document.getElementById('fps');\n    setup();\n    var PARTICLE_NUM = roopParams.particleNum;\n    var MAX_INITIAL_SPEED = 0.0005;\n    var feedbackVaryings = [\n        'processedParticlePosition',\n        'processedParticleVelocity',\n    ];\n    var renderVertShader = (0,_lib_webglUtils__WEBPACK_IMPORTED_MODULE_5__.createShader)(gl, _GLSL_particle_particle_render_vert__WEBPACK_IMPORTED_MODULE_3__[\"default\"], 'vertex');\n    var renderFragShader = (0,_lib_webglUtils__WEBPACK_IMPORTED_MODULE_5__.createShader)(gl, _GLSL_particle_particle_render_frag__WEBPACK_IMPORTED_MODULE_4__[\"default\"], 'fragment');\n    var render = (0,_lib_webglUtils__WEBPACK_IMPORTED_MODULE_5__.createProgram)(gl, renderVertShader, renderFragShader);\n    var physicsShader = (0,_lib_webglUtils__WEBPACK_IMPORTED_MODULE_5__.createShader)(gl, _GLSL_particle_physicsCalc_vert__WEBPACK_IMPORTED_MODULE_1__[\"default\"], 'vertex');\n    var dummyShader = (0,_lib_webglUtils__WEBPACK_IMPORTED_MODULE_5__.createShader)(gl, _GLSL_particle_dummy_frag__WEBPACK_IMPORTED_MODULE_2__[\"default\"], 'fragment');\n    var computer = (0,_lib_webglUtils__WEBPACK_IMPORTED_MODULE_5__.createProgramWithFeedback)(gl, physicsShader, dummyShader, feedbackVaryings);\n    gl.uniform2fv(gl.getUniformLocation(computer, 'gravity'), new Float32Array([0.0, -0.000001]));\n    // vec2     vec2\n    // position velocity\n    var particleInitialData = [];\n    for (var i = 0; i < PARTICLE_NUM; i++) {\n        // vec2 position\n        particleInitialData.push(originPoint[0]);\n        particleInitialData.push(originPoint[1]);\n        // vec2 velocity\n        var vx = -MAX_INITIAL_SPEED + (Math.random() * (MAX_INITIAL_SPEED * 2));\n        var vy = -MAX_INITIAL_SPEED + (Math.random() * (MAX_INITIAL_SPEED * 2));\n        particleInitialData.push(vx);\n        particleInitialData.push(vy);\n    }\n    var particleInitialDataF32 = new Float32Array(particleInitialData);\n    var inputBuffer = gl.createBuffer();\n    var outputBuffer = gl.createBuffer();\n    var renderBuffer = gl.createBuffer();\n    var computerAttributes = [\n        {\n            name: 'particlePosition',\n            size: 2,\n            type: gl.FLOAT,\n            byteSize: 2 * Float32Array.BYTES_PER_ELEMENT,\n        },\n        {\n            name: 'particleVelocity',\n            size: 2,\n            type: gl.FLOAT,\n            byteSize: 2 * Float32Array.BYTES_PER_ELEMENT,\n        },\n    ];\n    var STRIDE = computerAttributes.reduce(function (prev, current) { return prev + current.byteSize; }, 0);\n    var renderAttributes = [\n        {\n            name: 'processedParticlePosition',\n            size: 2,\n            type: gl.FLOAT,\n            byteSize: 2 * Float32Array.BYTES_PER_ELEMENT\n        }\n    ];\n    var inputComputerBufferVAO = (0,_lib_webglUtils__WEBPACK_IMPORTED_MODULE_5__.createVAO)(gl, computer, inputBuffer, computerAttributes, STRIDE, particleInitialDataF32, gl.DYNAMIC_COPY);\n    var outputComputerBufferVAO = (0,_lib_webglUtils__WEBPACK_IMPORTED_MODULE_5__.createVAO)(gl, computer, outputBuffer, computerAttributes, STRIDE, particleInitialDataF32, gl.DYNAMIC_COPY);\n    var inputRenderBufferVAO = (0,_lib_webglUtils__WEBPACK_IMPORTED_MODULE_5__.createVAO)(gl, render, inputBuffer, renderAttributes, STRIDE);\n    var outputRenderBufferVAO = (0,_lib_webglUtils__WEBPACK_IMPORTED_MODULE_5__.createVAO)(gl, render, outputBuffer, renderAttributes, STRIDE);\n    var transformFeedback = gl.createTransformFeedback();\n    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, transformFeedback);\n    var buffers = [inputBuffer, outputBuffer];\n    var computerVAOs = [inputComputerBufferVAO, outputComputerBufferVAO];\n    var renderVAOs = [inputRenderBufferVAO, outputRenderBufferVAO];\n    var _a = [0, 1], inputIndex = _a[0], outputIndex = _a[1];\n    var fpss = new _lib_rollingArray__WEBPACK_IMPORTED_MODULE_6__.RollingNumArray(10);\n    var prevTime = performance.now();\n    function loopGPU(timestamp) {\n        var _a;\n        var deltaTime = timestamp - prevTime;\n        prevTime = timestamp;\n        fpss.add(Math.round(1000 / deltaTime));\n        fps.textContent = \"\".concat(fpss.getAverage(), \"FPS\");\n        particleNum.textContent = \"\".concat(PARTICLE_NUM);\n        gl.clear(gl.COLOR_BUFFER_BIT);\n        gl.useProgram(computer);\n        gl.enable(gl.RASTERIZER_DISCARD);\n        gl.uniform2fv(gl.getUniformLocation(computer, 'origin'), originPoint);\n        gl.uniform1f(gl.getUniformLocation(computer, 'deltaTime'), deltaTime);\n        gl.bindVertexArray(computerVAOs[inputIndex]);\n        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, buffers[outputIndex]);\n        gl.beginTransformFeedback(gl.POINTS);\n        gl.drawArrays(gl.POINTS, 0, PARTICLE_NUM);\n        gl.endTransformFeedback();\n        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, null);\n        gl.useProgram(render);\n        gl.disable(gl.RASTERIZER_DISCARD);\n        gl.bindVertexArray(renderVAOs[outputIndex]);\n        gl.drawArrays(gl.POINTS, 0, PARTICLE_NUM);\n        _a = [outputIndex, inputIndex], inputIndex = _a[0], outputIndex = _a[1];\n        animationFrameId = requestAnimationFrame(function (timestamp) { return loopGPU(timestamp); });\n    }\n    var particleData = particleInitialData;\n    function loopCPU(timestamp) {\n        var _a;\n        var deltaTime = timestamp - prevTime;\n        prevTime = timestamp;\n        fpss.add(Math.round(1000 / deltaTime));\n        fps.textContent = \"\".concat(fpss.getAverage(), \"FPS\");\n        particleNum.textContent = \"\".concat(PARTICLE_NUM);\n        // 演算\n        for (var i = 0; i < particleData.length; i += 4) {\n            var x = particleData[i];\n            var y = particleData[i + 1];\n            var vx = particleData[i + 2];\n            var vy = particleData[i + 3];\n            var px = void 0, py = void 0;\n            // 重力を適用\n            var pvx = vx;\n            var pvy = vy + -0.000001 * deltaTime;\n            // 衝突していたら速度を反転 + 減衰\n            if (y < -0.9) {\n                pvy = -vy * 0.6;\n            }\n            // 横方向も速度を反転\n            if (x < -0.9 || 0.9 < x) {\n                pvx = -vx;\n            }\n            // パーティクルのY方向速度がほぼ0になったら初期位置に戻す そうでないときは通常通り移動させるを進める\n            if (y < -0.79999 && Math.abs(pvy) < 0.000001) {\n                px = originPoint[0];\n                py = originPoint[1];\n            }\n            else {\n                px = x + pvx * deltaTime;\n                py = y + pvy * deltaTime;\n            }\n            particleData[i] = px;\n            particleData[i + 1] = py;\n            particleData[i + 2] = pvx;\n            particleData[i + 3] = pvy;\n        }\n        gl.clear(gl.COLOR_BUFFER_BIT);\n        gl.useProgram(render);\n        gl.disable(gl.RASTERIZER_DISCARD);\n        gl.bindBuffer(gl.ARRAY_BUFFER, renderBuffer);\n        var location = gl.getAttribLocation(render, 'processedParticlePosition');\n        gl.vertexAttribPointer(location, 2, gl.FLOAT, false, STRIDE, 0);\n        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(particleData), gl.STATIC_DRAW);\n        gl.bindVertexArray(renderVAOs[outputIndex]);\n        gl.drawArrays(gl.POINTS, 0, PARTICLE_NUM);\n        _a = [outputIndex, inputIndex], inputIndex = _a[0], outputIndex = _a[1];\n        animationFrameId = requestAnimationFrame(function (timestamp) { return loopCPU(timestamp); });\n    }\n    if (roopParams.computer === 'GPU')\n        animationFrameId = requestAnimationFrame(function (timestamp) { return loopGPU(timestamp); });\n    if (roopParams.computer === 'CPU')\n        animationFrameId = requestAnimationFrame(function (timestamp) { return loopCPU(timestamp); });\n}\nonload = function () {\n    startLoop();\n};\ndocument.getElementById('restartBtn').addEventListener('click', function () {\n    var select = document.getElementById('computer');\n    var particle_bumber = document.getElementById('particles');\n    roopParams = {\n        computer: select.value,\n        particleNum: parseInt(particle_bumber.value)\n    };\n    originPoint = new Float32Array([0.0, 0.0]);\n    startLoop(); // ループを再起動\n});\n\n\n//# sourceURL=webpack://wbgl/./src/index.ts?");

/***/ }),

/***/ "./src/lib/rollingArray.ts":
/*!*********************************!*\
  !*** ./src/lib/rollingArray.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RollingNumArray: () => (/* binding */ RollingNumArray)\n/* harmony export */ });\nvar RollingNumArray = /** @class */ (function () {\n    function RollingNumArray(maxLength) {\n        this.items = [];\n        this.maxLength = maxLength;\n    }\n    RollingNumArray.prototype.add = function (item) {\n        if (this.items.length >= this.maxLength) {\n            this.items.shift(); // 古い値を削除\n        }\n        this.items.push(item); // 新しい値を追加\n    };\n    RollingNumArray.prototype.getItems = function () {\n        return this.items;\n    };\n    RollingNumArray.prototype.getAverage = function () {\n        var sum = this.items.reduce(function (prev, current) { return prev + current; }, 0);\n        return this.items.length > 0 ? sum / this.items.length : 0;\n    };\n    return RollingNumArray;\n}());\n\n\n\n//# sourceURL=webpack://wbgl/./src/lib/rollingArray.ts?");

/***/ }),

/***/ "./src/lib/webglUtils.ts":
/*!*******************************!*\
  !*** ./src/lib/webglUtils.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBuffer: () => (/* binding */ createBuffer),\n/* harmony export */   createProgram: () => (/* binding */ createProgram),\n/* harmony export */   createProgramWithFeedback: () => (/* binding */ createProgramWithFeedback),\n/* harmony export */   createShader: () => (/* binding */ createShader),\n/* harmony export */   createVAO: () => (/* binding */ createVAO)\n/* harmony export */ });\n// shaderをソースから作成し、コンパイルして返す\nfunction createShader(gl, shaderSource, shaderType) {\n    var shader;\n    switch (shaderType) {\n        case 'vertex':\n            shader = gl.createShader(gl.VERTEX_SHADER);\n            break;\n        case 'fragment':\n            shader = gl.createShader(gl.FRAGMENT_SHADER);\n            break;\n        default:\n            return;\n    }\n    if (!shader)\n        throw new Error(\"Failed to create shader\");\n    // 生成したシェーダーオブジェクトにソースを当ててコンパイル\n    gl.shaderSource(shader, shaderSource);\n    gl.compileShader(shader);\n    // シェーダが正しくコンパイルされたかチェック\n    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {\n        return shader;\n    }\n    else {\n        alert(gl.getShaderInfoLog(shader));\n    }\n}\n// プログラムオブジェクトを作成し、vertex_shader、fragment_shaderをアタッチして返す\nfunction createProgram(gl, vertexShader, fragmentShader) {\n    // プログラムオブジェクトを生成してシェーダーをアタッチ\n    var program = gl.createProgram();\n    if (!program)\n        throw new Error(\"Failed to create program\");\n    gl.attachShader(program, vertexShader);\n    gl.attachShader(program, fragmentShader);\n    // シェーダをリンク\n    gl.linkProgram(program);\n    // シェーダのリンクが正しく行なわれたかチェック\n    if (gl.getProgramParameter(program, gl.LINK_STATUS)) {\n        gl.useProgram(program);\n        return program;\n    }\n    else {\n        alert(gl.getProgramInfoLog(program));\n    }\n}\n// TransformFeedbackはWebGL2でしか使えないので注意\nfunction createProgramWithFeedback(gl, vertexShader, fragmentShader, feedbackVaryings) {\n    if (feedbackVaryings === void 0) { feedbackVaryings = []; }\n    var program = gl.createProgram();\n    if (!program)\n        throw new Error(\"Failed to create program\");\n    gl.attachShader(program, vertexShader);\n    gl.attachShader(program, fragmentShader);\n    // ここでトランスフォームフィードバックを使用することを宣言\n    if (feedbackVaryings.length !== 0) {\n        gl.transformFeedbackVaryings(program, feedbackVaryings, gl.INTERLEAVED_ATTRIBS);\n    }\n    gl.linkProgram(program);\n    // シェーダのリンクが正しく行なわれたかチェック\n    if (gl.getProgramParameter(program, gl.LINK_STATUS)) {\n        gl.useProgram(program);\n        return program;\n    }\n    else {\n        alert(gl.getProgramInfoLog(program));\n    }\n}\n// バッファを作成して初期化する\nfunction createBuffer(gl, bufferType, dataArray, usage) {\n    if (dataArray === void 0) { dataArray = null; }\n    if (usage === void 0) { usage = gl.STATIC_DRAW; }\n    var buffer = gl.createBuffer();\n    if (!buffer)\n        throw new Error(\"Failed to create buffer\");\n    gl.bindBuffer(bufferType, buffer);\n    // データのイニシャライズ\n    if (dataArray)\n        gl.bufferData(bufferType, dataArray, usage);\n    gl.bindBuffer(bufferType, null);\n    return buffer;\n}\n// VertexAttributeが多くなると管理が煩雑になるのでこれをVAOでまとめる\n// VAOはwebGL2からの機能なのでここでは gl: WebGL2RenderingContextとする\nfunction createVAO(gl, program, buffer, attributes, stride, dataArray, usage) {\n    if (dataArray === void 0) { dataArray = null; }\n    if (usage === void 0) { usage = gl.STATIC_DRAW; }\n    var vao = gl.createVertexArray();\n    if (!vao)\n        throw new Error(\"Failed to create vao\");\n    gl.bindVertexArray(vao);\n    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);\n    var offset = 0;\n    for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {\n        var attribute = attributes_1[_i];\n        var attrLocation = gl.getAttribLocation(program, attribute.name);\n        gl.enableVertexAttribArray(attrLocation);\n        gl.vertexAttribPointer(attrLocation, attribute.size, attribute.type, false, stride, offset);\n        offset += attribute.byteSize;\n    }\n    if (dataArray !== null) {\n        gl.bufferData(gl.ARRAY_BUFFER, dataArray, usage);\n    }\n    gl.bindVertexArray(null);\n    gl.bindBuffer(gl.ARRAY_BUFFER, null);\n    return vao;\n}\n\n\n//# sourceURL=webpack://wbgl/./src/lib/webglUtils.ts?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;