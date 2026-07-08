import BasePage from './basePage';
import AddressForm from '../components/addressForm';


export default class RegisterPage extends BasePage {

    constructor(page) {
        super(page);
        this.addressForm = new AddressForm(page);
        this.firstNameInput = page.getByRole('textbox', { name: 'First name' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last name' });
        this.dobInput = page.getByRole('textbox', { name: 'Date of Birth *' });
        this.stateInput = page.getByRole('textbox', { name: 'State' });
        this.phoneInput = page.getByRole('textbox', { name: 'Phone' });
        this.emailInput = page.getByRole('textbox', { name: 'Email address' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.registerButton = page.getByRole('button', { name: 'Register' });
    }

    async enterFirstName(firstName) {
        await this.firstNameInput.fill(firstName);
    }

    async enterLastName(lastName) {
        await this.lastNameInput.fill(lastName);
    }

    async enterDob(dob) {
        await this.dobInput.fill(dob);
    }

    // async enterCountry() {
    //     await this.countryDropdown.selectOption('India');
    // }

    // async enterPostalCode(postalCode) {
    //     await this.postalCodeInput.fill(postalCode);
    // }

    async enterState(state) {
        await this.stateInput.fill(state);
    }

    async enterPhone(phone) {
        await this.phoneInput.fill(phone);
    }

    async enterEmail(email) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    // async enterHouseNo(houseNo) {
    //     await this.houseNoInput.fill(houseNo);
    // }

    async clickOnRegister() {
        await this.registerButton.click();
    }

    async register(userData) {
        await this.enterFirstName(userData.firstName);
        await this.enterLastName(userData.lastName);
        await this.enterDob(userData.dob);
        await this.addressForm.enterCountry(address.country);
        await this.addressForm.enterPostalCode(address.postalCode);
        await this.addressForm.enterHouseNo(address.houseNo);
        await this.enterState(userData.state);
        await this.enterPhone(userData.phone);
        await this.enterEmail(userData.email);
        await this.enterPassword(userData.password);
        await this.clickOnRegister();
    }

}

