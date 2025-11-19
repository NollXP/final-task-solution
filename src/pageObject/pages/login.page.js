const loginSelectors = require('../components/login-components/login.selectors');
class LoginPage {
  async setCredentials(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
  }
  async clickLoginButton() {
    await this.usernameInput.waitForClickable();
    await this.loginButton.click();
  }
  async clearUsername() {
    await this.usernameInput.doubleClick();
    await browser.keys('Backspace');
  }
  async clearPassword() {
    await this.passwordInput.click();
    await browser.keys(['Control', 'a']);
    await browser.keys('Backspace');
  }
  async getErrorMessage() {
    await this.errorMessage.waitForDisplayed();
    return this.errorMessage.getText();
  }
  
  get usernameInput() {
    return $(loginSelectors.usernameInput);
  }
  get passwordInput() {
    return $(loginSelectors.passwordInput);
  }
  get loginButton() {
    return $(loginSelectors.loginButton);
  }
  get errorMessage() {
    return $(loginSelectors.errorMessage);
  }
}

module.exports = new LoginPage();
