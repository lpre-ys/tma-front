import base64_arraybuffer from 'base64-arraybuffer';

const pngInfo = {
  signature: 8,
  chunk: {
    length: 4,
    name: 4,
    crc: 4
  }
};

export default class Png {
  constructor(deferred, filename) {
    // private init
    this.file = false;
    this.filename = filename;
    this.dataUrl = false;
    this.palette = [];
    this.deferred = deferred;
    this.img = false;
  }

  get imageInfo() {
    return {
      dataUrl: this.dataUrl,
      palette: this.palette
    };
  }

  loadEnd(e) {
    if (e.target.readyState == FileReader.DONE) {
      this.file = e.target.result;
      // dataUrl変換、IMG要素追加
      this.dataUrl = 'data:image/png;base64,' + base64_arraybuffer.encode(this.file);
      this.img = new Image();
      this.img.src = this.dataUrl;
      // パレット読み込み
      this.palette = this.readPlte(pngInfo.signature);
      // resolve
      this.deferred.resolve({
        type: 'png',
        file: this
      });
    }
  }

  readPlte(offset) {
    const buffer = this.file;
    if (offset >= buffer.byteLength) {
      return false;
    }
    const dv = new DataView(buffer);
    const length = dv.getUint32(offset);
    const name = [];
    for (let i = 0; i < 4; i++) {
      name.push(dv.getUint8(offset + pngInfo.chunk.length + i));
    }
    if (String.fromCharCode.apply(null, name) == 'PLTE') {
      const palette = [];
      const pOffset = offset + pngInfo.chunk.length + pngInfo.chunk.name;
      const pLength = length / 3;
      for (let i = 0; i < pLength; i++) {
        palette.push(
          {
            r: dv.getUint8(pOffset + i * 3),
            g: dv.getUint8(pOffset + i * 3 + 1),
            b: dv.getUint8(pOffset + i * 3 + 2)
          }
        );
      }
      return palette;
    } else {
      return this.readPlte(offset + pngInfo.chunk.length + pngInfo.chunk.name + length + pngInfo.chunk.crc);
    }
  }

  get tColorCss() {
    if (this.palette.length < 1) {
      return '';
    }
    const c = this.palette[0];
    return `rgb(${c.r}, ${c.g}, ${c.b})`;
  }
}
