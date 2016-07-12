import assert from 'power-assert';
import systemImgComponent from '../../../js/components/load/system-img-component';

describe('systemImgComponent', () => {
  describe('controller', () => {
    it('set vm', () => {
      const vmMock = 'vmObj';
      const ctrl = new systemImgComponent.controller({vm: vmMock});

      assert(ctrl.vm == 'vmObj');
    });
  });
  describe('view', () => {
    describe('config not exist', () => {
      let view;
      beforeEach(() => {
        const systemImgMock = {
          dataUrl: 'test-data-url',
          tColorCss: 'test-t-color-css',
          messageWindow: 'test-message-window'
        };
        const vmMock = {
          systemImg: systemImgMock,
          config: false
        };
        view = systemImgComponent.view({vm: vmMock});
      });
      it('root tag is div.systemImg', () => {
        assert(view.tag == 'div');
        assert(view.attrs.className == 'systemImg');
      });
      it('.systemImg > .systemItems > img src is systemImg.dataUrl', () => {
        const target = view.children[1].children[0];
        assert(target.tag == 'img');
        assert(target.attrs.src == 'test-data-url');
      });
      it('.systemImg > .systemItems > .tColor is show transparent color', () => {
        const target = view.children[1].children[1];
        assert(target.tag == 'div');
        assert(target.attrs.className == 'tColor');
        const span = target.children[2];
        assert(span.tag == 'span');
        assert(span.attrs.style.color == 'test-t-color-css');
        assert(span.children[0] == '■test-t-color-css');
      });
      it('.systemImg > div(window) is show message window img', () => {
        const target = view.children[1].children[2];
        assert(target.tag == 'div');
        const img = target.children[2];
        assert(img.tag == 'img');
        assert(img.attrs.src == 'test-message-window');
      });
      it('.colorTagList', () => {
        const target = view.children[3];
        assert(target.tag == 'div');
        assert(target.attrs.className == 'colorTagList messageWindow');
      });
      it('colorTagList > ul.message > li length 0', () => {
        const target = view.children[3].children[0];
        assert(target.tag == 'ul');
        assert(target.attrs.className == 'message');
        const lis = target.children;
        assert(lis.length == 0);
      });
    });
    describe('config exist', () => {
      let view;
      beforeEach(() => {
        const systemImgMock = {
          dataUrl: 'test-data-url',
          tColorCss: 'test-t-color-css',
          messageWindow: 'test-message-window'
        };
        const configMock = {
          colors: {
            test1 : 3,
            test2 : 6,
            test3 : 8
          }
        };
        const vmMock = {
          systemImg: systemImgMock,
          config: configMock
        };
        view = systemImgComponent.view({vm: vmMock});
      });
      it('.colorTagList', () => {
        const target = view.children[3];
        assert(target.tag == 'div');
        assert(target.attrs.className == 'colorTagList messageWindow');
      });
      it('.colorTagList > ul.message > li length 3', () => {
        const target = view.children[3].children[0];
        assert(target.tag == 'ul');
        assert(target.attrs.className == 'message');
        const lis = target.children;
        assert(lis.length == 3);
      });
      it('.colortagList > ul.message > li is colorTag detail', () => {
        const target = view.children[3].children[0].children[0];
        assert(target.tag == 'li');
        assert(target.attrs.className == 'line');
        assert(target.children[0].tag == 'p');
        assert(target.children[0].attrs.className == 'shadow');
        assert(target.children[0].children[0] == '3: <test1> ');
        assert(target.children[1].tag == 'p');
        assert(target.children[1].attrs.className == 'text');
        assert(target.children[1].children[0].tag == 'span');
        assert(target.children[1].children[0].attrs.class == 'color3');
        assert(target.children[1].children[0].children[0] == '3: <test1> ');
      });
    });
  });
});
