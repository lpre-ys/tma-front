import assert from 'power-assert';
import sinon from 'sinon';
import messageListComponent from '../../js/components/message-list-component';

describe('messageListComponent', () => {
  describe('controller', () => {
    it('view modelが設定されること', () => {
      const vmObj = 'vm';
      const ctrl = new messageListComponent.controller({
        vm: vmObj
      });
      assert(ctrl.vm == 'vm');
    });
  });

  describe('view', () => {
    describe('root', () => {
      let ctrl, zoom;
      beforeEach(() => {
        const scenario = {windowList: []};
        zoom = {zoomLevel: () => {}};
        const vm = {scenario, zoom};
        ctrl = {vm};
      });
      it('root要素がdiv#messageListである事', () => {
        const ret = messageListComponent.view(ctrl);
        assert(ret.tag == 'div');
        assert(ret.attrs.id = 'messageList');
      });
      it('zoomLevelに応じたクラスが設定される事', () => {
        sinon.stub(zoom, 'zoomLevel').returns(3);
        const ret = messageListComponent.view(ctrl);
        assert(ret.attrs.class.includes('zoom3x'));
      });
    });
    describe('.messageWindow list', () => {
      const zoom = {zoomLevel: () => {}};
      it('windowListが空の場合、空配列であること', () => {
        const scenario = {windowList: []};
        const vm = {scenario, zoom};
        const ctrl = {vm};
        const ret = messageListComponent.view(ctrl);
        assert(ret.children.length == 0);
      });
      it('windowListの件数分、div.messageWindowが作られる事', () => {
        const scenario = {windowList: [
          {comments: [], line: () => {}, toggleIcon: () => {}},
          {comments: [], line: () => {}, toggleIcon: () => {}}
        ]};
        const vm = {scenario, zoom};
        const ctrl = {vm};
        const ret = messageListComponent.view(ctrl);
        assert(ret.children.length == 2);
        assert(ret.children[0].tag == 'div');
        assert(ret.children[0].attrs.class == 'messageWindow');
        assert(ret.children[1].tag == 'div');
        assert(ret.children[1].attrs.class == 'messageWindow');
      });
      describe('showIcon class', () => {
        let ctrl;
        beforeEach(() => {
          const scenario = {windowList: [
            {comments: [], line: () => {}, toggleIcon: () => {}}
          ]};
          const vm = {scenario, zoom};
          ctrl = {vm};
        });
        it('iconStatusがtrueの場合、.messageWindowにshowIconクラスが付く事', () => {
          ctrl.vm.scenario.windowList[0].iconStatus = true;
          const ret = messageListComponent.view(ctrl);
          assert(ret.children[0].attrs.class.includes('showIcon'));
        });
        it('iconStatusがfalseの場合、.messageWindowにshowIconクラスが付かない事', () => {
          ctrl.vm.scenario.windowList[0].iconStatus = false;
          const ret = messageListComponent.view(ctrl);
          assert(!ret.children[0].attrs.class.includes('showIcon'));
        });
      });
      describe('comment', () => {
        it('コメントが有る場合、配列で帰ってくる事', () => {
          
        });
      });
    });
  });
});
