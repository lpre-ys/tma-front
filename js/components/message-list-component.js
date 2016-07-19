import m from 'mithril';
import messageComponent from './message-list/message-component';

const messageListComponent = {
  controller: function (data) {
    this.vm = data.vm;
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
      })
    );
  }
};

export default messageListComponent;
