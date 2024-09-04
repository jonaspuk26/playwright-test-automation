import { Page, expect } from '@playwright/test';
import menPageInitialize, { MenPage } from '../pages/menPage';
import cartPageInitialize, { CartPage } from '../pages/cartPage'

let cartPage: CartPage;
let menPage: MenPage;


export const cartPageAsserts = {
    async initialize(page: Page) {
        cartPage = await cartPageInitialize({ page });
        menPage = await menPageInitialize({ page });
    },

    // Function to assert that navigation to hoodies was successful
    async assertFrankieSweatshirtCartDetailsAndProceed() {
        await cartPage.cartNumber.click();
        await expect(cartPage.cartItemName).toContainText('Frankie Sweatshirt');
        await cartPage.cartDetailsTablist.click();
        await expect(cartPage.cartDetailsActive).toContainText('M');
        await expect(cartPage.cartDetailsActive).toContainText('White');
        await cartPage.proceedToCheckoutButton.click();
    },

    async assertAddSuggestedItemAsThirdAndProceed() {
        await cartPage.viewAndEditCartButton.click();
        await cartPage.addToCartButton.nth(0).click();
        await expect(cartPage.cartNumber).toContainText('3', { timeout: 10000 });
        await cartPage.proceedToCheckoutButton.click();
    }

    // More assertion functions as needed...
};