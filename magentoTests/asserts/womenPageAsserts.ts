import { Page, expect } from '@playwright/test';
import womenPageInitialize, { WomenPage } from '../pages/womenPage';
import cartPageInitialize, { CartPage } from '../pages/cartPage'

let womenPage: WomenPage;
let cartPage: CartPage;

export const womenPageAsserts = {
    async initialize(page: Page) {
        womenPage = await womenPageInitialize({ page });
        cartPage = await cartPageInitialize({ page });
    },

    async assertWomenPantsSortedByPrice(page) {
        await womenPage.navigationMenuWomen.hover();
        await womenPage.navigationMenuWomenBottoms.hover();
        await womenPage.navigationMenuWomenBottomsPants.click();
        await womenPage.sorterSelect.nth(0).click();
        await womenPage.sorterSelect.nth(0).selectOption({ value: 'price' });
        await page.waitForURL('https://magento.softwaretestingboard.com/women/bottoms-women/pants-women.html?product_list_order=price');
        const cheapestItemPrice = await womenPage.itemPrices.nth(0).getAttribute('data-price-amount')
        const secondItemPrice = await womenPage.itemPrices.nth(1).getAttribute('data-price-amount')
        await expect(parseFloat(cheapestItemPrice || "0") < parseFloat(secondItemPrice || "0")).toBe(true);
    },

    async assertAddAndDeleteItems() {
        for (let i = 1; i <= 3; i++) {
            await womenPage.items.nth(0).click();
            await womenPage.pantsSize.nth(0).click();
            await womenPage.pantsColor.nth(0).click();
            await womenPage.addToCartButton.nth(0).click();
            await expect(cartPage.cartNumber).toContainText(i.toString());
        }
        await cartPage.cartNumber.click();
        await cartPage.cartRemoveItemButton.nth(0).click();
        await cartPage.cartRemoveItemAcceptButton.click();
        await expect(cartPage.cartNumber).toContainText('2');
    },

    async assertAddSuggestedItem() {
        await cartPage.viewAndEditCartButton.click();
        await womenPage.addToCartButton.nth(0).click();
        await expect(cartPage.cartNumber).toContainText('3');
    }

};
