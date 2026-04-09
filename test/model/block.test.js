import { describe, it, expect } from 'vitest';
import Block from '../../js/model/block';

describe('Block model', () => {
  describe('constructor', () => {
    it('type が block であること', () => {
      const block = new Block({ no: 1 }, 1);
      expect(block.type).toBe('block');
    });

    it('key が varNo:no の形式であること', () => {
      const block = new Block({ no: 3 }, 2);
      expect(block.key).toBe('2:3');
    });

    it('varNo が設定されること', () => {
      const block = new Block({ no: 1 }, 5);
      expect(block.varNo).toBe(5);
    });

    it('label が設定されること', () => {
      const block = new Block({ no: 1, label: 'テストラベル' }, 1);
      expect(block.label).toBe('テストラベル');
    });

    it('label が未設定の場合、空文字', () => {
      const block = new Block({ no: 1 }, 1);
      expect(block.label).toBe('');
    });

    it('visible が true で初期化', () => {
      const block = new Block({ no: 1 }, 1);
      expect(block.visible).toBe(true);
    });

    it('child が空配列で初期化', () => {
      const block = new Block({ no: 1 }, 1);
      expect(block.child).toEqual([]);
    });
  });
});
