export default class Window {
  constructor(data) {
    data = data || {};
    data.message = data.message || {};
    this.line = data.message.line || [];
    this.comments = data.message.comments || [];
    this.face = data.face || false;
    this.iconStatus = false;
  }

  toggleIcon() {
    this.iconStatus = !this.iconStatus;
  }
}
