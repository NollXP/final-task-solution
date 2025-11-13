const { expect } = require('chai');
const loginPage = require('../po/pages/login.page');
const basePage = require('../po/pages/base.page');
const LoginCredentials = require('../po/components/login-components/credentials');
const log = require('../utils/logger');

describe('Login page', () => {
    
    beforeEach(async () => {
        await loginPage.open();
    });

    it('1. Test Login form with empty credentials', async () => {
        log.info('Testing login with empty credentials');
        await loginPage.setCredentials(LoginCredentials.testUsername, LoginCredentials.testPassword);
        await loginPage.clearUsername();
        await loginPage.clearPassword();
        await loginPage.LoginButton();
        
        const errorText = await loginPage.errorMessage.getText();
        expect(errorText).to.include('Username is required');
    });

    it('2. Test Login form with credentials by passing Username', async () => {
        log.info('Testing login with only username');
        await loginPage.setCredentials(LoginCredentials.testUsername, LoginCredentials.testPassword);
        await loginPage.clearPassword();
        await loginPage.LoginButton();
        
        const errorText = await loginPage.errorMessage.getText();
        expect(errorText).to.include('Password is required');
    });

    it('3. Test Login form with credentials by passing Username & Password', async () => {
        log.info('Testing login with valid username and password');
        await loginPage.setCredentials(LoginCredentials.validUsername, LoginCredentials.validPassword);
        await loginPage.LoginButton();
        
        const isDisplayed = await basePage.TitalText.isDisplayed();
        expect(isDisplayed).to.be.true;
    });
});