
class LoginPage {
    
    async open() {
        await browser.url('/');
    }

    async setCredentials(username = 'standard_user', password = 'secret_sauce') {
        await this.loginItems('usernameSelector').setValue(username);
        await this.loginItems('passwordSelector').setValue(password);
    }
    async LoginButton() {
         await this.loginItems('loginButtonSelector').click();
    }
    async clearUsername() {
        await this.loginItems('usernameSelector').clearValue();
        await browser.keys('Backspace');
    }
    async clearPassword() {
        await this.loginItems('passwordSelector').click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
    }
    async getErrorMessage() {
        await this.loginItems('errormessageselector');
    }
     loginItems(param){
        const selectors = {
            usernameselector: "//input[@name='user-name']",
            passwordselector: "//input[@name='password']",
            loginbuttonselector: "//input[@name='login-button']",
            errormessageselector: "//div[@class='error-message-container error']"
        };
            return $(selectors[param.toLowerCase()]);
    }
}

module.exports = new LoginPage();