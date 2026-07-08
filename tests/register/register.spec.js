import { test, expect } from '../../fixtures/testFixture';
import { user } from '../../utils/userData';


test.describe('Registration Module', () => {

    test('Register a new user account', async ({ page, registerPage }) => {
        await page.goto('/auth/register');

        await registerPage.enterFirstName('Venkatesh');
        await registerPage.enterLastName('Test');
        await registerPage.enterDob('1992-01-12');
        await registerPage.addressForm.enterCountry('India');
        await registerPage.addressForm.enterPostalCode('500072');
        await registerPage.addressForm.enterHouseNo('2-18');
        await page.waitForTimeout(3000);
        await registerPage.enterState('Telangana');
        await registerPage.enterPhone('1234567890');
        await registerPage.enterEmail(user.email);
        await registerPage.enterPassword(user.password);
        await registerPage.clickOnRegister();

        await expect(page).toHaveURL('/auth/login');
    });

});
