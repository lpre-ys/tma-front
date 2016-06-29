/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _tmaFrontComponent = __webpack_require__(3);
	
	var _tmaFrontComponent2 = _interopRequireDefault(_tmaFrontComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import parser from 'tk2k-message-assist';
	
	_mithril2.default.mount(document.getElementById('appContainer'), _tmaFrontComponent2.default);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = vendor_library;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	const tmaFrontComponent = {
	  view: () => {
	    return [(0, _mithril2.default)('.left', [(0, _mithril2.default)('h2', 'テキストファイル'), (0, _mithril2.default)('textarea#input')]), (0, _mithril2.default)('.right', [(0, _mithril2.default)('h2', 'プレビュー'), (0, _mithril2.default)('#messageList', [
	    // test
	    (0, _mithril2.default)('.messageWindow', [(0, _mithril2.default)('.faceBox', [(0, _mithril2.default)('img.face', { src: 'https://placehold.it/96x96' })]), (0, _mithril2.default)('ul.message', [(0, _mithril2.default)('li.line', [(0, _mithril2.default)('p.shadow', '１２３４５６７８９０１２３４５６７８９０'), (0, _mithril2.default)('p.text', '１２３４５６７８９０１２３４５６７８９０')]), (0, _mithril2.default)('li.line', [(0, _mithril2.default)('p.shadow', '１２３４５６７８９０１２３４５６７８９０'), (0, _mithril2.default)('p.text', '１２３４５６７８９０１２３４５６７８９０')]), (0, _mithril2.default)('li.line', [(0, _mithril2.default)('p.shadow', '１２３４５６７８９０１２３４５６７８９０'), (0, _mithril2.default)('p.text', '１２３４５６７８９０１２３４５６７８９０')]), (0, _mithril2.default)('li.line', [(0, _mithril2.default)('p.shadow', '１２３４５６７８９０１２３４５６７８９０'), (0, _mithril2.default)('p.text', '１２３４５６７８９０１２３４５６７８９０')])])]), (0, _mithril2.default)('.messageWindow', [(0, _mithril2.default)('.faceBox', [(0, _mithril2.default)('img.face', { src: 'https://placehold.it/96x96' })]), (0, _mithril2.default)('ul.message', [(0, _mithril2.default)('li.line', [(0, _mithril2.default)('p.shadow', '１２３４５６７８９０１２３４５６７８９０'), (0, _mithril2.default)('p.text', '１２３４５６７８９０１２３４５６７８９０')]), (0, _mithril2.default)('li.line', [(0, _mithril2.default)('p.shadow', '１２３４５６７８９０１２３４５６７８９０'), (0, _mithril2.default)('p.text', '１２３４５６７８９０１２３４５６７８９０')]), (0, _mithril2.default)('li.line', [(0, _mithril2.default)('p.shadow', '１２３４５６７８９０１２３４５６７８９０'), (0, _mithril2.default)('p.text', '１２３４５６７８９０１２３４５６７８９０')]), (0, _mithril2.default)('li.line', [(0, _mithril2.default)('p.shadow', '１２３４５６７８９０１２３４５６７８９０'), (0, _mithril2.default)('p.text', '１２３４５６７８９０１２３４５６７８９０')])])])])])];
	  }
	};
	
	exports.default = tmaFrontComponent;

/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map