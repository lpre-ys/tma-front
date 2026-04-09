import { describe, it, expect, beforeEach } from 'vitest';
import YamlGenerator from '../../js/model/yaml-generator';

describe('YamlGenerator model', () => {
  let gen;

  beforeEach(() => {
    gen = new YamlGenerator();
  });

  describe('constructor', () => {
    it('name が空文字で初期化', () => {
      expect(gen.name).toBe('');
    });

    it('filename が空文字で初期化', () => {
      expect(gen.filename).toBe('');
    });

    it('prefix が空文字で初期化', () => {
      expect(gen.prefix).toBe('');
    });

    it('length が 16 で初期化', () => {
      expect(gen.length).toBe(16);
    });

    it('初期値を data で上書きできる', () => {
      const g = new YamlGenerator({ name: 'hero', filename: 'hero.png', prefix: 'p', length: 8 });
      expect(g.name).toBe('hero');
      expect(g.filename).toBe('hero.png');
      expect(g.prefix).toBe('p');
      expect(g.length).toBe(8);
    });
  });

  describe('yaml', () => {
    it('name が空のとき空文字を返す', () => {
      gen.filename = 'test.png';
      expect(gen.yaml()).toBe('');
    });

    it('filename が空のとき空文字を返す', () => {
      gen.name = 'testname';
      expect(gen.yaml()).toBe('');
    });

    it('length が 0 のとき空文字を返す', () => {
      gen.name = 'testname';
      gen.filename = 'test.png';
      gen.length = 0;
      expect(gen.yaml()).toBe('');
    });

    it('正しい YAML が生成される', () => {
      gen.name = 'testname';
      gen.filename = 'testfilename';
      gen.prefix = 'testprefix';
      gen.length = 3;

      const expected =
        'person:\n' +
        '  testname:\n' +
        '    faces:\n' +
        '      testprefix1:\n' +
        '        filename: testfilename\n' +
        '        number: 0\n' +
        '      testprefix2:\n' +
        '        filename: testfilename\n' +
        '        number: 1\n' +
        '      testprefix3:\n' +
        '        filename: testfilename\n' +
        '        number: 2\n';

      expect(gen.yaml()).toBe(expected);
    });

    it('prefix なしでも生成される（数字のみのキー）', () => {
      gen.name = 'n';
      gen.filename = 'f';
      gen.length = 2;

      const yaml = gen.yaml();
      expect(yaml).toContain('      1:\n');
      expect(yaml).toContain('      2:\n');
    });

    it('length に応じたエントリ数になる', () => {
      gen.name = 'n';
      gen.filename = 'f';
      gen.prefix = 'p';
      gen.length = 5;

      const yaml = gen.yaml();
      const matches = yaml.match(/number:/g);
      expect(matches).toHaveLength(5);
    });
  });
});
