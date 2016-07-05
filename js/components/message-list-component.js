import m from 'mithril';

const messageListComponent = {
  controller: function (data) {
    this.vm = data.vm;
  },
  view: (ctrl) => {
    const vm = ctrl.vm;
    const windowList = vm.scenario.windowList;
    const colors = vm.scenario.colors;
    return m('#messageList', {class: `zoom${vm.zoom.zoomLevel()}x`}, [
      windowList.map((messageBox) => {
        const face = messageBox.face;
        return messageBox.messageList.map((message) => {
          let messageView = [];
          let lineView = [];
          if (face) {
            messageView.push(m('.faceBox', [
              m('.faceImg', {style: vm.getFaceStyle(face)})
            ]));
            lineView.push(makeMessageLi(face.name, colors));
          }
          message.line.forEach((lineText) => {
            lineView.push(makeMessageLi(lineText, colors));
          });
          messageView.push(m('ul.message', lineView));
          return m('.messageWindow', messageView);
        });
      })
    ]);
  }
};

const domParser = new DOMParser();
const makeMessageLi = (scenarioText, colors) => {
  let html = scenarioText;
  // エスケープの変換
  html = html.replace('\\<', '&lt;')
             .replace(/([^\\]?)\\/, '$1')
             .replace('\\', '\\\\');
  // 色タグをspanに変換
  Object.keys(colors).forEach((color) => {
    const number = colors[color];
    const colorTagRegExp = new RegExp(`<${color}>`, 'g');
    html = html.replace(colorTagRegExp, `<color${number}>`);
  });
  html = html.replace(startTagRegExp, '<span class="$1">')
             .replace(endTagRegExp, '</span>');
  // DOMParserに読ませて変換する
  const dom = domParser.parseFromString(html, 'text/html');
  // 本文の組み立て
  const message = domToView(dom.body);

  return m('li.line', [
    m('p.shadow', dom.body.innerText),
    m('p.text', message)
  ]);
};

const domToView = (dom) => {
  let view = [];
  let iList = [];
  for (let node = dom.firstChild; node; node = node.nextSibling) {
    const klass = node.getAttribute ? node.getAttribute('class') : false;
    if (Object.keys(controlTags).includes(klass)) {
      // 制御タグはiタグに変えてキープ
      iList.push(m('i', {
        class: klass
      }, controlTags[klass]));
      continue;
    } else {
      // iタグのストックがあればspanに包んでpush
      if (iList.length > 0) {
        view.push(m('span', {
          class: 'control'
        }, iList));
        iList = [];
      }
    }
    if (node.nodeName == 'SPAN') {
        // 他のタグはspanのまま
        view.push(m('span', {
          class: klass
        }, domToView(node)));
    } else {
      // span以外の要素は全てテキストに変える
      view.push(node.textContent);
    }
  }
  // iタグのストックがあればspanに包んでpush
  if (iList.length > 0) {
    view.push(m('span', {
      class: 'control'
    }, iList));
    iList = [];
  }
  return view;
};

const startTagRegExp = /<([a-z0-9\-\_]+)>/g;
const endTagRegExp = /<\/([a-z0-9\-\_]+)>/g;
const controlTags = {
  stop: 's',
  wait: 'w',
  q_wait: 'q'
};

export default messageListComponent;
