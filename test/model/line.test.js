import assert from 'power-assert';
import Line from '../../js/model/line';

describe('Line model', () => {
  describe('constructor', () => {
    it('data.lineでrawが初期化', () => {
      const target = new Line({line: 'test line'});
      assert(target.raw() == 'test line');
    });
  });
  describe('domToTree', () => {
    it('DOMobjをvanillaObjに変換する', () => {
      const parser = new DOMParser();
      const text = 'start<child>child text</child>end';
      const dom = parser.parseFromString(text, 'text/html');
      const ret = Line.domToTree(dom.body);
      assert(ret.length == 3);
      assert(ret[0] == 'start');
      assert(ret[1].tag == 'child');
      assert(ret[1].body == 'child text');
      assert(ret[2] == 'end');
    });
  });
  describe('text property', () => {
    it('装飾無しの場合、そのまま', () => {
      const target = new Line({line: 'text line'});
      assert(target.text() == 'text line');
    });
    it('空文字の場合、空文字', () => {
      const target = new Line({line: ''});
      assert(target.text() == '');
    });
    it('タグ有りの場合、タグを除去する', () => {
      const target = new Line({line: 'test <tag>add tag</tag> end'});
      assert(target.text() == 'test add tag end');
    });
  });
  describe('line property', () => {
    it('setは無視する', () => {
      const target = new Line({line: 'test line'});
      assert(target.line()[0] == 'test line');
      target.line('set line');
      assert(target.line()[0] == 'test line');
    });
    describe('get', () => {
      it('空文字の場合、空配列', () => {
        const target = new Line({line: ''});
        assert(target.line().length == 0);
      });
      it('装飾無しの場合、[raw]', () => {
        const target = new Line({line: 'simple line'});
        assert(target.line()[0] == 'simple line');
      });
      describe('タグ有りの場合', () => {
        describe('制御タグ', () => {
          it('1個', () => {
            const line = 'test wait<wait></wait> end';
            const target = new Line({line});

            const ret = target.line();
            assert(ret.length == 3);
            assert(ret[0] == 'test wait');
            assert(ret[1].tag == 'control');
            assert(ret[1].body[0].tag == 'wait');
            assert(ret[1].body[0].body == 'w');
            assert(ret[2] == ' end');
          });
          it('続けて複数個', () => {
            const line = 'test wait<wait></wait><stop></stop><q_wait></q_wait> end';
            const target = new Line({line});

            const ret = target.line();
            assert(ret.length == 3);
            assert(ret[0] == 'test wait');
            assert(ret[1].tag == 'control');
            assert(ret[1].body[0].tag == 'wait');
            assert(ret[1].body[0].body == 'w');
            assert(ret[1].body[1].tag == 'stop');
            assert(ret[1].body[1].body == 's');
            assert(ret[1].body[2].tag == 'q_wait');
            assert(ret[1].body[2].body == 'q');
            assert(ret[2] == ' end');
          });
          it('間が空いて複数個', () => {
            const line = 'test wait<wait></wait>space<stop></stop><q_wait></q_wait> end';
            const target = new Line({line});

            const ret = target.line();
            assert(ret.length == 5);
            assert(ret[0] == 'test wait');
            assert(ret[1].tag == 'control');
            assert(ret[1].body[0].tag == 'wait');
            assert(ret[1].body[0].body == 'w');
            assert(ret[2] == 'space');
            assert(ret[3].body[0].tag == 'stop');
            assert(ret[3].body[0].body == 's');
            assert(ret[3].body[1].tag == 'q_wait');
            assert(ret[3].body[1].body == 'q');
            assert(ret[4] == ' end');
          });
        });
        it('その他タグ', () => {
          const line = 'test color <red>red text</red> end';
          const target = new Line({line});

          const ret = target.line();
          assert(ret.length == 3);
          assert(ret[0] == 'test color ');
          assert(ret[1].tag == 'red');
          assert(ret[1].body == 'red text');
          assert(ret[2] == ' end');
        });
      });
    });
  });
});
