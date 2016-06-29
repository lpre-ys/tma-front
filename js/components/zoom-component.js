import m from 'mithril';
const zoomComponent = {
  controller: function (args) {
    this.zoom = args.zoom;
  },
  view: (ctrl) => {
    return m('.zoomBox', [
      'ズーム：',
      m('select', {
        name: 'zoom',
        value: ctrl.zoom.zoomLevel(),
        onchange: m.withAttr('value', ctrl.zoom.zoomLevel)
      }, [
        m('option', {value: 1}, '1x'),
        m('option', {value: 2}, '2x')
      ])
    ]);
  }
};

export default zoomComponent;
