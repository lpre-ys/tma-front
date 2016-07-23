import Line from './line';
import domParser from '../utils/dom-parser';
import ent from 'ent';

export default class Window {
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
      this._line = v.map((line) => {
        line = continueTags.join('') + line;
        const dom = domParser.parseFromString(line, 'text/html');
        const parsedHtml = ent.decode(dom.body.innerHTML);
        if (line != parsedHtml) {
          const closeTags = parsedHtml.substr(line.length)
                                      .split(/(<[^>]+>)/)
                                      .filter((v) => {return !!v;});
          continueTags = closeTags.map((v) => {return v.replace('/', '');}).reverse();
        } else {
          continueTags = [];
        }
        return new Line({line: parsedHtml});
      });
    }

    return this._line;
  }

  toggleIcon() {
    this.iconStatus = !this.iconStatus;
  }

}
