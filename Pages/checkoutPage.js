import { expect } from '@playwright/test';
import BasePage from './basePage';
import registerPage from './registerPage';
import AddressForm from '../components/addressForm';


export default class CheckoutPage extends BasePage {

    constructor(page) {
        super(page);
        this.addressForm = new AddressForm(page);
        this.checkoutButton = page.getByRole('link', { name: 'cart' });
        this.proceedToCheckout1Button = page.locator('button[data-test=\'proceed-1\']');
        this.proceedToCheckout2Button = page.locator('button[data-test=\'proceed-2\']');
        this.proceedToCheckout3Button = page.locator('button[data-test=\'proceed-3\']');
        this.paymentMethodDropdown = page.locator('[data-test="payment-method"]');
        this.confirmButton = page.getByRole('button', { name: 'Confirm' });
        this.paymentSuccessMessage = page.getByText('Payment was successful');
        this.orderConfirmationMessage = page.getByText('Thanks for your order! Your');
    }

    async clickOnCheckout() {
        await this.checkoutButton.click();
    }

    async clickOnProceedToCheckout1() {
        await this.proceedToCheckout1Button.click();
    }

    async clickOnProceedToCheckout2() {
        await this.proceedToCheckout2Button.click();
    }

    async clickOnProceedToCheckout3() {
        await this.proceedToCheckout3Button.click();
    }

    async choosePaymentMethod() {
        await this.paymentMethodDropdown.selectOption('cash-on-delivery');

    }

    async clickOnConfirm() {
        await this.confirmButton.click();
    }

    async verifyPaymentSuccess() {
        await expect(this.paymentSuccessMessage).toBeVisible();
    }

    async verifyOrderConfirmation() {
        await expect(this.orderConfirmationMessage).toBeVisible();
        const invoiceNumber = await this.orderConfirmationMessage.textContent();
        console.log('Invoice Number:', invoiceNumber);
    }

    async completeCheckout() {
        await this.clickOnCheckout();
        await this.clickOnProceedToCheckout1();
        await this.page.waitForTimeout(2000); // Wait for 2 seconds before proceeding
        await this.clickOnProceedToCheckout2();
        await this.page.waitForTimeout(2000);
        await this.addressForm.enterCountry('India');
        await this.addressForm.enterPostalCode('500072');
        await this.addressForm.enterHouseNo('2-18');
        await this.page.waitForTimeout(2000);
        await this.clickOnProceedToCheckout3();
        await this.page.waitForTimeout(3000);
        await this.choosePaymentMethod('Cash On Delivery');
        await this.clickOnConfirm();
        await this.page.waitForTimeout(2000);
        await this.verifyPaymentSuccess();
        await this.page.waitForTimeout(2000);
        await this.clickOnConfirm();
        await this.verifyOrderConfirmation();
    }

}
