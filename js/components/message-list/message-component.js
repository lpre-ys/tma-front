import m from 'mithril';
import Const from '../../utils/const';

const messageComponent = {
  controller: function (data) {
    this.vm = data.vm;
  },
  view: (ctrl, args) => {
    if (!args || !Array.isArray(args.line)) {
      return;
    }
    const colors = args.colors || {};
    const childViewList = args.line.map((line) => {
      return m('li.line', [
        m('p.shadow', line.text()),
        m('p.text', buildHtml(line.line(), colors))
      ]);
    });
    return m('ul.message', childViewList);
  }
};

const buildHtml = (obj, colors) => {
  const ret = [];
  if (!Array.isArray(obj)) {
    obj = [obj];
  }
  obj.forEach((obj) => {
    if (typeof obj === 'string') {
      ret.push(obj);
    } else if (Object.keys(colors).includes(obj.tag)) {
      // 色タグ
      ret.push(m('span', {class: `color${colors[obj.tag]}`}, buildHtml(obj.body, colors)));
    } else if(Object.keys(Const.controlTags).includes(obj.tag)){
      // 制御文字タグ
      ret.push(m('i', {class: obj.tag}, buildHtml(obj.body, colors)));
    } else {
      // その他（瞬間表示タグなど）
      ret.push(m('span', {class: obj.tag}, buildHtml(obj.body, colors)));
    }
  });
  return ret;
};

export default messageComponent;
