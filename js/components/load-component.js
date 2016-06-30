import m from 'mithril';
import LoadVM from '../view-model/load-vm';

const loadComponent = {
  controller: function (data) {
    this.vm = new LoadVM(data.scenario);
    this.noop = (e) => {
      e.preventDefault();
    };
  },
  view: (ctrl) => {
    return m('.loadComponent', [
      m('h2', '設定ファイル'),
      m('button.checkConfig', '現在の設定の確認'),
      m('.settingList', [
      ]),
      m('.loadConfig', {
        ondragover: ctrl.noop,
        ondrop: ctrl.vm.dropFiles.bind(ctrl.vm)
      }, 'ここに設定ファイルをまとめてドロップしてください。')
    ]);
  }
};

export default loadComponent;
