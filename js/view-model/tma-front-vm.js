import m from 'mithril';
import Png from '../model/png';
import SystemImg from '../model/system-img';
import Scenario from '../model/scenario';
import StyleSheet from '../model/style-sheet';
import Zoom from '../model/zoom';

export default class TmaFrontVM {
  constructor() {
    // init member
    this.scenario = new Scenario();
    // for load setting
    this.loadStatus = false;
    this.systemImg = false;
    this.faceImgs = {};
    this.config = false;
    // get styleSheet
    this.styleSheet = new StyleSheet('style.css');
    this.zoom = new Zoom({zoomLevel: 1});
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
      this.config = this.scenario.setConfig(styleYaml, poepleYamls);
      this.loadStatus = true;
      // set system images css
      if (this.systemImg) {
        this.styleSheet.editCss('.messageWindow', 'border-image-source', `url(${this.systemImg.messageWindow})`);
        this.styleSheet.editCss('.text', 'background-image', `url(${this.systemImg.defaultText})`);
        for (let i = 0; i < 20; i++) {
          this.styleSheet.editCss(`.color${i}`, 'background-image', `url(${this.systemImg.getTextColor(i)})`);
        }
        this.styleSheet.editCss(':root', '--control-base-color', this.systemImg.controlCharColor);
        this.styleSheet.editCss(':root', '--control-sub-color', this.systemImg.controlCharBgColor);
      }
      // redraw
      m.redraw();
    });
  }

  getFaceStyle(face) {
    const faceConfig = (typeof face == 'string') ? this.config.getFace(face) : face;
    const filename = faceConfig.filename
                   + (!faceConfig.filename.endsWith('.png') ? '.png' : '');
    const dataUrl = this.faceImgs[filename].dataUrl;
    const posx = (faceConfig.number % 4) * 48;
    const posy = Math.floor(faceConfig.number / 4) * 48;
    return {
      backgroundImage: `url(${dataUrl})`,
      backgroundPosition: `-${posx}px -${posy}px`
    };
  }

  _readStyleYaml(file) {
    const reader = new FileReader();
    reader.readAsText(file);

    const deferred = m.deferred();
    reader.onloadend = (e) => {
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

    const deferred = m.deferred();
    reader.onloadend = (e) => {
      deferred.resolve({
        type: 'peopleYaml',
        file: e.target.result
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
