const loginPage = require('../po/pages/login.page');
const basePage = require('../po/pages/base.page');
describe('Login page', () => {
    
    beforeEach(async () => {
        await loginPage.open();
    });

    it('1. Test Login form with empty credentials:', async () => {
        //enter the credentials
        await loginPage.setCredentials();
        //bouth fields
        await loginPage.clearUsername();
        await loginPage.clearPassword();
        await browser.pause(500);
        //click the login button
        await loginPage.LoginButton();
        //assert the error
      //  await expect(loginPage.getErrorMessage()).toHaveText('Epic sadface: Username is required');
    })
    it('2. Test Login form with credentials by passing Username:', async () => {
        //enter the credentials
        await loginPage.setCredentials();
        //delete the password
        await loginPage.clearPassword();
        await browser.pause(500);
        //click the login button
        await loginPage.LoginButton();
        //assert the error
     //   await expect(loginPage.getErrorMessage()).toHaveText('Epic sadface: Password is required');
    })

    it('3. Test Login form with credentials by passing Username & Password:', async () => {
        await loginPage.setCredentials();
        await loginPage.LoginButton();
        await basePage.LogoText.isDisplayed();
    })
});