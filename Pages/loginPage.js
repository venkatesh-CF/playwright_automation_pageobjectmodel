import BasePage from './basePage';
import { expect } from '@playwright/test';

export default class LoginPage extends BasePage {

    constructor(page) {
        super(page);
        this.emailInput = page.getByRole('textbox', { name: 'Email address' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await Promise.all([
        this.page.waitForURL('/admin/dashboard'),
        this.loginButton.click()
    ]);
        
    }
}
