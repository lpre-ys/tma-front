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
	
	var _zoom = __webpack_require__(5);
	
	var _zoom2 = _interopRequireDefault(_zoom);
	
	var _scenario = __webpack_require__(6);
	
	var _scenario2 = _interopRequireDefault(_scenario);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	const tmaFrontComponent = {
	  controller: function () {
	    this.zoom = new _zoom2.default({ zoomLevel: 1 });
	    this.scenario = new _scenario2.default();
	  },
	  view: ctrl => {
	    const windowList = ctrl.scenario.windowList;
	    return [(0, _mithril2.default)('.left', [(0, _mithril2.default)('h2', '設定ファイル'), (0, _mithril2.default)('.loadConfig', 'ここにファイルをまとめてドロップしてください'), (0, _mithril2.default)('h2', 'シナリオファイル'), (0, _mithril2.default)('textarea#input', {
	      value: ctrl.scenario.scenarioText(),
	      onchange: _mithril2.default.withAttr('value', ctrl.scenario.scenarioText)
	    })]), (0, _mithril2.default)('.right', [(0, _mithril2.default)('h2', 'プレビュー'), _mithril2.default.component(_zoomComponent2.default, { zoom: ctrl.zoom }), (0, _mithril2.default)('#messageList', { class: `zoom${ ctrl.zoom.zoomLevel() }x` }, [windowList.map(messageBox => {
	      const face = messageBox.face;
	      return messageBox.messageList.map(message => {
	        let messageView = [];
	        if (face) {
	          // TODO
	          messageView.push((0, _mithril2.default)('.faceBox', [(0, _mithril2.default)('img.face', { src: 'https://placehold.it/96x96' })]));
	        }
	        messageView.push((0, _mithril2.default)('ul.message', message.line.map(lineText => {
	          return (0, _mithril2.default)('li.line', [(0, _mithril2.default)('p.shadow', lineText), (0, _mithril2.default)('p.text', lineText)]);
	        })));
	        return (0, _mithril2.default)('.messageWindow', messageView);
	      });
	    })])])];
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
	
	class Zoom {
	  constructor(data) {
	    data = data || {};
	    this.zoomLevel = _mithril2.default.prop(data.zoomLevel || 1);
	  }
	
	}
	exports.default = Zoom;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _tk2kMessageAssist = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class Scenario {
	  constructor() {
	    this.parser = new _tk2kMessageAssist.ScenarioParser(2);
	    this.scenarioText = _mithril2.default.prop('');
	  }
	  get windowList() {
	    const scenario = this.scenarioText();
	
	    if (scenario) {
	      return this.parser.parse(scenario);
	    }
	
	    return [];
	  }
	}
	exports.default = Scenario;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _scenarioParser = __webpack_require__(8);
	
	var _scenarioParser2 = _interopRequireDefault(_scenarioParser);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	module.exports = {
	  ScenarioParser: _scenarioParser2.default
	};

/***/ },
/* 8 */
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
	
	var _message = __webpack_require__(9);
	
	var _message2 = _interopRequireDefault(_message);
	
	var _messageBlock = __webpack_require__(10);
	
	var _messageBlock2 = _interopRequireDefault(_messageBlock);
	
	var _jsYaml = __webpack_require__(11);
	
	var _jsYaml2 = _interopRequireDefault(_jsYaml);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var ScenarioParser = function () {
	  function ScenarioParser(viewLineLimit) {
	    var isUseFace = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	    _classCallCheck(this, ScenarioParser);
	
	    this.viewLineLimit = viewLineLimit;
	    this.continueTag = '';
	    this.config = {};
	    this.isUseFace = isUseFace;
	  }
	
	  _createClass(ScenarioParser, [{
	    key: 'parse',
	    value: function parse(input) {
	      var _this = this;
	
	      // trimと配列化
	      var textList = input.split("\n").map(function (value) {
	        return value.trim();
	      });
	
	      // limit別に分ける
	      var result = [];
	      var tmp = [];
	      var block = new _messageBlock2.default(false);
	      textList.forEach(function (text) {
	        if (_this.isUseFace) {
	          // 顔の判別
	          if (Object.keys(_this.config.face).includes(text)) {
	            // メッセージブロックの作り直し
	            if (tmp.length > 0) {
	              block.addMessage(_this._tagFormat(tmp));
	              tmp = [];
	            }
	            if (block.hasMessage()) {
	              result.push(block);
	            }
	            block = new _messageBlock2.default(_this.config.face[text]);
	            return; //continue
	          }
	        }
	        tmp.push(text);
	        if (tmp.length == _this.viewLineLimit) {
	          block.addMessage(_this._tagFormat(tmp));
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
	    key: '_loadConfig',
	    value: function _loadConfig(yaml) {
	      var yamlObj = _jsYaml2.default.load(yaml);
	      // 色設定はそのまま読み込む
	      this.config.color = yamlObj.color ? yamlObj.color : false;
	      // スタイル設定はそのまま読み込む
	      this.config.style = yamlObj.style ? yamlObj.style : false;
	      // 顔設定の初期化
	      this.config.face = {};
	    }
	  }, {
	    key: '_loadPerson',
	    value: function _loadPerson(yaml) {
	      var _this2 = this;
	
	      var yamlObj = _jsYaml2.default.load(yaml);
	      if (yamlObj.person) {
	        if (!this.config.style) {
	          // スタイル設定が無い場合、エラー
	          throw new Error('スタイル設定が足りてません');
	        }
	        Object.keys(yamlObj.person).forEach(function (name) {
	          var person = yamlObj.person[name];
	          Object.keys(person.faces).forEach(function (faceName) {
	            var face = person.faces[faceName];
	            var templateConfig = _this2.config.style.template.face;
	            var nameConfig = _this2.config.style.display.name;
	            var faceKey = '' + name + templateConfig.prefix + faceName + templateConfig.suffix;
	            var displayName = void 0;
	            if (nameConfig.colorScope == 'inner') {
	              displayName = nameConfig.prefix + '<' + person.color + '>' + person.name + '</' + person.color + '>' + nameConfig.suffix;
	            } else if (nameConfig.colorScope == 'outer') {
	              displayName = '<' + person.color + '>' + nameConfig.prefix + person.name + nameConfig.suffix + '</' + person.color + '>';
	            } else {
	              displayName = person.name;
	            }
	            _this2.config.face[faceKey] = Object.assign({
	              'name': displayName
	            }, face);
	          });
	        });
	      }
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
	
	// 単独タグ正規表現
	
	exports.default = ScenarioParser;
	var noEndTagRegExp = /<([a-z]+) \/>/g;

/***/ },
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(3);

/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map