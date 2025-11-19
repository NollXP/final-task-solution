const { expect } = require('chai');
const loginPage = require('../pageObject/pages/login.page');
const homePage = require('../pageObject/pages/home.page');

const loginPageDataProvider = require('../pageObject/components/login-components/loginpage.dataprovider');
const homePageDataProvider = require('../pageObject/components/home-components/homepage.dataprovider');

const log = require('../utils/logger');

describe('Login page', () => {
  it('UC-1: should show an error when attempting to log in with empty credentials', async () => {
    const creds = loginPageDataProvider.invalid.invalidCredentials;

    log.info('Testing login with empty credentials');

    await loginPage.setCredentials(creds.username, creds.password);
    await loginPage.clearUsername();
    await loginPage.clearPassword();
    await loginPage.clickLoginButton();

    const errorText = await loginPage.getErrorMessage();
    expect(errorText).to.include(loginPageDataProvider.errors.emptyUsernameError);
  });

  it('UC-2: should show an error when attempting to log in without a password', async () => {
    const creds = loginPageDataProvider.invalid.invalidCredentials;

    log.info('Testing login with only username');

    await loginPage.setCredentials(creds.username, creds.password);
    await loginPage.clearPassword();
    await loginPage.clickLoginButton();

    const errorText = await loginPage.getErrorMessage();
    expect(errorText).to.include(loginPageDataProvider.errors.emptyPasswordError);
  });

  it('UC-3: should login successfully with valid credentials', async () => {
    const creds = loginPageDataProvider.valid.standardUser;
    const dataHomePage = homePageDataProvider.staticText;

    log.info('Login with valid credentials');

    await loginPage.setCredentials(creds.username, creds.password);
    await loginPage.clickLoginButton();

    const titleText = await homePage.getTitleText();
    expect(titleText).to.equal(dataHomePage.expectedTitle);
  });
});
