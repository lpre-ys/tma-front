import m from 'mithril';

export default class Scenario {
  constructor() {
    this.scenarioText = m.prop('');
    this.tkScript = m.prop('');
    this.windowList = m.prop([]);
  }

  parse(parser) {
    if (parser) {
      this.windowList(parser.parse(this.scenarioText()));
      this.tkScript(parser.serialize());
    }
  }

  // get windowList() {
  //   const scenario = this.scenarioText();
  //
  //   if (this.parser && scenario) {
  //     return this.parser.parse(scenario);
  //   }
  //
  //   return [];
  // }
  //
  // setConfig(style, peoples) {
  //   this.parser = new ScenarioParser(style, peoples);
  //   return this.parser.config;
  // }
  //
  // get colors() {
  //   if (this.parser) {
  //     return this.parser.config.colors;
  //   }
  //   return [];
  // }

}
