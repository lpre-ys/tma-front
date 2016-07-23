import m from 'mithril';
import zoomComponent from './zoom-component';
import loadComponent from './load-component';
import messageListComponent from './message-list-component';
import yamlGeneratorComponent from 'components/yaml-generator-component';
import TmaFrontVM from '../view-model/tma-front-vm';

const tmaFrontComponent = {
  controller: function () {
    this.vm = new TmaFrontVM();
  },
  view: (ctrl) => {
    const vm = ctrl.vm;
    return [
      m('.frame', m('#appContainer', [
        m('.left', [
          m.component(loadComponent, {vm: vm}),
          m('h2', 'シナリオスクリプト'),
          m('textarea#input', {
            value: vm.scenario.scenarioText(),
            onkeyup: m.withAttr('value', vm.setScenarioText, vm)
          }),
          m('h2', 'TKcode'),
          m('textarea#tkScript', {
            readonly: 'readonly',
            onfocus: tmaFrontComponent.selectText
          }, [vm.scenario.tkScript])
        ]),
        m('.right', [
          m('h2', 'プレビュー'),
          m.component(zoomComponent, {vm: vm}),
          m.component(messageListComponent, {vm: vm})
        ])
      ])),
      m('#tools', [
        m.component(yamlGeneratorComponent, {status: vm.yamlGeneratorStatus})
      ])
    ];
  },
  selectText: (e) => {
    e.target.select();
  }
};

export default tmaFrontComponent;
