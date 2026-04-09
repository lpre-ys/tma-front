import { describe, it, expect, beforeEach } from 'vitest';
import Window from '../../js/model/window';
import Line from '../../js/model/line';

describe('Window model', () => {
  describe('constructor', () => {
    it('デフォルトで line() が空配列', () => {
      const win = new Window();
      expect(win.line()).toEqual([]);
    });

    it('デフォルトで comments が空配列', () => {
      const win = new Window();
      expect(win.comments).toEqual([]);
    });

    it('デフォルトで face が false', () => {
      const win = new Window();
      expect(win.face).toBe(false);
    });

    it('デフォルトで iconStatus が false', () => {
      const win = new Window();
      expect(win.iconStatus).toBe(false);
    });

    it('message オブジェクトを設定できる', () => {
      const win = new Window({
        message: {
          line: ['line1', 'line2'],
          comments: [1, 2, 3]
        }
      });
      expect(win.line().length).toBe(2);
      expect(win.comments).toEqual([1, 2, 3]);
    });

    it('line の各要素が Line インスタンス', () => {
      const win = new Window({ message: { line: ['a', 'b'] } });
      expect(win.line()[0]).toBeInstanceOf(Line);
      expect(win.line()[1]).toBeInstanceOf(Line);
    });

    it('face 指定で先頭に face.name が追加される', () => {
      const win = new Window({
        message: { line: ['line1', 'line2'] },
        face: { name: 'face_name' }
      });
      expect(win.line().length).toBe(3);
      expect(win.line()[0].raw).toBe('face_name');
      expect(win.line()[1].raw).toBe('line1');
      expect(win.line()[2].raw).toBe('line2');
    });

    it('face の情報が保存される', () => {
      const face = { name: 'face_name' };
      const win = new Window({ message: { line: [] }, face });
      expect(win.face).toBe(face);
    });
  });

  describe('line setter', () => {
    let win;
    beforeEach(() => {
      win = new Window();
    });

    it('文字列を渡した場合、長さ1の配列として扱う', () => {
      win.line('test line');
      expect(win.line().length).toBe(1);
      expect(win.line()[0].raw).toBe('test line');
    });

    it('配列で渡した場合、そのまま扱う', () => {
      win.line(['line1', 'line2']);
      expect(win.line().length).toBe(2);
      expect(win.line()[0].raw).toBe('line1');
      expect(win.line()[1].raw).toBe('line2');
    });

    it('空文字でも Line インスタンスが作られる', () => {
      win.line('');
      expect(win.line().length).toBe(1);
      expect(win.line()[0].raw).toBe('');
    });

    it('タグが完結している場合、そのまま設定する', () => {
      win.line('test <red>red text</red> end');
      expect(win.line()[0].raw).toBe('test <red>red text</red> end');
    });

    it('face 設定がある場合、先頭に face.name を追加', () => {
      win.face = { name: 'face_line' };
      win.line('single message');
      expect(win.line().length).toBe(2);
      expect(win.line()[0].raw).toBe('face_line');
      expect(win.line()[1].raw).toBe('single message');
    });
  });

  describe('タグが複数行にまたがる場合（継続タグ補完）', () => {
    let win;
    beforeEach(() => {
      win = new Window();
    });

    it('開始行に終了タグを補う', () => {
      win.line(['normal <red>red text', 'red text</red> normal']);
      expect(win.line()[0].raw).toBe('normal <red>red text</red>');
    });

    it('終了行に開始タグを補う', () => {
      win.line(['normal <red>red text', 'red text</red> normal']);
      expect(win.line()[1].raw).toBe('<red>red text</red> normal');
    });

    it('タグが完結した後の行は無変換', () => {
      win.line(['normal <red>red text', 'red text</red> normal', 'simple text']);
      expect(win.line()[2].raw).toBe('simple text');
    });

    it('タグが完結していない行が連続する場合', () => {
      win.line(['normal <red>red text', 'simple text', 'red text</red> normal']);
      expect(win.line()[1].raw).toBe('<red>simple text</red>');
    });

    it('ネストタグ：タグの順番が正しい', () => {
      win.line([
        'normal <red>red text<blue>blue text',
        'blue text</blue>red text</red> normal'
      ]);
      expect(win.line()[0].raw).toBe('normal <red>red text<blue>blue text</blue></red>');
      expect(win.line()[1].raw).toBe('<red><blue>blue text</blue>red text</red> normal');
    });

    it('複雑なネスト：タグの順番が正しい', () => {
      win.line([
        'normal <red>red text',
        '<blue>blue text',
        'blue text</blue>red text',
        'red text</red> normal'
      ]);
      expect(win.line()[0].raw).toBe('normal <red>red text</red>');
      expect(win.line()[1].raw).toBe('<red><blue>blue text</blue></red>');
      expect(win.line()[2].raw).toBe('<red><blue>blue text</blue>red text</red>');
      expect(win.line()[3].raw).toBe('<red>red text</red> normal');
    });
  });

  describe('line getter', () => {
    it('引数なしで現在の _line を返す', () => {
      const win = new Window();
      win.line('test line');
      expect(win.line()[0]).toBeInstanceOf(Line);
      expect(win.line()[0].raw).toBe('test line');
    });
  });

  describe('toggleIcon', () => {
    it('false → true に切り替わる', () => {
      const win = new Window();
      win.iconStatus = false;
      win.toggleIcon();
      expect(win.iconStatus).toBe(true);
    });

    it('true → false に切り替わる', () => {
      const win = new Window();
      win.iconStatus = true;
      win.toggleIcon();
      expect(win.iconStatus).toBe(false);
    });
  });
});
