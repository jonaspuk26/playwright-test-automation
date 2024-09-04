import { test, expect } from '@playwright/test';
import { menPageAsserts } from './asserts/menPageAsserts';
import { cartPageAsserts } from './asserts/cartPageAsserts';
import { checkoutPageAsserts } from './asserts/CheckoutPageAsserts';
import { womenPageAsserts } from './asserts/womenPageAsserts';


test.beforeEach(async ({ page }) => {
  await menPageAsserts.initialize(page);
  await cartPageAsserts.initialize(page);
  await checkoutPageAsserts.initialize(page);
  await womenPageAsserts.initialize(page);
  await page.goto('https://magento.softwaretestingboard.com/');
});

test('@e2e - buy a mens hoodie', async ({ page }) => {
  await menPageAsserts.assertMenHoodiesQuantityPerPage();
  await menPageAsserts.assertAddedQuantityUpdatesCartNumber();
  await cartPageAsserts.assertFrankieSweatshirtCartDetailsAndProceed();
  await checkoutPageAsserts.assertFullCheckout(page);
});

test('@e2e - buy women items', async ({ page }) => {
  await womenPageAsserts.assertWomenPantsSortedByPrice(page);
  await womenPageAsserts.assertAddAndDeleteItems();
  await cartPageAsserts.assertAddSuggestedItemAsThirdAndProceed();
  await checkoutPageAsserts.assertFullCheckout(page);
});
