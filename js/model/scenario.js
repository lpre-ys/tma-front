import m from 'mithril';
import Window from './window';

export default class Scenario {
  constructor(data = {}) {
    this.scenarioText = m.prop(data.scenarioText || '');
    this.tkScript = '';
    this.windowList = [];
  }

  parse(parser) {
    if (parser) {
      const messageList = parser.parse(this.scenarioText());
      this.tkScript = parser.serialize();

      // ウィンドウに変換
      messageList.forEach((messageBox) => {
        const face = messageBox.face;
        messageBox.messageList.map((message) => {
          this.windowList.push(new Window({message, face}));
        });
      });
    }
  }

}
