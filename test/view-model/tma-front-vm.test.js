import { describe, it, expect, beforeEach, vi } from 'vitest';
import TmaFrontVM from '../../js/view-model/tma-front-vm';

describe('TmaFrontVM', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('constructor', () => {
    it('autosave が false で初期化', () => {
      const vm = new TmaFrontVM();
      expect(vm.autosave()).toBe(false);
    });

    it('stickyStatus が normal で初期化', () => {
      const vm = new TmaFrontVM();
      expect(vm.stickyStatus()).toBe('normal');
    });

    it('stickyCheck が false で初期化', () => {
      const vm = new TmaFrontVM();
      expect(vm.stickyCheck()).toBe(false);
    });

    it('showSe が true で初期化', () => {
      const vm = new TmaFrontVM();
      expect(vm.showSe()).toBe(true);
    });

    it('loadStatus が false で初期化', () => {
      const vm = new TmaFrontVM();
      expect(vm.loadStatus).toBe(false);
    });

    it('parser が false で初期化', () => {
      const vm = new TmaFrontVM();
      expect(vm.parser).toBe(false);
    });

    it('systemImg が false で初期化', () => {
      const vm = new TmaFrontVM();
      expect(vm.systemImg).toBe(false);
    });

    it('faceImgs が空オブジェクトで初期化', () => {
      const vm = new TmaFrontVM();
      expect(vm.faceImgs).toEqual({});
    });

    it('seAudios が空オブジェクトで初期化', () => {
      const vm = new TmaFrontVM();
      expect(vm.seAudios).toEqual({});
    });

    it('zoom が初期化される', () => {
      const vm = new TmaFrontVM();
      expect(vm.zoom.zoomLevel()).toBe(1);
    });

    it('scenario が初期化される', () => {
      const vm = new TmaFrontVM();
      expect(vm.scenario.scenarioText()).toBe('');
    });
  });

  describe('setScenarioText', () => {
    it('テキストが更新される', () => {
      const vm = new TmaFrontVM();
      vm.setScenarioText('new text');
      expect(vm.scenario.scenarioText()).toBe('new text');
    });

    it('同じテキストを設定しても変化なし', () => {
      const vm = new TmaFrontVM();
      vm.setScenarioText('text');
      vm.setScenarioText('text');
      expect(vm.scenario.scenarioText()).toBe('text');
    });

    it('テキスト変更後に parse が呼ばれる', () => {
      const vm = new TmaFrontVM();
      const parseSpy = vi.spyOn(vm, 'parse');
      vm.setScenarioText('new text');
      expect(parseSpy).toHaveBeenCalledOnce();
    });

    it('同じテキストの場合は parse が呼ばれない', () => {
      const vm = new TmaFrontVM();
      vm.setScenarioText('text');
      const parseSpy = vi.spyOn(vm, 'parse');
      vm.setScenarioText('text');
      expect(parseSpy).not.toHaveBeenCalled();
    });
  });

  describe('parse', () => {
    it('parser が false の場合、list が空のまま', () => {
      const vm = new TmaFrontVM();
      vm.parse();
      expect(vm.scenario.list).toEqual([]);
    });

    it('parser が設定されている場合、parse を呼ぶ', () => {
      const vm = new TmaFrontVM();
      vm.parser = {
        parse: vi.fn().mockReturnValue({ child: [] }),
        serialize: vi.fn().mockReturnValue('')
      };
      vm.parse();
      expect(vm.parser.parse).toHaveBeenCalledWith('');
    });
  });

  describe('toJSON', () => {
    it('必要なキーが含まれる', () => {
      const vm = new TmaFrontVM();
      const json = JSON.parse(vm.toJSON());
      expect(json).toHaveProperty('zoom');
      expect(json).toHaveProperty('stickyCheck');
      expect(json).toHaveProperty('autosave');
      expect(json).toHaveProperty('showSe');
      expect(json).toHaveProperty('scenario');
      expect(json.scenario).toHaveProperty('scenarioText');
    });

    it('zoom の zoomLevel が含まれる', () => {
      const vm = new TmaFrontVM();
      const json = JSON.parse(vm.toJSON());
      expect(json.zoom.zoomLevel).toBe(1);
    });

    it('scenarioText が含まれる', () => {
      const vm = new TmaFrontVM();
      vm.scenario.scenarioText('my text');
      const json = JSON.parse(vm.toJSON());
      expect(json.scenario.scenarioText).toBe('my text');
    });
  });

  describe('save', () => {
    it('autosave が false の場合は有効なデータを保存しない', () => {
      const vm = new TmaFrontVM();
      vm.autosave(false);
      vm.save();
      // reset() により 'null' 文字列が入るが、JSON.parse すると null になる
      expect(JSON.parse(localStorage[TmaFrontVM.STORAGE_KEY])).toBeNull();
    });

    it('autosave が true の場合は localStorage に保存される', () => {
      const vm = new TmaFrontVM();
      vm.autosave(true);
      vm.save();
      const stored = localStorage[TmaFrontVM.STORAGE_KEY];
      expect(stored).toBeTruthy();
      const parsed = JSON.parse(stored);
      expect(parsed.autosave).toBe(true);
    });
  });

  describe('load', () => {
    it('localStorage にキーが存在しない場合は空オブジェクトを返す', () => {
      const vm = new TmaFrontVM();
      // コンストラクタが reset() で 'null' を書き込んでいるので clear してから確認
      localStorage.clear();
      expect(vm.load()).toEqual({});
    });

    it('save したデータが次のインスタンスで復元される', () => {
      const vm1 = new TmaFrontVM();
      vm1.autosave(true);
      vm1.scenario.scenarioText('saved text');
      vm1.zoom.zoomLevel(2);
      vm1.save();

      const vm2 = new TmaFrontVM();
      expect(vm2.scenario.scenarioText()).toBe('saved text');
      expect(vm2.zoom.zoomLevel()).toBe(2);
    });
  });

  describe('reset', () => {
    it('reset 後は localStorage[key] が null 文字列になる', () => {
      const vm = new TmaFrontVM();
      vm.autosave(true);
      vm.save();
      vm.reset();
      // reset() は localStorage[key] = null（文字列 'null'）を保存する
      expect(JSON.parse(localStorage[TmaFrontVM.STORAGE_KEY])).toBeNull();
    });

    it('reset 後は load が null を返す', () => {
      const vm = new TmaFrontVM();
      vm.autosave(true);
      vm.save();
      vm.reset();
      expect(vm.load()).toBeNull();
    });
  });

  describe('STORAGE_KEY', () => {
    it('固定の文字列であること', () => {
      expect(TmaFrontVM.STORAGE_KEY).toBe('TMA-FRONT-xK6fQPYW');
    });
  });

  describe('getFaceStyle', () => {
    it('face オブジェクトから backgroundPosition を計算する', () => {
      const vm = new TmaFrontVM();
      const faceConfig = { filename: 'face.png', number: 0 };
      vm.faceImgs['face.png'] = { dataUrl: 'data:image/png;base64,abc' };
      const style = vm.getFaceStyle(faceConfig);
      expect(style.backgroundPosition).toBe('-0px -0px');
      expect(style.backgroundImage).toBe('url(data:image/png;base64,abc)');
    });

    it('number に基づいた x/y 位置が計算される（number=5: x=1列目, y=1行目）', () => {
      const vm = new TmaFrontVM();
      // number=5: posx = (5%4)*48 = 48, posy = floor(5/4)*48 = 48
      const faceConfig = { filename: 'face.png', number: 5 };
      vm.faceImgs['face.png'] = { dataUrl: 'data:image/png;base64,abc' };
      const style = vm.getFaceStyle(faceConfig);
      expect(style.backgroundPosition).toBe('-48px -48px');
    });

    it('number=4: x=0, y=1行目', () => {
      const vm = new TmaFrontVM();
      // number=4: posx = (4%4)*48 = 0, posy = floor(4/4)*48 = 48
      const faceConfig = { filename: 'face.png', number: 4 };
      vm.faceImgs['face.png'] = { dataUrl: 'data:url' };
      const style = vm.getFaceStyle(faceConfig);
      expect(style.backgroundPosition).toBe('-0px -48px');
    });

    it('.png 拡張子がない場合は自動付与される', () => {
      const vm = new TmaFrontVM();
      const faceConfig = { filename: 'face', number: 0 };
      vm.faceImgs['face.png'] = { dataUrl: 'data:url' };
      const style = vm.getFaceStyle(faceConfig);
      expect(style).toBeDefined();
      expect(style.backgroundImage).toBe('url(data:url)');
    });

    it('filename が未設定の場合は undefined を返す', () => {
      const vm = new TmaFrontVM();
      const style = vm.getFaceStyle({ number: 0 });
      expect(style).toBeUndefined();
    });
  });
});
