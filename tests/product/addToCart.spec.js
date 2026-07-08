import { test, expect } from '../../fixtures/testFixture';

test.describe('Add to Cart', () => {

    test.beforeEach(async ({ page, loginPage }) => {
        await page.goto('/auth/login');
        await loginPage.login('admin@practicesoftwaretesting.com', 'welcome01');
    });

    test('Add product to cart from categories', async ({ page, productPage }) => {
        await page.goto('/');
        await productPage.clickOnCategories();
        await productPage.clickOnSubCategory();
        await productPage.clickOnProduct();
        await expect(page.getByRole('heading', { name: 'Pliers', exact: true })).toBeVisible();
    });

});