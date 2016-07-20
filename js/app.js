import m from 'mithril';
import tmaFrontComponent from 'components/tma-front-component';
// TOOL
import yamlGeneratorComponent from 'components/yaml-generator-component';

m.mount(document.getElementById('appContainer'), tmaFrontComponent);
m.mount(document.getElementById('tools'), yamlGeneratorComponent);
