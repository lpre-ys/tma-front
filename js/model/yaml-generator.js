export default class YamlGenerator {
  constructor(data) {
    data = data || {};
    this.name = data.name || '';
    this.filename = data.filename || '';
    this.prefix = data.prefix || '';
    this.length = data.length || 16;

  }

  yaml() {
    if (!this.name || !this.filename || !this.length) {
      return '';
    }
    // yamlを組み立てる
    let yaml = "person:\n  " + this.name + ":\n    faces:\n";
    for (let i = 0; i < this.length; i++) {
      yaml += "      " + this.prefix + (i+1) + ":\n"
           + "        filename: " + this.filename + "\n"
           + "        number: " + i + "\n";
    }

    return yaml;
  }
}
