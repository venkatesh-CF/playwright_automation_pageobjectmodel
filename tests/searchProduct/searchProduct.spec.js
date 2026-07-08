import { test, expect } from '../../fixtures/testFixture';
test.describe('Search Product check', () => {

    test('Search for a product', async ({ page, searchPage }) => {
        await page.goto('/');

        await searchPage.search('Bolt Cutters');
        await page.waitForTimeout(2000); // Wait for 2 seconds before proceeding
        await expect(page.getByRole('heading', { name: 'Bolt Cutters', exact: true })).toBeVisible();
    });

});
       
