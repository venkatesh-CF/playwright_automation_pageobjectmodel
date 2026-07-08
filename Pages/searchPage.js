import BasePage from './basePage';

export default class SearchPage extends BasePage {

    constructor(page) {
        super(page);
        this.searchInput = page.getByRole('textbox', { name: 'Search' })
    }

    async search(query) {
        await this.searchInput.fill(query);
    }

}