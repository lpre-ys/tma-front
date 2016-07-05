import m from 'mithril';
import zoomComponent from './zoom-component';
import loadComponent from './load-component';
import messageListComponent from './message-list-component';
import TmaFrontVM from '../view-model/tma-front-vm';

const tmaFrontComponent = {
  controller: function () {
    this.vm = new TmaFrontVM({scenario: this.scenario});
  },
  view: (ctrl) => {
    const vm = ctrl.vm;
    return [
      m('.left', [
        m.component(loadComponent, {vm: vm}),
        m('h2', 'シナリオファイル'),
        m('textarea#input', {
          value: vm.scenario.scenarioText(),
          onkeyup: m.withAttr('value', vm.scenario.scenarioText)
        }),
        m('h2', 'TkoolBridge script'),
        m('textarea#tkScript', {
          readonly: 'readonly'
        }, [vm.scenario.tkScript])
      ]),
      m('.right', [
        m('h2', 'プレビュー'),
        m.component(zoomComponent, {vm: vm}),
        m.component(messageListComponent, {vm: vm})
      ])
    ];
  }
};

export default tmaFrontComponent;
