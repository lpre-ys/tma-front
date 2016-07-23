import m from 'mithril';
import systemImgComponent from './load/system-img-component';
import faceImgComponent from './load/face-img-component';

const loadComponent = {
  controller: function (data) {
    this.vm = data.vm;
    this.buttonStatus = m.prop(false);
    this.tColor = false;
    this.noop = (e) => {
      e.preventDefault();
    };
  },
  view: (ctrl) => {
    const settingList = [];
    const vm = ctrl.vm;
    if (vm.loadStatus) {
      // systemImg
      settingList.push(m.component(systemImgComponent, {vm: vm}));
      // face graphics
      settingList.push(m.component(faceImgComponent, {vm: vm}));
    }
    return m('.loadComponent', [
      m('.header', [
        m('h2', '設定ファイル'),
        m('button.tool', {
          onclick: () => { ctrl.vm.yamlGeneratorStatus('enable'); }
        }, 'ジェネレータ')
      ]),
      m('button.checkConfig', {
        class: vm.loadStatus ? 'enable' : 'disable',
        'data-button-status': ctrl.buttonStatus() == 'on' ? 'off' : 'on',
        onclick: m.withAttr('data-button-status', ctrl.buttonStatus)
      }, '設定の' + (ctrl.buttonStatus() == 'on' ? '非表示' : '表示')),
      m('.settingList', {
        class: ctrl.buttonStatus() == 'on' ? 'enable' : 'disable'
      }, settingList),
      m('.loadConfig', {
        class: vm.loadStatus ? 'disable' : 'enable',
        ondragover: ctrl.noop,
        ondrop: vm.dropFiles.bind(vm)
      }, 'ここに設定ファイルをまとめてドロップしてください。')
    ]);
  }
};

export default loadComponent;
