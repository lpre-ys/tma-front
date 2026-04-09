import m from 'mithril';

const speakerIconSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>';

const seAudioComponent = {
  view(vnode) {
    const vm = vnode.attrs.vm;
    const keys = Object.keys(vm.seAudios);
    if (keys.length === 0) {
      return null;
    }
    const listView = keys.map((filename) => {
      return m('li', [
        m('button.sePlayButton', {
          onclick: () => { vm.playSeAudio(filename); }
        }, m.trust(speakerIconSvg)),
        m('span.seFilename', filename)
      ]);
    });
    return m('.seSetting', [
      m('h3', '効果音'),
      m('ul.seList', listView)
    ]);
  }
};

export default seAudioComponent;
