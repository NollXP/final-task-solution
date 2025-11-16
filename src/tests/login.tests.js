const { expect } = require('chai');
const loginPage = require('../pageObject/pages/login.page');
const homeSelectors = require('../pageObject/components/home-components/home.selectors');
const dataProvider = require('../pageObject/components/login-components/data.Provider');
const log = require('../utils/logger');

describe('Login page', () => {

    it('UC-1 Test Login form with empty dataProvider:', async () => {
        const data = dataProvider.ClearedFields;
        log.info('Testing login with empty dataProvider');

        await loginPage.setCredentials(data.username, data.password);
        await loginPage.clearUsername();
        await loginPage.clearPassword();
        await loginPage.clickLoginButton();

        const errorText = await loginPage.getErrorMessage();
        await browser.pause(2000);
        expect(errorText).to.include(data.expectedUsernameError);
    });

    it('UC-2 Test Login form with dataProvider by passing Username:', async () => {
        const data = dataProvider.ClearedFields;
        log.info('Testing login with only username');

        await loginPage.setCredentials(data.username, data.password);
        await loginPage.clearPassword();
        await loginPage.clickLoginButton();
        await browser.pause(2000);
        const errorText = await loginPage.getErrorMessage();
        expect(errorText).to.include(data.expectedPasswordError);
    });

    it('UC-3 Test Login form with dataProvider by passing Username & Password:', async () => {
        const data = dataProvider.validCredentials;
        log.info('Testing login with valid username and password');

        await loginPage.setCredentials(data.username, data.password);
        await loginPage.clickLoginButton();
        await browser.pause(2000);
        const logoText = await $(homeSelectors.logoSelector).getText();
        expect(logoText).to.equal(data.expectedLogo);
    });
});