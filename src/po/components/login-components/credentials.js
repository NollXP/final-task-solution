class LoginCredentials {
     constructor() {
        this.validUsername = 'standard_user';
        this.validPassword = 'secret_sauce';
        this.testUsername = 'invalid_user';
        this.testPassword = 'invalid_password';
    }
}

module.exports = new LoginCredentials();