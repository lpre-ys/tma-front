export default class StyleSheet {
  constructor(name) {
    this.styleSheet = StyleSheet.getCSSStyleSheet(name);
  }

  editCss(selector, name, value) {
    this.styleSheet.insertRule(`${selector} { ${name}: ${value}}`, this.styleSheet.cssRules.length);
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
