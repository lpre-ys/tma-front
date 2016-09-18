import Const from '../utils/const';

export default class Block {
  constructor(scenarioBlock, varNo) {
    this.type = Const.type.block;
    this.varNo = varNo;
    this.no = scenarioBlock.no;
    this.key = `${varNo}:${scenarioBlock.no}`;
    this.label = `${scenarioBlock.label || ''}`;
    this.visible = true;
    this.child = [];
  }

}
