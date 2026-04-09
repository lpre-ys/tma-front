import { describe, it, expect } from 'vitest';
import Line from '../../js/model/line';

describe('Line model', () => {
  describe('constructor', () => {
    it('data.line で raw が初期化', () => {
      const line = new Line({ line: 'test line' });
      expect(line.raw).toBe('test line');
    });

    it('引数なしで raw が空文字', () => {
      const line = new Line();
      expect(line.raw).toBe('');
    });

    it('data なしでも動作する', () => {
      const line = new Line({});
      expect(line.raw).toBe('');
    });
  });

  describe('preEscape', () => {
    it('\\\\ を #yen-mark# に変換', () => {
      expect(Line.preEscape('\\\\')).toBe('#yen-mark#');
    });

    it('\\< を #lt-mark# に変換', () => {
      expect(Line.preEscape('\\<')).toBe('#lt-mark#');
    });

    it('単独の \\ を #escape-mark# に変換', () => {
      expect(Line.preEscape('\\a')).toBe('#escape-mark#a');
    });

    it('\\\\ が先に処理されるため \\\\< は #yen-mark#< になる', () => {
      // '\\\\' = JS文字列で2つのバックスラッシュ
      // preEscape: まず '\\\\' → '#yen-mark#', その後 '<' はそのまま
      expect(Line.preEscape('\\\\<')).toBe('#yen-mark#<');
    });

    it('変換対象がない場合そのまま', () => {
      expect(Line.preEscape('normal text')).toBe('normal text');
    });
  });

  describe('postEscape', () => {
    it('#yen-mark# を \\ に変換', () => {
      expect(Line.postEscape('#yen-mark#')).toBe('\\');
    });

    it('#lt-mark# を < に変換', () => {
      expect(Line.postEscape('#lt-mark#')).toBe('<');
    });

    it('#escape-mark# を除去（空文字に置換）', () => {
      expect(Line.postEscape('#escape-mark#')).toBe('');
    });

    it('#escape-mark# に挟まれた文字はそのまま残る', () => {
      expect(Line.postEscape('a#escape-mark#b')).toBe('ab');
    });

    it('変換対象がない場合そのまま', () => {
      expect(Line.postEscape('normal text')).toBe('normal text');
    });
  });

  describe('domToTree', () => {
    it('テキストのみ → 文字列の配列', () => {
      const parser = new DOMParser();
      const dom = parser.parseFromString('hello', 'text/html');
      const ret = Line.domToTree(dom.body);
      expect(ret).toEqual(['hello']);
    });

    it('空文字 → 空配列', () => {
      const parser = new DOMParser();
      const dom = parser.parseFromString('', 'text/html');
      const ret = Line.domToTree(dom.body);
      expect(ret).toEqual([]);
    });

    it('タグあり → {tag, body} の形', () => {
      const parser = new DOMParser();
      const dom = parser.parseFromString('start<child>child text</child>end', 'text/html');
      const ret = Line.domToTree(dom.body);
      expect(ret.length).toBe(3);
      expect(ret[0]).toBe('start');
      expect(ret[1].tag).toBe('child');
      expect(ret[1].body).toEqual(['child text']);
      expect(ret[2]).toBe('end');
    });

    it('制御タグ（wait）→ control にまとまる', () => {
      const parser = new DOMParser();
      const dom = parser.parseFromString('before<wait></wait>after', 'text/html');
      const ret = Line.domToTree(dom.body);
      expect(ret.length).toBe(3);
      expect(ret[0]).toBe('before');
      expect(ret[1].tag).toBe('control');
      expect(ret[1].body[0].tag).toBe('wait');
      expect(ret[1].body[0].body).toBe('w');
      expect(ret[2]).toBe('after');
    });

    it('制御タグ（stop）の body は s', () => {
      const parser = new DOMParser();
      const dom = parser.parseFromString('<stop></stop>', 'text/html');
      const ret = Line.domToTree(dom.body);
      expect(ret[0].body[0].tag).toBe('stop');
      expect(ret[0].body[0].body).toBe('s');
    });

    it('制御タグ（q_wait）の body は q', () => {
      const parser = new DOMParser();
      const dom = parser.parseFromString('<q_wait></q_wait>', 'text/html');
      const ret = Line.domToTree(dom.body);
      expect(ret[0].body[0].tag).toBe('q_wait');
      expect(ret[0].body[0].body).toBe('q');
    });

    it('連続する制御タグ → 1つの control にまとまる', () => {
      const parser = new DOMParser();
      const dom = parser.parseFromString('<wait></wait><stop></stop><q_wait></q_wait>', 'text/html');
      const ret = Line.domToTree(dom.body);
      expect(ret.length).toBe(1);
      expect(ret[0].tag).toBe('control');
      expect(ret[0].body.length).toBe(3);
      expect(ret[0].body[0].tag).toBe('wait');
      expect(ret[0].body[1].tag).toBe('stop');
      expect(ret[0].body[2].tag).toBe('q_wait');
    });

    it('テキストで区切られた制御タグ → 別々の control', () => {
      const parser = new DOMParser();
      const dom = parser.parseFromString('<wait></wait>text<stop></stop>', 'text/html');
      const ret = Line.domToTree(dom.body);
      expect(ret.length).toBe(3);
      expect(ret[0].tag).toBe('control');
      expect(ret[0].body[0].tag).toBe('wait');
      expect(ret[1]).toBe('text');
      expect(ret[2].tag).toBe('control');
      expect(ret[2].body[0].tag).toBe('stop');
    });

    it('末尾の制御タグも control になる', () => {
      const parser = new DOMParser();
      const dom = parser.parseFromString('text<stop></stop>', 'text/html');
      const ret = Line.domToTree(dom.body);
      expect(ret.length).toBe(2);
      expect(ret[0]).toBe('text');
      expect(ret[1].tag).toBe('control');
    });

    it('通常タグ（red など）→ {tag: "red", body: [...]}', () => {
      const parser = new DOMParser();
      const dom = parser.parseFromString('test <red>red text</red> end', 'text/html');
      const ret = Line.domToTree(dom.body);
      expect(ret.length).toBe(3);
      expect(ret[0]).toBe('test ');
      expect(ret[1].tag).toBe('red');
      expect(ret[1].body).toEqual(['red text']);
      expect(ret[2]).toBe(' end');
    });
  });

  describe('line property', () => {
    it('空文字 → 空配列', () => {
      const line = new Line({ line: '' });
      expect(line.line()).toEqual([]);
    });

    it('テキストのみ → [テキスト]', () => {
      const line = new Line({ line: 'simple' });
      expect(line.line()[0]).toBe('simple');
    });

    it('setter は無視される（値が変わらない）', () => {
      const line = new Line({ line: 'original' });
      line.line('new value');
      expect(line.line()[0]).toBe('original');
    });

    it('キャッシュされる（2回目は同じ参照）', () => {
      const line = new Line({ line: 'test' });
      const first = line.line();
      const second = line.line();
      expect(first).toBe(second);
    });

    it('制御タグを含む行', () => {
      const line = new Line({ line: 'test<wait></wait>end' });
      const ret = line.line();
      expect(ret.length).toBe(3);
      expect(ret[0]).toBe('test');
      expect(ret[1].tag).toBe('control');
      expect(ret[2]).toBe('end');
    });
  });

  describe('text property', () => {
    it('タグなし → そのまま', () => {
      const line = new Line({ line: 'plain text' });
      expect(line.text()).toBe('plain text');
    });

    it('タグあり → タグを除去', () => {
      const line = new Line({ line: 'test <red>red</red> end' });
      expect(line.text()).toBe('test red end');
    });

    it('空文字 → 空文字', () => {
      const line = new Line({ line: '' });
      expect(line.text()).toBe('');
    });

    it('setter は無視される', () => {
      const line = new Line({ line: 'original' });
      line.text('new value');
      expect(line.text()).toBe('original');
    });
  });
});
