import m from 'mithril';
import messageComponent from './message-list/message-component';
import Const from '../utils/const';

const speakerIconSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>';

const messageListComponent = {
  controller: function (data) {
    this.vm = data.vm;
  },
  view: (ctrl) => {
    const vm = ctrl.vm;
    const list = vm.scenario.list;
    const error = vm.scenario.parseError();

    const listView = buildWindowList(list, vm);

    return m('.preview', [
      error ? m('.error', error) : null,
      m('#messageList', {class: `zoom${vm.zoom.zoomLevel()}x`}, listView)
    ]);
  }
};

const buildWindowList = (list, vm) => {
  return list.map((windowObj) => {
    // blockの場合
    if (windowObj.type == Const.type.block) {
      return m('.block', {
        key: windowObj.key
      }, [
        m('.label', windowObj.label),
        m('.key', `変数: ${('0000' + windowObj.varNo).slice(-4)}, 値: ${windowObj.no}`),
        buildWindowList(windowObj.child, vm)
      ]);
    }
    const colors = vm.config ? vm.config.colors : [];

    let messageView = [];
    let commentsView = [];

    // コメント
    windowObj.comments.forEach((comment) => {
      commentsView.push(m('p.comment', comment));
    });

    // 顔グラフィック
    if (windowObj.face) {
      const face = windowObj.face;
      const classList = [];
      if (face.mirror) {
        classList.push('mirror');
      }
      if (face.pos) {
        classList.push('posRight');
      }
      if (face.filename && face.number > -1) {
        messageView.push(m('.faceBox', {
          class: classList.join(' ')
        }, [
          m('.faceImg', {
            style: vm.getFaceStyle(face)
          })
        ]));
      }
    }
    // テキスト
    messageView.push(m(messageComponent, {line: windowObj.line(), colors: colors}));

    // SEアイコン
    let seIconView = null;
    if (windowObj.se && vm.showSe()) {
      seIconView = m('.seIcon', {
        title: windowObj.se,
        onclick: (e) => {
          e.stopPropagation();
          vm.playSeAudio(windowObj.se);
        }
      }, m.trust(speakerIconSvg));
    }

    // 全体を.messageWindowでラップして返す
    const messageWindowEl = m('.messageWindow', {
      class: windowObj.iconStatus ? 'showIcon' : '',
      onclick: windowObj.toggleIcon.bind(windowObj)
    }, messageView);

    const messageWindow = seIconView
      ? m('.messageWindowWrapper', [messageWindowEl, seIconView])
      : messageWindowEl;
    return commentsView.length > 0 ? [commentsView, messageWindow] : messageWindow;
  });
};

export default messageListComponent;
