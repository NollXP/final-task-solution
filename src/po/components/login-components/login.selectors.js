class LoginSelectors {
    constructor() {
        this.usernameInput = "//input[@name='user-name']",
        this.passwordInput = "//input[@name='password']",
        this.loginButton = "//input[@name='login-button']",
        this.errorMessage = "//div[@class='error-message-container error']"
    }
};
module.exports = new LoginSelectors();