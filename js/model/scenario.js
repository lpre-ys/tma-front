import m from 'mithril';
import Window from './window';

export default class Scenario {
  constructor() {
    this.scenarioText = m.prop('');
    this.tkScript = m.prop('');
    this.windowList = m.prop([]);
  }

  parse(parser) {
    if (parser) {
      const messageList = parser.parse(this.scenarioText());
      this.tkScript(parser.serialize());

      // ウィンドウに変換
      const windowList = [];
      messageList.forEach((messageBox) => {
        const face = messageBox.face;
        messageBox.messageList.map((message) => {
          windowList.push(new Window({message, face}));
        });
      });
      this.windowList(windowList);
    }
  }

}
