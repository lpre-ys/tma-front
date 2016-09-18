import m from 'mithril';
import Window from './window';
import Block from './block';

export default class Scenario {
  constructor(data = {}) {
    this.scenarioText = m.prop(data.scenarioText || '');
    this.tkScript = '';
    this.list = [];
    this.parseError = m.prop('');
  }

  parse(parser) {
    if (parser) {
      let root = [];
      try {
        root = parser.parse(this.scenarioText());
        this.tkScript = parser.serialize();
        this.parseError('');
      } catch (e) {
        this.parseError(e.message);
      }

      // ウィンドウに変換
      this.list = [];
      // TODO init varNo
      this._build(root);
    }
  }

  _build(scenarioBlock, varNo = 1, parent = this.list) {
    scenarioBlock.child.forEach((childBlock) => {
      if (Array.isArray(childBlock)) {
        childBlock.forEach((messageBox) => {
          this._buildlist(messageBox, parent);
        });
      } else {
        const block = new Block(childBlock, varNo);
        parent.push(block);
        this._build(childBlock, varNo + 1, block.child);
      }
    });
  }

  _buildlist(messageBox, parent) {
    const face = messageBox.face;
    messageBox.messageList.map((message) => {
      parent.push(new Window({message, face}));
    });
  }

}
