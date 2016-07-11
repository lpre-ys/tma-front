import assert from 'power-assert';
import sinon from 'sinon';
import Scenario from '../../js/model/scenario';

describe('Scenario model', () => {
  describe('constructor', () => {
    it('not args', () => {
      const scenario = new Scenario();

      assert(scenario.scenarioText() == '');
      assert(scenario.tkScript == '');
      assert(scenario.windowList.length == 0);
    });
    it('use args', () => {
      const scenario = new Scenario({
        scenarioText: 'test message'
      });

      assert(scenario.scenarioText() == 'test message');
      assert(scenario.tkScript == '');
      assert(scenario.windowList.length == 0);
    });
  });
  describe('parse', () => {
    let scenario;
    beforeEach(() => {
      scenario = new Scenario({
        scenarioText: 'test message'
      });
    });
    it('parser is false, not action', () => {
      scenario.parse(false);

      assert(scenario.scenarioText() == 'test message');
      assert(scenario.tkScript == '');
      assert(scenario.windowList.length == 0);
    });
    it('parser is parserObj, parse scenario and build windowList', () => {
      const parser = {
        parse: () => {},
        serialize: () => {}
      };
      const parserStub = {
        parse: sinon.stub(parser, 'parse').returns([
          {
            face: false,
            messageList: [
              {
                line: ['test message']
              }
            ]
          }
        ]),
        serialize: sinon.stub(parser, 'serialize').returns('serialized script')
      };
      scenario.parse(parser);

      assert(scenario.scenarioText() == 'test message');  // not change
      assert(scenario.tkScript == 'serialized script');
      assert(parserStub.parse.callCount === 1);
      assert(parserStub.serialize.callCount === 1);
      assert(scenario.windowList.length == 1);
    });
  });
});
