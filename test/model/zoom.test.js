import { describe, it, expect } from 'vitest';
import Zoom from '../../js/model/zoom';

describe('Zoom model', () => {
  describe('constructor', () => {
    it('デフォルトの zoomLevel が 1', () => {
      const zoom = new Zoom();
      expect(zoom.zoomLevel()).toBe(1);
    });

    it('zoomLevel の初期値が設定される', () => {
      const zoom = new Zoom({ zoomLevel: 2 });
      expect(zoom.zoomLevel()).toBe(2);
    });

    it('zoomLevel を setter で変更できる', () => {
      const zoom = new Zoom();
      zoom.zoomLevel(3);
      expect(zoom.zoomLevel()).toBe(3);
    });
  });

  describe('serialize', () => {
    it('デフォルト値でシリアライズ', () => {
      const zoom = new Zoom();
      expect(zoom.serialize()).toEqual({ zoomLevel: 1 });
    });

    it('設定した zoomLevel がシリアライズに反映される', () => {
      const zoom = new Zoom({ zoomLevel: 3 });
      expect(zoom.serialize()).toEqual({ zoomLevel: 3 });
    });

    it('setter 変更後もシリアライズに反映される', () => {
      const zoom = new Zoom();
      zoom.zoomLevel(4);
      expect(zoom.serialize()).toEqual({ zoomLevel: 4 });
    });
  });
});
