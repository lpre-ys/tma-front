import m from 'mithril';
import Window from './window';

export default class Scenario {
  constructor(data = {}) {
    this.scenarioText = m.prop(data.scenarioText || '');
    this.tkScript = '';
    this.windowList = [];
    this.parseError = m.prop('');
  }

  parse(parser) {
    if (parser) {
      let messageList = [];
      try {
        messageList = parser.parse(this.scenarioText());
        this.tkScript = parser.serialize();
        this.parseError('');
      } catch (e) {
        this.parseError(e.message);
      }

      // ウィンドウに変換
      this.windowList = [];
      messageList.forEach((messageBox) => {
        const face = messageBox.face;
        messageBox.messageList.map((message) => {
          this.windowList.push(new Window({message, face}));
        });
      });
    }
  }

}
