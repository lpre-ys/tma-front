import m from 'mithril';
import domParser from '../utils/dom-parser';
import Const from '../utils/const';

export default class Line {
  constructor(data) {
    data = data || {};
    this.raw = m.prop(data.line || '');
    this._line = false;
    this._text = false;
  }

  line(v) {
    // 変更は無視する
    if (v) {
      // console.warn('lineを直接変更する事は出来ません。' + v);
    }

    // 未変換であれば変換する
    if (this._line === false) {
      const raw = Line.preEscape(this.raw());
      const dom = domParser.parseFromString(raw, 'text/html');
      const tree = Line.domToTree(dom.body);
      this._line = tree;
    }

    return this._line;
  }

  text(v) {
    // 変更は無視する
    if (arguments.length > 0) {
      // console.warn('textを直接変更する事は出来ません。' + v);
    }

    // 未変換であれば変換する
    if (this._text === false) {
      const raw = Line.preEscape(this.raw());
      const dom = domParser.parseFromString(raw, 'text/html');
      this._text = Line.postEscape(dom.body.innerText);
    }

    return this._text;
  }

  static preEscape(str) {
    // エスケープ記号を退避
    return str.replace(/\\\\/g, '#yen-mark#')
              .replace(/\\</g, '#lt-mark#')
              .replace(/\\/g, '#escape-mark#');
  }

  static postEscape(str) {
    // 退避した記号を戻し、半角スペースを実体参照に変換する。
    return str.replace(/#yen-mark#/g, '\\')
              .replace(/#lt-mark#/g, '<')
              .replace(/#escape-mark#/g, '');
  }

  static domToTree(dom) {
    const ret = [];
    let controls = [];
    let isPreControl = false;
    for (let node = dom.firstChild; node; node = node.nextSibling) {
      const tag = node.nodeName.toLowerCase();
      if (Object.keys(Const.controlTags).includes(tag)) {
        // 制御タグの場合、bodyは固定
        const body = Const.controlTags[tag];
        // controlタグに包む
        controls.push({tag, body});
        isPreControl = true;
        continue;
      }
      if (isPreControl) {
        ret.push({tag: 'control', body: controls});
        controls = [];
        isPreControl = false;
      }
      if (node.nodeType == Node.TEXT_NODE) {
        ret.push(Line.postEscape(node.textContent));  // エスケープを戻してから
      } else {
        let body;
        body = Line.domToTree(node);
        ret.push({tag, body});
      }
    }
    if (isPreControl) {
      ret.push({tag: 'control', body: controls});
    }

    return ret;
  }
}
