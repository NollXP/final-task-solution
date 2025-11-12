
class LoginPage {
    
    async open() {
        await browser.url('/');
    }

    async setCredentials(username,password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
    }
    async LoginButton() {
         await this.loginButton.click();
    }
    async clearUsername() {
        await this.usernameInput.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
    }
    async clearPassword() {
        await this.passwordInput.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
    }

    get usernameInput() { return $("//input[@name='user-name']"); }
    get passwordInput() { return $("//input[@name='password']"); }
    get loginButton() { return $("//input[@name='login-button']"); }
    get errorMessage() { return $("//div[@class='error-message-container error']"); }
}

module.exports = new LoginPage();