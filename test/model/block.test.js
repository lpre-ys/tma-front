import assert from 'power-assert';
import Block from '../../js/model/block';

describe('block model', () => {
  describe('constructor', () => {
    it('typeがblockであること', () => {
      const block = new Block({no: 1});
      assert(block.type === 'block');
    });
  });
});
