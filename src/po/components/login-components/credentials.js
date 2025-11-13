class LoginCredentials {
     constructor() {
        this.validUsername = 'standard_user',
        this.validPassword = 'secret_sauce',
        this.testUsername = 'invalid_user',
        this.testPassword = 'invalid_password',
        this.userErrorMessage = 'Username is required',
        this.passwordErrorMessage = 'Password is required'
    };
};

module.exports = new LoginCredentials();