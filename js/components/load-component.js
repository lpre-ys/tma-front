import m from 'mithril';

const loadComponent = {
  controller: function (data) {
    this.vm = data.vm;
    this.buttonStatus = m.prop(false);
    this.tColor = false;
    this.noop = (e) => {
      e.preventDefault();
    };
  },
  view: (ctrl) => {
    const settingList = [];
    const vm = ctrl.vm;
    if (vm.loadStatus) {
      // systemImg
      const systemImg = vm.systemImg;
      const colors = vm.config ? vm.config.colors : [];
      const systemImgView = m('.systemImg', [
        m('h3', 'システムグラフィック'),
        m('.systemItems', [
          m('img', {
            src: systemImg.dataUrl
          }),
          m('.tColor', [
            '透過色: ',
            m('br'),
            m('span', {
                style: {color: systemImg.tColorCss}
              }, `■${systemImg.tColorCss}`)
          ]),
          m('div', [
            '枠:',
            m('br'),
            m('img', {
              src: systemImg.messageWindow
            })
          ])
        ]),
        m('h4', '色タグ'),
        m('.colorTagList.messageWindow', [
          m('ul.message', Object.keys(colors).map((color) => {
            const number = colors[color];
            return m('li.line',
              m('p.shadow', `${number}: <${color}> `),
              m('p.text', m('span', {class: `color${number}`}, `${number}: <${color}> `))
            );
          }))
        ])
      ]);
      settingList.push(systemImgView);
      // face graphics
      const faceListView = vm.config.faceKeyList.map((faceKey) => {
        return [
          m('li', [
            m('p', faceKey),
            m('.faceImg', {style: vm.getFaceStyle(faceKey)})
          ])
        ];
      });
      const faceImgView = m('.faceSetting', [
        m('h3', '顔グラフィック'),
        m('ul.faceList', faceListView)
      ]);
      settingList.push(faceImgView);
    }
    return m('.loadComponent', [
      m('h2', '設定ファイル'),
      m('button.checkConfig', {
        class: vm.loadStatus ? 'enable' : 'disable',
        'data-button-status': ctrl.buttonStatus() == 'on' ? 'off' : 'on',
        onclick: m.withAttr('data-button-status', ctrl.buttonStatus)
      }, '設定の' + (ctrl.buttonStatus() == 'on' ? '非表示' : '表示')),
      m('.settingList', {
        class: ctrl.buttonStatus() == 'on' ? 'enable' : 'disable'
      }, settingList),
      m('.loadConfig', {
        class: vm.loadStatus ? 'disable' : 'enable',
        ondragover: ctrl.noop,
        ondrop: vm.dropFiles.bind(vm)
      }, 'ここに設定ファイルをまとめてドロップしてください。')
    ]);
  }
};

export default loadComponent;
