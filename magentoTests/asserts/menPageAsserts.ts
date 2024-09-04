import { Page, expect } from '@playwright/test';
import menPageInitialize, { MenPage } from '../pages/menPage';
import cartPageInitialize, { CartPage } from '../pages/cartPage'

let menPage: MenPage;
let cartPage: CartPage;

export const menPageAsserts = {
    async initialize(page: Page) {
        menPage = await menPageInitialize({ page });
        cartPage = await cartPageInitialize({ page });
    },

    // Function to assert that navigation to hoodies was successful
    async assertMenHoodiesQuantityPerPage() {
        await menPage.navigationMenuMen.hover();
        await menPage.navigationMenuMenTops.hover();
        await menPage.navigationMenuMenTopsHoodies.click();
        const expectedQuantity = 12;
        const actualQuantity = await menPage.items.count();
        await expect(menPage.quantityPerPage).toHaveText(expectedQuantity.toString());
        await expect(actualQuantity).toBe(expectedQuantity);
    },
    async assertAddedQuantityUpdatesCartNumber() {
        await menPage.frankieSweatshirt.click();
        await menPage.hoodieSize.click();
        await menPage.hoodieColor.click();
        await menPage.itemQantity.fill('2');
        await menPage.addToCartButton.click();
        await expect(cartPage.cartNumber).toContainText('2');
    },

    // More assertion functions as needed...
};
