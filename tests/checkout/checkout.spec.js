import { test, expect } from '../../fixtures/testFixture';


test.describe('Checkout Flow', () => {

    test.beforeEach(async ({ page, loginPage }) => {
        await page.goto('/auth/login');
        await loginPage.login('admin@practicesoftwaretesting.com', 'welcome01');
    });

    test('Complete checkout process with payment', async ({ page, productPage, checkoutPage }) => {
        await page.goto('/');
        await productPage.addProductToCart();
        await checkoutPage.completeCheckout();
    });

});