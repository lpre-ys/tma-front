import m from 'mithril';
const zoomComponent = {
  controller: function (data) {
    this.vm = data.vm;
  },
  view: (ctrl) => {
    const vm = ctrl.vm;

    return m('.zoomBox', [
      'ズーム：',
      m('select', {
        name: 'zoom',
        value: vm.zoom.zoomLevel(),
        onchange: m.withAttr('value', vm.zoom.zoomLevel)
      }, [
        m('option', {value: 1}, '1x'),
        m('option', {value: 2}, '2x')
      ])
    ]);
  }
};

export default zoomComponent;
