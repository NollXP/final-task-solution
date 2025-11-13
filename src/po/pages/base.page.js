class BasePage {
    get TitalText() {
        return $("//span[@class='title']");
    }
}
module.exports = new BasePage();