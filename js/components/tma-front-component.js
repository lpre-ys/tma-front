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
            m('ul.text', [
              m('li.line', '１２３４５６７８９０１２３４５６７８９０'),
              m('li.line', 'テスト2'),
              m('li.line', 'テスト3'),
              m('li.line', 'テスト4')
            ])
          ])
        ])
      ])
    ];
  }
};

export default tmaFrontComponent;
