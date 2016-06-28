import assert from 'power-assert';
import Window from '../../js/model/window';
import Line from '../../js/model/line';

describe('Window model', () => {
  describe('constructor', () => {
    it('default', () => {
      const obj = new Window();
      assert(obj.line().length == 0);
      assert(obj.comments.length == 0);
      assert(obj.face == false);
      assert(obj.iconStatus == false);
    });
    it('set message obj', () => {
      const obj = new Window({
        message: {
          line: ['1', '2'],
          comments: [3, 4, 5]
        },
        face: {name: 'face test'}
      });
      assert(obj.line()[0] instanceof Line);
      assert(obj.line()[1] instanceof Line);
      assert(obj.line()[2] instanceof Line);
      assert(obj.line()[0].raw() == 'face test');
      assert(obj.line()[1].raw() == '1');
      assert(obj.line()[2].raw() == '2');
      assert(obj.comments[0] == 3);
      assert(obj.comments[1] == 4);
      assert(obj.comments[2] == 5);
      assert(obj.face.name == 'face test');
      assert(obj.iconStatus == false);
    });
  });
  describe('line parameter', () => {
    describe('getter', () => {
      it('引数が無い場合、_lineを返す', () => {
        const obj = new Window();
        obj._line ='test line';
        assert(obj.line() == 'test line');
      });
    });
    describe('setter', () => {
      let obj;
      beforeEach(() => {
        obj = new Window();
      });
      it('文字列を渡した場合、長さ1の配列として扱う', () => {
        obj.line('test line 1');
        assert(Array.isArray(obj.line()));
        assert(obj.line().length == 1);
        assert(obj.line()[0].raw() == 'test line 1');
      });
      it('配列で渡した場合、そのまま扱う', () => {
        obj.line(['test line 1', 'test line 2']);
        assert(obj.line().length == 2);
        assert(obj.line()[0].raw() == 'test line 1');
        assert(obj.line()[1].raw() == 'test line 2');
      });
      it('タグが完結している場合、そのまま設定する', () => {
        obj.line('test <red>red text</red> end');
        assert(obj.line()[0].raw() == 'test <red>red text</red> end');
      });
      it('空文字の場合、そのまま', () => {
        obj.line('');
        assert(obj.line().length == 1);
        assert(obj.line()[0].raw() == '');
      });
      it('顔設定が有る場合、最初に追加する', () => {
        obj.face = {name : 'face name text'};
        obj.line('test single line message');
        assert(obj.line().length == 2);
        assert(obj.line()[0].raw() == 'face name text');
        assert(obj.line()[1].raw() == 'test single line message');
      });
      describe('タグが複数行にまたがる場合', () => {
        it('開始行の終了タグを補う', () => {
          obj.line([
            'normal <red>red text',
            'red text</red> normal'
          ]);
          assert(obj.line()[0].raw() == 'normal <red>red text</red>');
        });
        it('終了行の開始タグを補う', () => {
          obj.line([
            'normal <red>red text',
            'red text</red> normal'
          ]);
          assert(obj.line()[1].raw() == '<red>red text</red> normal');
        });
        it('続きの行が有る場合、続きの行は無変換', () => {
          obj.line([
            'normal <red>red text',
            'red text</red> normal',
            'simple text'
          ]);
          assert(obj.line()[2].raw() == 'simple text');
        });
        it('間に通常行を挟む場合、開始・終了タグを補う', () => {
          obj.line([
            'normal <red>red text',
            'simple text',
            'red text</red> normal'
          ]);
          assert(obj.line()[1].raw() == '<red>simple text</red>');
        });
        it('ネストする場合、タグの順番が正しい事', () => {
          obj.line([
            'normal <red>red text<blue>blue text',
            'blue text</blue>red text</red> normal'
          ]);
          assert(obj.line()[0].raw() == 'normal <red>red text<blue>blue text</blue></red>');
          assert(obj.line()[1].raw() == '<red><blue>blue text</blue>red text</red> normal');
        });
        it('複雑なネストでも、タグの順番が正しい事', () => {
          obj.line([
            'normal <red>red text',
            '<blue>blue text',
            'blue text</blue>red text',
            'red text</red> normal'
          ]);
          assert(obj.line()[0].raw() == 'normal <red>red text</red>');
          assert(obj.line()[1].raw() == '<red><blue>blue text</blue></red>');
          assert(obj.line()[2].raw() == '<red><blue>blue text</blue>red text</red>');
          assert(obj.line()[3].raw() == '<red>red text</red> normal');
        });
      });
    });
  });
  describe('toggleIcon', () => {
    let obj;
    beforeEach(() => {
      obj = new Window();
    });
    it('iconStatus is true, toggle to false', () => {
      obj.iconStatus = true;
      obj.toggleIcon();
      assert(obj.iconStatus == false);
    });
    it('iconStatus is false, toggle to true', () => {
      obj.iconStatus = false;
      obj.toggleIcon();
      assert(obj.iconStatus == true);
    });
  });
});
