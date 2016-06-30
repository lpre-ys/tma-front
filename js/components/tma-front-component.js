import m from 'mithril';
import zoomComponent from './zoom-component';
import loadComponent from './load-component';
import Zoom from '../model/zoom';
import Scenario from '../model/scenario';

const tmaFrontComponent = {
  controller: function () {
    this.zoom = new Zoom({zoomLevel: 1});
    this.scenario = new Scenario();
  },
  view: (ctrl) => {
    const windowList = ctrl.scenario.windowList;
    const colors = ctrl.scenario.colors;
    return [
      m('.left', [
        m.component(loadComponent, {scenario: ctrl.scenario}),
        m('h2', 'シナリオファイル'),
        m('textarea#input', {
          value: ctrl.scenario.scenarioText(),
          onkeyup: m.withAttr('value', ctrl.scenario.scenarioText)
        })
      ]),
      m('.right', [
        m('h2', 'プレビュー'),
        m.component(zoomComponent, {zoom: ctrl.zoom}),
        m('#messageList', {class: `zoom${ctrl.zoom.zoomLevel()}x`}, [
          windowList.map((messageBox) => {
            const face = messageBox.face;
            return messageBox.messageList.map((message) => {
              let messageView = [];
              let lineView = [];
              if (face) {
                // TODO
                messageView.push(m('.faceBox', [
                  m('img.face', {src: 'https://placehold.it/96x96'})
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
        ])
      ])
    ];
  }
};

const domParser = new DOMParser();
const makeMessageLi = (scenarioText, colors) => {
  let html = scenarioText;
  // 独自タグを全てspanに変換
  Object.keys(colors).forEach((color) => {
    const number = colors[color];
    const colorTagRegExp = new RegExp(`<${color}>`, 'g');
    html = html.replace(colorTagRegExp, `<color${number}>`);
  });
  html = html.replace(startTagRegExp, '<span class="$1">')
             .replace(endTagRegExp, '</span>');
  // 1回DOMParserに読ませてタグを除去する
  const dom = domParser.parseFromString(html, 'text/html');
  const text = dom.body.innerText;

  return m('li.line', [
    m('p.shadow', text),
    m('p.text', m.trust(html))
  ]);
};

const startTagRegExp = /<([a-z0-9\-\_]+)>/g;
const endTagRegExp = /<\/([a-z0-9\-\_]+)>/g;

export default tmaFrontComponent;
