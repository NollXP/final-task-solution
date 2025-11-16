const { expect } = require('chai');
const loginPage = require('../pageObject/pages/login.page');
const homePage = require('../pageObject/pages/home.page');
const loginPageDataProvider = require('../pageObject/components/login-components/loginpage.dataprovider');
const homePageDataProvider = require('../pageObject/components/home-components/homepage.dataprovider');
const log = require('../utils/logger');

describe('Login page', () => {
  it('UC-1 Test Login form with empty dataProvider:', async () => {
    const dataLogin = loginPageDataProvider.testImputs;
    log.info('Testing login with empty dataProvider');

    await loginPage.setCredentials(dataLogin.username, dataLogin.password);
    await loginPage.clearUsername();
    await loginPage.clearPassword();
    await loginPage.clickLoginButton();

    const errorText = await loginPage.getErrorMessage();
    expect(errorText).to.include(dataLogin.errorMessages.emptyUsername);
  });

  it('UC-2 Test Login form with dataProvider by passing Username:', async () => {
    const dataLogin = loginPageDataProvider.testImputs;
    log.info('Testing login with only username');

    await loginPage.setCredentials(dataLogin.username, dataLogin.password);
    await loginPage.clearPassword();
    await loginPage.clickLoginButton();

    const errorText = await loginPage.getErrorMessage();
    expect(errorText).to.include(dataLogin.errorMessages.emptyPassword);
  });

  it('UC-3 Test Login form with dataProvider by passing Username & Password:', async () => {
    const dataLogin = loginPageDataProvider.validInputs;
    const dataHomePage = homePageDataProvider.staticText;

    log.info('Validating the Title text after login');

    await loginPage.setCredentials(dataLogin.username, dataLogin.password);
    await loginPage.clickLoginButton();

    const titleText = await homePage.getTitleText();
    expect(titleText).to.equal(dataHomePage.expectedTital);
  });

  /**
   *  As per the assignment, we need to validate the page title, which should be "Swag Labs".
   *  However, the actual page title is "Products" and the relevant element is the logo.
   *  Therefore, in UC-3 we validate the logo text, In a separate test case, I decided to validate the actual page title
   */

  it('UC-4 Test Login form with dataProvider by passing Username & Password and validate the logo:', async () => {
    const dataLogin = loginPageDataProvider.validInputs;
    const dataHomePage = homePageDataProvider.staticText;

    log.info('Validating the Logo text after login');

    await loginPage.setCredentials(dataLogin.username, dataLogin.password);
    await loginPage.clickLoginButton();

    const logoText = await homePage.getLogoText();
    expect(logoText).to.equal(dataHomePage.expectedLogo);
  });
});
