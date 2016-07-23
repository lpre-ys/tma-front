import assert from 'power-assert';
import mq from 'mithril-query';
import yamlGeneratorComponent from '../../js/components/yaml-generator-component';

describe('messageListComponent', () => {
  describe('controller', () => {
    it('generatorが作られる事', () => {
      const ctrl = new yamlGeneratorComponent.controller();
      assert(ctrl.generator);
    });
  });

  describe('view', () => {
    
  });
});
