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
	
	var _yamlGeneratorComponent = __webpack_require__(11);
	
	var _yamlGeneratorComponent2 = _interopRequireDefault(_yamlGeneratorComponent);
	
	var _tmaFrontVm = __webpack_require__(13);
	
	var _tmaFrontVm2 = _interopRequireDefault(_tmaFrontVm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	const tmaFrontComponent = {
	  controller: function () {
	    this.vm = new _tmaFrontVm2.default();
	    window.onscroll = this.vm.onScrollSticky.bind(this.vm);
	  },
	  view: ctrl => {
	    const vm = ctrl.vm;
	    // save
	    vm.save();
	    // create veiew
	    return [(0, _mithril2.default)('.frame', (0, _mithril2.default)('#appContainer', [(0, _mithril2.default)('.left', [_mithril2.default.component(_loadComponent2.default, { vm: vm }), (0, _mithril2.default)('#stickyWrapper', {
	      class: vm.stickyCheck() ? vm.stickyStatus() : 'normal'
	    }, [(0, _mithril2.default)('.header', [(0, _mithril2.default)('h2', 'シナリオスクリプト'), (0, _mithril2.default)('.toggle', [(0, _mithril2.default)('input#autosave', {
	      type: 'checkbox',
	      checked: vm.autosave(),
	      onclick: _mithril2.default.withAttr('checked', vm.autosave)
	    }), (0, _mithril2.default)('label', {
	      for: 'autosave'
	    }, 'AutoSave')]), (0, _mithril2.default)('.toggle', [(0, _mithril2.default)('input#stickyCheckbox', {
	      type: 'checkbox',
	      checked: vm.stickyCheck(),
	      onclick: _mithril2.default.withAttr('checked', vm.stickyCheck)
	    }), (0, _mithril2.default)('label', {
	      for: 'stickyCheckbox'
	    }, 'sticky')])]), (0, _mithril2.default)('textarea#input', {
	      value: vm.scenario.scenarioText(),
	      onkeyup: _mithril2.default.withAttr('value', vm.setScenarioText, vm)
	    }), (0, _mithril2.default)('h2', 'TKcode'), (0, _mithril2.default)('textarea#tkScript', {
	      readonly: 'readonly',
	      onfocus: tmaFrontComponent.selectText
	    }, [vm.scenario.tkScript])])]), (0, _mithril2.default)('.right', [(0, _mithril2.default)('h2', 'プレビュー'), _mithril2.default.component(_zoomComponent2.default, { vm: vm }), _mithril2.default.component(_messageListComponent2.default, { vm: vm })])])), (0, _mithril2.default)('#tools', [_mithril2.default.component(_yamlGeneratorComponent2.default, { status: vm.yamlGeneratorStatus })])];
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
	    const error = vm.scenario.parseError();
	    return (0, _mithril2.default)('.preview', [error ? (0, _mithril2.default)('.error', error) : null, (0, _mithril2.default)('#messageList', { class: `zoom${ vm.zoom.zoomLevel() }x` }, windowList.map(windowObj => {
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
	    }))]);
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
	
	var _yamlGenerator = __webpack_require__(12);
	
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
	      onkeyup: _mithril2.default.withAttr('value', ctrl.generator.name),
	      value: ctrl.generator.name()
	    })]), (0, _mithril2.default)('div', [(0, _mithril2.default)('label', { for: 'filename' }, 'ファイル名'), (0, _mithril2.default)('input#filename', {
	      onkeyup: _mithril2.default.withAttr('value', ctrl.generator.filename),
	      value: ctrl.generator.filename()
	    })]), (0, _mithril2.default)('div', [(0, _mithril2.default)('label', { for: 'prefix' }, 'prefix'), (0, _mithril2.default)('input#prefix', {
	      onkeyup: _mithril2.default.withAttr('value', ctrl.generator.prefix),
	      value: ctrl.generator.prefix()
	    })]), (0, _mithril2.default)('div', [(0, _mithril2.default)('label', { for: 'length' }, '個数'), (0, _mithril2.default)('input#length', {
	      onkeyup: _mithril2.default.withAttr('value', ctrl.generator.length),
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
/* 12 */
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
	      this._yaml += "      " + this.prefix() + (i + 1) + ":\n" + "        filename: " + this.filename() + "\n" + "        number: " + i + "\n";
	    }
	
	    return this._yaml;
	  }
	}
	exports.default = YamlGenerator;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _png = __webpack_require__(14);
	
	var _png2 = _interopRequireDefault(_png);
	
	var _systemImg = __webpack_require__(16);
	
	var _systemImg2 = _interopRequireDefault(_systemImg);
	
	var _scenario = __webpack_require__(18);
	
	var _scenario2 = _interopRequireDefault(_scenario);
	
	var _tk2kMessageAssist = __webpack_require__(29);
	
	var _styleSheet = __webpack_require__(37);
	
	var _styleSheet2 = _interopRequireDefault(_styleSheet);
	
	var _zoom = __webpack_require__(38);
	
	var _zoom2 = _interopRequireDefault(_zoom);
	
	var _const = __webpack_require__(10);
	
	var _const2 = _interopRequireDefault(_const);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class TmaFrontVM {
	  constructor() {
	    let data = this.load() || {};
	    // autosave
	    this.autosave = _mithril2.default.prop(data.autosave || false);
	    if (!this.autosave()) {
	      this.reset();
	      data = {};
	    }
	    data.scenario = data.scenario || {};
	    // init member
	    this.scenario = new _scenario2.default(data.scenario);
	    this.parser = false;
	    this.stickyStatus = _mithril2.default.prop('normal');
	    this.stickyCheck = _mithril2.default.prop(data.stickyCheck || false);
	    this.stickyYOffset = 0;
	    // for yamlGenerator
	    this.yamlGeneratorStatus = _mithril2.default.prop('disable');
	    // for load setting
	    this.loadStatus = false;
	    this.systemImg = false;
	    this.faceImgs = {};
	    this.config = false;
	    // get styleSheet
	    this.styleSheet = new _styleSheet2.default('style.css');
	    this.zoom = new _zoom2.default(data.zoom || { zoomLevel: 1 });
	  }
	
	  static get STORAGE_KEY() {
	    return 'TMA-FRONT-xK6fQPYW';
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
	
	  save() {
	    if (this.autosave()) {
	      localStorage[TmaFrontVM.STORAGE_KEY] = this.toJSON();
	    } else if (localStorage[TmaFrontVM.STORAGE_KEY]) {
	      this.reset();
	    }
	  }
	
	  toJSON() {
	    return JSON.stringify({
	      zoom: this.zoom.serialize(),
	      stickyCheck: this.stickyCheck,
	      autosave: this.autosave,
	      scenario: {
	        scenarioText: this.scenario.scenarioText()
	      }
	    });
	  }
	
	  load() {
	    if (!localStorage[TmaFrontVM.STORAGE_KEY]) {
	      return {};
	    }
	    return JSON.parse(localStorage[TmaFrontVM.STORAGE_KEY]);
	  }
	
	  reset() {
	    localStorage[TmaFrontVM.STORAGE_KEY] = null;
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
	
	  onScrollSticky() {
	    const element = document.getElementById('stickyWrapper');
	    const rect = element.getBoundingClientRect();
	    if (rect.top < 0 && this.stickyStatus() == 'normal') {
	      this.stickyStatus('sticky');
	      this.stickyYOffset = window.pageYOffset;
	      _mithril2.default.redraw();
	      return;
	    }
	    if (window.pageYOffset <= this.stickyYOffset && this.stickyStatus() == 'sticky') {
	      this.stickyStatus('normal');
	      _mithril2.default.redraw();
	      return;
	    }
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _base64Arraybuffer = __webpack_require__(15);
	
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(57);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _png = __webpack_require__(14);
	
	var _png2 = _interopRequireDefault(_png);
	
	var _onecolor = __webpack_require__(17);
	
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(38);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _window = __webpack_require__(19);
	
	var _window2 = _interopRequireDefault(_window);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class Scenario {
	  constructor(data = {}) {
	    this.scenarioText = _mithril2.default.prop(data.scenarioText || '');
	    this.tkScript = '';
	    this.windowList = [];
	    this.parseError = _mithril2.default.prop('');
	  }
	
	  parse(parser) {
	    if (parser) {
	      let messageList = [];
	      try {
	        messageList = parser.parse(this.scenarioText());
	        this.tkScript = parser.serialize();
	        this.parseError('');
	      } catch (e) {
	        this.parseError(e.message);
	      }
	
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _line = __webpack_require__(20);
	
	var _line2 = _interopRequireDefault(_line);
	
	var _domParser = __webpack_require__(21);
	
	var _domParser2 = _interopRequireDefault(_domParser);
	
	var _ent = __webpack_require__(22);
	
	var _ent2 = _interopRequireDefault(_ent);
	
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
	        const parsedHtml = _ent2.default.decode(dom.body.innerHTML);
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _domParser = __webpack_require__(21);
	
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
/* 21 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	const domParser = new DOMParser();
	exports.default = domParser;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.encode = __webpack_require__(23);
	exports.decode = __webpack_require__(27);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var punycode = __webpack_require__(24);
	var revEntities = __webpack_require__(26);
	
	module.exports = encode;
	
	function encode(str, opts) {
	    if (typeof str !== 'string') {
	        throw new TypeError('Expected a String');
	    }
	    if (!opts) opts = {};
	
	    var numeric = true;
	    if (opts.named) numeric = false;
	    if (opts.numeric !== undefined) numeric = opts.numeric;
	
	    var special = opts.special || {
	        '"': true, "'": true,
	        '<': true, '>': true,
	        '&': true
	    };
	
	    var codePoints = punycode.ucs2.decode(str);
	    var chars = [];
	    for (var i = 0; i < codePoints.length; i++) {
	        var cc = codePoints[i];
	        var c = punycode.ucs2.encode([cc]);
	        var e = revEntities[cc];
	        if (e && (cc >= 127 || special[c]) && !numeric) {
	            chars.push('&' + (/;$/.test(e) ? e : e + ';'));
	        } else if (cc < 32 || cc >= 127 || special[c]) {
	            chars.push('&#' + cc + ';');
	        } else {
	            chars.push(c);
	        }
	    }
	    return chars.join('');
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {'use strict';
	
	/*! https://mths.be/punycode v1.4.1 by @mathias */
	;(function (root) {
	
		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module && !module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
			root = freeGlobal;
		}
	
		/**
	  * The `punycode` object.
	  * @name punycode
	  * @type Object
	  */
		var punycode,
	
	
		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647,
		    // aka. 0x7FFFFFFF or 2^31-1
	
		/** Bootstring parameters */
		base = 36,
		    tMin = 1,
		    tMax = 26,
		    skew = 38,
		    damp = 700,
		    initialBias = 72,
		    initialN = 128,
		    // 0x80
		delimiter = '-',
		    // '\x2D'
	
		/** Regular expressions */
		regexPunycode = /^xn--/,
		    regexNonASCII = /[^\x20-\x7E]/,
		    // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
		    // RFC 3490 separators
	
		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},
	
	
		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		    floor = Math.floor,
		    stringFromCharCode = String.fromCharCode,
	
	
		/** Temporary variable */
		key;
	
		/*--------------------------------------------------------------------------*/
	
		/**
	  * A generic error utility function.
	  * @private
	  * @param {String} type The error type.
	  * @returns {Error} Throws a `RangeError` with the applicable error message.
	  */
		function error(type) {
			throw new RangeError(errors[type]);
		}
	
		/**
	  * A generic `Array#map` utility function.
	  * @private
	  * @param {Array} array The array to iterate over.
	  * @param {Function} callback The function that gets called for every array
	  * item.
	  * @returns {Array} A new array of values returned by the callback function.
	  */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}
	
		/**
	  * A simple `Array#map`-like wrapper to work with domain name strings or email
	  * addresses.
	  * @private
	  * @param {String} domain The domain name or email address.
	  * @param {Function} callback The function that gets called for every
	  * character.
	  * @returns {Array} A new string of characters returned by the callback
	  * function.
	  */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}
	
		/**
	  * Creates an array containing the numeric code points of each Unicode
	  * character in the string. While JavaScript uses UCS-2 internally,
	  * this function will convert a pair of surrogate halves (each of which
	  * UCS-2 exposes as separate characters) into a single code point,
	  * matching UTF-16.
	  * @see `punycode.ucs2.encode`
	  * @see <https://mathiasbynens.be/notes/javascript-encoding>
	  * @memberOf punycode.ucs2
	  * @name decode
	  * @param {String} string The Unicode input string (UCS-2).
	  * @returns {Array} The new array of code points.
	  */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) {
						// low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}
	
		/**
	  * Creates a string based on an array of numeric code points.
	  * @see `punycode.ucs2.decode`
	  * @memberOf punycode.ucs2
	  * @name encode
	  * @param {Array} codePoints The array of numeric code points.
	  * @returns {String} The new Unicode string (UCS-2).
	  */
		function ucs2encode(array) {
			return map(array, function (value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}
	
		/**
	  * Converts a basic code point into a digit/integer.
	  * @see `digitToBasic()`
	  * @private
	  * @param {Number} codePoint The basic numeric code point value.
	  * @returns {Number} The numeric value of a basic code point (for use in
	  * representing integers) in the range `0` to `base - 1`, or `base` if
	  * the code point does not represent a value.
	  */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}
	
		/**
	  * Converts a digit/integer into a basic code point.
	  * @see `basicToDigit()`
	  * @private
	  * @param {Number} digit The numeric value of a basic code point.
	  * @returns {Number} The basic code point whose value (when used for
	  * representing integers) is `digit`, which needs to be in the range
	  * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	  * used; else, the lowercase form is used. The behavior is undefined
	  * if `flag` is non-zero and `digit` has no uppercase form.
	  */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}
	
		/**
	  * Bias adaptation function as per section 3.4 of RFC 3492.
	  * https://tools.ietf.org/html/rfc3492#section-3.4
	  * @private
	  */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (; /* no initialization */delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}
	
		/**
	  * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	  * symbols.
	  * @memberOf punycode
	  * @param {String} input The Punycode string of ASCII-only symbols.
	  * @returns {String} The resulting string of Unicode symbols.
	  */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
	
			/** Cached calculation results */
			baseMinusT;
	
			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.
	
			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}
	
			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}
	
			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.
	
			for (index = basic > 0 ? basic + 1 : 0; index < inputLength;) /* no final expression */{
	
				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base;; /* no condition */k += base) {
	
					if (index >= inputLength) {
						error('invalid-input');
					}
	
					digit = basicToDigit(input.charCodeAt(index++));
	
					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}
	
					i += digit * w;
					t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
	
					if (digit < t) {
						break;
					}
	
					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}
	
					w *= baseMinusT;
				}
	
				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);
	
				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}
	
				n += floor(i / out);
				i %= out;
	
				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);
			}
	
			return ucs2encode(output);
		}
	
		/**
	  * Converts a string of Unicode symbols (e.g. a domain name label) to a
	  * Punycode string of ASCII-only symbols.
	  * @memberOf punycode
	  * @param {String} input The string of Unicode symbols.
	  * @returns {String} The resulting Punycode string of ASCII-only symbols.
	  */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
	
			/** `inputLength` will hold the number of code points in `input`. */
			inputLength,
	
			/** Cached calculation results */
			handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;
	
			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);
	
			// Cache the length
			inputLength = input.length;
	
			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;
	
			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}
	
			handledCPCount = basicLength = output.length;
	
			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.
	
			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}
	
			// Main encoding loop:
			while (handledCPCount < inputLength) {
	
				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}
	
				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}
	
				delta += (m - n) * handledCPCountPlusOne;
				n = m;
	
				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];
	
					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}
	
					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base;; /* no condition */k += base) {
							t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
							q = floor(qMinusT / baseMinusT);
						}
	
						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}
	
				++delta;
				++n;
			}
			return output.join('');
		}
	
		/**
	  * Converts a Punycode string representing a domain name or an email address
	  * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	  * it doesn't matter if you call it on a string that has already been
	  * converted to Unicode.
	  * @memberOf punycode
	  * @param {String} input The Punycoded domain name or email address to
	  * convert to Unicode.
	  * @returns {String} The Unicode representation of the given Punycode
	  * string.
	  */
		function toUnicode(input) {
			return mapDomain(input, function (string) {
				return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
			});
		}
	
		/**
	  * Converts a Unicode string representing a domain name or an email address to
	  * Punycode. Only the non-ASCII parts of the domain name will be converted,
	  * i.e. it doesn't matter if you call it with a domain that's already in
	  * ASCII.
	  * @memberOf punycode
	  * @param {String} input The domain name or email address to convert, as a
	  * Unicode string.
	  * @returns {String} The Punycode representation of the given domain name or
	  * email address.
	  */
		function toASCII(input) {
			return mapDomain(input, function (string) {
				return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
			});
		}
	
		/*--------------------------------------------------------------------------*/
	
		/** Define the public API */
		punycode = {
			/**
	   * A string representing the current Punycode.js version number.
	   * @memberOf punycode
	   * @type String
	   */
			'version': '1.4.1',
			/**
	   * An object of methods to convert from JavaScript's internal character
	   * representation (UCS-2) to Unicode code points, and back.
	   * @see <https://mathiasbynens.be/notes/javascript-encoding>
	   * @memberOf punycode
	   * @type Object
	   */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};
	
		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) {
				// in Node.js, io.js, or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else {
				// in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else {
			// in Rhino or a web browser
			root.punycode = punycode;
		}
	})(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)(module), (function() { return this; }())))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(2);

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = {
		"9": "Tab;",
		"10": "NewLine;",
		"33": "excl;",
		"34": "quot;",
		"35": "num;",
		"36": "dollar;",
		"37": "percnt;",
		"38": "amp;",
		"39": "apos;",
		"40": "lpar;",
		"41": "rpar;",
		"42": "midast;",
		"43": "plus;",
		"44": "comma;",
		"46": "period;",
		"47": "sol;",
		"58": "colon;",
		"59": "semi;",
		"60": "lt;",
		"61": "equals;",
		"62": "gt;",
		"63": "quest;",
		"64": "commat;",
		"91": "lsqb;",
		"92": "bsol;",
		"93": "rsqb;",
		"94": "Hat;",
		"95": "UnderBar;",
		"96": "grave;",
		"123": "lcub;",
		"124": "VerticalLine;",
		"125": "rcub;",
		"160": "NonBreakingSpace;",
		"161": "iexcl;",
		"162": "cent;",
		"163": "pound;",
		"164": "curren;",
		"165": "yen;",
		"166": "brvbar;",
		"167": "sect;",
		"168": "uml;",
		"169": "copy;",
		"170": "ordf;",
		"171": "laquo;",
		"172": "not;",
		"173": "shy;",
		"174": "reg;",
		"175": "strns;",
		"176": "deg;",
		"177": "pm;",
		"178": "sup2;",
		"179": "sup3;",
		"180": "DiacriticalAcute;",
		"181": "micro;",
		"182": "para;",
		"183": "middot;",
		"184": "Cedilla;",
		"185": "sup1;",
		"186": "ordm;",
		"187": "raquo;",
		"188": "frac14;",
		"189": "half;",
		"190": "frac34;",
		"191": "iquest;",
		"192": "Agrave;",
		"193": "Aacute;",
		"194": "Acirc;",
		"195": "Atilde;",
		"196": "Auml;",
		"197": "Aring;",
		"198": "AElig;",
		"199": "Ccedil;",
		"200": "Egrave;",
		"201": "Eacute;",
		"202": "Ecirc;",
		"203": "Euml;",
		"204": "Igrave;",
		"205": "Iacute;",
		"206": "Icirc;",
		"207": "Iuml;",
		"208": "ETH;",
		"209": "Ntilde;",
		"210": "Ograve;",
		"211": "Oacute;",
		"212": "Ocirc;",
		"213": "Otilde;",
		"214": "Ouml;",
		"215": "times;",
		"216": "Oslash;",
		"217": "Ugrave;",
		"218": "Uacute;",
		"219": "Ucirc;",
		"220": "Uuml;",
		"221": "Yacute;",
		"222": "THORN;",
		"223": "szlig;",
		"224": "agrave;",
		"225": "aacute;",
		"226": "acirc;",
		"227": "atilde;",
		"228": "auml;",
		"229": "aring;",
		"230": "aelig;",
		"231": "ccedil;",
		"232": "egrave;",
		"233": "eacute;",
		"234": "ecirc;",
		"235": "euml;",
		"236": "igrave;",
		"237": "iacute;",
		"238": "icirc;",
		"239": "iuml;",
		"240": "eth;",
		"241": "ntilde;",
		"242": "ograve;",
		"243": "oacute;",
		"244": "ocirc;",
		"245": "otilde;",
		"246": "ouml;",
		"247": "divide;",
		"248": "oslash;",
		"249": "ugrave;",
		"250": "uacute;",
		"251": "ucirc;",
		"252": "uuml;",
		"253": "yacute;",
		"254": "thorn;",
		"255": "yuml;",
		"256": "Amacr;",
		"257": "amacr;",
		"258": "Abreve;",
		"259": "abreve;",
		"260": "Aogon;",
		"261": "aogon;",
		"262": "Cacute;",
		"263": "cacute;",
		"264": "Ccirc;",
		"265": "ccirc;",
		"266": "Cdot;",
		"267": "cdot;",
		"268": "Ccaron;",
		"269": "ccaron;",
		"270": "Dcaron;",
		"271": "dcaron;",
		"272": "Dstrok;",
		"273": "dstrok;",
		"274": "Emacr;",
		"275": "emacr;",
		"278": "Edot;",
		"279": "edot;",
		"280": "Eogon;",
		"281": "eogon;",
		"282": "Ecaron;",
		"283": "ecaron;",
		"284": "Gcirc;",
		"285": "gcirc;",
		"286": "Gbreve;",
		"287": "gbreve;",
		"288": "Gdot;",
		"289": "gdot;",
		"290": "Gcedil;",
		"292": "Hcirc;",
		"293": "hcirc;",
		"294": "Hstrok;",
		"295": "hstrok;",
		"296": "Itilde;",
		"297": "itilde;",
		"298": "Imacr;",
		"299": "imacr;",
		"302": "Iogon;",
		"303": "iogon;",
		"304": "Idot;",
		"305": "inodot;",
		"306": "IJlig;",
		"307": "ijlig;",
		"308": "Jcirc;",
		"309": "jcirc;",
		"310": "Kcedil;",
		"311": "kcedil;",
		"312": "kgreen;",
		"313": "Lacute;",
		"314": "lacute;",
		"315": "Lcedil;",
		"316": "lcedil;",
		"317": "Lcaron;",
		"318": "lcaron;",
		"319": "Lmidot;",
		"320": "lmidot;",
		"321": "Lstrok;",
		"322": "lstrok;",
		"323": "Nacute;",
		"324": "nacute;",
		"325": "Ncedil;",
		"326": "ncedil;",
		"327": "Ncaron;",
		"328": "ncaron;",
		"329": "napos;",
		"330": "ENG;",
		"331": "eng;",
		"332": "Omacr;",
		"333": "omacr;",
		"336": "Odblac;",
		"337": "odblac;",
		"338": "OElig;",
		"339": "oelig;",
		"340": "Racute;",
		"341": "racute;",
		"342": "Rcedil;",
		"343": "rcedil;",
		"344": "Rcaron;",
		"345": "rcaron;",
		"346": "Sacute;",
		"347": "sacute;",
		"348": "Scirc;",
		"349": "scirc;",
		"350": "Scedil;",
		"351": "scedil;",
		"352": "Scaron;",
		"353": "scaron;",
		"354": "Tcedil;",
		"355": "tcedil;",
		"356": "Tcaron;",
		"357": "tcaron;",
		"358": "Tstrok;",
		"359": "tstrok;",
		"360": "Utilde;",
		"361": "utilde;",
		"362": "Umacr;",
		"363": "umacr;",
		"364": "Ubreve;",
		"365": "ubreve;",
		"366": "Uring;",
		"367": "uring;",
		"368": "Udblac;",
		"369": "udblac;",
		"370": "Uogon;",
		"371": "uogon;",
		"372": "Wcirc;",
		"373": "wcirc;",
		"374": "Ycirc;",
		"375": "ycirc;",
		"376": "Yuml;",
		"377": "Zacute;",
		"378": "zacute;",
		"379": "Zdot;",
		"380": "zdot;",
		"381": "Zcaron;",
		"382": "zcaron;",
		"402": "fnof;",
		"437": "imped;",
		"501": "gacute;",
		"567": "jmath;",
		"710": "circ;",
		"711": "Hacek;",
		"728": "breve;",
		"729": "dot;",
		"730": "ring;",
		"731": "ogon;",
		"732": "tilde;",
		"733": "DiacriticalDoubleAcute;",
		"785": "DownBreve;",
		"913": "Alpha;",
		"914": "Beta;",
		"915": "Gamma;",
		"916": "Delta;",
		"917": "Epsilon;",
		"918": "Zeta;",
		"919": "Eta;",
		"920": "Theta;",
		"921": "Iota;",
		"922": "Kappa;",
		"923": "Lambda;",
		"924": "Mu;",
		"925": "Nu;",
		"926": "Xi;",
		"927": "Omicron;",
		"928": "Pi;",
		"929": "Rho;",
		"931": "Sigma;",
		"932": "Tau;",
		"933": "Upsilon;",
		"934": "Phi;",
		"935": "Chi;",
		"936": "Psi;",
		"937": "Omega;",
		"945": "alpha;",
		"946": "beta;",
		"947": "gamma;",
		"948": "delta;",
		"949": "epsilon;",
		"950": "zeta;",
		"951": "eta;",
		"952": "theta;",
		"953": "iota;",
		"954": "kappa;",
		"955": "lambda;",
		"956": "mu;",
		"957": "nu;",
		"958": "xi;",
		"959": "omicron;",
		"960": "pi;",
		"961": "rho;",
		"962": "varsigma;",
		"963": "sigma;",
		"964": "tau;",
		"965": "upsilon;",
		"966": "phi;",
		"967": "chi;",
		"968": "psi;",
		"969": "omega;",
		"977": "vartheta;",
		"978": "upsih;",
		"981": "varphi;",
		"982": "varpi;",
		"988": "Gammad;",
		"989": "gammad;",
		"1008": "varkappa;",
		"1009": "varrho;",
		"1013": "varepsilon;",
		"1014": "bepsi;",
		"1025": "IOcy;",
		"1026": "DJcy;",
		"1027": "GJcy;",
		"1028": "Jukcy;",
		"1029": "DScy;",
		"1030": "Iukcy;",
		"1031": "YIcy;",
		"1032": "Jsercy;",
		"1033": "LJcy;",
		"1034": "NJcy;",
		"1035": "TSHcy;",
		"1036": "KJcy;",
		"1038": "Ubrcy;",
		"1039": "DZcy;",
		"1040": "Acy;",
		"1041": "Bcy;",
		"1042": "Vcy;",
		"1043": "Gcy;",
		"1044": "Dcy;",
		"1045": "IEcy;",
		"1046": "ZHcy;",
		"1047": "Zcy;",
		"1048": "Icy;",
		"1049": "Jcy;",
		"1050": "Kcy;",
		"1051": "Lcy;",
		"1052": "Mcy;",
		"1053": "Ncy;",
		"1054": "Ocy;",
		"1055": "Pcy;",
		"1056": "Rcy;",
		"1057": "Scy;",
		"1058": "Tcy;",
		"1059": "Ucy;",
		"1060": "Fcy;",
		"1061": "KHcy;",
		"1062": "TScy;",
		"1063": "CHcy;",
		"1064": "SHcy;",
		"1065": "SHCHcy;",
		"1066": "HARDcy;",
		"1067": "Ycy;",
		"1068": "SOFTcy;",
		"1069": "Ecy;",
		"1070": "YUcy;",
		"1071": "YAcy;",
		"1072": "acy;",
		"1073": "bcy;",
		"1074": "vcy;",
		"1075": "gcy;",
		"1076": "dcy;",
		"1077": "iecy;",
		"1078": "zhcy;",
		"1079": "zcy;",
		"1080": "icy;",
		"1081": "jcy;",
		"1082": "kcy;",
		"1083": "lcy;",
		"1084": "mcy;",
		"1085": "ncy;",
		"1086": "ocy;",
		"1087": "pcy;",
		"1088": "rcy;",
		"1089": "scy;",
		"1090": "tcy;",
		"1091": "ucy;",
		"1092": "fcy;",
		"1093": "khcy;",
		"1094": "tscy;",
		"1095": "chcy;",
		"1096": "shcy;",
		"1097": "shchcy;",
		"1098": "hardcy;",
		"1099": "ycy;",
		"1100": "softcy;",
		"1101": "ecy;",
		"1102": "yucy;",
		"1103": "yacy;",
		"1105": "iocy;",
		"1106": "djcy;",
		"1107": "gjcy;",
		"1108": "jukcy;",
		"1109": "dscy;",
		"1110": "iukcy;",
		"1111": "yicy;",
		"1112": "jsercy;",
		"1113": "ljcy;",
		"1114": "njcy;",
		"1115": "tshcy;",
		"1116": "kjcy;",
		"1118": "ubrcy;",
		"1119": "dzcy;",
		"8194": "ensp;",
		"8195": "emsp;",
		"8196": "emsp13;",
		"8197": "emsp14;",
		"8199": "numsp;",
		"8200": "puncsp;",
		"8201": "ThinSpace;",
		"8202": "VeryThinSpace;",
		"8203": "ZeroWidthSpace;",
		"8204": "zwnj;",
		"8205": "zwj;",
		"8206": "lrm;",
		"8207": "rlm;",
		"8208": "hyphen;",
		"8211": "ndash;",
		"8212": "mdash;",
		"8213": "horbar;",
		"8214": "Vert;",
		"8216": "OpenCurlyQuote;",
		"8217": "rsquor;",
		"8218": "sbquo;",
		"8220": "OpenCurlyDoubleQuote;",
		"8221": "rdquor;",
		"8222": "ldquor;",
		"8224": "dagger;",
		"8225": "ddagger;",
		"8226": "bullet;",
		"8229": "nldr;",
		"8230": "mldr;",
		"8240": "permil;",
		"8241": "pertenk;",
		"8242": "prime;",
		"8243": "Prime;",
		"8244": "tprime;",
		"8245": "bprime;",
		"8249": "lsaquo;",
		"8250": "rsaquo;",
		"8254": "OverBar;",
		"8257": "caret;",
		"8259": "hybull;",
		"8260": "frasl;",
		"8271": "bsemi;",
		"8279": "qprime;",
		"8287": "MediumSpace;",
		"8288": "NoBreak;",
		"8289": "ApplyFunction;",
		"8290": "it;",
		"8291": "InvisibleComma;",
		"8364": "euro;",
		"8411": "TripleDot;",
		"8412": "DotDot;",
		"8450": "Copf;",
		"8453": "incare;",
		"8458": "gscr;",
		"8459": "Hscr;",
		"8460": "Poincareplane;",
		"8461": "quaternions;",
		"8462": "planckh;",
		"8463": "plankv;",
		"8464": "Iscr;",
		"8465": "imagpart;",
		"8466": "Lscr;",
		"8467": "ell;",
		"8469": "Nopf;",
		"8470": "numero;",
		"8471": "copysr;",
		"8472": "wp;",
		"8473": "primes;",
		"8474": "rationals;",
		"8475": "Rscr;",
		"8476": "Rfr;",
		"8477": "Ropf;",
		"8478": "rx;",
		"8482": "trade;",
		"8484": "Zopf;",
		"8487": "mho;",
		"8488": "Zfr;",
		"8489": "iiota;",
		"8492": "Bscr;",
		"8493": "Cfr;",
		"8495": "escr;",
		"8496": "expectation;",
		"8497": "Fscr;",
		"8499": "phmmat;",
		"8500": "oscr;",
		"8501": "aleph;",
		"8502": "beth;",
		"8503": "gimel;",
		"8504": "daleth;",
		"8517": "DD;",
		"8518": "DifferentialD;",
		"8519": "exponentiale;",
		"8520": "ImaginaryI;",
		"8531": "frac13;",
		"8532": "frac23;",
		"8533": "frac15;",
		"8534": "frac25;",
		"8535": "frac35;",
		"8536": "frac45;",
		"8537": "frac16;",
		"8538": "frac56;",
		"8539": "frac18;",
		"8540": "frac38;",
		"8541": "frac58;",
		"8542": "frac78;",
		"8592": "slarr;",
		"8593": "uparrow;",
		"8594": "srarr;",
		"8595": "ShortDownArrow;",
		"8596": "leftrightarrow;",
		"8597": "varr;",
		"8598": "UpperLeftArrow;",
		"8599": "UpperRightArrow;",
		"8600": "searrow;",
		"8601": "swarrow;",
		"8602": "nleftarrow;",
		"8603": "nrightarrow;",
		"8605": "rightsquigarrow;",
		"8606": "twoheadleftarrow;",
		"8607": "Uarr;",
		"8608": "twoheadrightarrow;",
		"8609": "Darr;",
		"8610": "leftarrowtail;",
		"8611": "rightarrowtail;",
		"8612": "mapstoleft;",
		"8613": "UpTeeArrow;",
		"8614": "RightTeeArrow;",
		"8615": "mapstodown;",
		"8617": "larrhk;",
		"8618": "rarrhk;",
		"8619": "looparrowleft;",
		"8620": "rarrlp;",
		"8621": "leftrightsquigarrow;",
		"8622": "nleftrightarrow;",
		"8624": "lsh;",
		"8625": "rsh;",
		"8626": "ldsh;",
		"8627": "rdsh;",
		"8629": "crarr;",
		"8630": "curvearrowleft;",
		"8631": "curvearrowright;",
		"8634": "olarr;",
		"8635": "orarr;",
		"8636": "lharu;",
		"8637": "lhard;",
		"8638": "upharpoonright;",
		"8639": "upharpoonleft;",
		"8640": "RightVector;",
		"8641": "rightharpoondown;",
		"8642": "RightDownVector;",
		"8643": "LeftDownVector;",
		"8644": "rlarr;",
		"8645": "UpArrowDownArrow;",
		"8646": "lrarr;",
		"8647": "llarr;",
		"8648": "uuarr;",
		"8649": "rrarr;",
		"8650": "downdownarrows;",
		"8651": "ReverseEquilibrium;",
		"8652": "rlhar;",
		"8653": "nLeftarrow;",
		"8654": "nLeftrightarrow;",
		"8655": "nRightarrow;",
		"8656": "Leftarrow;",
		"8657": "Uparrow;",
		"8658": "Rightarrow;",
		"8659": "Downarrow;",
		"8660": "Leftrightarrow;",
		"8661": "vArr;",
		"8662": "nwArr;",
		"8663": "neArr;",
		"8664": "seArr;",
		"8665": "swArr;",
		"8666": "Lleftarrow;",
		"8667": "Rrightarrow;",
		"8669": "zigrarr;",
		"8676": "LeftArrowBar;",
		"8677": "RightArrowBar;",
		"8693": "duarr;",
		"8701": "loarr;",
		"8702": "roarr;",
		"8703": "hoarr;",
		"8704": "forall;",
		"8705": "complement;",
		"8706": "PartialD;",
		"8707": "Exists;",
		"8708": "NotExists;",
		"8709": "varnothing;",
		"8711": "nabla;",
		"8712": "isinv;",
		"8713": "notinva;",
		"8715": "SuchThat;",
		"8716": "NotReverseElement;",
		"8719": "Product;",
		"8720": "Coproduct;",
		"8721": "sum;",
		"8722": "minus;",
		"8723": "mp;",
		"8724": "plusdo;",
		"8726": "ssetmn;",
		"8727": "lowast;",
		"8728": "SmallCircle;",
		"8730": "Sqrt;",
		"8733": "vprop;",
		"8734": "infin;",
		"8735": "angrt;",
		"8736": "angle;",
		"8737": "measuredangle;",
		"8738": "angsph;",
		"8739": "VerticalBar;",
		"8740": "nsmid;",
		"8741": "spar;",
		"8742": "nspar;",
		"8743": "wedge;",
		"8744": "vee;",
		"8745": "cap;",
		"8746": "cup;",
		"8747": "Integral;",
		"8748": "Int;",
		"8749": "tint;",
		"8750": "oint;",
		"8751": "DoubleContourIntegral;",
		"8752": "Cconint;",
		"8753": "cwint;",
		"8754": "cwconint;",
		"8755": "CounterClockwiseContourIntegral;",
		"8756": "therefore;",
		"8757": "because;",
		"8758": "ratio;",
		"8759": "Proportion;",
		"8760": "minusd;",
		"8762": "mDDot;",
		"8763": "homtht;",
		"8764": "Tilde;",
		"8765": "bsim;",
		"8766": "mstpos;",
		"8767": "acd;",
		"8768": "wreath;",
		"8769": "nsim;",
		"8770": "esim;",
		"8771": "TildeEqual;",
		"8772": "nsimeq;",
		"8773": "TildeFullEqual;",
		"8774": "simne;",
		"8775": "NotTildeFullEqual;",
		"8776": "TildeTilde;",
		"8777": "NotTildeTilde;",
		"8778": "approxeq;",
		"8779": "apid;",
		"8780": "bcong;",
		"8781": "CupCap;",
		"8782": "HumpDownHump;",
		"8783": "HumpEqual;",
		"8784": "esdot;",
		"8785": "eDot;",
		"8786": "fallingdotseq;",
		"8787": "risingdotseq;",
		"8788": "coloneq;",
		"8789": "eqcolon;",
		"8790": "eqcirc;",
		"8791": "cire;",
		"8793": "wedgeq;",
		"8794": "veeeq;",
		"8796": "trie;",
		"8799": "questeq;",
		"8800": "NotEqual;",
		"8801": "equiv;",
		"8802": "NotCongruent;",
		"8804": "leq;",
		"8805": "GreaterEqual;",
		"8806": "LessFullEqual;",
		"8807": "GreaterFullEqual;",
		"8808": "lneqq;",
		"8809": "gneqq;",
		"8810": "NestedLessLess;",
		"8811": "NestedGreaterGreater;",
		"8812": "twixt;",
		"8813": "NotCupCap;",
		"8814": "NotLess;",
		"8815": "NotGreater;",
		"8816": "NotLessEqual;",
		"8817": "NotGreaterEqual;",
		"8818": "lsim;",
		"8819": "gtrsim;",
		"8820": "NotLessTilde;",
		"8821": "NotGreaterTilde;",
		"8822": "lg;",
		"8823": "gtrless;",
		"8824": "ntlg;",
		"8825": "ntgl;",
		"8826": "Precedes;",
		"8827": "Succeeds;",
		"8828": "PrecedesSlantEqual;",
		"8829": "SucceedsSlantEqual;",
		"8830": "prsim;",
		"8831": "succsim;",
		"8832": "nprec;",
		"8833": "nsucc;",
		"8834": "subset;",
		"8835": "supset;",
		"8836": "nsub;",
		"8837": "nsup;",
		"8838": "SubsetEqual;",
		"8839": "supseteq;",
		"8840": "nsubseteq;",
		"8841": "nsupseteq;",
		"8842": "subsetneq;",
		"8843": "supsetneq;",
		"8845": "cupdot;",
		"8846": "uplus;",
		"8847": "SquareSubset;",
		"8848": "SquareSuperset;",
		"8849": "SquareSubsetEqual;",
		"8850": "SquareSupersetEqual;",
		"8851": "SquareIntersection;",
		"8852": "SquareUnion;",
		"8853": "oplus;",
		"8854": "ominus;",
		"8855": "otimes;",
		"8856": "osol;",
		"8857": "odot;",
		"8858": "ocir;",
		"8859": "oast;",
		"8861": "odash;",
		"8862": "plusb;",
		"8863": "minusb;",
		"8864": "timesb;",
		"8865": "sdotb;",
		"8866": "vdash;",
		"8867": "LeftTee;",
		"8868": "top;",
		"8869": "UpTee;",
		"8871": "models;",
		"8872": "vDash;",
		"8873": "Vdash;",
		"8874": "Vvdash;",
		"8875": "VDash;",
		"8876": "nvdash;",
		"8877": "nvDash;",
		"8878": "nVdash;",
		"8879": "nVDash;",
		"8880": "prurel;",
		"8882": "vltri;",
		"8883": "vrtri;",
		"8884": "trianglelefteq;",
		"8885": "trianglerighteq;",
		"8886": "origof;",
		"8887": "imof;",
		"8888": "mumap;",
		"8889": "hercon;",
		"8890": "intercal;",
		"8891": "veebar;",
		"8893": "barvee;",
		"8894": "angrtvb;",
		"8895": "lrtri;",
		"8896": "xwedge;",
		"8897": "xvee;",
		"8898": "xcap;",
		"8899": "xcup;",
		"8900": "diamond;",
		"8901": "sdot;",
		"8902": "Star;",
		"8903": "divonx;",
		"8904": "bowtie;",
		"8905": "ltimes;",
		"8906": "rtimes;",
		"8907": "lthree;",
		"8908": "rthree;",
		"8909": "bsime;",
		"8910": "cuvee;",
		"8911": "cuwed;",
		"8912": "Subset;",
		"8913": "Supset;",
		"8914": "Cap;",
		"8915": "Cup;",
		"8916": "pitchfork;",
		"8917": "epar;",
		"8918": "ltdot;",
		"8919": "gtrdot;",
		"8920": "Ll;",
		"8921": "ggg;",
		"8922": "LessEqualGreater;",
		"8923": "gtreqless;",
		"8926": "curlyeqprec;",
		"8927": "curlyeqsucc;",
		"8928": "nprcue;",
		"8929": "nsccue;",
		"8930": "nsqsube;",
		"8931": "nsqsupe;",
		"8934": "lnsim;",
		"8935": "gnsim;",
		"8936": "prnsim;",
		"8937": "succnsim;",
		"8938": "ntriangleleft;",
		"8939": "ntriangleright;",
		"8940": "ntrianglelefteq;",
		"8941": "ntrianglerighteq;",
		"8942": "vellip;",
		"8943": "ctdot;",
		"8944": "utdot;",
		"8945": "dtdot;",
		"8946": "disin;",
		"8947": "isinsv;",
		"8948": "isins;",
		"8949": "isindot;",
		"8950": "notinvc;",
		"8951": "notinvb;",
		"8953": "isinE;",
		"8954": "nisd;",
		"8955": "xnis;",
		"8956": "nis;",
		"8957": "notnivc;",
		"8958": "notnivb;",
		"8965": "barwedge;",
		"8966": "doublebarwedge;",
		"8968": "LeftCeiling;",
		"8969": "RightCeiling;",
		"8970": "lfloor;",
		"8971": "RightFloor;",
		"8972": "drcrop;",
		"8973": "dlcrop;",
		"8974": "urcrop;",
		"8975": "ulcrop;",
		"8976": "bnot;",
		"8978": "profline;",
		"8979": "profsurf;",
		"8981": "telrec;",
		"8982": "target;",
		"8988": "ulcorner;",
		"8989": "urcorner;",
		"8990": "llcorner;",
		"8991": "lrcorner;",
		"8994": "sfrown;",
		"8995": "ssmile;",
		"9005": "cylcty;",
		"9006": "profalar;",
		"9014": "topbot;",
		"9021": "ovbar;",
		"9023": "solbar;",
		"9084": "angzarr;",
		"9136": "lmoustache;",
		"9137": "rmoustache;",
		"9140": "tbrk;",
		"9141": "UnderBracket;",
		"9142": "bbrktbrk;",
		"9180": "OverParenthesis;",
		"9181": "UnderParenthesis;",
		"9182": "OverBrace;",
		"9183": "UnderBrace;",
		"9186": "trpezium;",
		"9191": "elinters;",
		"9251": "blank;",
		"9416": "oS;",
		"9472": "HorizontalLine;",
		"9474": "boxv;",
		"9484": "boxdr;",
		"9488": "boxdl;",
		"9492": "boxur;",
		"9496": "boxul;",
		"9500": "boxvr;",
		"9508": "boxvl;",
		"9516": "boxhd;",
		"9524": "boxhu;",
		"9532": "boxvh;",
		"9552": "boxH;",
		"9553": "boxV;",
		"9554": "boxdR;",
		"9555": "boxDr;",
		"9556": "boxDR;",
		"9557": "boxdL;",
		"9558": "boxDl;",
		"9559": "boxDL;",
		"9560": "boxuR;",
		"9561": "boxUr;",
		"9562": "boxUR;",
		"9563": "boxuL;",
		"9564": "boxUl;",
		"9565": "boxUL;",
		"9566": "boxvR;",
		"9567": "boxVr;",
		"9568": "boxVR;",
		"9569": "boxvL;",
		"9570": "boxVl;",
		"9571": "boxVL;",
		"9572": "boxHd;",
		"9573": "boxhD;",
		"9574": "boxHD;",
		"9575": "boxHu;",
		"9576": "boxhU;",
		"9577": "boxHU;",
		"9578": "boxvH;",
		"9579": "boxVh;",
		"9580": "boxVH;",
		"9600": "uhblk;",
		"9604": "lhblk;",
		"9608": "block;",
		"9617": "blk14;",
		"9618": "blk12;",
		"9619": "blk34;",
		"9633": "square;",
		"9642": "squf;",
		"9643": "EmptyVerySmallSquare;",
		"9645": "rect;",
		"9646": "marker;",
		"9649": "fltns;",
		"9651": "xutri;",
		"9652": "utrif;",
		"9653": "utri;",
		"9656": "rtrif;",
		"9657": "triangleright;",
		"9661": "xdtri;",
		"9662": "dtrif;",
		"9663": "triangledown;",
		"9666": "ltrif;",
		"9667": "triangleleft;",
		"9674": "lozenge;",
		"9675": "cir;",
		"9708": "tridot;",
		"9711": "xcirc;",
		"9720": "ultri;",
		"9721": "urtri;",
		"9722": "lltri;",
		"9723": "EmptySmallSquare;",
		"9724": "FilledSmallSquare;",
		"9733": "starf;",
		"9734": "star;",
		"9742": "phone;",
		"9792": "female;",
		"9794": "male;",
		"9824": "spadesuit;",
		"9827": "clubsuit;",
		"9829": "heartsuit;",
		"9830": "diams;",
		"9834": "sung;",
		"9837": "flat;",
		"9838": "natural;",
		"9839": "sharp;",
		"10003": "checkmark;",
		"10007": "cross;",
		"10016": "maltese;",
		"10038": "sext;",
		"10072": "VerticalSeparator;",
		"10098": "lbbrk;",
		"10099": "rbbrk;",
		"10184": "bsolhsub;",
		"10185": "suphsol;",
		"10214": "lobrk;",
		"10215": "robrk;",
		"10216": "LeftAngleBracket;",
		"10217": "RightAngleBracket;",
		"10218": "Lang;",
		"10219": "Rang;",
		"10220": "loang;",
		"10221": "roang;",
		"10229": "xlarr;",
		"10230": "xrarr;",
		"10231": "xharr;",
		"10232": "xlArr;",
		"10233": "xrArr;",
		"10234": "xhArr;",
		"10236": "xmap;",
		"10239": "dzigrarr;",
		"10498": "nvlArr;",
		"10499": "nvrArr;",
		"10500": "nvHarr;",
		"10501": "Map;",
		"10508": "lbarr;",
		"10509": "rbarr;",
		"10510": "lBarr;",
		"10511": "rBarr;",
		"10512": "RBarr;",
		"10513": "DDotrahd;",
		"10514": "UpArrowBar;",
		"10515": "DownArrowBar;",
		"10518": "Rarrtl;",
		"10521": "latail;",
		"10522": "ratail;",
		"10523": "lAtail;",
		"10524": "rAtail;",
		"10525": "larrfs;",
		"10526": "rarrfs;",
		"10527": "larrbfs;",
		"10528": "rarrbfs;",
		"10531": "nwarhk;",
		"10532": "nearhk;",
		"10533": "searhk;",
		"10534": "swarhk;",
		"10535": "nwnear;",
		"10536": "toea;",
		"10537": "tosa;",
		"10538": "swnwar;",
		"10547": "rarrc;",
		"10549": "cudarrr;",
		"10550": "ldca;",
		"10551": "rdca;",
		"10552": "cudarrl;",
		"10553": "larrpl;",
		"10556": "curarrm;",
		"10557": "cularrp;",
		"10565": "rarrpl;",
		"10568": "harrcir;",
		"10569": "Uarrocir;",
		"10570": "lurdshar;",
		"10571": "ldrushar;",
		"10574": "LeftRightVector;",
		"10575": "RightUpDownVector;",
		"10576": "DownLeftRightVector;",
		"10577": "LeftUpDownVector;",
		"10578": "LeftVectorBar;",
		"10579": "RightVectorBar;",
		"10580": "RightUpVectorBar;",
		"10581": "RightDownVectorBar;",
		"10582": "DownLeftVectorBar;",
		"10583": "DownRightVectorBar;",
		"10584": "LeftUpVectorBar;",
		"10585": "LeftDownVectorBar;",
		"10586": "LeftTeeVector;",
		"10587": "RightTeeVector;",
		"10588": "RightUpTeeVector;",
		"10589": "RightDownTeeVector;",
		"10590": "DownLeftTeeVector;",
		"10591": "DownRightTeeVector;",
		"10592": "LeftUpTeeVector;",
		"10593": "LeftDownTeeVector;",
		"10594": "lHar;",
		"10595": "uHar;",
		"10596": "rHar;",
		"10597": "dHar;",
		"10598": "luruhar;",
		"10599": "ldrdhar;",
		"10600": "ruluhar;",
		"10601": "rdldhar;",
		"10602": "lharul;",
		"10603": "llhard;",
		"10604": "rharul;",
		"10605": "lrhard;",
		"10606": "UpEquilibrium;",
		"10607": "ReverseUpEquilibrium;",
		"10608": "RoundImplies;",
		"10609": "erarr;",
		"10610": "simrarr;",
		"10611": "larrsim;",
		"10612": "rarrsim;",
		"10613": "rarrap;",
		"10614": "ltlarr;",
		"10616": "gtrarr;",
		"10617": "subrarr;",
		"10619": "suplarr;",
		"10620": "lfisht;",
		"10621": "rfisht;",
		"10622": "ufisht;",
		"10623": "dfisht;",
		"10629": "lopar;",
		"10630": "ropar;",
		"10635": "lbrke;",
		"10636": "rbrke;",
		"10637": "lbrkslu;",
		"10638": "rbrksld;",
		"10639": "lbrksld;",
		"10640": "rbrkslu;",
		"10641": "langd;",
		"10642": "rangd;",
		"10643": "lparlt;",
		"10644": "rpargt;",
		"10645": "gtlPar;",
		"10646": "ltrPar;",
		"10650": "vzigzag;",
		"10652": "vangrt;",
		"10653": "angrtvbd;",
		"10660": "ange;",
		"10661": "range;",
		"10662": "dwangle;",
		"10663": "uwangle;",
		"10664": "angmsdaa;",
		"10665": "angmsdab;",
		"10666": "angmsdac;",
		"10667": "angmsdad;",
		"10668": "angmsdae;",
		"10669": "angmsdaf;",
		"10670": "angmsdag;",
		"10671": "angmsdah;",
		"10672": "bemptyv;",
		"10673": "demptyv;",
		"10674": "cemptyv;",
		"10675": "raemptyv;",
		"10676": "laemptyv;",
		"10677": "ohbar;",
		"10678": "omid;",
		"10679": "opar;",
		"10681": "operp;",
		"10683": "olcross;",
		"10684": "odsold;",
		"10686": "olcir;",
		"10687": "ofcir;",
		"10688": "olt;",
		"10689": "ogt;",
		"10690": "cirscir;",
		"10691": "cirE;",
		"10692": "solb;",
		"10693": "bsolb;",
		"10697": "boxbox;",
		"10701": "trisb;",
		"10702": "rtriltri;",
		"10703": "LeftTriangleBar;",
		"10704": "RightTriangleBar;",
		"10716": "iinfin;",
		"10717": "infintie;",
		"10718": "nvinfin;",
		"10723": "eparsl;",
		"10724": "smeparsl;",
		"10725": "eqvparsl;",
		"10731": "lozf;",
		"10740": "RuleDelayed;",
		"10742": "dsol;",
		"10752": "xodot;",
		"10753": "xoplus;",
		"10754": "xotime;",
		"10756": "xuplus;",
		"10758": "xsqcup;",
		"10764": "qint;",
		"10765": "fpartint;",
		"10768": "cirfnint;",
		"10769": "awint;",
		"10770": "rppolint;",
		"10771": "scpolint;",
		"10772": "npolint;",
		"10773": "pointint;",
		"10774": "quatint;",
		"10775": "intlarhk;",
		"10786": "pluscir;",
		"10787": "plusacir;",
		"10788": "simplus;",
		"10789": "plusdu;",
		"10790": "plussim;",
		"10791": "plustwo;",
		"10793": "mcomma;",
		"10794": "minusdu;",
		"10797": "loplus;",
		"10798": "roplus;",
		"10799": "Cross;",
		"10800": "timesd;",
		"10801": "timesbar;",
		"10803": "smashp;",
		"10804": "lotimes;",
		"10805": "rotimes;",
		"10806": "otimesas;",
		"10807": "Otimes;",
		"10808": "odiv;",
		"10809": "triplus;",
		"10810": "triminus;",
		"10811": "tritime;",
		"10812": "iprod;",
		"10815": "amalg;",
		"10816": "capdot;",
		"10818": "ncup;",
		"10819": "ncap;",
		"10820": "capand;",
		"10821": "cupor;",
		"10822": "cupcap;",
		"10823": "capcup;",
		"10824": "cupbrcap;",
		"10825": "capbrcup;",
		"10826": "cupcup;",
		"10827": "capcap;",
		"10828": "ccups;",
		"10829": "ccaps;",
		"10832": "ccupssm;",
		"10835": "And;",
		"10836": "Or;",
		"10837": "andand;",
		"10838": "oror;",
		"10839": "orslope;",
		"10840": "andslope;",
		"10842": "andv;",
		"10843": "orv;",
		"10844": "andd;",
		"10845": "ord;",
		"10847": "wedbar;",
		"10854": "sdote;",
		"10858": "simdot;",
		"10861": "congdot;",
		"10862": "easter;",
		"10863": "apacir;",
		"10864": "apE;",
		"10865": "eplus;",
		"10866": "pluse;",
		"10867": "Esim;",
		"10868": "Colone;",
		"10869": "Equal;",
		"10871": "eDDot;",
		"10872": "equivDD;",
		"10873": "ltcir;",
		"10874": "gtcir;",
		"10875": "ltquest;",
		"10876": "gtquest;",
		"10877": "LessSlantEqual;",
		"10878": "GreaterSlantEqual;",
		"10879": "lesdot;",
		"10880": "gesdot;",
		"10881": "lesdoto;",
		"10882": "gesdoto;",
		"10883": "lesdotor;",
		"10884": "gesdotol;",
		"10885": "lessapprox;",
		"10886": "gtrapprox;",
		"10887": "lneq;",
		"10888": "gneq;",
		"10889": "lnapprox;",
		"10890": "gnapprox;",
		"10891": "lesseqqgtr;",
		"10892": "gtreqqless;",
		"10893": "lsime;",
		"10894": "gsime;",
		"10895": "lsimg;",
		"10896": "gsiml;",
		"10897": "lgE;",
		"10898": "glE;",
		"10899": "lesges;",
		"10900": "gesles;",
		"10901": "eqslantless;",
		"10902": "eqslantgtr;",
		"10903": "elsdot;",
		"10904": "egsdot;",
		"10905": "el;",
		"10906": "eg;",
		"10909": "siml;",
		"10910": "simg;",
		"10911": "simlE;",
		"10912": "simgE;",
		"10913": "LessLess;",
		"10914": "GreaterGreater;",
		"10916": "glj;",
		"10917": "gla;",
		"10918": "ltcc;",
		"10919": "gtcc;",
		"10920": "lescc;",
		"10921": "gescc;",
		"10922": "smt;",
		"10923": "lat;",
		"10924": "smte;",
		"10925": "late;",
		"10926": "bumpE;",
		"10927": "preceq;",
		"10928": "succeq;",
		"10931": "prE;",
		"10932": "scE;",
		"10933": "prnE;",
		"10934": "succneqq;",
		"10935": "precapprox;",
		"10936": "succapprox;",
		"10937": "prnap;",
		"10938": "succnapprox;",
		"10939": "Pr;",
		"10940": "Sc;",
		"10941": "subdot;",
		"10942": "supdot;",
		"10943": "subplus;",
		"10944": "supplus;",
		"10945": "submult;",
		"10946": "supmult;",
		"10947": "subedot;",
		"10948": "supedot;",
		"10949": "subseteqq;",
		"10950": "supseteqq;",
		"10951": "subsim;",
		"10952": "supsim;",
		"10955": "subsetneqq;",
		"10956": "supsetneqq;",
		"10959": "csub;",
		"10960": "csup;",
		"10961": "csube;",
		"10962": "csupe;",
		"10963": "subsup;",
		"10964": "supsub;",
		"10965": "subsub;",
		"10966": "supsup;",
		"10967": "suphsub;",
		"10968": "supdsub;",
		"10969": "forkv;",
		"10970": "topfork;",
		"10971": "mlcp;",
		"10980": "DoubleLeftTee;",
		"10982": "Vdashl;",
		"10983": "Barv;",
		"10984": "vBar;",
		"10985": "vBarv;",
		"10987": "Vbar;",
		"10988": "Not;",
		"10989": "bNot;",
		"10990": "rnmid;",
		"10991": "cirmid;",
		"10992": "midcir;",
		"10993": "topcir;",
		"10994": "nhpar;",
		"10995": "parsim;",
		"11005": "parsl;",
		"64256": "fflig;",
		"64257": "filig;",
		"64258": "fllig;",
		"64259": "ffilig;",
		"64260": "ffllig;"
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var punycode = __webpack_require__(24);
	var entities = __webpack_require__(28);
	
	module.exports = decode;
	
	function decode(str) {
	    if (typeof str !== 'string') {
	        throw new TypeError('Expected a String');
	    }
	
	    return str.replace(/&(#?[^;\W]+;?)/g, function (_, match) {
	        var m;
	        if (m = /^#(\d+);?$/.exec(match)) {
	            return punycode.ucs2.encode([parseInt(m[1], 10)]);
	        } else if (m = /^#[Xx]([A-Fa-f0-9]+);?/.exec(match)) {
	            return punycode.ucs2.encode([parseInt(m[1], 16)]);
	        } else {
	            // named entity
	            var hasSemi = /;$/.test(match);
	            var withoutSemi = hasSemi ? match.replace(/;$/, '') : match;
	            var target = entities[withoutSemi] || hasSemi && entities[match];
	
	            if (typeof target === 'number') {
	                return punycode.ucs2.encode([target]);
	            } else if (typeof target === 'string') {
	                return target;
	            } else {
	                return '&' + match;
	            }
	        }
	    });
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = {
		"Aacute;": "Á",
		"Aacute": "Á",
		"aacute;": "á",
		"aacute": "á",
		"Abreve;": "Ă",
		"abreve;": "ă",
		"ac;": "∾",
		"acd;": "∿",
		"acE;": "∾̳",
		"Acirc;": "Â",
		"Acirc": "Â",
		"acirc;": "â",
		"acirc": "â",
		"acute;": "´",
		"acute": "´",
		"Acy;": "А",
		"acy;": "а",
		"AElig;": "Æ",
		"AElig": "Æ",
		"aelig;": "æ",
		"aelig": "æ",
		"af;": "⁡",
		"Afr;": "𝔄",
		"afr;": "𝔞",
		"Agrave;": "À",
		"Agrave": "À",
		"agrave;": "à",
		"agrave": "à",
		"alefsym;": "ℵ",
		"aleph;": "ℵ",
		"Alpha;": "Α",
		"alpha;": "α",
		"Amacr;": "Ā",
		"amacr;": "ā",
		"amalg;": "⨿",
		"AMP;": "&",
		"AMP": "&",
		"amp;": "&",
		"amp": "&",
		"And;": "⩓",
		"and;": "∧",
		"andand;": "⩕",
		"andd;": "⩜",
		"andslope;": "⩘",
		"andv;": "⩚",
		"ang;": "∠",
		"ange;": "⦤",
		"angle;": "∠",
		"angmsd;": "∡",
		"angmsdaa;": "⦨",
		"angmsdab;": "⦩",
		"angmsdac;": "⦪",
		"angmsdad;": "⦫",
		"angmsdae;": "⦬",
		"angmsdaf;": "⦭",
		"angmsdag;": "⦮",
		"angmsdah;": "⦯",
		"angrt;": "∟",
		"angrtvb;": "⊾",
		"angrtvbd;": "⦝",
		"angsph;": "∢",
		"angst;": "Å",
		"angzarr;": "⍼",
		"Aogon;": "Ą",
		"aogon;": "ą",
		"Aopf;": "𝔸",
		"aopf;": "𝕒",
		"ap;": "≈",
		"apacir;": "⩯",
		"apE;": "⩰",
		"ape;": "≊",
		"apid;": "≋",
		"apos;": "'",
		"ApplyFunction;": "⁡",
		"approx;": "≈",
		"approxeq;": "≊",
		"Aring;": "Å",
		"Aring": "Å",
		"aring;": "å",
		"aring": "å",
		"Ascr;": "𝒜",
		"ascr;": "𝒶",
		"Assign;": "≔",
		"ast;": "*",
		"asymp;": "≈",
		"asympeq;": "≍",
		"Atilde;": "Ã",
		"Atilde": "Ã",
		"atilde;": "ã",
		"atilde": "ã",
		"Auml;": "Ä",
		"Auml": "Ä",
		"auml;": "ä",
		"auml": "ä",
		"awconint;": "∳",
		"awint;": "⨑",
		"backcong;": "≌",
		"backepsilon;": "϶",
		"backprime;": "‵",
		"backsim;": "∽",
		"backsimeq;": "⋍",
		"Backslash;": "∖",
		"Barv;": "⫧",
		"barvee;": "⊽",
		"Barwed;": "⌆",
		"barwed;": "⌅",
		"barwedge;": "⌅",
		"bbrk;": "⎵",
		"bbrktbrk;": "⎶",
		"bcong;": "≌",
		"Bcy;": "Б",
		"bcy;": "б",
		"bdquo;": "„",
		"becaus;": "∵",
		"Because;": "∵",
		"because;": "∵",
		"bemptyv;": "⦰",
		"bepsi;": "϶",
		"bernou;": "ℬ",
		"Bernoullis;": "ℬ",
		"Beta;": "Β",
		"beta;": "β",
		"beth;": "ℶ",
		"between;": "≬",
		"Bfr;": "𝔅",
		"bfr;": "𝔟",
		"bigcap;": "⋂",
		"bigcirc;": "◯",
		"bigcup;": "⋃",
		"bigodot;": "⨀",
		"bigoplus;": "⨁",
		"bigotimes;": "⨂",
		"bigsqcup;": "⨆",
		"bigstar;": "★",
		"bigtriangledown;": "▽",
		"bigtriangleup;": "△",
		"biguplus;": "⨄",
		"bigvee;": "⋁",
		"bigwedge;": "⋀",
		"bkarow;": "⤍",
		"blacklozenge;": "⧫",
		"blacksquare;": "▪",
		"blacktriangle;": "▴",
		"blacktriangledown;": "▾",
		"blacktriangleleft;": "◂",
		"blacktriangleright;": "▸",
		"blank;": "␣",
		"blk12;": "▒",
		"blk14;": "░",
		"blk34;": "▓",
		"block;": "█",
		"bne;": "=⃥",
		"bnequiv;": "≡⃥",
		"bNot;": "⫭",
		"bnot;": "⌐",
		"Bopf;": "𝔹",
		"bopf;": "𝕓",
		"bot;": "⊥",
		"bottom;": "⊥",
		"bowtie;": "⋈",
		"boxbox;": "⧉",
		"boxDL;": "╗",
		"boxDl;": "╖",
		"boxdL;": "╕",
		"boxdl;": "┐",
		"boxDR;": "╔",
		"boxDr;": "╓",
		"boxdR;": "╒",
		"boxdr;": "┌",
		"boxH;": "═",
		"boxh;": "─",
		"boxHD;": "╦",
		"boxHd;": "╤",
		"boxhD;": "╥",
		"boxhd;": "┬",
		"boxHU;": "╩",
		"boxHu;": "╧",
		"boxhU;": "╨",
		"boxhu;": "┴",
		"boxminus;": "⊟",
		"boxplus;": "⊞",
		"boxtimes;": "⊠",
		"boxUL;": "╝",
		"boxUl;": "╜",
		"boxuL;": "╛",
		"boxul;": "┘",
		"boxUR;": "╚",
		"boxUr;": "╙",
		"boxuR;": "╘",
		"boxur;": "└",
		"boxV;": "║",
		"boxv;": "│",
		"boxVH;": "╬",
		"boxVh;": "╫",
		"boxvH;": "╪",
		"boxvh;": "┼",
		"boxVL;": "╣",
		"boxVl;": "╢",
		"boxvL;": "╡",
		"boxvl;": "┤",
		"boxVR;": "╠",
		"boxVr;": "╟",
		"boxvR;": "╞",
		"boxvr;": "├",
		"bprime;": "‵",
		"Breve;": "˘",
		"breve;": "˘",
		"brvbar;": "¦",
		"brvbar": "¦",
		"Bscr;": "ℬ",
		"bscr;": "𝒷",
		"bsemi;": "⁏",
		"bsim;": "∽",
		"bsime;": "⋍",
		"bsol;": "\\",
		"bsolb;": "⧅",
		"bsolhsub;": "⟈",
		"bull;": "•",
		"bullet;": "•",
		"bump;": "≎",
		"bumpE;": "⪮",
		"bumpe;": "≏",
		"Bumpeq;": "≎",
		"bumpeq;": "≏",
		"Cacute;": "Ć",
		"cacute;": "ć",
		"Cap;": "⋒",
		"cap;": "∩",
		"capand;": "⩄",
		"capbrcup;": "⩉",
		"capcap;": "⩋",
		"capcup;": "⩇",
		"capdot;": "⩀",
		"CapitalDifferentialD;": "ⅅ",
		"caps;": "∩︀",
		"caret;": "⁁",
		"caron;": "ˇ",
		"Cayleys;": "ℭ",
		"ccaps;": "⩍",
		"Ccaron;": "Č",
		"ccaron;": "č",
		"Ccedil;": "Ç",
		"Ccedil": "Ç",
		"ccedil;": "ç",
		"ccedil": "ç",
		"Ccirc;": "Ĉ",
		"ccirc;": "ĉ",
		"Cconint;": "∰",
		"ccups;": "⩌",
		"ccupssm;": "⩐",
		"Cdot;": "Ċ",
		"cdot;": "ċ",
		"cedil;": "¸",
		"cedil": "¸",
		"Cedilla;": "¸",
		"cemptyv;": "⦲",
		"cent;": "¢",
		"cent": "¢",
		"CenterDot;": "·",
		"centerdot;": "·",
		"Cfr;": "ℭ",
		"cfr;": "𝔠",
		"CHcy;": "Ч",
		"chcy;": "ч",
		"check;": "✓",
		"checkmark;": "✓",
		"Chi;": "Χ",
		"chi;": "χ",
		"cir;": "○",
		"circ;": "ˆ",
		"circeq;": "≗",
		"circlearrowleft;": "↺",
		"circlearrowright;": "↻",
		"circledast;": "⊛",
		"circledcirc;": "⊚",
		"circleddash;": "⊝",
		"CircleDot;": "⊙",
		"circledR;": "®",
		"circledS;": "Ⓢ",
		"CircleMinus;": "⊖",
		"CirclePlus;": "⊕",
		"CircleTimes;": "⊗",
		"cirE;": "⧃",
		"cire;": "≗",
		"cirfnint;": "⨐",
		"cirmid;": "⫯",
		"cirscir;": "⧂",
		"ClockwiseContourIntegral;": "∲",
		"CloseCurlyDoubleQuote;": "”",
		"CloseCurlyQuote;": "’",
		"clubs;": "♣",
		"clubsuit;": "♣",
		"Colon;": "∷",
		"colon;": ":",
		"Colone;": "⩴",
		"colone;": "≔",
		"coloneq;": "≔",
		"comma;": ",",
		"commat;": "@",
		"comp;": "∁",
		"compfn;": "∘",
		"complement;": "∁",
		"complexes;": "ℂ",
		"cong;": "≅",
		"congdot;": "⩭",
		"Congruent;": "≡",
		"Conint;": "∯",
		"conint;": "∮",
		"ContourIntegral;": "∮",
		"Copf;": "ℂ",
		"copf;": "𝕔",
		"coprod;": "∐",
		"Coproduct;": "∐",
		"COPY;": "©",
		"COPY": "©",
		"copy;": "©",
		"copy": "©",
		"copysr;": "℗",
		"CounterClockwiseContourIntegral;": "∳",
		"crarr;": "↵",
		"Cross;": "⨯",
		"cross;": "✗",
		"Cscr;": "𝒞",
		"cscr;": "𝒸",
		"csub;": "⫏",
		"csube;": "⫑",
		"csup;": "⫐",
		"csupe;": "⫒",
		"ctdot;": "⋯",
		"cudarrl;": "⤸",
		"cudarrr;": "⤵",
		"cuepr;": "⋞",
		"cuesc;": "⋟",
		"cularr;": "↶",
		"cularrp;": "⤽",
		"Cup;": "⋓",
		"cup;": "∪",
		"cupbrcap;": "⩈",
		"CupCap;": "≍",
		"cupcap;": "⩆",
		"cupcup;": "⩊",
		"cupdot;": "⊍",
		"cupor;": "⩅",
		"cups;": "∪︀",
		"curarr;": "↷",
		"curarrm;": "⤼",
		"curlyeqprec;": "⋞",
		"curlyeqsucc;": "⋟",
		"curlyvee;": "⋎",
		"curlywedge;": "⋏",
		"curren;": "¤",
		"curren": "¤",
		"curvearrowleft;": "↶",
		"curvearrowright;": "↷",
		"cuvee;": "⋎",
		"cuwed;": "⋏",
		"cwconint;": "∲",
		"cwint;": "∱",
		"cylcty;": "⌭",
		"Dagger;": "‡",
		"dagger;": "†",
		"daleth;": "ℸ",
		"Darr;": "↡",
		"dArr;": "⇓",
		"darr;": "↓",
		"dash;": "‐",
		"Dashv;": "⫤",
		"dashv;": "⊣",
		"dbkarow;": "⤏",
		"dblac;": "˝",
		"Dcaron;": "Ď",
		"dcaron;": "ď",
		"Dcy;": "Д",
		"dcy;": "д",
		"DD;": "ⅅ",
		"dd;": "ⅆ",
		"ddagger;": "‡",
		"ddarr;": "⇊",
		"DDotrahd;": "⤑",
		"ddotseq;": "⩷",
		"deg;": "°",
		"deg": "°",
		"Del;": "∇",
		"Delta;": "Δ",
		"delta;": "δ",
		"demptyv;": "⦱",
		"dfisht;": "⥿",
		"Dfr;": "𝔇",
		"dfr;": "𝔡",
		"dHar;": "⥥",
		"dharl;": "⇃",
		"dharr;": "⇂",
		"DiacriticalAcute;": "´",
		"DiacriticalDot;": "˙",
		"DiacriticalDoubleAcute;": "˝",
		"DiacriticalGrave;": "`",
		"DiacriticalTilde;": "˜",
		"diam;": "⋄",
		"Diamond;": "⋄",
		"diamond;": "⋄",
		"diamondsuit;": "♦",
		"diams;": "♦",
		"die;": "¨",
		"DifferentialD;": "ⅆ",
		"digamma;": "ϝ",
		"disin;": "⋲",
		"div;": "÷",
		"divide;": "÷",
		"divide": "÷",
		"divideontimes;": "⋇",
		"divonx;": "⋇",
		"DJcy;": "Ђ",
		"djcy;": "ђ",
		"dlcorn;": "⌞",
		"dlcrop;": "⌍",
		"dollar;": "$",
		"Dopf;": "𝔻",
		"dopf;": "𝕕",
		"Dot;": "¨",
		"dot;": "˙",
		"DotDot;": "⃜",
		"doteq;": "≐",
		"doteqdot;": "≑",
		"DotEqual;": "≐",
		"dotminus;": "∸",
		"dotplus;": "∔",
		"dotsquare;": "⊡",
		"doublebarwedge;": "⌆",
		"DoubleContourIntegral;": "∯",
		"DoubleDot;": "¨",
		"DoubleDownArrow;": "⇓",
		"DoubleLeftArrow;": "⇐",
		"DoubleLeftRightArrow;": "⇔",
		"DoubleLeftTee;": "⫤",
		"DoubleLongLeftArrow;": "⟸",
		"DoubleLongLeftRightArrow;": "⟺",
		"DoubleLongRightArrow;": "⟹",
		"DoubleRightArrow;": "⇒",
		"DoubleRightTee;": "⊨",
		"DoubleUpArrow;": "⇑",
		"DoubleUpDownArrow;": "⇕",
		"DoubleVerticalBar;": "∥",
		"DownArrow;": "↓",
		"Downarrow;": "⇓",
		"downarrow;": "↓",
		"DownArrowBar;": "⤓",
		"DownArrowUpArrow;": "⇵",
		"DownBreve;": "̑",
		"downdownarrows;": "⇊",
		"downharpoonleft;": "⇃",
		"downharpoonright;": "⇂",
		"DownLeftRightVector;": "⥐",
		"DownLeftTeeVector;": "⥞",
		"DownLeftVector;": "↽",
		"DownLeftVectorBar;": "⥖",
		"DownRightTeeVector;": "⥟",
		"DownRightVector;": "⇁",
		"DownRightVectorBar;": "⥗",
		"DownTee;": "⊤",
		"DownTeeArrow;": "↧",
		"drbkarow;": "⤐",
		"drcorn;": "⌟",
		"drcrop;": "⌌",
		"Dscr;": "𝒟",
		"dscr;": "𝒹",
		"DScy;": "Ѕ",
		"dscy;": "ѕ",
		"dsol;": "⧶",
		"Dstrok;": "Đ",
		"dstrok;": "đ",
		"dtdot;": "⋱",
		"dtri;": "▿",
		"dtrif;": "▾",
		"duarr;": "⇵",
		"duhar;": "⥯",
		"dwangle;": "⦦",
		"DZcy;": "Џ",
		"dzcy;": "џ",
		"dzigrarr;": "⟿",
		"Eacute;": "É",
		"Eacute": "É",
		"eacute;": "é",
		"eacute": "é",
		"easter;": "⩮",
		"Ecaron;": "Ě",
		"ecaron;": "ě",
		"ecir;": "≖",
		"Ecirc;": "Ê",
		"Ecirc": "Ê",
		"ecirc;": "ê",
		"ecirc": "ê",
		"ecolon;": "≕",
		"Ecy;": "Э",
		"ecy;": "э",
		"eDDot;": "⩷",
		"Edot;": "Ė",
		"eDot;": "≑",
		"edot;": "ė",
		"ee;": "ⅇ",
		"efDot;": "≒",
		"Efr;": "𝔈",
		"efr;": "𝔢",
		"eg;": "⪚",
		"Egrave;": "È",
		"Egrave": "È",
		"egrave;": "è",
		"egrave": "è",
		"egs;": "⪖",
		"egsdot;": "⪘",
		"el;": "⪙",
		"Element;": "∈",
		"elinters;": "⏧",
		"ell;": "ℓ",
		"els;": "⪕",
		"elsdot;": "⪗",
		"Emacr;": "Ē",
		"emacr;": "ē",
		"empty;": "∅",
		"emptyset;": "∅",
		"EmptySmallSquare;": "◻",
		"emptyv;": "∅",
		"EmptyVerySmallSquare;": "▫",
		"emsp;": " ",
		"emsp13;": " ",
		"emsp14;": " ",
		"ENG;": "Ŋ",
		"eng;": "ŋ",
		"ensp;": " ",
		"Eogon;": "Ę",
		"eogon;": "ę",
		"Eopf;": "𝔼",
		"eopf;": "𝕖",
		"epar;": "⋕",
		"eparsl;": "⧣",
		"eplus;": "⩱",
		"epsi;": "ε",
		"Epsilon;": "Ε",
		"epsilon;": "ε",
		"epsiv;": "ϵ",
		"eqcirc;": "≖",
		"eqcolon;": "≕",
		"eqsim;": "≂",
		"eqslantgtr;": "⪖",
		"eqslantless;": "⪕",
		"Equal;": "⩵",
		"equals;": "=",
		"EqualTilde;": "≂",
		"equest;": "≟",
		"Equilibrium;": "⇌",
		"equiv;": "≡",
		"equivDD;": "⩸",
		"eqvparsl;": "⧥",
		"erarr;": "⥱",
		"erDot;": "≓",
		"Escr;": "ℰ",
		"escr;": "ℯ",
		"esdot;": "≐",
		"Esim;": "⩳",
		"esim;": "≂",
		"Eta;": "Η",
		"eta;": "η",
		"ETH;": "Ð",
		"ETH": "Ð",
		"eth;": "ð",
		"eth": "ð",
		"Euml;": "Ë",
		"Euml": "Ë",
		"euml;": "ë",
		"euml": "ë",
		"euro;": "€",
		"excl;": "!",
		"exist;": "∃",
		"Exists;": "∃",
		"expectation;": "ℰ",
		"ExponentialE;": "ⅇ",
		"exponentiale;": "ⅇ",
		"fallingdotseq;": "≒",
		"Fcy;": "Ф",
		"fcy;": "ф",
		"female;": "♀",
		"ffilig;": "ﬃ",
		"fflig;": "ﬀ",
		"ffllig;": "ﬄ",
		"Ffr;": "𝔉",
		"ffr;": "𝔣",
		"filig;": "ﬁ",
		"FilledSmallSquare;": "◼",
		"FilledVerySmallSquare;": "▪",
		"fjlig;": "fj",
		"flat;": "♭",
		"fllig;": "ﬂ",
		"fltns;": "▱",
		"fnof;": "ƒ",
		"Fopf;": "𝔽",
		"fopf;": "𝕗",
		"ForAll;": "∀",
		"forall;": "∀",
		"fork;": "⋔",
		"forkv;": "⫙",
		"Fouriertrf;": "ℱ",
		"fpartint;": "⨍",
		"frac12;": "½",
		"frac12": "½",
		"frac13;": "⅓",
		"frac14;": "¼",
		"frac14": "¼",
		"frac15;": "⅕",
		"frac16;": "⅙",
		"frac18;": "⅛",
		"frac23;": "⅔",
		"frac25;": "⅖",
		"frac34;": "¾",
		"frac34": "¾",
		"frac35;": "⅗",
		"frac38;": "⅜",
		"frac45;": "⅘",
		"frac56;": "⅚",
		"frac58;": "⅝",
		"frac78;": "⅞",
		"frasl;": "⁄",
		"frown;": "⌢",
		"Fscr;": "ℱ",
		"fscr;": "𝒻",
		"gacute;": "ǵ",
		"Gamma;": "Γ",
		"gamma;": "γ",
		"Gammad;": "Ϝ",
		"gammad;": "ϝ",
		"gap;": "⪆",
		"Gbreve;": "Ğ",
		"gbreve;": "ğ",
		"Gcedil;": "Ģ",
		"Gcirc;": "Ĝ",
		"gcirc;": "ĝ",
		"Gcy;": "Г",
		"gcy;": "г",
		"Gdot;": "Ġ",
		"gdot;": "ġ",
		"gE;": "≧",
		"ge;": "≥",
		"gEl;": "⪌",
		"gel;": "⋛",
		"geq;": "≥",
		"geqq;": "≧",
		"geqslant;": "⩾",
		"ges;": "⩾",
		"gescc;": "⪩",
		"gesdot;": "⪀",
		"gesdoto;": "⪂",
		"gesdotol;": "⪄",
		"gesl;": "⋛︀",
		"gesles;": "⪔",
		"Gfr;": "𝔊",
		"gfr;": "𝔤",
		"Gg;": "⋙",
		"gg;": "≫",
		"ggg;": "⋙",
		"gimel;": "ℷ",
		"GJcy;": "Ѓ",
		"gjcy;": "ѓ",
		"gl;": "≷",
		"gla;": "⪥",
		"glE;": "⪒",
		"glj;": "⪤",
		"gnap;": "⪊",
		"gnapprox;": "⪊",
		"gnE;": "≩",
		"gne;": "⪈",
		"gneq;": "⪈",
		"gneqq;": "≩",
		"gnsim;": "⋧",
		"Gopf;": "𝔾",
		"gopf;": "𝕘",
		"grave;": "`",
		"GreaterEqual;": "≥",
		"GreaterEqualLess;": "⋛",
		"GreaterFullEqual;": "≧",
		"GreaterGreater;": "⪢",
		"GreaterLess;": "≷",
		"GreaterSlantEqual;": "⩾",
		"GreaterTilde;": "≳",
		"Gscr;": "𝒢",
		"gscr;": "ℊ",
		"gsim;": "≳",
		"gsime;": "⪎",
		"gsiml;": "⪐",
		"GT;": ">",
		"GT": ">",
		"Gt;": "≫",
		"gt;": ">",
		"gt": ">",
		"gtcc;": "⪧",
		"gtcir;": "⩺",
		"gtdot;": "⋗",
		"gtlPar;": "⦕",
		"gtquest;": "⩼",
		"gtrapprox;": "⪆",
		"gtrarr;": "⥸",
		"gtrdot;": "⋗",
		"gtreqless;": "⋛",
		"gtreqqless;": "⪌",
		"gtrless;": "≷",
		"gtrsim;": "≳",
		"gvertneqq;": "≩︀",
		"gvnE;": "≩︀",
		"Hacek;": "ˇ",
		"hairsp;": " ",
		"half;": "½",
		"hamilt;": "ℋ",
		"HARDcy;": "Ъ",
		"hardcy;": "ъ",
		"hArr;": "⇔",
		"harr;": "↔",
		"harrcir;": "⥈",
		"harrw;": "↭",
		"Hat;": "^",
		"hbar;": "ℏ",
		"Hcirc;": "Ĥ",
		"hcirc;": "ĥ",
		"hearts;": "♥",
		"heartsuit;": "♥",
		"hellip;": "…",
		"hercon;": "⊹",
		"Hfr;": "ℌ",
		"hfr;": "𝔥",
		"HilbertSpace;": "ℋ",
		"hksearow;": "⤥",
		"hkswarow;": "⤦",
		"hoarr;": "⇿",
		"homtht;": "∻",
		"hookleftarrow;": "↩",
		"hookrightarrow;": "↪",
		"Hopf;": "ℍ",
		"hopf;": "𝕙",
		"horbar;": "―",
		"HorizontalLine;": "─",
		"Hscr;": "ℋ",
		"hscr;": "𝒽",
		"hslash;": "ℏ",
		"Hstrok;": "Ħ",
		"hstrok;": "ħ",
		"HumpDownHump;": "≎",
		"HumpEqual;": "≏",
		"hybull;": "⁃",
		"hyphen;": "‐",
		"Iacute;": "Í",
		"Iacute": "Í",
		"iacute;": "í",
		"iacute": "í",
		"ic;": "⁣",
		"Icirc;": "Î",
		"Icirc": "Î",
		"icirc;": "î",
		"icirc": "î",
		"Icy;": "И",
		"icy;": "и",
		"Idot;": "İ",
		"IEcy;": "Е",
		"iecy;": "е",
		"iexcl;": "¡",
		"iexcl": "¡",
		"iff;": "⇔",
		"Ifr;": "ℑ",
		"ifr;": "𝔦",
		"Igrave;": "Ì",
		"Igrave": "Ì",
		"igrave;": "ì",
		"igrave": "ì",
		"ii;": "ⅈ",
		"iiiint;": "⨌",
		"iiint;": "∭",
		"iinfin;": "⧜",
		"iiota;": "℩",
		"IJlig;": "Ĳ",
		"ijlig;": "ĳ",
		"Im;": "ℑ",
		"Imacr;": "Ī",
		"imacr;": "ī",
		"image;": "ℑ",
		"ImaginaryI;": "ⅈ",
		"imagline;": "ℐ",
		"imagpart;": "ℑ",
		"imath;": "ı",
		"imof;": "⊷",
		"imped;": "Ƶ",
		"Implies;": "⇒",
		"in;": "∈",
		"incare;": "℅",
		"infin;": "∞",
		"infintie;": "⧝",
		"inodot;": "ı",
		"Int;": "∬",
		"int;": "∫",
		"intcal;": "⊺",
		"integers;": "ℤ",
		"Integral;": "∫",
		"intercal;": "⊺",
		"Intersection;": "⋂",
		"intlarhk;": "⨗",
		"intprod;": "⨼",
		"InvisibleComma;": "⁣",
		"InvisibleTimes;": "⁢",
		"IOcy;": "Ё",
		"iocy;": "ё",
		"Iogon;": "Į",
		"iogon;": "į",
		"Iopf;": "𝕀",
		"iopf;": "𝕚",
		"Iota;": "Ι",
		"iota;": "ι",
		"iprod;": "⨼",
		"iquest;": "¿",
		"iquest": "¿",
		"Iscr;": "ℐ",
		"iscr;": "𝒾",
		"isin;": "∈",
		"isindot;": "⋵",
		"isinE;": "⋹",
		"isins;": "⋴",
		"isinsv;": "⋳",
		"isinv;": "∈",
		"it;": "⁢",
		"Itilde;": "Ĩ",
		"itilde;": "ĩ",
		"Iukcy;": "І",
		"iukcy;": "і",
		"Iuml;": "Ï",
		"Iuml": "Ï",
		"iuml;": "ï",
		"iuml": "ï",
		"Jcirc;": "Ĵ",
		"jcirc;": "ĵ",
		"Jcy;": "Й",
		"jcy;": "й",
		"Jfr;": "𝔍",
		"jfr;": "𝔧",
		"jmath;": "ȷ",
		"Jopf;": "𝕁",
		"jopf;": "𝕛",
		"Jscr;": "𝒥",
		"jscr;": "𝒿",
		"Jsercy;": "Ј",
		"jsercy;": "ј",
		"Jukcy;": "Є",
		"jukcy;": "є",
		"Kappa;": "Κ",
		"kappa;": "κ",
		"kappav;": "ϰ",
		"Kcedil;": "Ķ",
		"kcedil;": "ķ",
		"Kcy;": "К",
		"kcy;": "к",
		"Kfr;": "𝔎",
		"kfr;": "𝔨",
		"kgreen;": "ĸ",
		"KHcy;": "Х",
		"khcy;": "х",
		"KJcy;": "Ќ",
		"kjcy;": "ќ",
		"Kopf;": "𝕂",
		"kopf;": "𝕜",
		"Kscr;": "𝒦",
		"kscr;": "𝓀",
		"lAarr;": "⇚",
		"Lacute;": "Ĺ",
		"lacute;": "ĺ",
		"laemptyv;": "⦴",
		"lagran;": "ℒ",
		"Lambda;": "Λ",
		"lambda;": "λ",
		"Lang;": "⟪",
		"lang;": "⟨",
		"langd;": "⦑",
		"langle;": "⟨",
		"lap;": "⪅",
		"Laplacetrf;": "ℒ",
		"laquo;": "«",
		"laquo": "«",
		"Larr;": "↞",
		"lArr;": "⇐",
		"larr;": "←",
		"larrb;": "⇤",
		"larrbfs;": "⤟",
		"larrfs;": "⤝",
		"larrhk;": "↩",
		"larrlp;": "↫",
		"larrpl;": "⤹",
		"larrsim;": "⥳",
		"larrtl;": "↢",
		"lat;": "⪫",
		"lAtail;": "⤛",
		"latail;": "⤙",
		"late;": "⪭",
		"lates;": "⪭︀",
		"lBarr;": "⤎",
		"lbarr;": "⤌",
		"lbbrk;": "❲",
		"lbrace;": "{",
		"lbrack;": "[",
		"lbrke;": "⦋",
		"lbrksld;": "⦏",
		"lbrkslu;": "⦍",
		"Lcaron;": "Ľ",
		"lcaron;": "ľ",
		"Lcedil;": "Ļ",
		"lcedil;": "ļ",
		"lceil;": "⌈",
		"lcub;": "{",
		"Lcy;": "Л",
		"lcy;": "л",
		"ldca;": "⤶",
		"ldquo;": "“",
		"ldquor;": "„",
		"ldrdhar;": "⥧",
		"ldrushar;": "⥋",
		"ldsh;": "↲",
		"lE;": "≦",
		"le;": "≤",
		"LeftAngleBracket;": "⟨",
		"LeftArrow;": "←",
		"Leftarrow;": "⇐",
		"leftarrow;": "←",
		"LeftArrowBar;": "⇤",
		"LeftArrowRightArrow;": "⇆",
		"leftarrowtail;": "↢",
		"LeftCeiling;": "⌈",
		"LeftDoubleBracket;": "⟦",
		"LeftDownTeeVector;": "⥡",
		"LeftDownVector;": "⇃",
		"LeftDownVectorBar;": "⥙",
		"LeftFloor;": "⌊",
		"leftharpoondown;": "↽",
		"leftharpoonup;": "↼",
		"leftleftarrows;": "⇇",
		"LeftRightArrow;": "↔",
		"Leftrightarrow;": "⇔",
		"leftrightarrow;": "↔",
		"leftrightarrows;": "⇆",
		"leftrightharpoons;": "⇋",
		"leftrightsquigarrow;": "↭",
		"LeftRightVector;": "⥎",
		"LeftTee;": "⊣",
		"LeftTeeArrow;": "↤",
		"LeftTeeVector;": "⥚",
		"leftthreetimes;": "⋋",
		"LeftTriangle;": "⊲",
		"LeftTriangleBar;": "⧏",
		"LeftTriangleEqual;": "⊴",
		"LeftUpDownVector;": "⥑",
		"LeftUpTeeVector;": "⥠",
		"LeftUpVector;": "↿",
		"LeftUpVectorBar;": "⥘",
		"LeftVector;": "↼",
		"LeftVectorBar;": "⥒",
		"lEg;": "⪋",
		"leg;": "⋚",
		"leq;": "≤",
		"leqq;": "≦",
		"leqslant;": "⩽",
		"les;": "⩽",
		"lescc;": "⪨",
		"lesdot;": "⩿",
		"lesdoto;": "⪁",
		"lesdotor;": "⪃",
		"lesg;": "⋚︀",
		"lesges;": "⪓",
		"lessapprox;": "⪅",
		"lessdot;": "⋖",
		"lesseqgtr;": "⋚",
		"lesseqqgtr;": "⪋",
		"LessEqualGreater;": "⋚",
		"LessFullEqual;": "≦",
		"LessGreater;": "≶",
		"lessgtr;": "≶",
		"LessLess;": "⪡",
		"lesssim;": "≲",
		"LessSlantEqual;": "⩽",
		"LessTilde;": "≲",
		"lfisht;": "⥼",
		"lfloor;": "⌊",
		"Lfr;": "𝔏",
		"lfr;": "𝔩",
		"lg;": "≶",
		"lgE;": "⪑",
		"lHar;": "⥢",
		"lhard;": "↽",
		"lharu;": "↼",
		"lharul;": "⥪",
		"lhblk;": "▄",
		"LJcy;": "Љ",
		"ljcy;": "љ",
		"Ll;": "⋘",
		"ll;": "≪",
		"llarr;": "⇇",
		"llcorner;": "⌞",
		"Lleftarrow;": "⇚",
		"llhard;": "⥫",
		"lltri;": "◺",
		"Lmidot;": "Ŀ",
		"lmidot;": "ŀ",
		"lmoust;": "⎰",
		"lmoustache;": "⎰",
		"lnap;": "⪉",
		"lnapprox;": "⪉",
		"lnE;": "≨",
		"lne;": "⪇",
		"lneq;": "⪇",
		"lneqq;": "≨",
		"lnsim;": "⋦",
		"loang;": "⟬",
		"loarr;": "⇽",
		"lobrk;": "⟦",
		"LongLeftArrow;": "⟵",
		"Longleftarrow;": "⟸",
		"longleftarrow;": "⟵",
		"LongLeftRightArrow;": "⟷",
		"Longleftrightarrow;": "⟺",
		"longleftrightarrow;": "⟷",
		"longmapsto;": "⟼",
		"LongRightArrow;": "⟶",
		"Longrightarrow;": "⟹",
		"longrightarrow;": "⟶",
		"looparrowleft;": "↫",
		"looparrowright;": "↬",
		"lopar;": "⦅",
		"Lopf;": "𝕃",
		"lopf;": "𝕝",
		"loplus;": "⨭",
		"lotimes;": "⨴",
		"lowast;": "∗",
		"lowbar;": "_",
		"LowerLeftArrow;": "↙",
		"LowerRightArrow;": "↘",
		"loz;": "◊",
		"lozenge;": "◊",
		"lozf;": "⧫",
		"lpar;": "(",
		"lparlt;": "⦓",
		"lrarr;": "⇆",
		"lrcorner;": "⌟",
		"lrhar;": "⇋",
		"lrhard;": "⥭",
		"lrm;": "‎",
		"lrtri;": "⊿",
		"lsaquo;": "‹",
		"Lscr;": "ℒ",
		"lscr;": "𝓁",
		"Lsh;": "↰",
		"lsh;": "↰",
		"lsim;": "≲",
		"lsime;": "⪍",
		"lsimg;": "⪏",
		"lsqb;": "[",
		"lsquo;": "‘",
		"lsquor;": "‚",
		"Lstrok;": "Ł",
		"lstrok;": "ł",
		"LT;": "<",
		"LT": "<",
		"Lt;": "≪",
		"lt;": "<",
		"lt": "<",
		"ltcc;": "⪦",
		"ltcir;": "⩹",
		"ltdot;": "⋖",
		"lthree;": "⋋",
		"ltimes;": "⋉",
		"ltlarr;": "⥶",
		"ltquest;": "⩻",
		"ltri;": "◃",
		"ltrie;": "⊴",
		"ltrif;": "◂",
		"ltrPar;": "⦖",
		"lurdshar;": "⥊",
		"luruhar;": "⥦",
		"lvertneqq;": "≨︀",
		"lvnE;": "≨︀",
		"macr;": "¯",
		"macr": "¯",
		"male;": "♂",
		"malt;": "✠",
		"maltese;": "✠",
		"Map;": "⤅",
		"map;": "↦",
		"mapsto;": "↦",
		"mapstodown;": "↧",
		"mapstoleft;": "↤",
		"mapstoup;": "↥",
		"marker;": "▮",
		"mcomma;": "⨩",
		"Mcy;": "М",
		"mcy;": "м",
		"mdash;": "—",
		"mDDot;": "∺",
		"measuredangle;": "∡",
		"MediumSpace;": " ",
		"Mellintrf;": "ℳ",
		"Mfr;": "𝔐",
		"mfr;": "𝔪",
		"mho;": "℧",
		"micro;": "µ",
		"micro": "µ",
		"mid;": "∣",
		"midast;": "*",
		"midcir;": "⫰",
		"middot;": "·",
		"middot": "·",
		"minus;": "−",
		"minusb;": "⊟",
		"minusd;": "∸",
		"minusdu;": "⨪",
		"MinusPlus;": "∓",
		"mlcp;": "⫛",
		"mldr;": "…",
		"mnplus;": "∓",
		"models;": "⊧",
		"Mopf;": "𝕄",
		"mopf;": "𝕞",
		"mp;": "∓",
		"Mscr;": "ℳ",
		"mscr;": "𝓂",
		"mstpos;": "∾",
		"Mu;": "Μ",
		"mu;": "μ",
		"multimap;": "⊸",
		"mumap;": "⊸",
		"nabla;": "∇",
		"Nacute;": "Ń",
		"nacute;": "ń",
		"nang;": "∠⃒",
		"nap;": "≉",
		"napE;": "⩰̸",
		"napid;": "≋̸",
		"napos;": "ŉ",
		"napprox;": "≉",
		"natur;": "♮",
		"natural;": "♮",
		"naturals;": "ℕ",
		"nbsp;": " ",
		"nbsp": " ",
		"nbump;": "≎̸",
		"nbumpe;": "≏̸",
		"ncap;": "⩃",
		"Ncaron;": "Ň",
		"ncaron;": "ň",
		"Ncedil;": "Ņ",
		"ncedil;": "ņ",
		"ncong;": "≇",
		"ncongdot;": "⩭̸",
		"ncup;": "⩂",
		"Ncy;": "Н",
		"ncy;": "н",
		"ndash;": "–",
		"ne;": "≠",
		"nearhk;": "⤤",
		"neArr;": "⇗",
		"nearr;": "↗",
		"nearrow;": "↗",
		"nedot;": "≐̸",
		"NegativeMediumSpace;": "​",
		"NegativeThickSpace;": "​",
		"NegativeThinSpace;": "​",
		"NegativeVeryThinSpace;": "​",
		"nequiv;": "≢",
		"nesear;": "⤨",
		"nesim;": "≂̸",
		"NestedGreaterGreater;": "≫",
		"NestedLessLess;": "≪",
		"NewLine;": "\n",
		"nexist;": "∄",
		"nexists;": "∄",
		"Nfr;": "𝔑",
		"nfr;": "𝔫",
		"ngE;": "≧̸",
		"nge;": "≱",
		"ngeq;": "≱",
		"ngeqq;": "≧̸",
		"ngeqslant;": "⩾̸",
		"nges;": "⩾̸",
		"nGg;": "⋙̸",
		"ngsim;": "≵",
		"nGt;": "≫⃒",
		"ngt;": "≯",
		"ngtr;": "≯",
		"nGtv;": "≫̸",
		"nhArr;": "⇎",
		"nharr;": "↮",
		"nhpar;": "⫲",
		"ni;": "∋",
		"nis;": "⋼",
		"nisd;": "⋺",
		"niv;": "∋",
		"NJcy;": "Њ",
		"njcy;": "њ",
		"nlArr;": "⇍",
		"nlarr;": "↚",
		"nldr;": "‥",
		"nlE;": "≦̸",
		"nle;": "≰",
		"nLeftarrow;": "⇍",
		"nleftarrow;": "↚",
		"nLeftrightarrow;": "⇎",
		"nleftrightarrow;": "↮",
		"nleq;": "≰",
		"nleqq;": "≦̸",
		"nleqslant;": "⩽̸",
		"nles;": "⩽̸",
		"nless;": "≮",
		"nLl;": "⋘̸",
		"nlsim;": "≴",
		"nLt;": "≪⃒",
		"nlt;": "≮",
		"nltri;": "⋪",
		"nltrie;": "⋬",
		"nLtv;": "≪̸",
		"nmid;": "∤",
		"NoBreak;": "⁠",
		"NonBreakingSpace;": " ",
		"Nopf;": "ℕ",
		"nopf;": "𝕟",
		"Not;": "⫬",
		"not;": "¬",
		"not": "¬",
		"NotCongruent;": "≢",
		"NotCupCap;": "≭",
		"NotDoubleVerticalBar;": "∦",
		"NotElement;": "∉",
		"NotEqual;": "≠",
		"NotEqualTilde;": "≂̸",
		"NotExists;": "∄",
		"NotGreater;": "≯",
		"NotGreaterEqual;": "≱",
		"NotGreaterFullEqual;": "≧̸",
		"NotGreaterGreater;": "≫̸",
		"NotGreaterLess;": "≹",
		"NotGreaterSlantEqual;": "⩾̸",
		"NotGreaterTilde;": "≵",
		"NotHumpDownHump;": "≎̸",
		"NotHumpEqual;": "≏̸",
		"notin;": "∉",
		"notindot;": "⋵̸",
		"notinE;": "⋹̸",
		"notinva;": "∉",
		"notinvb;": "⋷",
		"notinvc;": "⋶",
		"NotLeftTriangle;": "⋪",
		"NotLeftTriangleBar;": "⧏̸",
		"NotLeftTriangleEqual;": "⋬",
		"NotLess;": "≮",
		"NotLessEqual;": "≰",
		"NotLessGreater;": "≸",
		"NotLessLess;": "≪̸",
		"NotLessSlantEqual;": "⩽̸",
		"NotLessTilde;": "≴",
		"NotNestedGreaterGreater;": "⪢̸",
		"NotNestedLessLess;": "⪡̸",
		"notni;": "∌",
		"notniva;": "∌",
		"notnivb;": "⋾",
		"notnivc;": "⋽",
		"NotPrecedes;": "⊀",
		"NotPrecedesEqual;": "⪯̸",
		"NotPrecedesSlantEqual;": "⋠",
		"NotReverseElement;": "∌",
		"NotRightTriangle;": "⋫",
		"NotRightTriangleBar;": "⧐̸",
		"NotRightTriangleEqual;": "⋭",
		"NotSquareSubset;": "⊏̸",
		"NotSquareSubsetEqual;": "⋢",
		"NotSquareSuperset;": "⊐̸",
		"NotSquareSupersetEqual;": "⋣",
		"NotSubset;": "⊂⃒",
		"NotSubsetEqual;": "⊈",
		"NotSucceeds;": "⊁",
		"NotSucceedsEqual;": "⪰̸",
		"NotSucceedsSlantEqual;": "⋡",
		"NotSucceedsTilde;": "≿̸",
		"NotSuperset;": "⊃⃒",
		"NotSupersetEqual;": "⊉",
		"NotTilde;": "≁",
		"NotTildeEqual;": "≄",
		"NotTildeFullEqual;": "≇",
		"NotTildeTilde;": "≉",
		"NotVerticalBar;": "∤",
		"npar;": "∦",
		"nparallel;": "∦",
		"nparsl;": "⫽⃥",
		"npart;": "∂̸",
		"npolint;": "⨔",
		"npr;": "⊀",
		"nprcue;": "⋠",
		"npre;": "⪯̸",
		"nprec;": "⊀",
		"npreceq;": "⪯̸",
		"nrArr;": "⇏",
		"nrarr;": "↛",
		"nrarrc;": "⤳̸",
		"nrarrw;": "↝̸",
		"nRightarrow;": "⇏",
		"nrightarrow;": "↛",
		"nrtri;": "⋫",
		"nrtrie;": "⋭",
		"nsc;": "⊁",
		"nsccue;": "⋡",
		"nsce;": "⪰̸",
		"Nscr;": "𝒩",
		"nscr;": "𝓃",
		"nshortmid;": "∤",
		"nshortparallel;": "∦",
		"nsim;": "≁",
		"nsime;": "≄",
		"nsimeq;": "≄",
		"nsmid;": "∤",
		"nspar;": "∦",
		"nsqsube;": "⋢",
		"nsqsupe;": "⋣",
		"nsub;": "⊄",
		"nsubE;": "⫅̸",
		"nsube;": "⊈",
		"nsubset;": "⊂⃒",
		"nsubseteq;": "⊈",
		"nsubseteqq;": "⫅̸",
		"nsucc;": "⊁",
		"nsucceq;": "⪰̸",
		"nsup;": "⊅",
		"nsupE;": "⫆̸",
		"nsupe;": "⊉",
		"nsupset;": "⊃⃒",
		"nsupseteq;": "⊉",
		"nsupseteqq;": "⫆̸",
		"ntgl;": "≹",
		"Ntilde;": "Ñ",
		"Ntilde": "Ñ",
		"ntilde;": "ñ",
		"ntilde": "ñ",
		"ntlg;": "≸",
		"ntriangleleft;": "⋪",
		"ntrianglelefteq;": "⋬",
		"ntriangleright;": "⋫",
		"ntrianglerighteq;": "⋭",
		"Nu;": "Ν",
		"nu;": "ν",
		"num;": "#",
		"numero;": "№",
		"numsp;": " ",
		"nvap;": "≍⃒",
		"nVDash;": "⊯",
		"nVdash;": "⊮",
		"nvDash;": "⊭",
		"nvdash;": "⊬",
		"nvge;": "≥⃒",
		"nvgt;": ">⃒",
		"nvHarr;": "⤄",
		"nvinfin;": "⧞",
		"nvlArr;": "⤂",
		"nvle;": "≤⃒",
		"nvlt;": "<⃒",
		"nvltrie;": "⊴⃒",
		"nvrArr;": "⤃",
		"nvrtrie;": "⊵⃒",
		"nvsim;": "∼⃒",
		"nwarhk;": "⤣",
		"nwArr;": "⇖",
		"nwarr;": "↖",
		"nwarrow;": "↖",
		"nwnear;": "⤧",
		"Oacute;": "Ó",
		"Oacute": "Ó",
		"oacute;": "ó",
		"oacute": "ó",
		"oast;": "⊛",
		"ocir;": "⊚",
		"Ocirc;": "Ô",
		"Ocirc": "Ô",
		"ocirc;": "ô",
		"ocirc": "ô",
		"Ocy;": "О",
		"ocy;": "о",
		"odash;": "⊝",
		"Odblac;": "Ő",
		"odblac;": "ő",
		"odiv;": "⨸",
		"odot;": "⊙",
		"odsold;": "⦼",
		"OElig;": "Œ",
		"oelig;": "œ",
		"ofcir;": "⦿",
		"Ofr;": "𝔒",
		"ofr;": "𝔬",
		"ogon;": "˛",
		"Ograve;": "Ò",
		"Ograve": "Ò",
		"ograve;": "ò",
		"ograve": "ò",
		"ogt;": "⧁",
		"ohbar;": "⦵",
		"ohm;": "Ω",
		"oint;": "∮",
		"olarr;": "↺",
		"olcir;": "⦾",
		"olcross;": "⦻",
		"oline;": "‾",
		"olt;": "⧀",
		"Omacr;": "Ō",
		"omacr;": "ō",
		"Omega;": "Ω",
		"omega;": "ω",
		"Omicron;": "Ο",
		"omicron;": "ο",
		"omid;": "⦶",
		"ominus;": "⊖",
		"Oopf;": "𝕆",
		"oopf;": "𝕠",
		"opar;": "⦷",
		"OpenCurlyDoubleQuote;": "“",
		"OpenCurlyQuote;": "‘",
		"operp;": "⦹",
		"oplus;": "⊕",
		"Or;": "⩔",
		"or;": "∨",
		"orarr;": "↻",
		"ord;": "⩝",
		"order;": "ℴ",
		"orderof;": "ℴ",
		"ordf;": "ª",
		"ordf": "ª",
		"ordm;": "º",
		"ordm": "º",
		"origof;": "⊶",
		"oror;": "⩖",
		"orslope;": "⩗",
		"orv;": "⩛",
		"oS;": "Ⓢ",
		"Oscr;": "𝒪",
		"oscr;": "ℴ",
		"Oslash;": "Ø",
		"Oslash": "Ø",
		"oslash;": "ø",
		"oslash": "ø",
		"osol;": "⊘",
		"Otilde;": "Õ",
		"Otilde": "Õ",
		"otilde;": "õ",
		"otilde": "õ",
		"Otimes;": "⨷",
		"otimes;": "⊗",
		"otimesas;": "⨶",
		"Ouml;": "Ö",
		"Ouml": "Ö",
		"ouml;": "ö",
		"ouml": "ö",
		"ovbar;": "⌽",
		"OverBar;": "‾",
		"OverBrace;": "⏞",
		"OverBracket;": "⎴",
		"OverParenthesis;": "⏜",
		"par;": "∥",
		"para;": "¶",
		"para": "¶",
		"parallel;": "∥",
		"parsim;": "⫳",
		"parsl;": "⫽",
		"part;": "∂",
		"PartialD;": "∂",
		"Pcy;": "П",
		"pcy;": "п",
		"percnt;": "%",
		"period;": ".",
		"permil;": "‰",
		"perp;": "⊥",
		"pertenk;": "‱",
		"Pfr;": "𝔓",
		"pfr;": "𝔭",
		"Phi;": "Φ",
		"phi;": "φ",
		"phiv;": "ϕ",
		"phmmat;": "ℳ",
		"phone;": "☎",
		"Pi;": "Π",
		"pi;": "π",
		"pitchfork;": "⋔",
		"piv;": "ϖ",
		"planck;": "ℏ",
		"planckh;": "ℎ",
		"plankv;": "ℏ",
		"plus;": "+",
		"plusacir;": "⨣",
		"plusb;": "⊞",
		"pluscir;": "⨢",
		"plusdo;": "∔",
		"plusdu;": "⨥",
		"pluse;": "⩲",
		"PlusMinus;": "±",
		"plusmn;": "±",
		"plusmn": "±",
		"plussim;": "⨦",
		"plustwo;": "⨧",
		"pm;": "±",
		"Poincareplane;": "ℌ",
		"pointint;": "⨕",
		"Popf;": "ℙ",
		"popf;": "𝕡",
		"pound;": "£",
		"pound": "£",
		"Pr;": "⪻",
		"pr;": "≺",
		"prap;": "⪷",
		"prcue;": "≼",
		"prE;": "⪳",
		"pre;": "⪯",
		"prec;": "≺",
		"precapprox;": "⪷",
		"preccurlyeq;": "≼",
		"Precedes;": "≺",
		"PrecedesEqual;": "⪯",
		"PrecedesSlantEqual;": "≼",
		"PrecedesTilde;": "≾",
		"preceq;": "⪯",
		"precnapprox;": "⪹",
		"precneqq;": "⪵",
		"precnsim;": "⋨",
		"precsim;": "≾",
		"Prime;": "″",
		"prime;": "′",
		"primes;": "ℙ",
		"prnap;": "⪹",
		"prnE;": "⪵",
		"prnsim;": "⋨",
		"prod;": "∏",
		"Product;": "∏",
		"profalar;": "⌮",
		"profline;": "⌒",
		"profsurf;": "⌓",
		"prop;": "∝",
		"Proportion;": "∷",
		"Proportional;": "∝",
		"propto;": "∝",
		"prsim;": "≾",
		"prurel;": "⊰",
		"Pscr;": "𝒫",
		"pscr;": "𝓅",
		"Psi;": "Ψ",
		"psi;": "ψ",
		"puncsp;": " ",
		"Qfr;": "𝔔",
		"qfr;": "𝔮",
		"qint;": "⨌",
		"Qopf;": "ℚ",
		"qopf;": "𝕢",
		"qprime;": "⁗",
		"Qscr;": "𝒬",
		"qscr;": "𝓆",
		"quaternions;": "ℍ",
		"quatint;": "⨖",
		"quest;": "?",
		"questeq;": "≟",
		"QUOT;": "\"",
		"QUOT": "\"",
		"quot;": "\"",
		"quot": "\"",
		"rAarr;": "⇛",
		"race;": "∽̱",
		"Racute;": "Ŕ",
		"racute;": "ŕ",
		"radic;": "√",
		"raemptyv;": "⦳",
		"Rang;": "⟫",
		"rang;": "⟩",
		"rangd;": "⦒",
		"range;": "⦥",
		"rangle;": "⟩",
		"raquo;": "»",
		"raquo": "»",
		"Rarr;": "↠",
		"rArr;": "⇒",
		"rarr;": "→",
		"rarrap;": "⥵",
		"rarrb;": "⇥",
		"rarrbfs;": "⤠",
		"rarrc;": "⤳",
		"rarrfs;": "⤞",
		"rarrhk;": "↪",
		"rarrlp;": "↬",
		"rarrpl;": "⥅",
		"rarrsim;": "⥴",
		"Rarrtl;": "⤖",
		"rarrtl;": "↣",
		"rarrw;": "↝",
		"rAtail;": "⤜",
		"ratail;": "⤚",
		"ratio;": "∶",
		"rationals;": "ℚ",
		"RBarr;": "⤐",
		"rBarr;": "⤏",
		"rbarr;": "⤍",
		"rbbrk;": "❳",
		"rbrace;": "}",
		"rbrack;": "]",
		"rbrke;": "⦌",
		"rbrksld;": "⦎",
		"rbrkslu;": "⦐",
		"Rcaron;": "Ř",
		"rcaron;": "ř",
		"Rcedil;": "Ŗ",
		"rcedil;": "ŗ",
		"rceil;": "⌉",
		"rcub;": "}",
		"Rcy;": "Р",
		"rcy;": "р",
		"rdca;": "⤷",
		"rdldhar;": "⥩",
		"rdquo;": "”",
		"rdquor;": "”",
		"rdsh;": "↳",
		"Re;": "ℜ",
		"real;": "ℜ",
		"realine;": "ℛ",
		"realpart;": "ℜ",
		"reals;": "ℝ",
		"rect;": "▭",
		"REG;": "®",
		"REG": "®",
		"reg;": "®",
		"reg": "®",
		"ReverseElement;": "∋",
		"ReverseEquilibrium;": "⇋",
		"ReverseUpEquilibrium;": "⥯",
		"rfisht;": "⥽",
		"rfloor;": "⌋",
		"Rfr;": "ℜ",
		"rfr;": "𝔯",
		"rHar;": "⥤",
		"rhard;": "⇁",
		"rharu;": "⇀",
		"rharul;": "⥬",
		"Rho;": "Ρ",
		"rho;": "ρ",
		"rhov;": "ϱ",
		"RightAngleBracket;": "⟩",
		"RightArrow;": "→",
		"Rightarrow;": "⇒",
		"rightarrow;": "→",
		"RightArrowBar;": "⇥",
		"RightArrowLeftArrow;": "⇄",
		"rightarrowtail;": "↣",
		"RightCeiling;": "⌉",
		"RightDoubleBracket;": "⟧",
		"RightDownTeeVector;": "⥝",
		"RightDownVector;": "⇂",
		"RightDownVectorBar;": "⥕",
		"RightFloor;": "⌋",
		"rightharpoondown;": "⇁",
		"rightharpoonup;": "⇀",
		"rightleftarrows;": "⇄",
		"rightleftharpoons;": "⇌",
		"rightrightarrows;": "⇉",
		"rightsquigarrow;": "↝",
		"RightTee;": "⊢",
		"RightTeeArrow;": "↦",
		"RightTeeVector;": "⥛",
		"rightthreetimes;": "⋌",
		"RightTriangle;": "⊳",
		"RightTriangleBar;": "⧐",
		"RightTriangleEqual;": "⊵",
		"RightUpDownVector;": "⥏",
		"RightUpTeeVector;": "⥜",
		"RightUpVector;": "↾",
		"RightUpVectorBar;": "⥔",
		"RightVector;": "⇀",
		"RightVectorBar;": "⥓",
		"ring;": "˚",
		"risingdotseq;": "≓",
		"rlarr;": "⇄",
		"rlhar;": "⇌",
		"rlm;": "‏",
		"rmoust;": "⎱",
		"rmoustache;": "⎱",
		"rnmid;": "⫮",
		"roang;": "⟭",
		"roarr;": "⇾",
		"robrk;": "⟧",
		"ropar;": "⦆",
		"Ropf;": "ℝ",
		"ropf;": "𝕣",
		"roplus;": "⨮",
		"rotimes;": "⨵",
		"RoundImplies;": "⥰",
		"rpar;": ")",
		"rpargt;": "⦔",
		"rppolint;": "⨒",
		"rrarr;": "⇉",
		"Rrightarrow;": "⇛",
		"rsaquo;": "›",
		"Rscr;": "ℛ",
		"rscr;": "𝓇",
		"Rsh;": "↱",
		"rsh;": "↱",
		"rsqb;": "]",
		"rsquo;": "’",
		"rsquor;": "’",
		"rthree;": "⋌",
		"rtimes;": "⋊",
		"rtri;": "▹",
		"rtrie;": "⊵",
		"rtrif;": "▸",
		"rtriltri;": "⧎",
		"RuleDelayed;": "⧴",
		"ruluhar;": "⥨",
		"rx;": "℞",
		"Sacute;": "Ś",
		"sacute;": "ś",
		"sbquo;": "‚",
		"Sc;": "⪼",
		"sc;": "≻",
		"scap;": "⪸",
		"Scaron;": "Š",
		"scaron;": "š",
		"sccue;": "≽",
		"scE;": "⪴",
		"sce;": "⪰",
		"Scedil;": "Ş",
		"scedil;": "ş",
		"Scirc;": "Ŝ",
		"scirc;": "ŝ",
		"scnap;": "⪺",
		"scnE;": "⪶",
		"scnsim;": "⋩",
		"scpolint;": "⨓",
		"scsim;": "≿",
		"Scy;": "С",
		"scy;": "с",
		"sdot;": "⋅",
		"sdotb;": "⊡",
		"sdote;": "⩦",
		"searhk;": "⤥",
		"seArr;": "⇘",
		"searr;": "↘",
		"searrow;": "↘",
		"sect;": "§",
		"sect": "§",
		"semi;": ";",
		"seswar;": "⤩",
		"setminus;": "∖",
		"setmn;": "∖",
		"sext;": "✶",
		"Sfr;": "𝔖",
		"sfr;": "𝔰",
		"sfrown;": "⌢",
		"sharp;": "♯",
		"SHCHcy;": "Щ",
		"shchcy;": "щ",
		"SHcy;": "Ш",
		"shcy;": "ш",
		"ShortDownArrow;": "↓",
		"ShortLeftArrow;": "←",
		"shortmid;": "∣",
		"shortparallel;": "∥",
		"ShortRightArrow;": "→",
		"ShortUpArrow;": "↑",
		"shy;": "­",
		"shy": "­",
		"Sigma;": "Σ",
		"sigma;": "σ",
		"sigmaf;": "ς",
		"sigmav;": "ς",
		"sim;": "∼",
		"simdot;": "⩪",
		"sime;": "≃",
		"simeq;": "≃",
		"simg;": "⪞",
		"simgE;": "⪠",
		"siml;": "⪝",
		"simlE;": "⪟",
		"simne;": "≆",
		"simplus;": "⨤",
		"simrarr;": "⥲",
		"slarr;": "←",
		"SmallCircle;": "∘",
		"smallsetminus;": "∖",
		"smashp;": "⨳",
		"smeparsl;": "⧤",
		"smid;": "∣",
		"smile;": "⌣",
		"smt;": "⪪",
		"smte;": "⪬",
		"smtes;": "⪬︀",
		"SOFTcy;": "Ь",
		"softcy;": "ь",
		"sol;": "/",
		"solb;": "⧄",
		"solbar;": "⌿",
		"Sopf;": "𝕊",
		"sopf;": "𝕤",
		"spades;": "♠",
		"spadesuit;": "♠",
		"spar;": "∥",
		"sqcap;": "⊓",
		"sqcaps;": "⊓︀",
		"sqcup;": "⊔",
		"sqcups;": "⊔︀",
		"Sqrt;": "√",
		"sqsub;": "⊏",
		"sqsube;": "⊑",
		"sqsubset;": "⊏",
		"sqsubseteq;": "⊑",
		"sqsup;": "⊐",
		"sqsupe;": "⊒",
		"sqsupset;": "⊐",
		"sqsupseteq;": "⊒",
		"squ;": "□",
		"Square;": "□",
		"square;": "□",
		"SquareIntersection;": "⊓",
		"SquareSubset;": "⊏",
		"SquareSubsetEqual;": "⊑",
		"SquareSuperset;": "⊐",
		"SquareSupersetEqual;": "⊒",
		"SquareUnion;": "⊔",
		"squarf;": "▪",
		"squf;": "▪",
		"srarr;": "→",
		"Sscr;": "𝒮",
		"sscr;": "𝓈",
		"ssetmn;": "∖",
		"ssmile;": "⌣",
		"sstarf;": "⋆",
		"Star;": "⋆",
		"star;": "☆",
		"starf;": "★",
		"straightepsilon;": "ϵ",
		"straightphi;": "ϕ",
		"strns;": "¯",
		"Sub;": "⋐",
		"sub;": "⊂",
		"subdot;": "⪽",
		"subE;": "⫅",
		"sube;": "⊆",
		"subedot;": "⫃",
		"submult;": "⫁",
		"subnE;": "⫋",
		"subne;": "⊊",
		"subplus;": "⪿",
		"subrarr;": "⥹",
		"Subset;": "⋐",
		"subset;": "⊂",
		"subseteq;": "⊆",
		"subseteqq;": "⫅",
		"SubsetEqual;": "⊆",
		"subsetneq;": "⊊",
		"subsetneqq;": "⫋",
		"subsim;": "⫇",
		"subsub;": "⫕",
		"subsup;": "⫓",
		"succ;": "≻",
		"succapprox;": "⪸",
		"succcurlyeq;": "≽",
		"Succeeds;": "≻",
		"SucceedsEqual;": "⪰",
		"SucceedsSlantEqual;": "≽",
		"SucceedsTilde;": "≿",
		"succeq;": "⪰",
		"succnapprox;": "⪺",
		"succneqq;": "⪶",
		"succnsim;": "⋩",
		"succsim;": "≿",
		"SuchThat;": "∋",
		"Sum;": "∑",
		"sum;": "∑",
		"sung;": "♪",
		"Sup;": "⋑",
		"sup;": "⊃",
		"sup1;": "¹",
		"sup1": "¹",
		"sup2;": "²",
		"sup2": "²",
		"sup3;": "³",
		"sup3": "³",
		"supdot;": "⪾",
		"supdsub;": "⫘",
		"supE;": "⫆",
		"supe;": "⊇",
		"supedot;": "⫄",
		"Superset;": "⊃",
		"SupersetEqual;": "⊇",
		"suphsol;": "⟉",
		"suphsub;": "⫗",
		"suplarr;": "⥻",
		"supmult;": "⫂",
		"supnE;": "⫌",
		"supne;": "⊋",
		"supplus;": "⫀",
		"Supset;": "⋑",
		"supset;": "⊃",
		"supseteq;": "⊇",
		"supseteqq;": "⫆",
		"supsetneq;": "⊋",
		"supsetneqq;": "⫌",
		"supsim;": "⫈",
		"supsub;": "⫔",
		"supsup;": "⫖",
		"swarhk;": "⤦",
		"swArr;": "⇙",
		"swarr;": "↙",
		"swarrow;": "↙",
		"swnwar;": "⤪",
		"szlig;": "ß",
		"szlig": "ß",
		"Tab;": "\t",
		"target;": "⌖",
		"Tau;": "Τ",
		"tau;": "τ",
		"tbrk;": "⎴",
		"Tcaron;": "Ť",
		"tcaron;": "ť",
		"Tcedil;": "Ţ",
		"tcedil;": "ţ",
		"Tcy;": "Т",
		"tcy;": "т",
		"tdot;": "⃛",
		"telrec;": "⌕",
		"Tfr;": "𝔗",
		"tfr;": "𝔱",
		"there4;": "∴",
		"Therefore;": "∴",
		"therefore;": "∴",
		"Theta;": "Θ",
		"theta;": "θ",
		"thetasym;": "ϑ",
		"thetav;": "ϑ",
		"thickapprox;": "≈",
		"thicksim;": "∼",
		"ThickSpace;": "  ",
		"thinsp;": " ",
		"ThinSpace;": " ",
		"thkap;": "≈",
		"thksim;": "∼",
		"THORN;": "Þ",
		"THORN": "Þ",
		"thorn;": "þ",
		"thorn": "þ",
		"Tilde;": "∼",
		"tilde;": "˜",
		"TildeEqual;": "≃",
		"TildeFullEqual;": "≅",
		"TildeTilde;": "≈",
		"times;": "×",
		"times": "×",
		"timesb;": "⊠",
		"timesbar;": "⨱",
		"timesd;": "⨰",
		"tint;": "∭",
		"toea;": "⤨",
		"top;": "⊤",
		"topbot;": "⌶",
		"topcir;": "⫱",
		"Topf;": "𝕋",
		"topf;": "𝕥",
		"topfork;": "⫚",
		"tosa;": "⤩",
		"tprime;": "‴",
		"TRADE;": "™",
		"trade;": "™",
		"triangle;": "▵",
		"triangledown;": "▿",
		"triangleleft;": "◃",
		"trianglelefteq;": "⊴",
		"triangleq;": "≜",
		"triangleright;": "▹",
		"trianglerighteq;": "⊵",
		"tridot;": "◬",
		"trie;": "≜",
		"triminus;": "⨺",
		"TripleDot;": "⃛",
		"triplus;": "⨹",
		"trisb;": "⧍",
		"tritime;": "⨻",
		"trpezium;": "⏢",
		"Tscr;": "𝒯",
		"tscr;": "𝓉",
		"TScy;": "Ц",
		"tscy;": "ц",
		"TSHcy;": "Ћ",
		"tshcy;": "ћ",
		"Tstrok;": "Ŧ",
		"tstrok;": "ŧ",
		"twixt;": "≬",
		"twoheadleftarrow;": "↞",
		"twoheadrightarrow;": "↠",
		"Uacute;": "Ú",
		"Uacute": "Ú",
		"uacute;": "ú",
		"uacute": "ú",
		"Uarr;": "↟",
		"uArr;": "⇑",
		"uarr;": "↑",
		"Uarrocir;": "⥉",
		"Ubrcy;": "Ў",
		"ubrcy;": "ў",
		"Ubreve;": "Ŭ",
		"ubreve;": "ŭ",
		"Ucirc;": "Û",
		"Ucirc": "Û",
		"ucirc;": "û",
		"ucirc": "û",
		"Ucy;": "У",
		"ucy;": "у",
		"udarr;": "⇅",
		"Udblac;": "Ű",
		"udblac;": "ű",
		"udhar;": "⥮",
		"ufisht;": "⥾",
		"Ufr;": "𝔘",
		"ufr;": "𝔲",
		"Ugrave;": "Ù",
		"Ugrave": "Ù",
		"ugrave;": "ù",
		"ugrave": "ù",
		"uHar;": "⥣",
		"uharl;": "↿",
		"uharr;": "↾",
		"uhblk;": "▀",
		"ulcorn;": "⌜",
		"ulcorner;": "⌜",
		"ulcrop;": "⌏",
		"ultri;": "◸",
		"Umacr;": "Ū",
		"umacr;": "ū",
		"uml;": "¨",
		"uml": "¨",
		"UnderBar;": "_",
		"UnderBrace;": "⏟",
		"UnderBracket;": "⎵",
		"UnderParenthesis;": "⏝",
		"Union;": "⋃",
		"UnionPlus;": "⊎",
		"Uogon;": "Ų",
		"uogon;": "ų",
		"Uopf;": "𝕌",
		"uopf;": "𝕦",
		"UpArrow;": "↑",
		"Uparrow;": "⇑",
		"uparrow;": "↑",
		"UpArrowBar;": "⤒",
		"UpArrowDownArrow;": "⇅",
		"UpDownArrow;": "↕",
		"Updownarrow;": "⇕",
		"updownarrow;": "↕",
		"UpEquilibrium;": "⥮",
		"upharpoonleft;": "↿",
		"upharpoonright;": "↾",
		"uplus;": "⊎",
		"UpperLeftArrow;": "↖",
		"UpperRightArrow;": "↗",
		"Upsi;": "ϒ",
		"upsi;": "υ",
		"upsih;": "ϒ",
		"Upsilon;": "Υ",
		"upsilon;": "υ",
		"UpTee;": "⊥",
		"UpTeeArrow;": "↥",
		"upuparrows;": "⇈",
		"urcorn;": "⌝",
		"urcorner;": "⌝",
		"urcrop;": "⌎",
		"Uring;": "Ů",
		"uring;": "ů",
		"urtri;": "◹",
		"Uscr;": "𝒰",
		"uscr;": "𝓊",
		"utdot;": "⋰",
		"Utilde;": "Ũ",
		"utilde;": "ũ",
		"utri;": "▵",
		"utrif;": "▴",
		"uuarr;": "⇈",
		"Uuml;": "Ü",
		"Uuml": "Ü",
		"uuml;": "ü",
		"uuml": "ü",
		"uwangle;": "⦧",
		"vangrt;": "⦜",
		"varepsilon;": "ϵ",
		"varkappa;": "ϰ",
		"varnothing;": "∅",
		"varphi;": "ϕ",
		"varpi;": "ϖ",
		"varpropto;": "∝",
		"vArr;": "⇕",
		"varr;": "↕",
		"varrho;": "ϱ",
		"varsigma;": "ς",
		"varsubsetneq;": "⊊︀",
		"varsubsetneqq;": "⫋︀",
		"varsupsetneq;": "⊋︀",
		"varsupsetneqq;": "⫌︀",
		"vartheta;": "ϑ",
		"vartriangleleft;": "⊲",
		"vartriangleright;": "⊳",
		"Vbar;": "⫫",
		"vBar;": "⫨",
		"vBarv;": "⫩",
		"Vcy;": "В",
		"vcy;": "в",
		"VDash;": "⊫",
		"Vdash;": "⊩",
		"vDash;": "⊨",
		"vdash;": "⊢",
		"Vdashl;": "⫦",
		"Vee;": "⋁",
		"vee;": "∨",
		"veebar;": "⊻",
		"veeeq;": "≚",
		"vellip;": "⋮",
		"Verbar;": "‖",
		"verbar;": "|",
		"Vert;": "‖",
		"vert;": "|",
		"VerticalBar;": "∣",
		"VerticalLine;": "|",
		"VerticalSeparator;": "❘",
		"VerticalTilde;": "≀",
		"VeryThinSpace;": " ",
		"Vfr;": "𝔙",
		"vfr;": "𝔳",
		"vltri;": "⊲",
		"vnsub;": "⊂⃒",
		"vnsup;": "⊃⃒",
		"Vopf;": "𝕍",
		"vopf;": "𝕧",
		"vprop;": "∝",
		"vrtri;": "⊳",
		"Vscr;": "𝒱",
		"vscr;": "𝓋",
		"vsubnE;": "⫋︀",
		"vsubne;": "⊊︀",
		"vsupnE;": "⫌︀",
		"vsupne;": "⊋︀",
		"Vvdash;": "⊪",
		"vzigzag;": "⦚",
		"Wcirc;": "Ŵ",
		"wcirc;": "ŵ",
		"wedbar;": "⩟",
		"Wedge;": "⋀",
		"wedge;": "∧",
		"wedgeq;": "≙",
		"weierp;": "℘",
		"Wfr;": "𝔚",
		"wfr;": "𝔴",
		"Wopf;": "𝕎",
		"wopf;": "𝕨",
		"wp;": "℘",
		"wr;": "≀",
		"wreath;": "≀",
		"Wscr;": "𝒲",
		"wscr;": "𝓌",
		"xcap;": "⋂",
		"xcirc;": "◯",
		"xcup;": "⋃",
		"xdtri;": "▽",
		"Xfr;": "𝔛",
		"xfr;": "𝔵",
		"xhArr;": "⟺",
		"xharr;": "⟷",
		"Xi;": "Ξ",
		"xi;": "ξ",
		"xlArr;": "⟸",
		"xlarr;": "⟵",
		"xmap;": "⟼",
		"xnis;": "⋻",
		"xodot;": "⨀",
		"Xopf;": "𝕏",
		"xopf;": "𝕩",
		"xoplus;": "⨁",
		"xotime;": "⨂",
		"xrArr;": "⟹",
		"xrarr;": "⟶",
		"Xscr;": "𝒳",
		"xscr;": "𝓍",
		"xsqcup;": "⨆",
		"xuplus;": "⨄",
		"xutri;": "△",
		"xvee;": "⋁",
		"xwedge;": "⋀",
		"Yacute;": "Ý",
		"Yacute": "Ý",
		"yacute;": "ý",
		"yacute": "ý",
		"YAcy;": "Я",
		"yacy;": "я",
		"Ycirc;": "Ŷ",
		"ycirc;": "ŷ",
		"Ycy;": "Ы",
		"ycy;": "ы",
		"yen;": "¥",
		"yen": "¥",
		"Yfr;": "𝔜",
		"yfr;": "𝔶",
		"YIcy;": "Ї",
		"yicy;": "ї",
		"Yopf;": "𝕐",
		"yopf;": "𝕪",
		"Yscr;": "𝒴",
		"yscr;": "𝓎",
		"YUcy;": "Ю",
		"yucy;": "ю",
		"Yuml;": "Ÿ",
		"yuml;": "ÿ",
		"yuml": "ÿ",
		"Zacute;": "Ź",
		"zacute;": "ź",
		"Zcaron;": "Ž",
		"zcaron;": "ž",
		"Zcy;": "З",
		"zcy;": "з",
		"Zdot;": "Ż",
		"zdot;": "ż",
		"zeetrf;": "ℨ",
		"ZeroWidthSpace;": "​",
		"Zeta;": "Ζ",
		"zeta;": "ζ",
		"Zfr;": "ℨ",
		"zfr;": "𝔷",
		"ZHcy;": "Ж",
		"zhcy;": "ж",
		"zigrarr;": "⇝",
		"Zopf;": "ℤ",
		"zopf;": "𝕫",
		"Zscr;": "𝒵",
		"zscr;": "𝓏",
		"zwj;": "‍",
		"zwnj;": "‌"
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _scenarioParser = __webpack_require__(30);
	
	var _scenarioParser2 = _interopRequireDefault(_scenarioParser);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	module.exports = {
	  ScenarioParser: _scenarioParser2.default
	};

/***/ },
/* 30 */
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
	
	var _message = __webpack_require__(31);
	
	var _message2 = _interopRequireDefault(_message);
	
	var _messageBlock = __webpack_require__(32);
	
	var _messageBlock2 = _interopRequireDefault(_messageBlock);
	
	var _config = __webpack_require__(33);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _tbSerializer = __webpack_require__(36);
	
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
/* 31 */
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
/* 32 */
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
/* 33 */
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
	
	var _jsYaml = __webpack_require__(34);
	
	var _jsYaml2 = _interopRequireDefault(_jsYaml);
	
	var _const = __webpack_require__(35);
	
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(3);

/***/ },
/* 35 */
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
/* 36 */
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
/* 37 */
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
/* 38 */
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
	
	  serialize() {
	    return {
	      zoomLevel: this.zoomLevel.toJSON()
	    };
	  }
	}
	exports.default = Zoom;

/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map