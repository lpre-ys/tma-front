import m from 'mithril';
import messageComponent from './message-list/message-component';
import Const from '../utils/const';

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
      messageView.push(m('.faceBox', {
        class: classList.join(' ')
      }, [
        m('.faceImg', {
          style: vm.getFaceStyle(face)
        })
      ]));
    }
    // テキスト
    messageView.push(m(messageComponent, {line: windowObj.line(), colors: colors}));

    // 全体を.messageWindowでラップして返す
    const messageWindow = m('.messageWindow', {
      class: windowObj.iconStatus ? 'showIcon' : '',
      onclick: windowObj.toggleIcon.bind(windowObj)
    }, messageView);
    return commentsView.length > 0 ? [commentsView, messageWindow] : messageWindow;
  });
};

export default messageListComponent;
