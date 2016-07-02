import m from 'mithril';

const loadComponent = {
  controller: function (data) {
    this.vm = data.vm;
    this.tColor = false;
    this.noop = (e) => {
      e.preventDefault();
    };
  },
  view: (ctrl) => {
    const settingList = [];
    if (ctrl.vm.status()) {
      // systemImg
      const systemImg = ctrl.vm.systemImg();
      const systemImgView = m('.systemImg', [
        m('h3', 'システムグラフィック'),
        m('img', {
          src: systemImg.dataUrl
        }),
        m('.tColor', [
          '透過色: ',
          m('span', {
              style: {color: systemImg.tColorCss}
            }, `■${systemImg.tColorCss}`)
        ]),
        m('h4', 'メッセージ枠ベース画像'),
        m('img', {
          src: systemImg.messageWindow
        })
      ]);
      settingList.push(systemImgView);
    }
    return m('.loadComponent', [
      m('h2', '設定ファイル'),
      m('button.checkConfig', '現在の設定の確認'),
      m('.settingList', {
      }, settingList),
      m('.loadConfig', {
        ondragover: ctrl.noop,
        ondrop: ctrl.vm.dropFiles.bind(ctrl.vm)
      }, 'ここに設定ファイルをまとめてドロップしてください。')
    ]);
  }
};

export default loadComponent;
