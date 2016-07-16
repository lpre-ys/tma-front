import assert from 'power-assert';
import sinon from 'sinon';
import m from 'mithril';
import loadComponent from '../../js/components/load-component';
import faceImgComponent from '../../js/components/load/face-img-component';
import systemImgComponent from '../../js/components/load/system-img-component';

describe('loadComponent', () => {
  describe('controller', () => {
    it('test', () => {
      const vmMock = 'vmObj';
      const ctrl = new loadComponent.controller({vm: vmMock});

      assert(ctrl.vm == 'vmObj');
      assert(ctrl.buttonStatus() === false);
      assert(ctrl.tColor === false);
      assert(typeof ctrl.noop == 'function');

    });
  });
  describe('view', () => {
    // m.componentのスタブ
    const mcStub = sinon.stub(m, 'component');
    mcStub.withArgs(faceImgComponent).returns('face-img');
    mcStub.withArgs(systemImgComponent).returns('system-img');

    // view modelのモック
    const vmMock = {
      loadStatus: false,
      dropFiles: () => {}
    };

    describe('load status is false', () => {
      const ctrl = new loadComponent.controller({vm: vmMock});
      const view = loadComponent.view(ctrl);
      it('root tag is div.loadComponent', () => {
        assert(view.tag == 'div');
        assert(view.attrs.className == 'loadComponent');
      });
      it('button.checkConfig class is disable', () => {
        const target = view.children[1];
        assert(target.tag == 'button');
        assert(target.attrs.class.includes('disable'));
      });
      it('.loadConfig class is enable', () => {
        const target = view.children[3];
        assert(target.attrs.class.includes('enable'));
      });
      it('m.component call 0 time', () => {
        assert(mcStub.callCount, 0);
      });
    });
    describe('load status is true', () => {
      vmMock.loadStatus = true;
      const ctrl = new loadComponent.controller({vm: vmMock});
      const view = loadComponent.view(ctrl);
      it('root tag is div.loadComponent', () => {
        assert(view.tag == 'div');
        assert(view.attrs.className == 'loadComponent');
      });
      it('button.checkConfig class is enable', () => {
        const target = view.children[1];
        assert(target.tag == 'button');
        assert(target.attrs.class.includes('enable'));
      });
      it('.loadConfig class is disable', () => {
        const target = view.children[3];
        assert(target.attrs.class.includes('disable'));
      });
      it('m.component call 2 time', () => {
        assert(mcStub.callCount, 2);
      });
    });
    describe('buttonStatus is not on', () => {
      const ctrl = new loadComponent.controller({vm: vmMock});
      const view = loadComponent.view(ctrl);
      it('button.checkConfig data-button-status is on', () => {
        const target = view.children[1];
        assert(target.attrs['data-button-status'] == 'on');
      });
      it('button.checkConfig innerText is 設定の表示', () => {
        const target = view.children[1];
        assert(target.children[0] == '設定の表示');
      });
      it('.settingList class is disable', () => {
        const target = view.children[2];
        assert(target.attrs.class.includes('disable'));
      });
    });
    describe('buttonStatus is on', () => {
      const ctrl = new loadComponent.controller({vm: vmMock});
      ctrl.buttonStatus('on');
      const view = loadComponent.view(ctrl);
      it('button.checkConfig data-button-status is off', () => {
        const target = view.children[1];
        assert(target.attrs['data-button-status'] == 'off');
      });
      it('button.checkConfig innerText is 設定の非表示', () => {
        const target = view.children[1];
        assert(target.children[0] == '設定の非表示');
      });
      it('.settingList class is enable', () => {
        const target = view.children[2];
        assert(target.attrs.class.includes('enable'));
      });
    });
  });
});
