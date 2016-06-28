import assert from 'power-assert';
import faceImgComponent from '../../../js/components/load/face-img-component';

describe('faceImgComponent', () => {
  describe('controller', () => {
    it('set vm', () => {
      const vmMock = 'vmObj';
      const ctrl = new faceImgComponent.controller({vm: vmMock});

      assert(ctrl.vm == 'vmObj');
    });
  });
  describe('view', () => {
    let view;
    beforeEach(() => {
      const configMock = {
        faceKeyList: ['test1', 'test2']
      };
      const vmMock = {
        getFaceStyle: (faceKey) => {return `test: ${faceKey}`;},
        config: configMock
      };
      view = faceImgComponent.view({vm: vmMock});
    });
    it('root is div.faceSetting', () => {
      assert(view.tag == 'div');
      assert(view.attrs.className == 'faceSetting');
    });
    it('.faceSetting > ul.faceList', () => {
      const target = view.children[1];
      assert(target.tag = 'ul');
      assert(target.attrs.className == 'faceList');
    });
    it('.faceSetting > ul.faceList > li is face img list', () => {
      const ul = view.children[1];
      assert(ul.children.length == 2);
      const li = ul.children[0];
      assert(li.tag == 'li');
      assert(li.children[0].tag == 'p');
      assert(li.children[0].children[0] == 'test1');
      assert(li.children[1].tag == 'div');
      assert(li.children[1].attrs.className == 'faceImg');
      assert(li.children[1].attrs.style == 'test: test1');
    });
  });
});
