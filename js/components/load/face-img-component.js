import m from 'mithril';

const faceImgComponent = {
  controller: function (data) {
    this.vm = data.vm;
  },
  view: (ctrl) => {
    const vm = ctrl.vm;
    const faceListView = vm.config.faceKeyList.map((faceKey) => {
      return m('li', [
        m('p', faceKey),
        m('.faceImg', {style: vm.getFaceStyle(faceKey)})
      ]);
    });
    return m('.faceSetting', [
      m('h3', '顔グラフィック'),
      m('ul.faceList', faceListView)
    ]);
  }
};

export default faceImgComponent;
