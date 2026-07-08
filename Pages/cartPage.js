import BasePage from './basePage';

export default class CartPage extends BasePage {

    constructor(page) {
        super(page);
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
        this.cartIcon = page.getByRole('img').first();
    }

    async clickOnAddToCart() {
        await this.addToCartButton.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }

}
