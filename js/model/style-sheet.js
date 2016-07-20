export default class StyleSheet {
  constructor(name) {
    // this.styleSheet = StyleSheet.getCSSStyleSheet(name);
    const style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head').item(0).appendChild(style);

    this.styleSheet = style.sheet;
  }

  editCss(selector, name, value) {
    if (!this.styleSheet) {
      return;
    }
    const position = this.styleSheet.cssRules ? this.styleSheet.cssRules.length : 0;
    this.styleSheet.insertRule(`${selector} { ${name}: ${value}}`, position);
  }

  static getCSSStyleSheet(name) {
    let result = false;
    Array.prototype.forEach.call(document.styleSheets, (styleSheet) => {
      if (styleSheet.href != null && styleSheet.href.endsWith(name)) {
        result = styleSheet;
      }
    });
    return result;
  }

}
