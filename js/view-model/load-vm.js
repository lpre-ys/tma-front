import m from 'mithril';

export default class LoadVM {
  constructor(scenario) {
    this.style = m.prop();
    this.status = m.prop(false);
    this.peoples = [];
    this.scenario = scenario;
  }

  dropFiles(e) {
    e.preventDefault();
    const promises = [];
    const files = e.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const ext = getFileExt(file.name);
      if (file.name == 'style.yaml') {
        promises.push(this._readStyleYaml(file));
      // } else if (ext == 'png') {
      //   // 画像読み込み
      //   reader.readAsDataURL(file);
      } else if (['yaml', 'yml'].includes(ext)) {
        // テキスト読み込み
        promises.push(this._readPeopleYaml(file));
      }
    }
    m.sync(promises).then((args) => {
      console.log(this);
      this.scenario.setConfig(this.style(), this.peoples);
      this.status = true;
    });
  }

  _readStyleYaml(file) {
    const reader = new FileReader();
    reader.readAsText(file);

    const deferred = m.deferred();
    reader.onloadend = (e) => {
      this.style(e.target.result);
      deferred.resolve(true);
    };
    reader.onerror = deferred.reject;

    return deferred.promise;
  }

  _readPeopleYaml(file) {
    const reader = new FileReader();
    reader.readAsText(file);

    const deferred = m.deferred();
    reader.onloadend = (e) => {
      deferred.resolve(true);
      this.peoples.push(e.target.result);
    };
    reader.onerror = deferred.reject;

    return deferred.promise;
  }
}
const getFileExt = (filename) => {
  const dotIndex = filename.lastIndexOf('.');
  if (dotIndex < 0) {
    throw new Error('拡張子が有りません');
  }
  return filename.substr(dotIndex + 1);
};
const handleLoadEnd = (e) => {
  if (e.target.readyState == FileReader.DONE) {
    const file = e.target.result;
    if (file.startsWith('data:image')) {
      // 画像読み込み
      const img = new Image();
      img.src = file;
      img.onload = handleImageOnLoad;
    } else {
      const outputList = document.getElementById('outputList');
      const li = document.createElement('li');
      li.textContent = e.target.result;
      outputList.appendChild(li);
    }
  }
};
const handleImageOnLoad = (e) => {
  // 画像を変換して新しいimgタグにセット
  const img = e.target;
  const data = canvasTest(img);
  if (data) {
    const message = document.getElementById('message');
    // message.innerText = 'TEST MESSAGE.';
    message.classList.add('mask-text');
    message.style.backgroundImage = `url(${data})`;
  }
};
const canvasTest = (img) => {
  const canvas = document.createElement('canvas');
  // test
  canvas.width = 5;
  canvas.height = 33;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, 5, 33);
  return canvas.toDataURL();
};
