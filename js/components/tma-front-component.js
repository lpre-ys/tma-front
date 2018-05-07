import m from 'mithril';
import zoomComponent from './zoom-component';
import loadComponent from './load-component';
import messageListComponent from './message-list-component';
import yamlGeneratorComponent from 'components/yaml-generator-component';
import TmaFrontVM from '../view-model/tma-front-vm';

const tmaFrontComponent = {
  controller: function () {
    this.vm = new TmaFrontVM();
    window.onscroll = this.vm.onScrollSticky.bind(this.vm);
  },
  view: (ctrl) => {
    const vm = ctrl.vm;
    // save
    vm.save();
    // create veiew
    return [
      m('.frame', m('#appContainer', [
        m('.left', [
          m.component(loadComponent, {vm: vm}),
          m('#stickyWrapper', {
            class: vm.stickyCheck() ? vm.stickyStatus() : 'normal'
          }, [
            m('.header', [
              m('h2', 'シナリオスクリプト'),
              m('.toggle', [
                m('input#autosave', {
                  type: 'checkbox',
                  checked: vm.autosave(),
                  onclick: m.withAttr('checked', vm.autosave)
                }),
                m('label', {
                  for: 'autosave'
                }, 'AutoSave')
              ]),
              m('.toggle', [
                m('input#stickyCheckbox', {
                  type: 'checkbox',
                  checked: vm.stickyCheck(),
                  onclick: m.withAttr('checked', vm.stickyCheck)
                }),
                m('label', {
                  for: 'stickyCheckbox'
                }, 'sticky')
              ])
            ]),
            m('textarea#input', {
              value: vm.scenario.scenarioText(),
              onkeyup: m.withAttr('value', vm.setScenarioText, vm)
            }),
            m('h2', 'TKcode'),
            m('textarea#tkScript', {
              readonly: 'readonly',
              onfocus: tmaFrontComponent.selectText
            }, [vm.scenario.tkScript]),
            m('h2', 'JS(js2tk)'),
            m('textarea#jsScript', {
              readonly: 'readonly',
              onfocus: tmaFrontComponent.selectText
            }, [vm.scenario.jsScript])
          ])
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
