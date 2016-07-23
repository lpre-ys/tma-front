import assert from 'power-assert';
import YamlGenerator from '../../js/model/yaml-generator';

describe('YamlGenerator model', () => {
  describe('yaml', () => {
    let yamlGenerator;
    beforeEach(() => {
      yamlGenerator = new YamlGenerator();
    });
    it('nameが空の時は生成されないこと', () => {
      yamlGenerator.filename('test');

      const ret = yamlGenerator.yaml();
      assert(!ret);
    });
    it('filenameが空の時は生成されないこと', () => {
      yamlGenerator.name('test');

      const ret = yamlGenerator.yaml();
      assert(!ret);
    });
    it('生成結果が正しい事', () => {
      yamlGenerator.name('testname');
      yamlGenerator.filename('testfilename');
      yamlGenerator.prefix('testprefix');
      yamlGenerator.length(3);

      const ret = yamlGenerator.yaml();
      assert(ret == `person:
  testname:
    faces:
      testprefix1:
        filename: testfilename
        number: 0
      testprefix2:
        filename: testfilename
        number: 1
      testprefix3:
        filename: testfilename
        number: 2
`);
    });
  });
});
