import m from 'mithril';
import YamlGenerator from '../model/yaml-generator';

const yamlGeneratorComponent = {
  controller: function (data) {
    return {
      generator: new YamlGenerator(),
      status: data.status,
      selectText: (e) => {
        e.target.select();
      }
    };
  },
  view: (ctrl) => {
    return m('.modalOverlay', {
      class: ctrl.status(),
      onclick: () => { ctrl.status('disable'); }
    }, [
      m('.yamlGenerator.modalWrap', {
        onclick: (e) => { e.stopPropagation(); }
      }, [
        m('h1', '顔グラ設定ファイルジェネレータ'),
        m('.inputs', [
          m('div', [
            m('label', {for: 'name'}, 'キャラ名'),
            m('input#name', {
              onkeyup: m.withAttr('value', ctrl.generator.name),
              value: ctrl.generator.name()
            })
          ]),
          m('div', [
            m('label', {for: 'filename'}, 'ファイル名'),
            m('input#filename', {
              onkeyup: m.withAttr('value', ctrl.generator.filename),
              value: ctrl.generator.filename()
            })
          ]),
          m('div', [
            m('label', {for: 'prefix'}, 'prefix'),
            m('input#prefix', {
              onkeyup: m.withAttr('value', ctrl.generator.prefix),
              value: ctrl.generator.prefix()
            })
          ]),
          m('div', [
            m('label', {for: 'length'}, '個数'),
            m('input#length', {
              onkeyup: m.withAttr('value', ctrl.generator.length),
              value: ctrl.generator.length()
            })
          ])
        ]),
        m('.output', [
          m('h2', '設定ファイル'),
          m('textarea', {
            readonly: 'readonly',
            onfocus: ctrl.selectText
          }, ctrl.generator.yaml())
        ]),
        m('.close', {
          onclick: () => { ctrl.status('disable'); }
        }, '[x]close')
      ])
    ]);
  }
};

export default yamlGeneratorComponent;
