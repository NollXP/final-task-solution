
class LoginPage {
    get usernameSelector() {
        return $("//input[@name='user-name']");
    }
    get passwordSelector() {
        return $("//input[@name='password']");
    }
    get loginButtonSelector() {
        return $("//input[@name='login-button']");
    }
    get errorMessageSelector() {
        return $("//div[@class='error-message-container error']");
    }

    async open() {
        await browser.url('/');
    }

    async setCredentials(username = 'standard_user', password = 'secret_sauce') {
        await this.usernameSelector.setValue(username);
        await this.passwordSelector.setValue(password);
    }
   
    async LoginButton() {
        await this.loginButtonSelector.click();
    }
    async clearUsername() {
        await this.usernameSelector.doubleClick();
        await browser.keys('Backspace');
    }
    async clearPassword() {
        await this.passwordSelector.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
    }
}

module.exports = new LoginPage();