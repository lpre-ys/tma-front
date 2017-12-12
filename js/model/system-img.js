import Png from './png';
import oneColor from 'onecolor';

export default class SystemImg extends Png {
  constructor(deferred) {
    super(deferred);
    this._messageWindowDataUrl = false;
    this._messageWindowMainColor;
  }

  get messageWindowMainColor() {
      return this._messageWindowMainColor;
  }

  get controlCharColor() {
    if (!this._messageWindowMainColor) {
      return false;
    }
    const bg = oneColor(this._messageWindowMainColor);
    return bg.value() > .7 ? 'black' : 'white';
  }

  get controlCharBgColor() {
    if (!this._messageWindowMainColor) {
      return false;
    }
    const bg = oneColor(this._messageWindowMainColor);
    return bg.value() > .7 ? 'white' : 'black';
  }

  get messageWindow() {
    if (this.file == false) {
      return false;
    }
    if (this._messageWindowDataUrl == false) {
      // make messageWindow
      const canvas = this._makeCanvas(32, 32);
      const ctx = canvas.getContext('2d');

      const frame = this._makeFrame();

      // draw background
      ctx.drawImage(this.img, 0, 0, 32, 32, 0, 0, 32, 32);

      // calc main color
      const bgImageData = ctx.getImageData(0, 0, 32, 32);
      const pixelNumber = canvas.height * canvas.width;
      let h = 0, s = 0, l = 0;
      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const offset = (y * canvas.width + x) * 4;
          const r = bgImageData.data[offset];
          const g = bgImageData.data[offset + 1];
          const b = bgImageData.data[offset + 2];
          const color = oneColor(`rgb(${r}, ${g}, ${b})`);
          // 色の平均を計算する
          h += color.hue();
          s += color.saturation();
          l += color.lightness();
        }
      }
      h /= pixelNumber;
      s /= pixelNumber;
      l /= pixelNumber;
      this._messageWindowMainColor = oneColor(["HSL", h, s, l]).css();

      // draw frame
      ctx.drawImage(frame, 0, 0);

      this._messageWindowDataUrl = canvas.toDataURL();
    }
    return this._messageWindowDataUrl;
  }

  get defaultText() {
    return this.getTextColor(0);
  }

  getTextColor(number) {
    // make background
    const canvas = this._makeCanvas(16, 16);
    const ctx = canvas.getContext('2d');
    const x = 16 * (number % 10);
    const y = 48 + Math.floor(number / 10) * 16;
    ctx.drawImage(this.img, x, y, 16, 16, 0, 0, 16, 16);

    return canvas.toDataURL();
  }

  _makeCanvas(w, h) {
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;

    return canvas;
  }

  _makeFrame() {
    // make FrameCanvas
    const canvas = this._makeCanvas(32, 32);

    // frame transparent set
    const ctx = canvas.getContext('2d');
    ctx.drawImage(this.img, 32, 0, 32, 32, 0, 0, 32, 32);
    const imageData = ctx.getImageData(0, 0, 32, 32);
    const tColor = this.palette[0];
    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const offset = (y * canvas.width + x) * 4;
        // 中央
        if (x >= 8 && x <= 24 && y >= 8 && y <= 24) {
          imageData.data[offset + 3] = 0;
          continue;
        }
        const r = imageData.data[offset];
        const g = imageData.data[offset + 1];
        const b = imageData.data[offset + 2];
        if (tColor.r == r && tColor.g == g && tColor.b == b) {
          imageData.data[offset + 3] = 0;
        }
      }
    }

    // frame serialize
    ctx.putImageData(imageData, 0, 0);

    return canvas;
  }
}
