class Utilities {
  static renderGHLogo(
    logoSelector = '#gh-logo',
    filepath = './img/githublogo.png'
  ) {
    const ghLogoElement = document.querySelector(logoSelector);
    ghLogoElement.src = filepath;
  }
}

module.exports = Utilities;
