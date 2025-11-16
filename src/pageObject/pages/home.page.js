const homeSelectors = require('../components/home-components/home.selectors');
class HomePage {
  async getTitleText() {
    await $(homeSelectors.titalSelector).waitForDisplayed();
    return $(homeSelectors.titalSelector).getText();
  }
  async getLogoText() {
    await $(homeSelectors.logoSelector).waitForDisplayed();
    return $(homeSelectors.logoSelector).getText();
  }
}

module.exports = new HomePage();
