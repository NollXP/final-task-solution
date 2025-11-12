const loginPage = require('../po/pages/login.page');
const basePage = require('../po/pages/base.page');
const credentials = require('../po/components/login-credentials/credentials');

describe('Login page', () => {
    
    beforeEach(async () => {
        await loginPage.open();
    });

    it('1. Test Login form with empty credentials:', async () => {
        await loginPage.setCredentials(credentials.invalidInput[0].username,credentials.invalidInput[0].password);
        await loginPage.clearUsername();
        await loginPage.clearPassword();
        await loginPage.LoginButton();
        //assert the error
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username is required');
    })
    it('2. Test Login form with credentials by passing Username:', async () => {
        //enter the credentials
        await loginPage.setCredentials(credentials.invalidInput[0].username,credentials.invalidInput[0].password);
        //delete the password
        await loginPage.clearPassword();
        await browser.pause(500);
        //click the login button
        await loginPage.LoginButton();
        //assert the error
     //   await expect(loginPage.getErrorMessage()).toHaveText('Epic sadface: Password is required');
    })

    it('3. Test Login form with credentials by passing Username & Password:', async () => {
        await loginPage.setCredentials(credentials.validInput[0].username,credentials.validInput[0].password);
        await loginPage.LoginButton();
        await basePage.LogoText.isDisplayed();
    })
});