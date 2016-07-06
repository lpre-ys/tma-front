import m from 'mithril';

const messageListComponent = {
  controller: function (data) {
    this.vm = data.vm;
    this.toggleClass = messageListComponent.toggleClass;
  },
  view: (ctrl) => {
    const vm = ctrl.vm;
    const windowList = vm.scenario.windowList();
    const colors = vm.config ? vm.config.colors : [];
    return m('#messageList', {class: `zoom${vm.zoom.zoomLevel()}x`},
      windowList.map((windowObj) => {
        let messageView = [];
        let lineView = [];
        let commentsView = [];

        // コメント
        windowObj.comments.forEach((comment) => {
          commentsView.push(m('p.comment', comment));
        });

        // 顔グラフィック
        if (windowObj.face) {
          const face = windowObj.face;
          messageView.push(m('.faceBox', [
            m('.faceImg', {style: vm.getFaceStyle(face)})
          ]));
          lineView.push(makeMessageLi(face.name, colors));
        }
        // 継続タグ
        let continueTag = '';
        windowObj.line.forEach((lineText) => {
          lineText = continueTag + lineText;
          lineView.push(makeMessageLi(lineText, colors));
          // 継続タグの設定
          const dom = domParser.parseFromString(lineText, 'text/html');
          const parsed = dom.body.innerHTML;
          if (lineText != parsed) {
            const tags = parsed.substr(lineText.length)
                               .match(/<\/[a-z\-\_]+>/g);
            if (tags) {
              continueTag = tags.map((v) => v.replace('/', ''))
                                                  .reverse()
                                                  .join('');
            }
          } else {
            continueTag = '';
          }
        });
        messageView.push(m('ul.message', lineView));
        return [commentsView, m('.messageWindow', {
          class: windowObj.iconStatus ? 'showIcon' : '',
          onclick: windowObj.toggleIcon.bind(windowObj)
        }, messageView)];
      })
    );
  }
};

const domParser = new DOMParser();
const makeMessageLi = (scenarioText, colors) => {
  let html = scenarioText;
  // エスケープの変換
  html = html.replace(/\\</g, '&lt;')
             .replace(/\\\\/g, '<yen-mark>')
             .replace(/\\/g, '')
             .replace(/<yen-mark>/g, '\\');
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
