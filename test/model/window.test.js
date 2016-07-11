import assert from 'power-assert';
import Window from '../../js/model/window';

describe('Window model', () => {
  describe('constructor', () => {
    it('default', () => {
      const obj = new Window();
      assert(obj.line.length == 0);
      assert(obj.comments.length == 0);
      assert(obj.face == false);
      assert(obj.iconStatus == false);
    });
    it('set message obj', () => {
      const obj = new Window({
        message: {
          line: [1, 2],
          comments: [3, 4, 5]
        },
        face: 'face obj'
      });
      assert(obj.line[0] == 1);
      assert(obj.line[1] == 2);
      assert(obj.comments[0] == 3);
      assert(obj.comments[1] == 4);
      assert(obj.comments[2] == 5);
      assert(obj.face == 'face obj');
      assert(obj.iconStatus == false);
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
