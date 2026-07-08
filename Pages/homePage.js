import BasePage from './basePage';

export default class HomePage extends BasePage {

    constructor(page) {
        super(page);
        this.signInLink = page.getByRole('link', { name: 'Sign in' });
        this.registerLink = page.getByRole('link', { name: 'Register' });
    }

    async goToLogin() {
        await this.signInLink.click();
    }

    async goToRegister() {
        await this.registerLink.click();
    }

}