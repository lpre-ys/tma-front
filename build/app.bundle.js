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
	
	var _zoom = __webpack_require__(7);
	
	var _zoom2 = _interopRequireDefault(_zoom);
	
	var _scenario = __webpack_require__(8);
	
	var _scenario2 = _interopRequireDefault(_scenario);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	const tmaFrontComponent = {
	  controller: function () {
	    this.zoom = new _zoom2.default({ zoomLevel: 1 });
	    this.scenario = new _scenario2.default();
	  },
	  view: ctrl => {
	    const windowList = ctrl.scenario.windowList;
	    const colors = ctrl.scenario.colors;
	    return [(0, _mithril2.default)('.left', [_mithril2.default.component(_loadComponent2.default, { scenario: ctrl.scenario }), (0, _mithril2.default)('h2', 'シナリオファイル'), (0, _mithril2.default)('textarea#input', {
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
	
	var _loadVm = __webpack_require__(6);
	
	var _loadVm2 = _interopRequireDefault(_loadVm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	const loadComponent = {
	  controller: function (data) {
	    this.vm = new _loadVm2.default(data.scenario);
	    this.noop = e => {
	      e.preventDefault();
	    };
	  },
	  view: ctrl => {
	    return (0, _mithril2.default)('.loadComponent', [(0, _mithril2.default)('h2', '設定ファイル'), (0, _mithril2.default)('button.checkConfig', '現在の設定の確認'), (0, _mithril2.default)('.settingList', []), (0, _mithril2.default)('.loadConfig', {
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
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class LoadVM {
	  constructor(scenario) {
	    this.style = _mithril2.default.prop();
	    this.status = _mithril2.default.prop(false);
	    this.peoples = [];
	    this.scenario = scenario;
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
	        // } else if (ext == 'png') {
	        //   // 画像読み込み
	        //   reader.readAsDataURL(file);
	      } else if (['yaml', 'yml'].includes(ext)) {
	        // テキスト読み込み
	        promises.push(this._readPeopleYaml(file));
	      }
	    }
	    _mithril2.default.sync(promises).then(args => {
	      console.log(this);
	      this.scenario.setConfig(this.style(), this.peoples);
	      this.status = true;
	    });
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
	}
	exports.default = LoadVM;
	const getFileExt = filename => {
	  const dotIndex = filename.lastIndexOf('.');
	  if (dotIndex < 0) {
	    throw new Error('拡張子が有りません');
	  }
	  return filename.substr(dotIndex + 1);
	};
	const handleLoadEnd = e => {
	  if (e.target.readyState == FileReader.DONE) {
	    const file = e.target.result;
	    if (file.startsWith('data:image')) {
	      // 画像読み込み
	      const img = new Image();
	      img.src = file;
	      img.onload = handleImageOnLoad;
	    } else {
	      const outputList = document.getElementById('outputList');
	      const li = document.createElement('li');
	      li.textContent = e.target.result;
	      outputList.appendChild(li);
	    }
	  }
	};
	const handleImageOnLoad = e => {
	  // 画像を変換して新しいimgタグにセット
	  const img = e.target;
	  const data = canvasTest(img);
	  if (data) {
	    const message = document.getElementById('message');
	    // message.innerText = 'TEST MESSAGE.';
	    message.classList.add('mask-text');
	    message.style.backgroundImage = `url(${ data })`;
	  }
	};
	const canvasTest = img => {
	  const canvas = document.createElement('canvas');
	  // test
	  canvas.width = 5;
	  canvas.height = 33;
	  const ctx = canvas.getContext('2d');
	  ctx.drawImage(img, 0, 0, 5, 33);
	  return canvas.toDataURL();
	};

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
	
	class Zoom {
	  constructor(data) {
	    data = data || {};
	    this.zoomLevel = _mithril2.default.prop(data.zoomLevel || 1);
	  }
	
	}
	exports.default = Zoom;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _tk2kMessageAssist = __webpack_require__(9);
	
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _scenarioParser = __webpack_require__(10);
	
	var _scenarioParser2 = _interopRequireDefault(_scenarioParser);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	module.exports = {
	  ScenarioParser: _scenarioParser2.default
	};

/***/ },
/* 10 */
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
	
	var _message = __webpack_require__(11);
	
	var _message2 = _interopRequireDefault(_message);
	
	var _messageBlock = __webpack_require__(12);
	
	var _messageBlock2 = _interopRequireDefault(_messageBlock);
	
	var _config = __webpack_require__(13);
	
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
	              throw new Error('タグの対応がおかしいです。');
	            }
	          } else {
	            // 開始タグ
	            stack.push(tag.substr(1, tag.length - 2));
	          }
	        });
	      }
	      if (stack.length > 0) {
	        this.continueTag = stack.map(function (v) {
	          return '<' + v + '>';
	        }).join('');
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
	
	var _jsYaml = __webpack_require__(14);
	
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(3);

/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map