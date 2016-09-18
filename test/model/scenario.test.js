import assert from 'power-assert';
import sinon from 'sinon';
import Scenario from '../../js/model/scenario';

describe('Scenario model', () => {
  describe('constructor', () => {
    it('not args', () => {
      const scenario = new Scenario();

      assert(scenario.scenarioText() == '');
      assert(scenario.tkScript == '');
      assert(scenario.list.length == 0);
    });
    it('use args', () => {
      const scenario = new Scenario({
        scenarioText: 'test message'
      });

      assert(scenario.scenarioText() == 'test message');
      assert(scenario.tkScript == '');
      assert(scenario.list.length == 0);
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
      assert(scenario.list.length == 0);
    });
    it('parser is parserObj, parse scenario and build list', () => {
      const parser = {
        parse: () => {},
        serialize: () => {}
      };
      const parserStub = {
        parse: sinon.stub(parser, 'parse').returns({
          child: [[
            {
              face: false,
              messageList: [
                {
                  line: ['test message']
                }
              ]
            }
          ]]
        }),
        serialize: sinon.stub(parser, 'serialize').returns('serialized script')
      };
      scenario.parse(parser);

      assert(scenario.scenarioText() == 'test message');  // not change
      assert(scenario.tkScript == 'serialized script');
      assert(parserStub.parse.callCount === 1);
      assert(parserStub.serialize.callCount === 1);
      assert(scenario.list.length == 1);
    });
    describe('複雑なパース', () => {
      const parser = {
        parse: () => {},
        serialize: () => {}
      };
      const parserStub = {
        serialize: sinon.stub(parser, 'serialize').returns('serialized script')
      };
      it('2ウィンドウ、顔無し装飾無し', () => {
        // tmaのparserメソッドの戻り値によって。
        parserStub.parser = sinon.stub(parser, 'parse').returns({
          child: [
            [
            {
              face: false,
              messageList: [
                {line: ['1st window message']},
                {line: ['2nd window message']}
              ]
            }
          ]
        ]
        });
        scenario.parse(parser);

        assert(scenario.list.length == 2);
        assert(scenario.list[0].line()[0].raw() == '1st window message');
        assert(scenario.list[1].line()[0].raw() == '2nd window message');
      });
    });
    describe('シナリオブロック', () => {
      let parser;
      let parserStub;
      beforeEach(() => {
        parser = {
          parse: () => {},
          serialize: () => {}
        };
        parserStub = {
          serialize: sinon.stub(parser, 'serialize').returns('serialized script')
        };
      });
      it('1ブロック', () => {
        const root = {
          child: [
            {
              label: 'ラベル1',
              no: 1,
              child: [[{
                face: false,
                messageList: [
                  {line: ['1st window message']}
                ]
              }]]
            }
          ]
        };
        parserStub.parser = sinon.stub(parser, 'parse').returns(root);
        scenario.parse(parser);

        assert(scenario.list.length == 1);
        assert(scenario.list[0].type == 'block');
        assert(scenario.list[0].label == 'ラベル1');
        assert(scenario.list[0].key == '1:1');
        assert(scenario.list[0].child.length == 1);
        assert(scenario.list[0].child[0].type == 'window');
      });
      it('2ブロック', () => {
        const root = {
          child: [
            {
              label: 'ラベル1',
              no: 1,
              child: [[{
                face: false,
                messageList: [
                  {line: ['message']}
                ]
              }]]
            },
            {
              label: 'ラベル2',
              no: 2,
              child: [[{
                face: false,
                messageList: [
                  {line: ['message']}
                ]
              }]]
            }
          ]
        };
        parserStub.parser = sinon.stub(parser, 'parse').returns(root);
        scenario.parse(parser);

        assert(scenario.list.length == 2);
        assert(scenario.list[0].type == 'block');
        assert(scenario.list[0].label == 'ラベル1');
        assert(scenario.list[0].key == '1:1');
        assert(scenario.list[0].child.length == 1);
        assert(scenario.list[0].child[0].type == 'window');
        assert(scenario.list[1].type == 'block');
        assert(scenario.list[1].label == 'ラベル2');
        assert(scenario.list[1].key == '1:2');
        assert(scenario.list[1].child.length == 1);
        assert(scenario.list[1].child[0].type == 'window');
      });
      it('ネスト', () => {
        const root = {
          child: [
            {
              label: 'parent',
              no: 1,
              child: [
                {
                  label: 'child',
                  no: 1,
                  child: [[{
                    face: false,
                    messageList: [
                      {line: ['message']}
                    ]
                  }]]
                }
              ]
            }
          ]
        };
        parserStub.parser = sinon.stub(parser, 'parse').returns(root);
        scenario.parse(parser);

        assert(scenario.list.length == 1);
        assert(scenario.list[0].type == 'block');
        assert(scenario.list[0].label == 'parent');
        assert(scenario.list[0].key == '1:1');
        assert(scenario.list[0].child.length == 1);
        const child = scenario.list[0].child[0];
        assert(child.type == 'block');
        assert(child.label == 'child');
        assert(child.key == '2:1');
        assert(child.child.length == 1);
        assert(child.child[0].type == 'window');
      });
    });
  });
});
