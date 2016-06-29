import m from 'mithril';
import {ScenarioParser} from 'tk2k-message-assist';

export default class Scenario {
  constructor() {
    this.parser = new ScenarioParser(2);
    this.scenarioText = m.prop('');
  }
  get windowList() {
    const scenario = this.scenarioText();

    if (scenario) {
      return this.parser.parse(scenario);
    }

    return [];
  }
}
