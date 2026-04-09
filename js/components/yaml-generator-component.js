import m from 'mithril';
import YamlGenerator from '../model/yaml-generator';

const selectText = (e) => { e.target.select(); };

const yamlGeneratorComponent = {
  oninit(vnode) {
    this.generator = new YamlGenerator();
  },
  view(vnode) {
    const vm = vnode.attrs.vm;
    return m('.modalOverlay', {
      class: vm.yamlGeneratorStatus,
      onclick: () => { vm.yamlGeneratorStatus = 'disable'; }
    }, [
      m('.yamlGenerator.modalWrap', {
        onclick: (e) => { e.stopPropagation(); }
      }, [
        m('h1', '顔グラ設定ファイルジェネレータ'),
        m('.inputs', [
          m('div', [
            m('label', {for: 'name'}, 'キャラ名'),
            m('input#name', {
              onkeyup: (e) => { this.generator.name = e.target.value; },
              value: this.generator.name
            })
          ]),
          m('div', [
            m('label', {for: 'filename'}, 'ファイル名'),
            m('input#filename', {
              onkeyup: (e) => { this.generator.filename = e.target.value; },
              value: this.generator.filename
            })
          ]),
          m('div', [
            m('label', {for: 'prefix'}, 'prefix'),
            m('input#prefix', {
              onkeyup: (e) => { this.generator.prefix = e.target.value; },
              value: this.generator.prefix
            })
          ]),
          m('div', [
            m('label', {for: 'length'}, '個数'),
            m('input#length', {
              onkeyup: (e) => { this.generator.length = e.target.value; },
              value: this.generator.length
            })
          ])
        ]),
        m('.output', [
          m('h2', '設定ファイル'),
          m('textarea', {
            readonly: 'readonly',
            onfocus: selectText
          }, this.generator.yaml())
        ]),
        m('.close', {
          onclick: () => { vm.yamlGeneratorStatus = 'disable'; }
        }, '[x]close')
      ])
    ]);
  }
};

export default yamlGeneratorComponent;
