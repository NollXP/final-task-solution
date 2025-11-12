describe('Login page', () => {
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com')
    });

    it('1. Test Login form with empty credentials:', async () => {
        await $("//input[@name='user-name']").setValue('test');
        await $("//input[@name='password']").setValue('123Test');
        //.clearValue(); didn't work :(
        await $("//input[@name='user-name']").doubleClick();
        await browser.keys('Backspace');
        await $("//input[@name='password']").doubleClick();
        await browser.keys('Backspace');
        await $("//input[@name='login-button']").click();
        await expect($("//div[@class='error-message-container error']")).toHaveText('Epic sadface: Username is required');
    })
    
    it('2. Test Login form with credentials by passing Username:', async () => {
        await $("//input[@name='user-name']").setValue('test');
        await $("//input[@name='password']").setValue('123Test');
        await $("//input[@name='password']").click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
        await browser.pause(500);
        await $("//input[@name='login-button']").click();
        await expect($("//div[@class='error-message-container error']")).toHaveText('Epic sadface: Password is required');
    })

    it('3. Test Login form with credentials by passing Username & Password:', async () => {
        await $("//input[@name='user-name']").setValue('standard_user');
        await $("//input[@name='password']").setValue('secret_sauce');
        await $("//input[@name='login-button']").click();
        await ($("//div[@class='app_logo']")).isDisplayed();
    })
});