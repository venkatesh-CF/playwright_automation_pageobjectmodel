import { test as base } from '@playwright/test';
import LoginPage from '../Pages/loginPage';
import RegisterPage from '../Pages/registerPage';
import ProductPage from '../Pages/productPage';
import CartPage from '../Pages/cartPage';
import CheckoutPage from '../Pages/checkoutPage';
import SearchPage from '../Pages/searchPage';
export { expect } from '@playwright/test';

export const test = base.extend({

    loginPage: async({page}, use) => {
        await use(new LoginPage(page));
    },

    registerPage: async({page}, use) => {
        await use(new RegisterPage(page));
    },

    productPage: async({page}, use) => {
        await use(new ProductPage(page));
    },

    cartPage: async({page}, use) => {
        await use(new CartPage(page));
    },

    checkoutPage: async({page}, use) => {
        await use(new CheckoutPage(page));
    },
    searchPage: async({page}, use) => {
        await use(new SearchPage(page));
    }

});

