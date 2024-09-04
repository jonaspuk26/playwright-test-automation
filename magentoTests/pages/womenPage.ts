import { Page, Locator } from '@playwright/test';

export interface WomenPage {
    navigationMenuWomen: Locator;
    navigationMenuWomenBottoms: Locator;
    navigationMenuWomenBottomsPants: Locator;
    sorterSelect: Locator;
    items: Locator;
    pantsSize: Locator;
    pantsColor: Locator;
    addToCartButton: Locator;
    itemPrices: Locator;
}

export default async function ({ page }: { page: Page }): Promise<WomenPage> {
    const womenPage: WomenPage = {
        navigationMenuWomen: page.locator('[id = "ui-id-4"]'),
        navigationMenuWomenBottoms: page.locator('[id = "ui-id-10"]'),
        navigationMenuWomenBottomsPants: page.locator('[id = "ui-id-15"]'),
        sorterSelect: page.locator('[data-role="sorter"]'),
        items: page.locator('[class="product name product-item-name"]'),
        pantsSize: page.locator('[class="swatch-option text"]'),
        pantsColor: page.locator('[class="swatch-option color"]'),
        addToCartButton: page.getByRole('button', { name: 'Add to Cart' }),
        itemPrices: page.locator('[data-price-amount]'),

    };

    return womenPage;
}
