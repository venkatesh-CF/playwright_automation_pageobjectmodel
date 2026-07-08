export default class AddressForm {

    constructor(page) {
        this.country = page.getByRole('combobox', { name: 'Country' });
        this.postalCode = page.getByRole('textbox', { name: 'Postal code' });
        this.houseNo = page.getByRole('textbox', { name: 'House number' });
    }

    async enterCountry(country) {
        await this.country.selectOption(country);
    }

    async enterPostalCode(postalcode) {
        await this.postalCode.fill(postalcode);
    }

    async enterHouseNo(hno) {
        await this.houseNo.fill(hno);
    }
}