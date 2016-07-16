import m from 'mithril';
import messageComponent from './message-list/message-component';

const messageListComponent = {
  controller: function (data) {
    this.vm = data.vm;
    this.toggleClass = messageListComponent.toggleClass;
  },
  view: (ctrl) => {
    const vm = ctrl.vm;
    const windowList = vm.scenario.windowList;
    const colors = vm.config ? vm.config.colors : [];
    return m('#messageList', {class: `zoom${vm.zoom.zoomLevel()}x`},
      windowList.map((windowObj) => {
        let messageView = [];
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
        }
        // テキスト
        messageView.push(m(messageComponent, {line: windowObj.line(), colors: colors}));
        return [commentsView, m('.messageWindow', {
          class: windowObj.iconStatus ? 'showIcon' : '',
          onclick: windowObj.toggleIcon.bind(windowObj)
        }, messageView)];
      })
    );
  }
};

export default messageListComponent;
