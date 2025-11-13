const loginPage = require('../po/pages/login.page');
const basePage = require('../po/pages/base.page');
const credentials = require('../po/components/login/credentials');

const input = credentials.validInput[0];

describe('Login page', () => {
    
    beforeEach(async () => {
        await loginPage.open();
    });

    it('1. Test Login form with empty credentials:', async () => {
        await loginPage.setCredentials(input.username,input.password);
        await loginPage.clearUsername();
        await loginPage.clearPassword();
        await loginPage.LoginButton();
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username is required');
    })
    it('2. Test Login form with credentials by passing Username:', async () => {
        await loginPage.setCredentials(input.username,input.password);
        await loginPage.clearPassword();
        await loginPage.LoginButton();
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Password is required');
    })

    it('3. Test Login form with credentials by passing Username & Password:', async () => {
        await loginPage.setCredentials(input.username,input.password);
        await loginPage.LoginButton();
        await basePage.TitalText.isDisplayed();
    })
});