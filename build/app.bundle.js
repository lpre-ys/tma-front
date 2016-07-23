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
	
	_mithril2.default.mount(document.getElementById('root'), _tmaFrontComponent2.default);

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
	
	var _messageListComponent = __webpack_require__(8);
	
	var _messageListComponent2 = _interopRequireDefault(_messageListComponent);
	
	var _yamlGeneratorComponent = __webpack_require__(30);
	
	var _yamlGeneratorComponent2 = _interopRequireDefault(_yamlGeneratorComponent);
	
	var _tmaFrontVm = __webpack_require__(11);
	
	var _tmaFrontVm2 = _interopRequireDefault(_tmaFrontVm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	const tmaFrontComponent = {
	  controller: function () {
	    this.vm = new _tmaFrontVm2.default();
	  },
	  view: ctrl => {
	    const vm = ctrl.vm;
	    return [(0, _mithril2.default)('.frame', (0, _mithril2.default)('#appContainer', [(0, _mithril2.default)('.left', [_mithril2.default.component(_loadComponent2.default, { vm: vm }), (0, _mithril2.default)('h2', 'シナリオスクリプト'), (0, _mithril2.default)('textarea#input', {
	      value: vm.scenario.scenarioText(),
	      onkeyup: _mithril2.default.withAttr('value', vm.setScenarioText, vm)
	    }), (0, _mithril2.default)('h2', 'TKcode'), (0, _mithril2.default)('textarea#tkScript', {
	      readonly: 'readonly',
	      onfocus: tmaFrontComponent.selectText
	    }, [vm.scenario.tkScript])]), (0, _mithril2.default)('.right', [(0, _mithril2.default)('h2', 'プレビュー'), _mithril2.default.component(_zoomComponent2.default, { vm: vm }), _mithril2.default.component(_messageListComponent2.default, { vm: vm })])])), (0, _mithril2.default)('#tools', [_mithril2.default.component(_yamlGeneratorComponent2.default, { status: vm.yamlGeneratorStatus })])];
	  },
	  selectText: e => {
	    e.target.select();
	  }
	};
	
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
	  controller: function (data) {
	    this.vm = data.vm;
	  },
	  view: ctrl => {
	    const vm = ctrl.vm;
	
	    return (0, _mithril2.default)('.zoomBox', ['ズーム：', (0, _mithril2.default)('select', {
	      name: 'zoom',
	      value: vm.zoom.zoomLevel(),
	      onchange: _mithril2.default.withAttr('value', vm.zoom.zoomLevel)
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
	
	var _systemImgComponent = __webpack_require__(6);
	
	var _systemImgComponent2 = _interopRequireDefault(_systemImgComponent);
	
	var _faceImgComponent = __webpack_require__(7);
	
	var _faceImgComponent2 = _interopRequireDefault(_faceImgComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	const loadComponent = {
	  controller: function (data) {
	    this.vm = data.vm;
	    this.buttonStatus = _mithril2.default.prop(false);
	    this.tColor = false;
	    this.noop = e => {
	      e.preventDefault();
	    };
	  },
	  view: ctrl => {
	    const settingList = [];
	    const vm = ctrl.vm;
	    if (vm.loadStatus) {
	      // systemImg
	      settingList.push(_mithril2.default.component(_systemImgComponent2.default, { vm: vm }));
	      // face graphics
	      settingList.push(_mithril2.default.component(_faceImgComponent2.default, { vm: vm }));
	    }
	    return (0, _mithril2.default)('.loadComponent', [(0, _mithril2.default)('.header', [(0, _mithril2.default)('h2', '設定ファイル'), (0, _mithril2.default)('button.tool', {
	      onclick: () => {
	        ctrl.vm.yamlGeneratorStatus('enable');
	      }
	    }, 'ジェネレータ')]), (0, _mithril2.default)('button.checkConfig', {
	      class: vm.loadStatus ? 'enable' : 'disable',
	      'data-button-status': ctrl.buttonStatus() == 'on' ? 'off' : 'on',
	      onclick: _mithril2.default.withAttr('data-button-status', ctrl.buttonStatus)
	    }, '設定の' + (ctrl.buttonStatus() == 'on' ? '非表示' : '表示')), (0, _mithril2.default)('.settingList', {
	      class: ctrl.buttonStatus() == 'on' ? 'enable' : 'disable'
	    }, settingList), (0, _mithril2.default)('.loadConfig', {
	      class: vm.loadStatus ? 'disable' : 'enable',
	      ondragover: ctrl.noop,
	      ondrop: vm.dropFiles.bind(vm)
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
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	const systemImgComponent = {
	  controller: function (data) {
	    this.vm = data.vm;
	  },
	  view: ctrl => {
	    const vm = ctrl.vm;
	    const systemImg = vm.systemImg;
	    const colors = vm.config ? vm.config.colors : [];
	    return (0, _mithril2.default)('.systemImg', [(0, _mithril2.default)('h3', 'システムグラフィック'), (0, _mithril2.default)('.systemItems', [(0, _mithril2.default)('img', {
	      src: systemImg.dataUrl
	    }), (0, _mithril2.default)('.tColor', ['透過色: ', (0, _mithril2.default)('br'), (0, _mithril2.default)('span', {
	      style: { color: systemImg.tColorCss }
	    }, `■${ systemImg.tColorCss }`)]), (0, _mithril2.default)('div', ['枠:', (0, _mithril2.default)('br'), (0, _mithril2.default)('img', {
	      src: systemImg.messageWindow
	    })])]), (0, _mithril2.default)('h4', '色タグ'), (0, _mithril2.default)('.colorTagList.messageWindow', [(0, _mithril2.default)('ul.message', Object.keys(colors).map(color => {
	      const number = colors[color];
	      return (0, _mithril2.default)('li.line', (0, _mithril2.default)('p.shadow', `${ number }: <${ color }> `), (0, _mithril2.default)('p.text', (0, _mithril2.default)('span', { class: `color${ number }` }, `${ number }: <${ color }> `)));
	    }))])]);
	  }
	};
	
	exports.default = systemImgComponent;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	const faceImgComponent = {
	  controller: function (data) {
	    this.vm = data.vm;
	  },
	  view: ctrl => {
	    const vm = ctrl.vm;
	    const faceListView = vm.config.faceKeyList.map(faceKey => {
	      return (0, _mithril2.default)('li', [(0, _mithril2.default)('p', faceKey), (0, _mithril2.default)('.faceImg', { style: vm.getFaceStyle(faceKey) })]);
	    });
	    return (0, _mithril2.default)('.faceSetting', [(0, _mithril2.default)('h3', '顔グラフィック'), (0, _mithril2.default)('ul.faceList', faceListView)]);
	  }
	};
	
	exports.default = faceImgComponent;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _messageComponent = __webpack_require__(9);
	
	var _messageComponent2 = _interopRequireDefault(_messageComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	const messageListComponent = {
	  controller: function (data) {
	    this.vm = data.vm;
	  },
	  view: ctrl => {
	    const vm = ctrl.vm;
	    const windowList = vm.scenario.windowList;
	    const colors = vm.config ? vm.config.colors : [];
	    return (0, _mithril2.default)('#messageList', { class: `zoom${ vm.zoom.zoomLevel() }x` }, windowList.map(windowObj => {
	      let messageView = [];
	      let commentsView = [];
	
	      // コメント
	      windowObj.comments.forEach(comment => {
	        commentsView.push((0, _mithril2.default)('p.comment', comment));
	      });
	
	      // 顔グラフィック
	      if (windowObj.face) {
	        const face = windowObj.face;
	        const classList = [];
	        if (face.mirror) {
	          classList.push('mirror');
	        }
	        if (face.pos) {
	          classList.push('posRight');
	        }
	        messageView.push((0, _mithril2.default)('.faceBox', {
	          class: classList.join(' ')
	        }, [(0, _mithril2.default)('.faceImg', {
	          style: vm.getFaceStyle(face)
	        })]));
	      }
	      // テキスト
	      messageView.push((0, _mithril2.default)(_messageComponent2.default, { line: windowObj.line(), colors: colors }));
	
	      // 全体を.messageWindowでラップして返す
	      const messageWindow = (0, _mithril2.default)('.messageWindow', {
	        class: windowObj.iconStatus ? 'showIcon' : '',
	        onclick: windowObj.toggleIcon.bind(windowObj)
	      }, messageView);
	      return commentsView.length > 0 ? [commentsView, messageWindow] : messageWindow;
	    }));
	  }
	};
	
	exports.default = messageListComponent;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _const = __webpack_require__(10);
	
	var _const2 = _interopRequireDefault(_const);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	const messageComponent = {
	  controller: function (data) {
	    this.vm = data.vm;
	  },
	  view: (ctrl, args) => {
	    if (!args || !Array.isArray(args.line)) {
	      return;
	    }
	    const colors = args.colors || {};
	    const childViewList = args.line.map(line => {
	      return (0, _mithril2.default)('li.line', [(0, _mithril2.default)('p.shadow', line.text()), (0, _mithril2.default)('p.text', buildHtml(line.line(), colors))]);
	    });
	    return (0, _mithril2.default)('ul.message', childViewList);
	  }
	};
	
	const buildHtml = (obj, colors) => {
	  const ret = [];
	  if (!Array.isArray(obj)) {
	    obj = [obj];
	  }
	  obj.forEach(obj => {
	    if (typeof obj === 'string') {
	      ret.push(obj);
	    } else if (Object.keys(colors).includes(obj.tag)) {
	      // 色タグ
	      ret.push((0, _mithril2.default)('span', { class: `color${ colors[obj.tag] }` }, buildHtml(obj.body, colors)));
	    } else if (Object.keys(_const2.default.controlTags).includes(obj.tag)) {
	      // 制御文字タグ
	      ret.push((0, _mithril2.default)('i', { class: obj.tag }, buildHtml(obj.body, colors)));
	    } else {
	      // その他（瞬間表示タグなど）
	      ret.push((0, _mithril2.default)('span', { class: obj.tag }, buildHtml(obj.body, colors)));
	    }
	  });
	  return ret;
	};
	
	exports.default = messageComponent;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	const Const = {
	  face: {
	    width: 48,
	    height: 48
	  },
	  color: {
	    max: 19
	  },
	  controlTags: {
	    stop: 's',
	    wait: 'w',
	    q_wait: 'q',
	    close: 'c'
	  }
	};
	
	exports.default = Const;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _png = __webpack_require__(12);
	
	var _png2 = _interopRequireDefault(_png);
	
	var _systemImg = __webpack_require__(14);
	
	var _systemImg2 = _interopRequireDefault(_systemImg);
	
	var _scenario = __webpack_require__(16);
	
	var _scenario2 = _interopRequireDefault(_scenario);
	
	var _tk2kMessageAssist = __webpack_require__(20);
	
	var _styleSheet = __webpack_require__(28);
	
	var _styleSheet2 = _interopRequireDefault(_styleSheet);
	
	var _zoom = __webpack_require__(29);
	
	var _zoom2 = _interopRequireDefault(_zoom);
	
	var _const = __webpack_require__(10);
	
	var _const2 = _interopRequireDefault(_const);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class TmaFrontVM {
	  constructor(data = {}) {
	    data.scenario = data.scenario || {};
	    // init member
	    this.scenario = new _scenario2.default(data.scenario);
	    this.parser = false;
	    // for yamlGenerator
	    this.yamlGeneratorStatus = _mithril2.default.prop('disable');
	    // for load setting
	    this.loadStatus = false;
	    this.systemImg = false;
	    this.faceImgs = {};
	    this.config = false;
	    // get styleSheet
	    this.styleSheet = new _styleSheet2.default('style.css');
	    this.zoom = new _zoom2.default({ zoomLevel: 1 });
	  }
	
	  dropFiles(e) {
	    // イベントの停止
	    e.preventDefault();
	    // ファイル読み込みのpromise設定
	    const promises = [];
	    const files = e.dataTransfer.files;
	    for (let i = 0; i < files.length; i++) {
	      const file = files[i];
	      const ext = getFileExt(file.name);
	      if (file.name == 'style.yaml') {
	        promises.push(this._readStyleYaml(file));
	      } else if (file.name == 'system.png') {
	        promises.push(this._readSystemImg(file));
	      } else if (ext == 'png') {
	        promises.push(this._readPng(file, file.name));
	      } else if (['yaml', 'yml'].includes(ext)) {
	        promises.push(this._readPeopleYaml(file));
	      }
	    }
	    // 全てのファイルの読み込みが終わったら、設定の取り込みを行う
	    _mithril2.default.sync(promises).then(args => {
	      let styleYaml = false;
	      const poepleYamls = [];
	      args.forEach(({ type, file }) => {
	        if (type == 'png') {
	          if (file instanceof _systemImg2.default) {
	            this.systemImg = file;
	          } else {
	            this.faceImgs[file.filename] = file;
	          }
	        } else if (type == 'styleYaml') {
	          styleYaml = file;
	        } else if (type == 'peopleYaml') {
	          poepleYamls.push(file);
	        }
	      });
	      this.parser = new _tk2kMessageAssist.ScenarioParser(styleYaml, poepleYamls);
	      this.config = this.parser.config;
	      this.loadStatus = true;
	      // set system images css
	      if (this.systemImg) {
	        this.styleSheet.editCss('.messageWindow', 'border-image-source', `url(${ this.systemImg.messageWindow })`);
	        this.styleSheet.editCss('.text', 'background-image', `url(${ this.systemImg.defaultText })`);
	        for (let i = 0; i < _const2.default.color.max + 1; i++) {
	          this.styleSheet.editCss(`.color${ i }`, 'background-image', `url(${ this.systemImg.getTextColor(i) })`);
	        }
	        this.styleSheet.editCss(':root', '--control-base-color', this.systemImg.controlCharColor);
	        this.styleSheet.editCss(':root', '--control-sub-color', this.systemImg.controlCharBgColor);
	      }
	      this.parse();
	      // redraw
	      _mithril2.default.redraw();
	    });
	  }
	
	  setScenarioText(v) {
	    if (v == this.scenario.scenarioText()) {
	      // 変更が無い場合何もしない
	      return;
	    }
	    this.scenario.scenarioText(v);
	    this.parse();
	  }
	
	  parse() {
	    this.scenario.parse(this.parser);
	  }
	
	  getFaceStyle(face) {
	    const faceConfig = typeof face == 'string' ? this.config.getFace(face) : face;
	    const filename = faceConfig.filename + (!faceConfig.filename.endsWith('.png') ? '.png' : '');
	    const dataUrl = this.faceImgs[filename].dataUrl;
	    const posx = faceConfig.number % 4 * _const2.default.face.width;
	    const posy = Math.floor(faceConfig.number / 4) * _const2.default.face.height;
	    return {
	      backgroundImage: `url(${ dataUrl })`,
	      backgroundPosition: `-${ posx }px -${ posy }px`
	    };
	  }
	
	  _readStyleYaml(file) {
	    const reader = new FileReader();
	    reader.readAsText(file);
	
	    const deferred = _mithril2.default.deferred();
	    reader.onloadend = e => {
	      deferred.resolve({
	        type: 'styleYaml',
	        file: e.target.result
	      });
	    };
	    reader.onerror = deferred.reject;
	
	    return deferred.promise;
	  }
	
	  _readPeopleYaml(file) {
	    const reader = new FileReader();
	    reader.readAsText(file);
	
	    const deferred = _mithril2.default.deferred();
	    reader.onloadend = e => {
	      deferred.resolve({
	        type: 'peopleYaml',
	        file: e.target.result
	      });
	    };
	    reader.onerror = deferred.reject;
	
	    return deferred.promise;
	  }
	
	  _readSystemImg(file) {
	    const deferred = _mithril2.default.deferred();
	    const reader = new FileReader();
	    const systemImg = new _systemImg2.default(deferred, 'system.png');
	    reader.readAsArrayBuffer(file);
	
	    reader.onloadend = systemImg.loadEnd.bind(systemImg);
	    reader.onerror = deferred.reject;
	
	    return deferred.promise;
	  }
	
	  _readPng(file, filename) {
	    const deferred = _mithril2.default.deferred();
	    const reader = new FileReader();
	    const png = new _png2.default(deferred, filename);
	    reader.readAsArrayBuffer(file);
	
	    reader.onloadend = png.loadEnd.bind(png);
	    reader.onerror = deferred.reject;
	
	    return deferred.promise;
	  }
	}
	exports.default = TmaFrontVM;
	const getFileExt = filename => {
	  const dotIndex = filename.lastIndexOf('.');
	  if (dotIndex < 0) {
	    throw new Error('拡張子が有りません');
	  }
	  return filename.substr(dotIndex + 1);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _base64Arraybuffer = __webpack_require__(13);
	
	var _base64Arraybuffer2 = _interopRequireDefault(_base64Arraybuffer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	const pngInfo = {
	  signature: 8,
	  chunk: {
	    length: 4,
	    name: 4,
	    crc: 4
	  }
	};
	
	class Png {
	  constructor(deferred, filename) {
	    // private init
	    this.file = false;
	    this.filename = filename;
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
	      this.deferred.resolve({
	        type: 'png',
	        file: this
	      });
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
	    if (this.palette.length < 1) {
	      return '';
	    }
	    const c = this.palette[0];
	    return `rgb(${ c.r }, ${ c.g }, ${ c.b })`;
	  }
	}
	exports.default = Png;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(57);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _png = __webpack_require__(12);
	
	var _png2 = _interopRequireDefault(_png);
	
	var _onecolor = __webpack_require__(15);
	
	var _onecolor2 = _interopRequireDefault(_onecolor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class SystemImg extends _png2.default {
	  constructor(deferred) {
	    super(deferred);
	    this._messageWindowDataUrl = false;
	    this._messageWindowMainColor;
	  }
	
	  get messageWindowMainColor() {
	    return this._messageWindowMainColor;
	  }
	
	  get controlCharColor() {
	    if (!this._messageWindowMainColor) {
	      return false;
	    }
	    const bg = (0, _onecolor2.default)(this._messageWindowMainColor);
	    return bg.value() > .7 ? 'black' : 'white';
	  }
	
	  get controlCharBgColor() {
	    if (!this._messageWindowMainColor) {
	      return false;
	    }
	    const bg = (0, _onecolor2.default)(this._messageWindowMainColor);
	    return bg.value() > .7 ? 'white' : 'black';
	  }
	
	  get messageWindow() {
	    if (this.file == false) {
	      return false;
	    }
	    if (this._messageWindowDataUrl == false) {
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
	
	      // calc main color
	      const bgImageData = ctx.getImageData(0, 0, 32, 32);
	      const pixelNumber = canvas.height * canvas.width;
	      let h = 0,
	          s = 0,
	          l = 0;
	      for (let y = 0; y < canvas.height; y++) {
	        for (let x = 0; x < canvas.width; x++) {
	          const offset = (y * canvas.width + x) * 4;
	          const r = bgImageData.data[offset];
	          const g = bgImageData.data[offset + 1];
	          const b = bgImageData.data[offset + 2];
	          const color = (0, _onecolor2.default)(`rgb(${ r }, ${ g }, ${ b })`);
	          // 色の平均を計算する
	          h += color.hue();
	          s += color.saturation();
	          l += color.lightness();
	        }
	      }
	      h /= pixelNumber;
	      s /= pixelNumber;
	      l /= pixelNumber;
	      this._messageWindowMainColor = (0, _onecolor2.default)(["HSL", h, s, l]).css();
	
	      // draw frame
	      ctx.drawImage(frame, 0, 0);
	
	      this._messageWindowDataUrl = canvas.toDataURL();
	    }
	    return this._messageWindowDataUrl;
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
	exports.default = SystemImg;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(38);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _window = __webpack_require__(17);
	
	var _window2 = _interopRequireDefault(_window);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class Scenario {
	  constructor(data = {}) {
	    this.scenarioText = _mithril2.default.prop(data.scenarioText || '');
	    this.tkScript = '';
	    this.windowList = [];
	  }
	
	  parse(parser) {
	    if (parser) {
	      const messageList = parser.parse(this.scenarioText());
	      this.tkScript = parser.serialize();
	
	      // ウィンドウに変換
	      this.windowList = [];
	      messageList.forEach(messageBox => {
	        const face = messageBox.face;
	        messageBox.messageList.map(message => {
	          this.windowList.push(new _window2.default({ message, face }));
	        });
	      });
	    }
	  }
	
	}
	exports.default = Scenario;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _line = __webpack_require__(18);
	
	var _line2 = _interopRequireDefault(_line);
	
	var _domParser = __webpack_require__(19);
	
	var _domParser2 = _interopRequireDefault(_domParser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class Window {
	  constructor(data) {
	    data = data || {};
	    data.message = data.message || {};
	    this.comments = data.message.comments || [];
	    this.face = data.face || false;
	    this.iconStatus = false;
	    // Line objの組み立て
	    this.line(data.message.line || []);
	  }
	
	  line(v) {
	    if (arguments.length > 0) {
	      // 組み立て
	      if (!Array.isArray(v)) {
	        v = [v];
	      }
	      // 顔設定があれば最初の行に追加する
	      if (this.face !== false) {
	        v.unshift(this.face.name);
	      }
	      // 継続タグ
	      let continueTags = [];
	      this._line = v.map(line => {
	        line = continueTags.join('') + line;
	        const dom = _domParser2.default.parseFromString(line, 'text/html');
	        const parsedHtml = dom.body.innerHTML;
	        if (line != parsedHtml) {
	          const closeTags = parsedHtml.substr(line.length).split(/(<[^>]+>)/).filter(v => {
	            return !!v;
	          });
	          continueTags = closeTags.map(v => {
	            return v.replace('/', '');
	          }).reverse();
	        } else {
	          continueTags = [];
	        }
	        return new _line2.default({ line: parsedHtml });
	      });
	    }
	
	    return this._line;
	  }
	
	  toggleIcon() {
	    this.iconStatus = !this.iconStatus;
	  }
	
	}
	exports.default = Window;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _domParser = __webpack_require__(19);
	
	var _domParser2 = _interopRequireDefault(_domParser);
	
	var _const = __webpack_require__(10);
	
	var _const2 = _interopRequireDefault(_const);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class Line {
	  constructor(data) {
	    data = data || {};
	    this.raw = _mithril2.default.prop(data.line || '');
	    this._line = false;
	    this._text = false;
	  }
	
	  line(v) {
	    // 変更は無視する
	    if (v) {}
	    // console.warn('lineを直接変更する事は出来ません。' + v);
	
	
	    // 未変換であれば変換する
	    if (this._line === false) {
	      const raw = Line.preEscape(this.raw());
	      const dom = _domParser2.default.parseFromString(raw, 'text/html');
	      const tree = Line.domToTree(dom.body);
	      this._line = tree;
	    }
	
	    return this._line;
	  }
	
	  text(v) {
	    // 変更は無視する
	    if (arguments.length > 0) {}
	    // console.warn('textを直接変更する事は出来ません。' + v);
	
	
	    // 未変換であれば変換する
	    if (this._text === false) {
	      const raw = Line.preEscape(this.raw());
	      const dom = _domParser2.default.parseFromString(raw, 'text/html');
	      this._text = Line.postEscape(dom.body.innerText);
	    }
	
	    return this._text;
	  }
	
	  static preEscape(str) {
	    // エスケープ記号を退避
	    return str.replace(/\\\\/g, '#yen-mark#').replace(/\\</g, '#lt-mark#').replace(/\\/g, '#escape-mark#');
	  }
	
	  static postEscape(str) {
	    // 退避した記号を戻し、半角スペースを実体参照に変換する。
	    return str.replace(/#yen-mark#/g, '\\').replace(/#lt-mark#/g, '<').replace(/#escape-mark#/g, '');
	  }
	
	  static domToTree(dom) {
	    const ret = [];
	    let controls = [];
	    let isPreControl = false;
	    for (let node = dom.firstChild; node; node = node.nextSibling) {
	      const tag = node.nodeName.toLowerCase();
	      if (Object.keys(_const2.default.controlTags).includes(tag)) {
	        // 制御タグの場合、bodyは固定
	        const body = _const2.default.controlTags[tag];
	        // controlタグに包む
	        controls.push({ tag, body });
	        isPreControl = true;
	        continue;
	      }
	      if (isPreControl) {
	        ret.push({ tag: 'control', body: controls });
	        controls = [];
	        isPreControl = false;
	      }
	      if (node.nodeType == Node.TEXT_NODE) {
	        ret.push(Line.postEscape(node.textContent)); // エスケープを戻してから
	      } else {
	        let body;
	        body = Line.domToTree(node);
	        ret.push({ tag, body });
	      }
	    }
	    if (isPreControl) {
	      ret.push({ tag: 'control', body: controls });
	    }
	
	    return ret;
	  }
	}
	exports.default = Line;

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	const domParser = new DOMParser();
	exports.default = domParser;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _scenarioParser = __webpack_require__(21);
	
	var _scenarioParser2 = _interopRequireDefault(_scenarioParser);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	module.exports = {
	  ScenarioParser: _scenarioParser2.default
	};

/***/ },
/* 21 */
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
	
	var _message = __webpack_require__(22);
	
	var _message2 = _interopRequireDefault(_message);
	
	var _messageBlock = __webpack_require__(23);
	
	var _messageBlock2 = _interopRequireDefault(_messageBlock);
	
	var _config = __webpack_require__(24);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _tbSerializer = __webpack_require__(27);
	
	var _tbSerializer2 = _interopRequireDefault(_tbSerializer);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	// 単独タグ正規表現
	var noEndTagRegExp = /<([a-z\-\_]+) \/>/g;
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
	    this.serializer = new _tbSerializer2.default(this.config);
	    this.parsedMessages = false;
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
	      this.continueTag = '';
	
	      // limit別に分ける
	      var result = [];
	      var tmp = [];
	      var comments = [];
	      var isBeforeComment = false;
	      var block = new _messageBlock2.default(false);
	      textList.forEach(function (text) {
	        // コメント行
	        if (text.startsWith('//')) {
	          comments.push(text.substr(2).trim());
	          isBeforeComment = true;
	          return; //continue
	        }
	        if (_this2.config.hasFace && faceCommandRegExp.test(text)) {
	          // 顔グラ変更
	          var faceCommand = text.substr(1, text.length - 2);
	          var faceConfig = _this2.config.getFace(faceCommand);
	          // メッセージブロックの作り直し
	          if (tmp.length > 0) {
	            if (isBeforeComment) {
	              // 次のブロックにコメントを持ち越す
	              block.addMessage(_this2._tagFormat(tmp, []));
	            } else {
	              block.addMessage(_this2._tagFormat(tmp, comments));
	              comments = [];
	            }
	            tmp = [];
	          }
	          if (block.hasMessage()) {
	            result.push(block);
	          }
	          block = new _messageBlock2.default(faceConfig);
	          return; //continue
	        }
	        isBeforeComment = false;
	        // 改ページ判定
	        var isPageBreak = false;
	        if (/^<pb>/.test(text)) {
	          isPageBreak = true;
	          text = ''; // 文字表示無し
	        } else if (/[^\\]<pb>/.test(text)) {
	          isPageBreak = true;
	          // pbタグ以降の文字列を削除
	          var pbIndex = text.search(/[^\\]<pb>/) + 1;
	          text = text.substr(0, pbIndex);
	        }
	        tmp.push(text);
	        if (tmp.length == _this2.config.lineLimit + (block.face ? -1 : 0)) {
	          isPageBreak = true;
	        }
	        if (isPageBreak) {
	          block.addMessage(_this2._tagFormat(tmp, comments));
	          tmp = [];
	          comments = [];
	        }
	      });
	      if (tmp.length > 0) {
	        block.addMessage(this._tagFormat(tmp, comments));
	      }
	      if (block.hasMessage()) {
	        result.push(block);
	      }
	
	      this.parsedMessages = result;
	
	      return result;
	    }
	  }, {
	    key: 'serialize',
	    value: function serialize() {
	      if (!this.parsedMessages) {
	        return '';
	      }
	      return this.serializer.serialize(this.parsedMessages);
	    }
	  }, {
	    key: '_tagFormat',
	    value: function _tagFormat(textList, comments) {
	      var _this3 = this;
	
	      // 前回からの継続タグを追加
	      var input = this.continueTag + textList.join("\n").replace(noEndTagRegExp, "<$1></$1>");
	      // 継続タグのチェック
	      var stack = [];
	      var tags = input.match(/.?<\/?[a-z\_\-]+>/g);
	      if (tags) {
	        tags.forEach(function (tag) {
	          if (tag.startsWith('\\')) {
	            // エスケープ文字付きの場合対応しない
	            return;
	          }
	          tag = tag.replace(/.?(<\/?[a-z\_\-]+>)/, '$1');
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
	      } else {
	        this.continueTag = '';
	      }
	
	      // 最終出力
	      var output = input + stack.reverse().map(function (v) {
	        return '</' + v + '>';
	      }).join('');
	
	      return new _message2.default(output.trim().split("\n"), comments);
	    }
	  }]);
	
	  return ScenarioParser;
	}();
	
	exports.default = ScenarioParser;

/***/ },
/* 22 */
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
	  var comments = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	  _classCallCheck(this, Message);
	
	  this.line = textList;
	  this.comments = comments;
	};
	
	exports.default = Message;

/***/ },
/* 23 */
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
	
	    this.face = face || false;
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
/* 24 */
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
	
	var _jsYaml = __webpack_require__(25);
	
	var _jsYaml2 = _interopRequireDefault(_jsYaml);
	
	var _const = __webpack_require__(26);
	
	var _const2 = _interopRequireDefault(_const);
	
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
	    key: 'getColorNumber',
	    value: function getColorNumber(name) {
	      return this._config.color[name] ? this._config.color[name] : false;
	    }
	  }, {
	    key: 'getFace',
	    value: function getFace(faceKey) {
	      if (!this.hasFace) {
	        return false;
	      }
	
	      var re = new RegExp('^(.*)\\' + _const2.default.face_place.prefix + '(.*)\\' + _const2.default.face_place.suffix + '$');
	      var found = faceKey.match(re);
	      if (found !== null) {
	        faceKey = found[1];
	      }
	      var ret = this._config.face[faceKey] ? Object.assign({}, this._config.face[faceKey]) : false;
	
	      if (found !== null) {
	        var placeSettings = found[2].split(',');
	        // 反転
	        if (placeSettings.includes(_const2.default.face_place.mirror)) {
	          ret.mirror = true;
	        }
	        // 表示位置
	        if (placeSettings.includes(_const2.default.face_place.pos.left)) {
	          ret.pos = false;
	        } else if (placeSettings.includes(_const2.default.face_place.pos.right)) {
	          ret.pos = true;
	        }
	      }
	
	      return ret;
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
	            var nameConfig = _this._config.style.display.name;
	            var faceKey = name + '_' + faceName;
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
	    key: 'isFlash',
	    get: function get() {
	      if (this._config.style.display && this._config.style.display.isFlash) {
	        return true;
	      }
	      return false;
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(3);

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Const = {
	  face_place: {
	    prefix: '(',
	    suffix: ')',
	    pos: {
	      left: '左',
	      right: '右'
	    },
	    mirror: '反転'
	  }
	};
	
	exports.default = Const;

/***/ },
/* 27 */
/***/ function(module, exports) {

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
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var TbSerializer = function () {
	  function TbSerializer(config) {
	    _classCallCheck(this, TbSerializer);
	
	    this.config = config;
	    this.colorStack = [];
	  }
	
	  _createClass(TbSerializer, [{
	    key: 'serialize',
	    value: function serialize(messageBlockList) {
	      var _this = this;
	
	      var result = [];
	      var showFace = false;
	      messageBlockList.forEach(function (messageBlock) {
	        // 顔グラ関連
	        var faceMessage = false;
	        if (messageBlock.face) {
	          showFace = true;
	          var posCode = messageBlock.face.pos ? 1 : 0;
	          var mirrorCode = messageBlock.face.mirror ? 1 : 0;
	          result.push('Faice("' + messageBlock.face.filename + '", ' + messageBlock.face.number + ', ' + posCode + ', ' + mirrorCode + ')');
	          faceMessage = _this._toTbScript(messageBlock.face.name);
	        } else if (showFace) {
	          showFace = false;
	          // 顔グラを非表示に
	          result.push('Faice(0, 0, 0)');
	        }
	        messageBlock.messageList.forEach(function (message) {
	          // コメント行の出力
	          message.comments.forEach(function (comment) {
	            result.push('Note("' + comment + '")');
	          });
	          // タグ置換
	          _this.colorStack = []; // 色タグのスタックリセット
	          var line = message.line.map(function (text) {
	            return _this._toTbScript(text);
	          });
	
	          // 改行を置換してまとめる
	          if (faceMessage) {
	            line.unshift(faceMessage);
	          }
	          // 常時瞬間表示の場合、制御文字を追加
	          if (_this.config.isFlash) {
	            line = line.map(function (v) {
	              return '\\>' + v;
	            });
	          }
	          result.push('Text("' + line.join(cChar.br) + '")');
	        });
	      });
	      return result.join("\n");
	    }
	  }, {
	    key: '_toTbScript',
	    value: function _toTbScript(text) {
	      var _this2 = this;
	
	      // タグとメッセージに分解
	      var parts = text.split(/(\\?<\/?[a-z\-\_]+>)/);
	      if (parts.length == 1) {
	        // 変換無し
	        return this._removeEscapeChar(text);
	      }
	      // タグの変換
	      var prevColor = 0;
	      parts = parts.map(function (part) {
	        if (/^<[a-z\-\_]+>$/.test(part)) {
	          // 開始タグ
	          var tagName = part.substr(1, part.length - 2);
	          var colorNumber = _this2.config.getColorNumber(tagName);
	          if (colorNumber) {
	            // 色タグ
	            _this2.colorStack.push(prevColor);
	            prevColor = colorNumber;
	            return cChar.color + '[' + colorNumber + ']';
	          }
	          // 制御タグ
	          return '' + _this2._getCChar(tagName);
	        } else if (/^<\/[a-z\-\_]+>$/.test(part)) {
	          // 閉じタグ
	          var _tagName = part.substr(2, part.length - 3);
	          if (!_this2.config.getColorNumber(_tagName) === false) {
	            // 色タグ
	            prevColor = _this2.colorStack.pop();
	            return cChar.color + '[' + prevColor + ']';
	          } else if (cNormalTags.includes(_tagName)) {
	            // 閉じタグ有りの制御タグ
	            return '' + _this2._getCChar(_tagName + '_end');
	          } else if (cNoEndTags.includes(_tagName)) {
	            // 閉じタグが無いタグの場合、空
	            return '';
	          }
	        }
	        // タグ以外のテキストの場合、エスケープ文字を消す
	        return _this2._removeEscapeChar(part);
	      });
	      return parts.join('');
	    }
	  }, {
	    key: '_getCChar',
	    value: function _getCChar(name) {
	      if (!cChar[name]) {
	        throw new Error('対応していないタグです。: ' + name);
	      }
	      return cChar[name];
	    }
	  }, {
	    key: '_removeEscapeChar',
	    value: function _removeEscapeChar(text) {
	      return text.replace(/([^\\]?)\\/, '$1').replace('\\', '\\\\');
	    }
	  }]);
	
	  return TbSerializer;
	}();
	
	exports.default = TbSerializer;
	
	var cChar = {
	  br: '\\k',
	  color: '\\C',
	  stop: '\\!',
	  wait: '\\|',
	  q_wait: '\\.',
	  close: '\\^',
	  flash: '\\>',
	  flash_end: '\\<'
	};
	
	var cNoEndTags = ['br', 'stop', 'wait', 'q_wait', 'close'];
	var cNormalTags = ['flash'];

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	class StyleSheet {
	  constructor(name) {
	    // this.styleSheet = StyleSheet.getCSSStyleSheet(name);
	    const style = document.createElement('style');
	    style.type = 'text/css';
	    document.getElementsByTagName('head').item(0).appendChild(style);
	
	    this.styleSheet = style.sheet;
	  }
	
	  editCss(selector, name, value) {
	    if (!this.styleSheet) {
	      return;
	    }
	    const position = this.styleSheet.cssRules ? this.styleSheet.cssRules.length : 0;
	    this.styleSheet.insertRule(`${ selector } { ${ name }: ${ value }}`, position);
	  }
	
	  static getCSSStyleSheet(name) {
	    let result = false;
	    Array.prototype.forEach.call(document.styleSheets, styleSheet => {
	      if (styleSheet.href != null && styleSheet.href.endsWith(name)) {
	        result = styleSheet;
	      }
	    });
	    return result;
	  }
	
	}
	exports.default = StyleSheet;

/***/ },
/* 29 */
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _yamlGenerator = __webpack_require__(31);
	
	var _yamlGenerator2 = _interopRequireDefault(_yamlGenerator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	const yamlGeneratorComponent = {
	  controller: function (data) {
	    return {
	      generator: new _yamlGenerator2.default(),
	      status: data.status,
	      selectText: e => {
	        e.target.select();
	      }
	    };
	  },
	  view: ctrl => {
	    return (0, _mithril2.default)('.modalOverlay', {
	      class: ctrl.status(),
	      onclick: () => {
	        ctrl.status('disable');
	      }
	    }, [(0, _mithril2.default)('.yamlGenerator.modalWrap', {
	      onclick: e => {
	        e.stopPropagation();
	      }
	    }, [(0, _mithril2.default)('h1', '顔グラ設定ファイルジェネレータ'), (0, _mithril2.default)('.inputs', [(0, _mithril2.default)('div', [(0, _mithril2.default)('label', { for: 'name' }, 'キャラ名'), (0, _mithril2.default)('input#name', {
	      onchange: _mithril2.default.withAttr('value', ctrl.generator.name),
	      value: ctrl.generator.name()
	    })]), (0, _mithril2.default)('div', [(0, _mithril2.default)('label', { for: 'filename' }, 'ファイル名'), (0, _mithril2.default)('input#filename', {
	      onchange: _mithril2.default.withAttr('value', ctrl.generator.filename),
	      value: ctrl.generator.filename()
	    })]), (0, _mithril2.default)('div', [(0, _mithril2.default)('label', { for: 'prefix' }, 'prefix'), (0, _mithril2.default)('input#prefix', {
	      onchange: _mithril2.default.withAttr('value', ctrl.generator.prefix),
	      value: ctrl.generator.prefix()
	    })]), (0, _mithril2.default)('div', [(0, _mithril2.default)('label', { for: 'length' }, '個数'), (0, _mithril2.default)('input#length', {
	      onchange: _mithril2.default.withAttr('value', ctrl.generator.length),
	      value: ctrl.generator.length()
	    })])]), (0, _mithril2.default)('.output', [(0, _mithril2.default)('h2', '設定ファイル'), (0, _mithril2.default)('textarea', {
	      readonly: 'readonly',
	      onfocus: ctrl.selectText
	    }, ctrl.generator.yaml())]), (0, _mithril2.default)('.close', {
	      onclick: () => {
	        ctrl.status('disable');
	      }
	    }, '[x]close')])]);
	  }
	};
	
	exports.default = yamlGeneratorComponent;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class YamlGenerator {
	  constructor(data) {
	    data = data || {};
	    this.name = _mithril2.default.prop(data.name || '');
	    this.filename = _mithril2.default.prop(data.filename || '');
	    this.prefix = _mithril2.default.prop(data.prefix || '');
	    this.length = _mithril2.default.prop(data.length || 16);
	
	    this._yaml = '';
	  }
	
	  yaml() {
	    if (!this.name() || !this.filename() || !this.length()) {
	      return '';
	    }
	    // yamlを組み立てる
	    this._yaml = "person:\n  " + this.name() + ":\n    faces:\n";
	    for (let i = 0; i < this.length(); i++) {
	      this._yaml += "      " + this.prefix() + (i + 1) + ":\n" + "        filename:" + this.filename() + "\n" + "        number:" + i + "\n";
	    }
	
	    return this._yaml;
	  }
	}
	exports.default = YamlGenerator;

/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map