import m from 'mithril';

export default class YamlGenerator {
  constructor(data) {
    data = data || {};
    this.name = m.prop(data.name || '');
    this.filename = m.prop(data.filename || '');
    this.prefix = m.prop(data.prefix || '');
    this.length = m.prop(data.length || 16);

    this._yaml = '';
  }

  yaml() {
    if (!this.name() || !this.filename() || !this.length()) {
      return '';
    }
    // yamlを組み立てる
    this._yaml = "person:\n  " + this.name() + ":\n    faces:\n";
    for (let i = 0; i < this.length(); i++) {
      this._yaml += "      " + this.prefix() + (i+1) + ":\n"
                 + "        filename: " + this.filename() + "\n"
                 + "        number: " + i + "\n";
    }

    return this._yaml;
  }
}
