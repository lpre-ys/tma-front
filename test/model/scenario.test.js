import { describe, it, expect, beforeEach, vi } from 'vitest';
import Scenario from '../../js/model/scenario';
import Block from '../../js/model/block';
import Window from '../../js/model/window';

describe('Scenario model', () => {
  describe('constructor', () => {
    it('引数なしで初期化', () => {
      const s = new Scenario();
      expect(s.scenarioText).toBe('');
      expect(s.tkScript).toBe('');
      expect(s.jsScript).toBe('');
      expect(s.list).toEqual([]);
      expect(s.parseError).toBe('');
    });

    it('scenarioText を初期値で設定', () => {
      const s = new Scenario({ scenarioText: 'test text' });
      expect(s.scenarioText).toBe('test text');
    });
  });

  describe('parse', () => {
    let scenario;

    beforeEach(() => {
      scenario = new Scenario({ scenarioText: 'test message' });
    });

    it('parser が false の場合は何もしない', () => {
      scenario.parse(false);
      expect(scenario.tkScript).toBe('');
      expect(scenario.list).toEqual([]);
    });

    it('parser が null の場合は何もしない', () => {
      scenario.parse(null);
      expect(scenario.tkScript).toBe('');
      expect(scenario.list).toEqual([]);
    });

    it('parse が呼ばれると tkScript が設定される', () => {
      const parser = {
        parse: vi.fn().mockReturnValue({ child: [] }),
        serialize: vi.fn().mockReturnValue('serialized')
      };
      scenario.parse(parser);
      expect(scenario.tkScript).toBe('Note("dummy note")\nserialized');
    });

    it('tkScript は Note("dummy note") + serialize() の結果', () => {
      const parser = {
        parse: vi.fn().mockReturnValue({ child: [] }),
        serialize: vi.fn()
          .mockReturnValueOnce('tkcode output')  // 1回目 (tkScript用)
          .mockReturnValueOnce('js output')       // 2回目 (jsScript用)
      };
      scenario.parse(parser);
      expect(scenario.tkScript).toBe('Note("dummy note")\ntkcode output');
      expect(scenario.jsScript).toBe('js output');
    });

    it('成功時は parseError が空文字', () => {
      const parser = {
        parse: vi.fn().mockReturnValue({ child: [] }),
        serialize: vi.fn().mockReturnValue('')
      };
      scenario.parse(parser);
      expect(scenario.parseError).toBe('');
    });

    it('パース失敗時は parseError にエラーメッセージが入る', () => {
      const parser = {
        parse: vi.fn().mockImplementation(() => {
          throw new Error('パースエラー');
        }),
        serialize: vi.fn()
      };
      scenario.parse(parser);
      expect(scenario.parseError).toBe('パースエラー');
    });

    it('パース失敗時は list が空になる', () => {
      const parser = {
        parse: vi.fn().mockImplementation(() => {
          throw new Error('エラー');
        }),
        serialize: vi.fn()
      };
      scenario.parse(parser);
      expect(scenario.list).toEqual([]);
    });

    describe('フラットなメッセージ（ブロックなし）', () => {
      it('1ウィンドウが生成される', () => {
        const parser = {
          parse: vi.fn().mockReturnValue({
            child: [[{
              face: false,
              se: null,
              messageList: [{ line: ['message'] }]
            }]]
          }),
          serialize: vi.fn().mockReturnValue('')
        };
        scenario.parse(parser);
        expect(scenario.list.length).toBe(1);
        expect(scenario.list[0]).toBeInstanceOf(Window);
      });

      it('2ウィンドウが生成される', () => {
        const parser = {
          parse: vi.fn().mockReturnValue({
            child: [[{
              face: false,
              se: null,
              messageList: [
                { line: ['1st message'] },
                { line: ['2nd message'] }
              ]
            }]]
          }),
          serialize: vi.fn().mockReturnValue('')
        };
        scenario.parse(parser);
        expect(scenario.list.length).toBe(2);
        expect(scenario.list[0].line()[0].raw).toBe('1st message');
        expect(scenario.list[1].line()[0].raw).toBe('2nd message');
      });
    });

    describe('シナリオブロック', () => {
      it('1ブロックが生成される', () => {
        const parser = {
          parse: vi.fn().mockReturnValue({
            child: [{
              label: 'ラベル1',
              no: 1,
              child: [[{
                face: false,
                se: null,
                messageList: [{ line: ['message'] }]
              }]]
            }]
          }),
          serialize: vi.fn().mockReturnValue('')
        };
        scenario.parse(parser);
        expect(scenario.list.length).toBe(1);
        expect(scenario.list[0]).toBeInstanceOf(Block);
        expect(scenario.list[0].type).toBe('block');
        expect(scenario.list[0].label).toBe('ラベル1');
        expect(scenario.list[0].key).toBe('1:1');
        expect(scenario.list[0].child.length).toBe(1);
        expect(scenario.list[0].child[0]).toBeInstanceOf(Window);
      });

      it('2ブロックが生成される', () => {
        const parser = {
          parse: vi.fn().mockReturnValue({
            child: [
              { label: 'block1', no: 1, child: [[{ face: false, se: null, messageList: [{ line: ['m'] }] }]] },
              { label: 'block2', no: 2, child: [[{ face: false, se: null, messageList: [{ line: ['m'] }] }]] }
            ]
          }),
          serialize: vi.fn().mockReturnValue('')
        };
        scenario.parse(parser);
        expect(scenario.list.length).toBe(2);
        expect(scenario.list[0].label).toBe('block1');
        expect(scenario.list[0].key).toBe('1:1');
        expect(scenario.list[1].label).toBe('block2');
        expect(scenario.list[1].key).toBe('1:2');
      });

      it('ネストブロック', () => {
        const parser = {
          parse: vi.fn().mockReturnValue({
            child: [{
              label: 'parent',
              no: 1,
              child: [{
                label: 'child',
                no: 1,
                child: [[{ face: false, se: null, messageList: [{ line: ['m'] }] }]]
              }]
            }]
          }),
          serialize: vi.fn().mockReturnValue('')
        };
        scenario.parse(parser);
        expect(scenario.list.length).toBe(1);
        expect(scenario.list[0].label).toBe('parent');
        expect(scenario.list[0].key).toBe('1:1');
        expect(scenario.list[0].child.length).toBe(1);
        const child = scenario.list[0].child[0];
        expect(child).toBeInstanceOf(Block);
        expect(child.label).toBe('child');
        expect(child.key).toBe('2:1');
        expect(child.child.length).toBe(1);
        expect(child.child[0]).toBeInstanceOf(Window);
      });
    });

    it('scenarioText は parse で変更されない', () => {
      const parser = {
        parse: vi.fn().mockReturnValue({ child: [] }),
        serialize: vi.fn().mockReturnValue('')
      };
      scenario.parse(parser);
      expect(scenario.scenarioText).toBe('test message');
    });
  });
});
