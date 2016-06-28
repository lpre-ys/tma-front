import assert from 'power-assert';
import Zoom from '../../js/model/zoom';

describe('Zoom model', () => {
  describe('constructor', () => {
    it('no param, zoomLevel 1', () => {
      const zoom = new Zoom();
      assert(zoom.zoomLevel() == 1);
    });
    it('set zoomLevel property', () => {
      const zoom = new Zoom({zoomLevel: 2});
      assert(zoom.zoomLevel() == 2);
    });
  });
});
