import m from 'mithril';
import loadComponent from './load-component';
import messageListComponent from './message-list-component';
import yamlGeneratorComponent from 'components/yaml-generator-component';
import TmaFrontVM from '../view-model/tma-front-vm';

const selectText = (e) => { e.target.select(); };

const tmaFrontComponent = {
  oninit(vnode) {
    this.vm = new TmaFrontVM();
    window.onscroll = this.vm.onScrollSticky.bind(this.vm);
  },
  view(vnode) {
    const vm = this.vm;
    // save
    vm.save();
    // create view
    return [
      m('.frame', m('#appContainer', [
        m('.panel-left', [
          m(loadComponent, {vm: vm}),
          m('#stickyWrapper', {
            class: vm.stickyCheck ? vm.stickyStatus : 'normal'
          }, [
            m('.header', [
              m('h2', 'シナリオスクリプト'),
              m('.toggle', [
                m('input#autosave', {
                  type: 'checkbox',
                  checked: vm.autosave,
                  onclick: (e) => { vm.autosave = e.target.checked; }
                }),
                m('label', {
                  for: 'autosave'
                }, 'AutoSave')
              ]),
              m('.toggle', [
                m('input#stickyCheckbox', {
                  type: 'checkbox',
                  checked: vm.stickyCheck,
                  onclick: (e) => { vm.stickyCheck = e.target.checked; }
                }),
                m('label', {
                  for: 'stickyCheckbox'
                }, 'sticky')
              ]),
              m('.toggle', [
                m('input#showSe', {
                  type: 'checkbox',
                  checked: vm.showSe,
                  onclick: (e) => { vm.showSe = e.target.checked; }
                }),
                m('label', {
                  for: 'showSe'
                }, 'SE表示')
              ])
            ]),
            m('textarea#input', {
              value: vm.scenario.scenarioText,
              onkeyup: (e) => vm.setScenarioText(e.target.value)
            }),
            m('h2', 'TKcode'),
            m('textarea#tkScript', {
              readonly: 'readonly',
              onfocus: selectText
            }, [vm.scenario.tkScript]),
            m('h2', 'JS(js2tk)'),
            m('textarea#jsScript', {
              readonly: 'readonly',
              onfocus: selectText
            }, [vm.scenario.jsScript])
          ]),
          vm.stickyCheck && vm.stickyStatus === 'sticky'
            ? m('#stickyPlaceholder', {style: {height: `${vm.stickyHeight}px`}})
            : null
        ]),
        m('.panel-right', [
          m('h2', 'プレビュー'),
          m(messageListComponent, {vm: vm})
        ])
      ])),
      m('#tools', [
        m(yamlGeneratorComponent, {vm: vm})
      ])
    ];
  }
};

export default tmaFrontComponent;
