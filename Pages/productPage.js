import BasePage from './basePage';

export default class ProductPage extends BasePage {

    constructor(page) {
        super(page);
        this.categoriesButton = page.locator('[data-test="nav-categories"]');
        this.subCategoryLink = page.locator('[data-test="nav-hand-tools"]')
        this.productLink = page.getByText('Pliers', { exact: true }).nth(1);
        this.addProductToCartButton = page.getByRole('button', { name: 'Add to cart' });
    }

    async clickOnCategories() {
        await this.page.waitForSelector('[data-test="nav-categories"]');
        await this.categoriesButton.click();
    }

    async clickOnSubCategory() {
        await this.page.waitForSelector('[data-test="nav-hand-tools"]');
        await this.subCategoryLink.click();
    }

    async clickOnProduct() {
        await this.productLink.click();
    }

    async addProductToCart() {
        await this.clickOnCategories();
        await this.page.waitForTimeout(2000); // Wait for 1 second before clicking on subcategory
        await this.clickOnSubCategory();
        await this.page.waitForTimeout(2000);
        await this.clickOnProduct();
        await this.addProductToCartButton.click();
    }

}
