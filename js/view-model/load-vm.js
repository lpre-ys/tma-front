import m from 'mithril';
// import Png from '../model/png';
import SystemImg from '../model/system-img';

export default class LoadVM {
  constructor(scenario) {
    // init member
    this.style = m.prop();
    this.status = m.prop(false);
    this.peoples = [];
    this.scenario = scenario;
    this.systemImg = m.prop(false);
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
    m.sync(promises).then(() => {
      this.scenario.setConfig(this.style(), this.peoples);
      this.status(true);
      // set CSS images
      if (this.systemImg()) {
        this._editCss('.messageWindow', 'border-image-source', `url(${this.systemImg().messageWindow})`);
        this._editCss('.text', 'background-image', `url(${this.systemImg().defaultText})`);
        for (let i = 0; i < 20; i++) {
          this._editCss(`.color${i}`, 'background-image', `url(${this.systemImg().getTextColor(i)})`);
        }
        this._editCss(':root', '--control-base-color', this.systemImg().controlCharColor);
        this._editCss(':root', '--control-sub-color', this.systemImg().controlCharBgColor);
      }
      // redraw
      m.redraw();
    });
  }

  _editCss(selector, name, value) {
    this.styleSheet.insertRule(`${selector} { ${name}: ${value}}`, this.styleSheet.cssRules.length);
  }

  _readStyleYaml(file) {
    const reader = new FileReader();
    reader.readAsText(file);

    const deferred = m.deferred();
    reader.onloadend = (e) => {
      this.style(e.target.result);
      deferred.resolve(true);
    };
    reader.onerror = deferred.reject;

    return deferred.promise;
  }

  _readPeopleYaml(file) {
    const reader = new FileReader();
    reader.readAsText(file);

    const deferred = m.deferred();
    reader.onloadend = (e) => {
      this.peoples.push(e.target.result);
      deferred.resolve(true);
    };
    reader.onerror = deferred.reject;

    return deferred.promise;
  }

  _readPng(file) {
    const deferred = m.deferred();
    const reader = new FileReader();
    const systemImg = new SystemImg(deferred);
    reader.readAsArrayBuffer(file);
    this.systemImg(systemImg); //TODO

    reader.onloadend = systemImg.loadEnd.bind(systemImg);
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
