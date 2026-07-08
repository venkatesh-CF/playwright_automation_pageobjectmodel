export default class BasePage {

    constructor(page) {
        this.page = page;
    }

    async open(url) {
        await this.page.goto(url);
    }

    async getTitle() {
        return await this.page.title();
    }

    async getURL() {
        return this.page.url();
    }

    async wait(seconds) {
        await this.page.waitForTimeout(seconds * 1000);
    }

    async click(locator) {
        await locator.click();
    }

    async fill(locator, value) {
        await locator.fill(value);
    }

}