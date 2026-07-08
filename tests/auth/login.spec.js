import { test, expect } from '../../fixtures/testFixture';

test.describe('Login Module', () => {

    test('Login with valid credentials', async ({ page, loginPage }) => {
        await page.goto('/auth/login');
        await loginPage.login('customer@practicesoftwaretesting.com', 'welcome01');
        await expect(page).toHaveURL('/account');
    });

});