import { Page, expect } from '@playwright/test';
import checkoutPageInitialize, { CheckoutPage } from '../pages/checkoutPage'

let checkoutPage: CheckoutPage;

const checkoutValues = {
    firstName: 'First',
    lastName: 'Last',
    street: 'Test',
    city: 'Test',
    stateOption: '2',
    zip: '99501',
    phoneNumber: '555'
};



export const checkoutPageAsserts = {
    async initialize(page: Page) {
        checkoutPage = await checkoutPageInitialize({ page });
    },

    async assertFullCheckout(page) {
        await page.waitForURL('https://magento.softwaretestingboard.com/checkout/#shipping');
        await checkoutPage.checkoutEmail.click();
        await checkoutPage.checkoutEmail.fill('test1@test.test');
        await checkoutPage.checkoutFirstName.click();
        await checkoutPage.checkoutFirstName.fill(checkoutValues.firstName);
        await checkoutPage.checkoutLastName.click();
        await checkoutPage.checkoutLastName.fill(checkoutValues.lastName);
        await checkoutPage.checkoutStreet.click();
        await checkoutPage.checkoutStreet.fill(checkoutValues.street);
        await checkoutPage.checkoutCity.click();
        await checkoutPage.checkoutCity.fill(checkoutValues.city);
        await checkoutPage.checkoutStateSelect.selectOption({ value: checkoutValues.stateOption });
        await checkoutPage.checkoutZip.click();
        await checkoutPage.checkoutZip.fill(checkoutValues.zip);
        await checkoutPage.checkoutPhoneNumber.click();
        await checkoutPage.checkoutPhoneNumber.fill(checkoutValues.phoneNumber);
        await checkoutPage.checkoutShippingRadio.check();
        await checkoutPage.checkoutNextButton.click();
        await checkoutPage.paymentPlaceOrderButton.click();
        await expect(checkoutPage.billingAdressDetails).toContainText(checkoutValues.firstName)
        await expect(checkoutPage.billingAdressDetails).toContainText(checkoutValues.lastName)
        await expect(checkoutPage.billingAdressDetails).toContainText(checkoutValues.street)
        await expect(checkoutPage.billingAdressDetails).toContainText(checkoutValues.city)
        await expect(checkoutPage.billingAdressDetails).toContainText('Alaska')
        await expect(checkoutPage.billingAdressDetails).toContainText(checkoutValues.zip)
        await expect(checkoutPage.billingAdressDetails).toContainText(checkoutValues.phoneNumber)
    },
};