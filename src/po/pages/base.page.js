class BasePage {
    get LogoText() {
        return $("//span[@class='title']");
    }
}
module.exports = new BasePage();