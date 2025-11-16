const loginSelectors = require('../components/login-components/login.selectors');
class LoginPage {
    async setCredentials(username, password) {
        await $(loginSelectors.usernameInput).waitForDisplayed();
        await $(loginSelectors.usernameInput).setValue(username);
        await $(loginSelectors.passwordInput).setValue(password);
    };
    async clickLoginButton() {
        await $(loginSelectors.loginButton).waitForClickable();
        await $(loginSelectors.loginButton).click();
    };
    async clearUsername() {
        await $(loginSelectors.usernameInput).click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
    };
    async clearPassword() {
        await $(loginSelectors.passwordInput).click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
    };
    async getErrorMessage() {
        await $(loginSelectors.errorMessage).waitForDisplayed();
        return $(loginSelectors.errorMessage).getText();
    }
};

module.exports = new LoginPage();