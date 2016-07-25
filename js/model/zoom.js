import m from 'mithril';

export default class Zoom {
  constructor(data) {
    data = data || {};
    this.zoomLevel = m.prop(data.zoomLevel || 1);
  }

  serialize() {
    return {
      zoomLevel: this.zoomLevel.toJSON()
    };
  }
}
