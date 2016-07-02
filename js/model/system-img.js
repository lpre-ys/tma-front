import Png from './png';

export default class SystemImg extends Png {
  constructor(deferred) {
    super(deferred);
    this.messageWindowDataUrl = false;
  }

  get messageWindow() {
    if (this.file == false) {
      return false;
    }
    if (this.messageWindowDataUrl == false) {
      // make messageWindow
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
      const frame = new Image();
      frame.src = canvas.toDataURL();

      // draw background
      ctx.drawImage(this.img, 0, 0, 32, 32, 0, 0, 32, 32);
      // draw frame
      ctx.drawImage(frame, 0, 0);

      this.messageWindowDataUrl = canvas.toDataURL();
    }
    return this.messageWindowDataUrl;
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
    console.log(x);
    console.log(y);
    ctx.drawImage(this.img, x, y, 16, 16, 0, 0, 16, 16);

    return canvas.toDataURL();
  }

  _makeCanvas(w, h) {
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;

    return canvas;
  }
}

// const canvasTest = (img) => {
//   const canvas = document.createElement('canvas');
//   // test
//   canvas.width = 5;
//   canvas.height = 33;
//   const ctx = canvas.getContext('2d');
//   ctx.drawImage(img, 0, 0, 5, 33);
//   return canvas.toDataURL();
// };
