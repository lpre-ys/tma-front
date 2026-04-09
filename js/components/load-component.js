import m from 'mithril';
import systemImgComponent from './load/system-img-component';
import faceImgComponent from './load/face-img-component';
import seAudioComponent from './load/se-audio-component';

const loadComponent = {
  oninit(vnode) {
    this.vm = vnode.attrs.vm;
    this.buttonStatus = false;
    this.noop = (e) => {
      e.preventDefault();
    };
  },
  view(vnode) {
    const vm = this.vm;
    const settingList = [];
    if (vm.loadStatus) {
      // systemImg
      settingList.push(m(systemImgComponent, {vm: vm}));
      // se audio
      settingList.push(m(seAudioComponent, {vm: vm}));
      // face graphics
      settingList.push(m(faceImgComponent, {vm: vm}));
    }
    return m('.loadComponent', [
      m('.header', [
        m('h2', '設定ファイル'),
        m('button.tool', {
          onclick: () => { vm.yamlGeneratorStatus = 'enable'; }
        }, 'ジェネレータ')
      ]),
      m('button.checkConfig', {
        class: vm.loadStatus ? 'enable' : 'disable',
        'data-button-status': this.buttonStatus == 'on' ? 'off' : 'on',
        onclick: (e) => { this.buttonStatus = e.target.dataset.buttonStatus; }
      }, '設定の' + (this.buttonStatus == 'on' ? '非表示' : '表示')),
      m('.settingList', {
        class: this.buttonStatus == 'on' ? 'enable' : 'disable'
      }, settingList),
      m('.loadConfig', {
        class: vm.loadStatus ? 'disable' : 'enable',
        ondragover: this.noop,
        ondrop: vm.dropFiles.bind(vm)
      }, 'ここに設定ファイルをまとめてドロップしてください。')
    ]);
  }
};

export default loadComponent;
