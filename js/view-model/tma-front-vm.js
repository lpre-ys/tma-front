import m from 'mithril';
import Encoding from 'encoding-japanese';
import Png from '../model/png';
import SystemImg from '../model/system-img';
import Scenario from '../model/scenario';
import {ScenarioParser} from 'tk2k-message-assist';
import StyleSheet from '../model/style-sheet';
import Zoom from '../model/zoom';
import Const from '../utils/const';

export default class TmaFrontVM {
  constructor() {
    let data = this.load() || {};
    // autosave
    this.autosave = m.prop(data.autosave || false);
    if (!this.autosave()) {
      this.reset();
      data = {};
    }
    data.scenario = data.scenario || {};
    // init member
    this.scenario = new Scenario(data.scenario);
    this.parser = false;
    this.stickyStatus = m.prop('normal');
    this.stickyCheck = m.prop(data.stickyCheck || false);
    this.stickyYOffset = 0;
    // for yamlGenerator
    this.yamlGeneratorStatus = m.prop('disable');
    // for load setting
    this.loadStatus = false;
    this.systemImg = false;
    this.faceImgs = {};
    this.config = false;
    // get styleSheet
    this.styleSheet = new StyleSheet('style.css');
    this.zoom = new Zoom(data.zoom || {zoomLevel: 1});
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
    m.sync(promises).then((args) => {
      let styleYaml = false;
      const poepleYamls = [];
      args.forEach(({type, file}) => {
        if (type == 'png') {
          if (file instanceof SystemImg) {
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
      this.parser = new ScenarioParser(styleYaml, poepleYamls);
      this.config = this.parser.config;
      this.loadStatus = true;
      // set system images css
      if (this.systemImg) {
        this.styleSheet.editCss('.messageWindow', 'border-image-source', `url(${this.systemImg.messageWindow})`);
        this.styleSheet.editCss('.text', 'background-image', `url(${this.systemImg.defaultText})`);
        for (let i = 0; i < (Const.color.max + 1); i++) {
          this.styleSheet.editCss(`.color${i}`, 'background-image', `url(${this.systemImg.getTextColor(i)})`);
        }
        this.styleSheet.editCss(':root', '--control-base-color', this.systemImg.controlCharColor);
        this.styleSheet.editCss(':root', '--control-sub-color', this.systemImg.controlCharBgColor);
      }
      this.parse();
      // redraw
      m.redraw();
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
      },
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
    const faceConfig = (typeof face == 'string') ? this.config.getFace(face) : face;
    if (!faceConfig.filename) {
      return;
    }
    const filename = faceConfig.filename
                   + (!faceConfig.filename.endsWith('.png') ? '.png' : '');
    const dataUrl = this.faceImgs[filename].dataUrl;
    const posx = (faceConfig.number % 4) * Const.face.width;
    const posy = Math.floor(faceConfig.number / 4) * Const.face.height;
    return {
      backgroundImage: `url(${dataUrl})`,
      backgroundPosition: `-${posx}px -${posy}px`
    };
  }

  onScrollSticky() {
    const element = document.getElementById('stickyWrapper');
    const rect = element.getBoundingClientRect();
    if (rect.top < 0 && this.stickyStatus() == 'normal') {
      this.stickyStatus('sticky');
      this.stickyYOffset = window.pageYOffset;
      m.redraw();
      return;
    }
    if (window.pageYOffset <= this.stickyYOffset && this.stickyStatus() == 'sticky') {
      this.stickyStatus('normal');
      m.redraw();
      return;
    }
  }

  _readStyleYaml(file) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    const deferred = m.deferred();
    reader.onloadend = (e) => {
      deferred.resolve({
        type: 'styleYaml',
        file: encodeString(e.target.result)
      });
    };
    reader.onerror = deferred.reject;

    return deferred.promise;
  }

  _readPeopleYaml(file) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    const deferred = m.deferred();
    reader.onloadend = (e) => {
      deferred.resolve({
        type: 'peopleYaml',
        file: encodeString(e.target.result)
      });
    };
    reader.onerror = deferred.reject;

    return deferred.promise;
  }

  _readSystemImg(file) {
    const deferred = m.deferred();
    const reader = new FileReader();
    const systemImg = new SystemImg(deferred, 'system.png');
    reader.readAsArrayBuffer(file);

    reader.onloadend = systemImg.loadEnd.bind(systemImg);
    reader.onerror = deferred.reject;

    return deferred.promise;
  }

  _readPng(file, filename) {
    const deferred = m.deferred();
    const reader = new FileReader();
    const png = new Png(deferred, filename);
    reader.readAsArrayBuffer(file);

    reader.onloadend = png.loadEnd.bind(png);
    reader.onerror = deferred.reject;

    return deferred.promise;
  }
}
const getFileExt = (filename) => {
  const dotIndex = filename.lastIndexOf('.');
  if (dotIndex < 0) {
    throw new Error('拡張子が有りません');
  }
  return filename.substr(dotIndex + 1);
};

const encodeString = (input) => {
  let tArray = new Uint8Array(input);
  switch (Encoding.detect(tArray)) {
    case 'UTF16':
      tArray = new Uint16Array(input);
      break;
    case 'UTF32':
      tArray = new Uint32Array(input);
      break;
  }
  // to Unicode
  const unicodeArray = Encoding.convert(tArray, 'UNICODE');
  // to string
  return Encoding.codeToString(unicodeArray);
};
