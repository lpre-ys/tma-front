import m from 'mithril';
import zoomComponent from './zoom-component';
import Zoom from '../model/zoom';
import Scenario from '../model/scenario';

const tmaFrontComponent = {
  controller: function () {
    this.zoom = new Zoom({zoomLevel: 1});
    this.scenario = new Scenario();
  },
  view: (ctrl) => {
    const windowList = ctrl.scenario.windowList;
    return [
      m('.left', [
        m('h2', '設定ファイル'),
        m('.loadConfig', 'ここにファイルをまとめてドロップしてください'),
        m('h2', 'シナリオファイル'),
        m('textarea#input', {
          value: ctrl.scenario.scenarioText(),
          onchange: m.withAttr('value', ctrl.scenario.scenarioText)
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
              if (face) {
                // TODO
                messageView.push(m('.faceBox', [
                  m('img.face', {src: 'https://placehold.it/96x96'})
                ]));
              }
              messageView.push(m('ul.message',
              message.line.map((lineText) => {
                return m('li.line', [
                  m('p.shadow', lineText),
                  m('p.text', lineText)
                ]);
              })
              ));
              return m('.messageWindow', messageView);
            });
          })
        ])
      ])
    ];
  }
};

export default tmaFrontComponent;
