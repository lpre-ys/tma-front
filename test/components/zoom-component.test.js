import assert from 'power-assert';
import zoomComponent from '../../js/components/zoom-component';

describe('zoomComponent', () => {
  it('controller', () => {
    const vmObj = 'vm';
    const ctrl = new zoomComponent.controller({
      vm: vmObj
    });

    assert(ctrl.vm == 'vm');
  });
  describe('view', () => {
    it('build model', () => {
      const ctrlMock = {
        vm: {
          zoom: {
            zoomLevel: () => { return 2; }
          }
        }
      };

      const ret = zoomComponent.view(ctrlMock);
      assert(ret.tag == 'div');
      assert(ret.attrs.className == 'zoomBox');
      const select = ret.children[1];
      assert(select.tag == 'select');
      assert(select.attrs.value == 2);
      const options = select.children;
      assert(options.length == 2);
      assert(options[0].tag == 'option');
      assert(options[0].attrs.value == 1);
      assert(options[1].tag == 'option');
      assert(options[1].attrs.value == 2);
    });
  });
});
