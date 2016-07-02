import LoadVM from './load-vm';

export default class TmaFrontVM {
  constructor(data) {
    this.loadVM = new LoadVM(data.scenario);
  }
}
