const Logo = require('./img/githublogo.png');

class Utilities {
  static renderGHLogo(filepath, logoSelector = '#gh-logo') {
    const ghLogoElement = document.querySelector(logoSelector);
    if (filepath === undefined) {
      ghLogoElement.src = Logo;
    } else {
      ghLogoElement.src = filepath;
    }
  }
}

module.exports = Utilities;
