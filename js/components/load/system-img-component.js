import m from 'mithril';

const systemImgComponent = {
  controller: function (data) {
    this.vm = data.vm;
  },
  view: (ctrl) => {
    const vm = ctrl.vm;
    const systemImg = vm.systemImg;
    const colors = vm.config ? vm.config.colors : [];
    return m('.systemImg', [
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
  }
};

export default systemImgComponent;
