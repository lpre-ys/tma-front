import assert from 'power-assert';
import messageComponent from '../../../js/components/message-list/message-component';
import Line from '../../../js/model/line';

describe('message component', () => {
  describe('controller', () => {
    it('set vm', () => {
      const vmMock = 'vmObj';
      const ctrl = new messageComponent.controller({vm: vmMock});

      assert(ctrl.vm == 'vmObj');
    });
  });
  describe('view', () => {
    it('パラメータが無い場合何もしない', () => {
      const ret = messageComponent.view(false, false);
      assert(!ret);
    });
    it('パラメータにlineが有れば、ul.messageを返す', () => {
      const line = [new Line({line: 'test'})];
      const ret = messageComponent.view(false, {line});
      assert(ret.tag == 'ul');
      assert(ret.attrs.className.includes('message'));
    });
    describe('装飾無し', () => {
      it('1行', () => {
        const line = [new Line({line: 'test message 1'})];
        const ret = messageComponent.view(false, {line});

        const li = ret.children[0];
        assert(li.tag == 'li');
        assert(li.children[0].tag == 'p');
        assert(li.children[0].attrs.className == 'shadow');
        assert(li.children[0].children[0] == 'test message 1');
        assert(li.children[1].tag == 'p');
        assert(li.children[1].attrs.className == 'text');
        assert(li.children[1].children[0] == 'test message 1');
      });
      it('複数行', () => {
        const line = [
          new Line({line: 'test message 1'}),
          new Line({line: 'test message 2'})
        ];
        const ret = messageComponent.view(false, {line});

        const li = ret.children[0];
        assert(li.tag == 'li');
        assert(li.children[0].tag == 'p');
        assert(li.children[0].attrs.className == 'shadow');
        assert(li.children[0].children[0] == 'test message 1');
        assert(li.children[1].tag == 'p');
        assert(li.children[1].attrs.className == 'text');
        assert(li.children[1].children[0] == 'test message 1');
        const li2 = ret.children[1];
        assert(li2.tag == 'li');
        assert(li2.children[0].tag == 'p');
        assert(li2.children[0].attrs.className == 'shadow');
        assert(li2.children[0].children[0] == 'test message 2');
        assert(li2.children[1].tag == 'p');
        assert(li2.children[1].attrs.className == 'text');
        assert(li2.children[1].children[0] == 'test message 2');
      });
    });
    describe('装飾有り', () => {
      const colors = {
        default: 0,
        red: 4,
        blue: 5,
        yellow: 6
      };
      describe('1行', () => {
        it('制御文字(閉じタグ無し)', () => {
          const line = [new Line({line: 'wait<wait></wait> test 1'})];
          const ret = messageComponent.view(false, {line});

          const shadow = ret.children[0].children[0];
          const text = ret.children[0].children[1];
          assert(shadow.children[0] == 'wait test 1');
          const targets = text.children;
          assert(targets[0] == 'wait');
          assert(targets[1].tag == 'span');
          assert(targets[1].attrs.class == 'control');
          assert(targets[1].children[0].tag == 'i');
          assert(targets[1].children[0].attrs.class == 'wait');
          assert(targets[1].children[0].children[0] == 'w');
          assert(targets[2] == ' test 1');
        });
        it('その他タグ(瞬間表示など)', () => {
          const line = [new Line({line: 'normal <flash>flash text</flash> normal'})];
          const ret = messageComponent.view(false, {line});

          const shadow = ret.children[0].children[0];
          const text = ret.children[0].children[1];
          assert(shadow.children[0] == 'normal flash text normal');
          const targets = text.children;
          assert(targets[0] == 'normal ');
          assert(targets[1].tag == 'span');
          assert(targets[1].attrs.class == 'flash');
          assert(targets[1].children[0] == 'flash text');
          assert(targets[2] == ' normal');
        });
        it('色：1色', () => {
          const line = [new Line({line: 'color <red>red text</red> test 1'})];
          const ret = messageComponent.view(false, {line, colors});

          const shadow = ret.children[0].children[0];
          const text = ret.children[0].children[1];
          assert(shadow.children[0] == 'color red text test 1');
          const targets = text.children;
          assert(targets[0] == 'color ');
          assert(targets[1].tag == 'span');
          assert(targets[1].attrs.class == 'color4');
          assert(targets[1].children[0] == 'red text');
          assert(targets[2] == ' test 1');
        });
        it('ネスト', () => {
          const line = [new Line({line: 'color <red>red text<blue> blue stop<stop></stop> text</blue></red> test 1'})];
          const ret = messageComponent.view(false, {line, colors});

          const shadow = ret.children[0].children[0];
          const text = ret.children[0].children[1];
          assert(shadow.children[0] == 'color red text blue stop text test 1');
          const targets = text.children;
          assert(targets[0] == 'color ');
          assert(targets[1].tag == 'span');
          assert(targets[1].attrs.class == 'color4');
          assert(targets[1].children[0] == 'red text');
          assert(targets[1].children[1].tag == 'span');
          assert(targets[1].children[1].attrs.class == 'color5');
          assert(targets[1].children[1].children[0] == ' blue stop');
          assert(targets[1].children[1].children[1].tag == 'span');
          assert(targets[1].children[1].children[1].attrs.class == 'control');
          assert(targets[1].children[1].children[1].children[0].tag == 'i');
          assert(targets[1].children[1].children[1].children[0].attrs.class == 'stop');
          assert(targets[1].children[1].children[1].children[0].children[0] == 's');
          assert(targets[1].children[1].children[2] == ' text');
          assert(targets[2] == ' test 1');
        });
      });
      describe('複数行', () => {
        describe('行単位で完結', () => {
          const line = [
            new Line({line: 'color <red>red text</red> test 1'}),
            new Line({line: 'color <yellow>yellow text</yellow> test 2'})
          ];
          const ret = messageComponent.view(false, {line, colors});
          it('1行目', () => {
            const shadow = ret.children[0].children[0];
            const text = ret.children[0].children[1];
            assert(shadow.children[0] == 'color red text test 1');
            const targets = text.children;
            assert(targets[0] == 'color ');
            assert(targets[1].tag == 'span');
            assert(targets[1].attrs.class == 'color4');
            assert(targets[1].children[0] == 'red text');
            assert(targets[2] == ' test 1');
          });
          it('2行目', () => {
            const shadow = ret.children[1].children[0];
            const text = ret.children[1].children[1];
            assert(shadow.children[0] == 'color yellow text test 2');
            const targets = text.children;
            assert(targets[0] == 'color ');
            assert(targets[1].tag == 'span');
            assert(targets[1].attrs.class == 'color6');
            assert(targets[1].children[0] == 'yellow text');
            assert(targets[2] == ' test 2');
          });
        });
      });
    });
  });
});
