import m from 'mithril';
import {ScenarioParser} from 'tk2k-message-assist';

export default class Scenario {
  constructor() {
    this.parser = false;
    this.scenarioText = m.prop('');
  }

  get windowList() {
    const scenario = this.scenarioText();

    if (scenario) {
      return this.parser.parse(scenario);
    }

    return [];
  }

  setConfig(style, peoples) {
    this.parser = new ScenarioParser(style, peoples);
  }

  get colors() {
    if (this.parser) {
      console.log(this.parser);
      return this.parser.config.colors;
    }
    return [];
  }
}