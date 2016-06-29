import m from 'mithril';

const tmaFrontComponent = {
  view: () => {
    return [
      m('.left', [
        m('h2', 'テキストファイル'),
        m('textarea#input')
      ]),
      m('.right', [
        m('h2', 'プレビュー'),
        m('#messageList', [
          // test
          m('.messageWindow', [
            m('.faceBox', [
              m('img.face', {src: 'https://placehold.it/96x96'})
            ]),
            m('ul.message', [
              m('li.line', [
                m('p.shadow', '１２３４５６７８９０１２３４５６７８９０'),
                m('p.text', '１２３４５６７８９０１２３４５６７８９０')
              ]),
              m('li.line', [
                m('p.shadow', '１２３４５６７８９０１２３４５６７８９０'),
                m('p.text', '１２３４５６７８９０１２３４５６７８９０')
              ]),
              m('li.line', [
                m('p.shadow', '１２３４５６７８９０１２３４５６７８９０'),
                m('p.text', '１２３４５６７８９０１２３４５６７８９０')
              ]),
              m('li.line', [
                m('p.shadow', '１２３４５６７８９０１２３４５６７８９０'),
                m('p.text', '１２３４５６７８９０１２３４５６７８９０')
              ])
            ])
          ]),
          m('.messageWindow', [
            m('.faceBox', [
              m('img.face', {src: 'https://placehold.it/96x96'})
            ]),
            m('ul.message', [
              m('li.line', [
                m('p.shadow', '１２３４５６７８９０１２３４５６７８９０'),
                m('p.text', '１２３４５６７８９０１２３４５６７８９０')
              ]),
              m('li.line', [
                m('p.shadow', '１２３４５６７８９０１２３４５６７８９０'),
                m('p.text', '１２３４５６７８９０１２３４５６７８９０')
              ]),
              m('li.line', [
                m('p.shadow', '１２３４５６７８９０１２３４５６７８９０'),
                m('p.text', '１２３４５６７８９０１２３４５６７８９０')
              ]),
              m('li.line', [
                m('p.shadow', '１２３４５６７８９０１２３４５６７８９０'),
                m('p.text', '１２３４５６７８９０１２３４５６７８９０')
              ])
            ])
          ])

        ])
      ])
    ];
  }
};

export default tmaFrontComponent;
