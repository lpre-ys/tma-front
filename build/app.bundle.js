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
	
	var _zoomComponent = __webpack_require__(4);
	
	var _zoomComponent2 = _interopRequireDefault(_zoomComponent);
	
	var _loadComponent = __webpack_require__(5);
	
	var _loadComponent2 = _interopRequireDefault(_loadComponent);
	
	var _tmaFrontVm = __webpack_require__(6);
	
	var _tmaFrontVm2 = _interopRequireDefault(_tmaFrontVm);
	
	var _zoom = __webpack_require__(11);
	
	var _zoom2 = _interopRequireDefault(_zoom);
	
	var _scenario = __webpack_require__(12);
	
	var _scenario2 = _interopRequireDefault(_scenario);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	const tmaFrontComponent = {
	  controller: function () {
	    this.zoom = new _zoom2.default({ zoomLevel: 1 });
	    this.scenario = new _scenario2.default();
	    this.vm = new _tmaFrontVm2.default({ scenario: this.scenario });
	  },
	  view: ctrl => {
	    const windowList = ctrl.scenario.windowList;
	    const colors = ctrl.scenario.colors;
	    return [(0, _mithril2.default)('.left', [_mithril2.default.component(_loadComponent2.default, { vm: ctrl.vm.loadVM }), (0, _mithril2.default)('h2', 'シナリオファイル'), (0, _mithril2.default)('textarea#input', {
	      value: ctrl.scenario.scenarioText(),
	      onkeyup: _mithril2.default.withAttr('value', ctrl.scenario.scenarioText)
	    })]), (0, _mithril2.default)('.right', [(0, _mithril2.default)('h2', 'プレビュー'), _mithril2.default.component(_zoomComponent2.default, { zoom: ctrl.zoom }), (0, _mithril2.default)('#messageList', { class: `zoom${ ctrl.zoom.zoomLevel() }x` }, [windowList.map(messageBox => {
	      const face = messageBox.face;
	      return messageBox.messageList.map(message => {
	        let messageView = [];
	        let lineView = [];
	        if (face) {
	          // TODO
	          messageView.push((0, _mithril2.default)('.faceBox', [(0, _mithril2.default)('img.face', { src: 'https://placehold.it/96x96' })]));
	          lineView.push(makeMessageLi(face.name, colors));
	        }
	        message.line.forEach(lineText => {
	          lineView.push(makeMessageLi(lineText, colors));
	        });
	        messageView.push((0, _mithril2.default)('ul.message', lineView));
	        return (0, _mithril2.default)('.messageWindow', messageView);
	      });
	    })])])];
	  }
	};
	
	const domParser = new DOMParser();
	const makeMessageLi = (scenarioText, colors) => {
	  let html = scenarioText;
	  // 独自タグを全てspanに変換
	  Object.keys(colors).forEach(color => {
	    const number = colors[color];
	    const colorTagRegExp = new RegExp(`<${ color }>`, 'g');
	    html = html.replace(colorTagRegExp, `<color${ number }>`);
	  });
	  html = html.replace(startTagRegExp, '<span class="$1">').replace(endTagRegExp, '</span>');
	  // 1回DOMParserに読ませてタグを除去する
	  const dom = domParser.parseFromString(html, 'text/html');
	  const text = dom.body.innerText;
	
	  return (0, _mithril2.default)('li.line', [(0, _mithril2.default)('p.shadow', text), (0, _mithril2.default)('p.text', _mithril2.default.trust(html))]);
	};
	
	const startTagRegExp = /<([a-z0-9\-\_]+)>/g;
	const endTagRegExp = /<\/([a-z0-9\-\_]+)>/g;
	
	exports.default = tmaFrontComponent;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	const zoomComponent = {
	  controller: function (args) {
	    this.zoom = args.zoom;
	  },
	  view: ctrl => {
	    return (0, _mithril2.default)('.zoomBox', ['ズーム：', (0, _mithril2.default)('select', {
	      name: 'zoom',
	      value: ctrl.zoom.zoomLevel(),
	      onchange: _mithril2.default.withAttr('value', ctrl.zoom.zoomLevel)
	    }, [(0, _mithril2.default)('option', { value: 1 }, '1x'), (0, _mithril2.default)('option', { value: 2 }, '2x')])]);
	  }
	};
	
	exports.default = zoomComponent;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	const loadComponent = {
	  controller: function (data) {
	    this.vm = data.vm;
	    this.tColor = false;
	    this.noop = e => {
	      e.preventDefault();
	    };
	  },
	  view: ctrl => {
	    const settingList = [];
	    if (ctrl.vm.status()) {
	      // systemImg
	      const systemImg = ctrl.vm.systemImg();
	      const systemImgView = (0, _mithril2.default)('.systemImg', [(0, _mithril2.default)('h3', 'システムグラフィック'), (0, _mithril2.default)('img', {
	        src: systemImg.dataUrl
	      }), (0, _mithril2.default)('.tColor', ['透過色: ', (0, _mithril2.default)('span', {
	        style: { color: systemImg.tColorCss }
	      }, `■${ systemImg.tColorCss }`)]), (0, _mithril2.default)('h4', 'メッセージ枠ベース画像'), (0, _mithril2.default)('img', {
	        src: systemImg.messageWindow
	      })]);
	      settingList.push(systemImgView);
	    }
	    return (0, _mithril2.default)('.loadComponent', [(0, _mithril2.default)('h2', '設定ファイル'), (0, _mithril2.default)('button.checkConfig', '現在の設定の確認'), (0, _mithril2.default)('.settingList', {}, settingList), (0, _mithril2.default)('.loadConfig', {
	      ondragover: ctrl.noop,
	      ondrop: ctrl.vm.dropFiles.bind(ctrl.vm)
	    }, 'ここに設定ファイルをまとめてドロップしてください。')]);
	  }
	};
	
	exports.default = loadComponent;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _loadVm = __webpack_require__(7);
	
	var _loadVm2 = _interopRequireDefault(_loadVm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class TmaFrontVM {
	  constructor(data) {
	    this.loadVM = new _loadVm2.default(data.scenario);
	  }
	}
	exports.default = TmaFrontVM;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _systemImg = __webpack_require__(8);
	
	var _systemImg2 = _interopRequireDefault(_systemImg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class LoadVM {
	  constructor(scenario) {
	    // init member
	    this.style = _mithril2.default.prop();
	    this.status = _mithril2.default.prop(false);
	    this.peoples = [];
	    this.scenario = scenario;
	    this.systemImg = _mithril2.default.prop(false);
	    this.png = [];
	    // set styleSheet
	    this.styleSheet = false;
	    const styleSheets = document.styleSheets;
	    for (let i = 0; i < styleSheets.length; i++) {
	      if (styleSheets[i].href != null && styleSheets[i].href.endsWith('style.css')) {
	        this.styleSheet = styleSheets[i];
	      }
	    }
	  }
	
	  dropFiles(e) {
	    e.preventDefault();
	    const promises = [];
	    const files = e.dataTransfer.files;
	    for (let i = 0; i < files.length; i++) {
	      const file = files[i];
	      const ext = getFileExt(file.name);
	      if (file.name == 'style.yaml') {
	        promises.push(this._readStyleYaml(file));
	      } else if (ext == 'png') {
	        promises.push(this._readPng(file));
	      } else if (['yaml', 'yml'].includes(ext)) {
	        promises.push(this._readPeopleYaml(file));
	      }
	    }
	    _mithril2.default.sync(promises).then(() => {
	      this.scenario.setConfig(this.style(), this.peoples);
	      this.status(true);
	      // set CSS images
	      if (this.systemImg()) {
	        this._editCss('.messageWindow', 'border-image-source', `url(${ this.systemImg().messageWindow })`);
	        this._editCss('.text', 'background-image', `url(${ this.systemImg().defaultText })`);
	        for (let i = 0; i < 20; i++) {
	          this._editCss(`.color${ i }`, 'background-image', `url(${ this.systemImg().getTextColor(i) })`);
	        }
	      }
	      // redraw
	      _mithril2.default.redraw();
	    });
	  }
	
	  _editCss(selector, name, value) {
	    this.styleSheet.insertRule(`${ selector } { ${ name }: ${ value }}`, this.styleSheet.cssRules.length);
	  }
	
	  _readStyleYaml(file) {
	    const reader = new FileReader();
	    reader.readAsText(file);
	
	    const deferred = _mithril2.default.deferred();
	    reader.onloadend = e => {
	      this.style(e.target.result);
	      deferred.resolve(true);
	    };
	    reader.onerror = deferred.reject;
	
	    return deferred.promise;
	  }
	
	  _readPeopleYaml(file) {
	    const reader = new FileReader();
	    reader.readAsText(file);
	
	    const deferred = _mithril2.default.deferred();
	    reader.onloadend = e => {
	      deferred.resolve(true);
	      this.peoples.push(e.target.result);
	    };
	    reader.onerror = deferred.reject;
	
	    return deferred.promise;
	  }
	
	  _readPng(file) {
	    const deferred = _mithril2.default.deferred();
	    const reader = new FileReader();
	    const systemImg = new _systemImg2.default(deferred);
	    reader.readAsArrayBuffer(file);
	    this.systemImg(systemImg); //TODO
	
	    reader.onloadend = systemImg.loadEnd.bind(systemImg);
	    reader.onerror = deferred.reject;
	
	    return deferred.promise;
	  }
	}
	exports.default = LoadVM;
	// import Png from '../model/png';
	
	const getFileExt = filename => {
	  const dotIndex = filename.lastIndexOf('.');
	  if (dotIndex < 0) {
	    throw new Error('拡張子が有りません');
	  }
	  return filename.substr(dotIndex + 1);
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _png = __webpack_require__(9);
	
	var _png2 = _interopRequireDefault(_png);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class SystemImg extends _png2.default {
	  constructor(deferred) {
	    super(deferred);
	    this.messageWindowDataUrl = false;
	  }
	
	  get messageWindow() {
	    if (this.file == false) {
	      return false;
	    }
	    if (this.messageWindowDataUrl == false) {
	      // make messageWindow
	      const canvas = this._makeCanvas(32, 32);
	
	      // frame transparent set
	      const ctx = canvas.getContext('2d');
	      ctx.drawImage(this.img, 32, 0, 32, 32, 0, 0, 32, 32);
	      const imageData = ctx.getImageData(0, 0, 32, 32);
	      const tColor = this.palette[0];
	      for (let y = 0; y < canvas.height; y++) {
	        for (let x = 0; x < canvas.width; x++) {
	          const offset = (y * canvas.width + x) * 4;
	          // 中央
	          if (x >= 8 && x <= 24 && y >= 8 && y <= 24) {
	            imageData.data[offset + 3] = 0;
	            continue;
	          }
	          const r = imageData.data[offset];
	          const g = imageData.data[offset + 1];
	          const b = imageData.data[offset + 2];
	          if (tColor.r == r && tColor.g == g && tColor.b == b) {
	            imageData.data[offset + 3] = 0;
	          }
	        }
	      }
	
	      // frame serialize
	      ctx.putImageData(imageData, 0, 0);
	      const frame = new Image();
	      frame.src = canvas.toDataURL();
	
	      // draw background
	      ctx.drawImage(this.img, 0, 0, 32, 32, 0, 0, 32, 32);
	      // draw frame
	      ctx.drawImage(frame, 0, 0);
	
	      this.messageWindowDataUrl = canvas.toDataURL();
	    }
	    return this.messageWindowDataUrl;
	  }
	
	  get defaultText() {
	    return this.getTextColor(0);
	  }
	
	  getTextColor(number) {
	    // make background
	    const canvas = this._makeCanvas(16, 16);
	    const ctx = canvas.getContext('2d');
	    const x = 16 * (number % 10);
	    const y = 48 + Math.floor(number / 10) * 16;
	    console.log(x);
	    console.log(y);
	    ctx.drawImage(this.img, x, y, 16, 16, 0, 0, 16, 16);
	
	    return canvas.toDataURL();
	  }
	
	  _makeCanvas(w, h) {
	    const canvas = document.createElement('canvas');
	    canvas.width = w;
	    canvas.height = h;
	
	    return canvas;
	  }
	}
	
	exports.default = SystemImg; // const canvasTest = (img) => {
	//   const canvas = document.createElement('canvas');
	//   // test
	//   canvas.width = 5;
	//   canvas.height = 33;
	//   const ctx = canvas.getContext('2d');
	//   ctx.drawImage(img, 0, 0, 5, 33);
	//   return canvas.toDataURL();
	// };

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _base64Arraybuffer = __webpack_require__(10);
	
	var _base64Arraybuffer2 = _interopRequireDefault(_base64Arraybuffer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class Png {
	  constructor(deferred) {
	    // private init
	    this.file = false;
	    this.dataUrl = false;
	    this.palette = [];
	    this.deferred = deferred;
	    this.img = false;
	  }
	
	  get imageInfo() {
	    return {
	      dataUrl: this.dataUrl,
	      palette: this.palette
	    };
	  }
	
	  loadEnd(e) {
	    if (e.target.readyState == FileReader.DONE) {
	      this.file = e.target.result;
	      // dataUrl変換、IMG要素追加
	      this.dataUrl = 'data:image/png;base64,' + _base64Arraybuffer2.default.encode(this.file);
	      this.img = new Image();
	      this.img.src = this.dataUrl;
	      // パレット読み込み
	      this.palette = this.readPlte(pngInfo.signature);
	      // resolve
	      this.deferred.resolve(true);
	    }
	  }
	
	  readPlte(offset) {
	    const buffer = this.file;
	    if (offset >= buffer.byteLength) {
	      return false;
	    }
	    const dv = new DataView(buffer);
	    const length = dv.getUint32(offset);
	    const name = [];
	    for (let i = 0; i < 4; i++) {
	      name.push(dv.getUint8(offset + pngInfo.chunk.length + i));
	    }
	    if (String.fromCharCode.apply(null, name) == 'PLTE') {
	      const palette = [];
	      const pOffset = offset + pngInfo.chunk.length + pngInfo.chunk.name;
	      const pLength = length / 3;
	      for (let i = 0; i < pLength; i++) {
	        palette.push({
	          r: dv.getUint8(pOffset + i * 3),
	          g: dv.getUint8(pOffset + i * 3 + 1),
	          b: dv.getUint8(pOffset + i * 3 + 2)
	        });
	      }
	      return palette;
	    } else {
	      return this.readPlte(offset + pngInfo.chunk.length + pngInfo.chunk.name + length + pngInfo.chunk.crc);
	    }
	  }
	
	  get tColorCss() {
	    if (!this.palette) {
	      return '';
	    }
	    const c = this.palette[0];
	    return `rgb(${ c.r }, ${ c.g }, ${ c.b })`;
	  }
	}
	
	exports.default = Png;
	const pngInfo = {
	  signature: 8,
	  chunk: {
	    length: 4,
	    name: 4,
	    crc: 4
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	/*
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */
	(function () {
	  "use strict";
	
	  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	
	  // Use a lookup table to find the index.
	  var lookup = new Uint8Array(256);
	  for (var i = 0; i < chars.length; i++) {
	    lookup[chars.charCodeAt(i)] = i;
	  }
	
	  exports.encode = function (arraybuffer) {
	    var bytes = new Uint8Array(arraybuffer),
	        i,
	        len = bytes.length,
	        base64 = "";
	
	    for (i = 0; i < len; i += 3) {
	      base64 += chars[bytes[i] >> 2];
	      base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
	      base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
	      base64 += chars[bytes[i + 2] & 63];
	    }
	
	    if (len % 3 === 2) {
	      base64 = base64.substring(0, base64.length - 1) + "=";
	    } else if (len % 3 === 1) {
	      base64 = base64.substring(0, base64.length - 2) + "==";
	    }
	
	    return base64;
	  };
	
	  exports.decode = function (base64) {
	    var bufferLength = base64.length * 0.75,
	        len = base64.length,
	        i,
	        p = 0,
	        encoded1,
	        encoded2,
	        encoded3,
	        encoded4;
	
	    if (base64[base64.length - 1] === "=") {
	      bufferLength--;
	      if (base64[base64.length - 2] === "=") {
	        bufferLength--;
	      }
	    }
	
	    var arraybuffer = new ArrayBuffer(bufferLength),
	        bytes = new Uint8Array(arraybuffer);
	
	    for (i = 0; i < len; i += 4) {
	      encoded1 = lookup[base64.charCodeAt(i)];
	      encoded2 = lookup[base64.charCodeAt(i + 1)];
	      encoded3 = lookup[base64.charCodeAt(i + 2)];
	      encoded4 = lookup[base64.charCodeAt(i + 3)];
	
	      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
	      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
	      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
	    }
	
	    return arraybuffer;
	  };
	})();

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class Zoom {
	  constructor(data) {
	    data = data || {};
	    this.zoomLevel = _mithril2.default.prop(data.zoomLevel || 1);
	  }
	
	}
	exports.default = Zoom;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _tk2kMessageAssist = __webpack_require__(13);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class Scenario {
	  constructor() {
	    this.parser = false;
	    this.scenarioText = _mithril2.default.prop('');
	  }
	
	  get windowList() {
	    const scenario = this.scenarioText();
	
	    if (scenario) {
	      return this.parser.parse(scenario);
	    }
	
	    return [];
	  }
	
	  setConfig(style, peoples) {
	    this.parser = new _tk2kMessageAssist.ScenarioParser(style, peoples);
	  }
	
	  get colors() {
	    if (this.parser) {
	      console.log(this.parser);
	      return this.parser.config.colors;
	    }
	    return [];
	  }
	}
	exports.default = Scenario;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _scenarioParser = __webpack_require__(14);
	
	var _scenarioParser2 = _interopRequireDefault(_scenarioParser);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	module.exports = {
	  ScenarioParser: _scenarioParser2.default
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _message = __webpack_require__(15);
	
	var _message2 = _interopRequireDefault(_message);
	
	var _messageBlock = __webpack_require__(16);
	
	var _messageBlock2 = _interopRequireDefault(_messageBlock);
	
	var _config = __webpack_require__(17);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	// 単独タグ正規表現
	var noEndTagRegExp = /<([a-z]+) \/>/g;
	// 顔グラ変更命令正規表現
	var faceCommandRegExp = /^\[([^\]]+)]$/;
	
	var ScenarioParser = function () {
	  function ScenarioParser(style) {
	    var _this = this;
	
	    var faces = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	    _classCallCheck(this, ScenarioParser);
	
	    this.continueTag = '';
	    this.config = new _config2.default();
	    this.config.loadStyleYaml(style);
	    faces.forEach(function (face) {
	      _this.config.loadPersonYaml(face);
	    });
	  }
	
	  _createClass(ScenarioParser, [{
	    key: 'parse',
	    value: function parse(input) {
	      var _this2 = this;
	
	      // trimと配列化
	      var textList = input.split("\n").map(function (value) {
	        return value.trim();
	      });
	
	      // 継続タグの初期化
	      this.continuetag = '';
	
	      // limit別に分ける
	      var result = [];
	      var tmp = [];
	      var block = new _messageBlock2.default(false);
	      textList.forEach(function (text) {
	        if (_this2.config.hasFace && faceCommandRegExp.test(text)) {
	          // 顔グラ変更
	          var faceCommand = text.substr(1, text.length - 2);
	          var faceConfig = _this2.config.getFace(faceCommand);
	          if (!faceConfig) {
	            throw new Error('未知の顔グラフィックです。：' + faceCommand);
	          }
	          // メッセージブロックの作り直し
	          if (tmp.length > 0) {
	            block.addMessage(_this2._tagFormat(tmp));
	            tmp = [];
	          }
	          if (block.hasMessage()) {
	            result.push(block);
	          }
	          block = new _messageBlock2.default(faceConfig);
	          return; //continue
	        }
	        tmp.push(text);
	        if (tmp.length == _this2.config.lineLimit) {
	          block.addMessage(_this2._tagFormat(tmp));
	          tmp = [];
	        }
	      });
	      if (tmp.length > 0) {
	        block.addMessage(this._tagFormat(tmp));
	      }
	      if (block.hasMessage()) {
	        result.push(block);
	      }
	
	      return result;
	    }
	  }, {
	    key: '_tagFormat',
	    value: function _tagFormat(textList) {
	      var _this3 = this;
	
	      // 前回からの継続タグを追加
	      var input = this.continueTag + textList.join("\n").replace(noEndTagRegExp, "<$1></$1>");
	      // 継続タグのチェック
	      var stack = [];
	      var tags = input.match(/<\/?[a-z]+>/g);
	      if (tags) {
	        tags.forEach(function (tag) {
	          if (tag.startsWith('</')) {
	            // 閉じタグ
	            var lastTag = stack.pop(tag);
	            if (lastTag != tag.substr(2, tag.length - 3)) {
	              throw new Error('タグの対応がおかしいです。: ' + lastTag);
	            }
	          } else {
	            // 開始タグ
	            stack.push(tag.substr(1, tag.length - 2));
	          }
	        });
	      }
	      if (stack.length > 0) {
	        (function () {
	          var prev = '';
	          _this3.continueTag = stack.filter(function (v) {
	            if (prev != v) {
	              prev = v;
	              return true;
	            }
	          }).map(function (v) {
	            return '<' + v + '>';
	          }).join('');
	        })();
	      }
	
	      // 最終出力
	      var output = input + stack.reverse().map(function (v) {
	        return '</' + v + '>';
	      }).join('');
	
	      return new _message2.default(output.trim().split("\n"));
	    }
	  }]);
	
	  return ScenarioParser;
	}();
	
	exports.default = ScenarioParser;

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var Message = function Message(textList) {
	  _classCallCheck(this, Message);
	
	  this.line = textList;
	};
	
	exports.default = Message;

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var MessageBlock = function () {
	  function MessageBlock(face) {
	    _classCallCheck(this, MessageBlock);
	
	    this.face = face;
	    this.messageList = [];
	  }
	
	  _createClass(MessageBlock, [{
	    key: "addMessage",
	    value: function addMessage(message) {
	      this.messageList.push(message);
	    }
	  }, {
	    key: "hasMessage",
	    value: function hasMessage() {
	      return this.messageList.length > 0;
	    }
	  }]);
	
	  return MessageBlock;
	}();
	
	exports.default = MessageBlock;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _jsYaml = __webpack_require__(18);
	
	var _jsYaml2 = _interopRequireDefault(_jsYaml);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var Config = function () {
	  function Config() {
	    _classCallCheck(this, Config);
	
	    this._config = {
	      color: {},
	      style: {},
	      face: {}
	    };
	  }
	
	  _createClass(Config, [{
	    key: 'getFace',
	    value: function getFace(faceKey) {
	      if (!this.hasFace) {
	        return false;
	      }
	
	      return this._config.face[faceKey] ? this._config.face[faceKey] : false;
	    }
	  }, {
	    key: 'loadStyleYaml',
	    value: function loadStyleYaml(yaml) {
	      var yamlObj = _jsYaml2.default.load(yaml);
	      // 色設定はそのまま読み込む
	      this._config.color = yamlObj.color ? yamlObj.color : false;
	      // スタイル設定はそのまま読み込む
	      this._config.style = yamlObj.style ? yamlObj.style : false;
	      // 顔設定の初期化
	      this._config.face = {};
	    }
	  }, {
	    key: 'loadPersonYaml',
	    value: function loadPersonYaml(yaml) {
	      var _this = this;
	
	      var yamlObj = _jsYaml2.default.load(yaml);
	      if (yamlObj.person) {
	        if (!this._config.style) {
	          // スタイル設定が無い場合、エラー
	          throw new Error('スタイル設定が足りてません');
	        }
	        Object.keys(yamlObj.person).forEach(function (name) {
	          var person = yamlObj.person[name];
	          Object.keys(person.faces).forEach(function (faceName) {
	            var face = person.faces[faceName];
	            var templateConfig = _this._config.style.template.face;
	            var nameConfig = _this._config.style.display.name;
	            var faceKey = '' + name + templateConfig.prefix + faceName + templateConfig.suffix;
	            var color = face.color || person.color || false;
	            var displayName = face.name || person.name;
	            if (color && nameConfig.colorScope == 'inner') {
	              displayName = nameConfig.prefix + '<' + color + '>' + displayName + '</' + color + '>' + nameConfig.suffix;
	            } else if (color && nameConfig.colorScope == 'outer') {
	              displayName = '<' + color + '>' + nameConfig.prefix + displayName + nameConfig.suffix + '</' + color + '>';
	            } else {
	              displayName = '' + nameConfig.prefix + displayName + nameConfig.suffix;
	            }
	            face.name = displayName;
	            _this._config.face[faceKey] = face;
	          });
	        });
	      }
	    }
	  }, {
	    key: 'hasFace',
	    get: function get() {
	      return Object.keys(this._config.face).length > 0;
	    }
	  }, {
	    key: 'faceKeyList',
	    get: function get() {
	      if (!this.hasFace) {
	        return [];
	      }
	      return Object.keys(this._config.face);
	    }
	  }, {
	    key: 'lineLimit',
	    get: function get() {
	      return this._config.style.display.lineLimit;
	    }
	  }, {
	    key: 'colors',
	    get: function get() {
	      return this._config.color;
	    }
	  }]);
	
	  return Config;
	}();
	
	exports.default = Config;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(3);

/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map