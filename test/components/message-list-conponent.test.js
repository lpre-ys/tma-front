import assert from 'power-assert';
import sinon from 'sinon';
import mq from 'mithril-query';
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
        const scenario = {
          list: [],
          parseError: () => {}
        };
        zoom = {zoomLevel: () => {}};
        const vm = {scenario, zoom};
        ctrl = {vm};
      });
      it('zoomLevelに応じたクラスが設定される事', () => {
        sinon.stub(zoom, 'zoomLevel').returns(3);
        const ret = messageListComponent.view(ctrl);
        const $ret = mq(ret);
        assert($ret.has('#messageList.zoom3x'));
      });
    });
    describe('.messageWindow list', () => {
      const zoom = {zoomLevel: () => {}};
      const scenario = {
        list: [],
        parseError: () => {}
      };
      it('listが空の場合、空配列であること', () => {
        const vm = {scenario, zoom};
        const ctrl = {vm};
        const $ret = mq(messageListComponent.view(ctrl));
        assert($ret.first('#messageList').children.length == 0);
      });
      describe('comment', () => {
        it('コメントが有る場合、配列で帰ってくる事', () => {

        });
      });
    });
  });
});
