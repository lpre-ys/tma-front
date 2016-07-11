import assert from 'power-assert';
import Png from '../../js/model/png';

describe('Png model', () => {
  it('constructor', () => {
    const deferred = 'deferredObj';
    const png = new Png(deferred, 'test.filename');

    // set constructor args
    assert(png.deferred === deferred);
    assert(png.filename == 'test.filename');
    // init property
    assert(!png.file);
    assert(!png.dataUrl);
    assert(!png.img);
    assert(png.palette.length == 0);
  });
  describe('get imageInfo', () => {
    const png = new Png('test.deferred', 'test.filename');
    it('dataUrl', () => {
      png.dataUrl = 'test.dataUrl';

      assert(png.imageInfo.dataUrl == 'test.dataUrl');
    });
    it('palette', () => {
      png.palette = 'test.palette';

      assert(png.imageInfo.palette == 'test.palette');
    });
  });
  describe('get tColorCss', () => {
    const png = new Png('test.deferred', 'test.filename');
    it('not read palette', () => {
      assert(png.tColorCss == '');
    });
    it('read palette', () => {
      png.palette = [
        {r: 10, g: 20, b: 30},
        {r: 40, g: 50, b: 60}
      ];
      assert(png.tColorCss == 'rgb(10, 20, 30)');
    });
  });
  describe('loadEnd', () => {

  });
});
