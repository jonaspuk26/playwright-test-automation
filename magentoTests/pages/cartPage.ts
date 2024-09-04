import { Page, Locator } from '@playwright/test';

// Define a type for the homePage object
export interface CartPage {
    cartNumber: Locator;
    cartItemName: Locator;
    cartDetailsTablist: Locator;
    cartDetailsActive: Locator;
    proceedToCheckoutButton: Locator;
    cartRemoveItemButton: Locator;
    cartRemoveItemAcceptButton: Locator;
    viewAndEditCartButton: Locator;
    addToCartButton: Locator;
    // Add other locators here as needed
}

// Default export that creates and returns the homePage object with locators
export default async function ({ page }: { page: Page }): Promise<CartPage> {
    const cartPage: CartPage = {

        cartNumber: page.locator('[class = "counter-number"]'),
        cartItemName: page.locator('[data-bind = "attr: {href: product_url}, html: product_name"]'),
        cartDetailsTablist: page.locator('[class="product options"]'),
        cartDetailsActive: page.locator('[class="product options active"]'),
        proceedToCheckoutButton: page.getByRole('button', { name: 'Proceed to Checkout' }),
        cartRemoveItemButton: page.locator('[title="Remove item"]'),
        cartRemoveItemAcceptButton: page.locator('[class="action-primary action-accept"]'),
        viewAndEditCartButton: page.locator(`[data-bind="i18n: 'View and Edit Cart'"]`),
        addToCartButton: page.getByTitle('Add to cart')
    };

    return cartPage;
}
