const LoginSelectors = require('../components/login-components/login.selectors');
class LoginPage {
    async setCredentials(username, password) {
        await $(LoginSelectors.usernameInput).setValue(username);
        await $(LoginSelectors.passwordInput).setValue(password);
    };
    async LoginButton() {
        await $(LoginSelectors.loginButton).click();
    };
    async clearUsername() {
        await $(LoginSelectors.usernameInput).click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
    };
    async clearPassword() {
        await $(LoginSelectors.passwordInput).click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
    };
    async getErrorMessage() {
        return $(LoginSelectors.errorMessage).getText();
    }
};

module.exports = new LoginPage();