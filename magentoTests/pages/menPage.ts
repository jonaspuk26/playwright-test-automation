import { Page, Locator } from '@playwright/test';

export interface MenPage {
    navigationMenuMen: Locator;
    navigationMenuMenTops: Locator;
    navigationMenuMenTopsHoodies: Locator;
    hoodieSize: Locator;
    hoodieColor: Locator;
    quantityPerPage: Locator;
    items: Locator;
    frankieSweatshirt: Locator;
    itemQantity: Locator;
    addToCartButton: Locator;
}

export default async function ({ page }: { page: Page }): Promise<MenPage> {
    const menPage: MenPage = {
        navigationMenuMen: page.locator('[id="ui-id-5"]'),
        navigationMenuMenTops: page.locator('[id = "ui-id-17"]'),
        navigationMenuMenTopsHoodies: page.locator('[id = "ui-id-20"]'),
        hoodieSize: page.locator('[option-id = "168"]'),
        hoodieColor: page.locator('[option-id = "59"]'),
        quantityPerPage: page.getByRole('option', { name: '12' }),
        items: page.locator('[class="product name product-item-name"]'),
        frankieSweatshirt: page.getByText('Frankie Sweatshirt'),
        itemQantity: page.getByTitle('Qty'),
        addToCartButton: page.getByTitle('Add to cart')
    };

    return menPage;
}
