import { Page, Locator } from '@playwright/test';

// Define a type for the homePage object
export interface CheckoutPage {
    checkoutEmail: Locator;
    checkoutFirstName: Locator;
    checkoutLastName: Locator;
    checkoutStreet: Locator;
    checkoutCity: Locator;
    checkoutStateSelect: Locator;
    checkoutZip: Locator;
    checkoutPhoneNumber: Locator;
    checkoutShippingRadio: Locator;
    checkoutNextButton: Locator;
    paymentPlaceOrderButton: Locator;
    billingAdressDetails: Locator;

    // Add other locators here as needed
}

// Default export that creates and returns the homePage object with locators
export default async function ({ page }: { page: Page }): Promise<CheckoutPage> {
    const checkoutPage: CheckoutPage = {
        checkoutEmail: page.locator(`[class="control _with-tooltip"] > [id="customer-email"]`),
        checkoutFirstName: page.locator('[name = "firstname"]'),
        checkoutLastName: page.locator('[name = "lastname"]'),
        checkoutStreet: page.locator('[name = "street[0]"]'),
        checkoutCity: page.locator('[name = "city"]'),
        checkoutStateSelect: page.locator('[name = "region_id"]'),
        checkoutZip: page.locator('[name = "postcode"]'),
        checkoutPhoneNumber: page.locator('[name = "telephone"]'),
        checkoutShippingRadio: page.locator('[name = "ko_unique_3"]'),
        checkoutNextButton: page.locator('[class="button action continue primary"]'),
        paymentPlaceOrderButton: page.locator('[title="Place Order"]'),
        billingAdressDetails: page.locator('[class="billing-address-details"]')

    };

    return checkoutPage;
}
