import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  private readonly page: Page;

  // Locators
  private readonly productsLink: Locator;
  private readonly productCards: Locator;
  private readonly addToCartButtons: Locator;
  private readonly modalTitle: Locator;
  private readonly viewCartButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productsLink = page.getByRole('link', { name: /products/i });
    this.productCards = page.locator('.productinfo');
    this.addToCartButtons = page.locator('.add-to-cart');
    this.modalTitle = page.getByText('Added!');
    this.viewCartButton = page.getByRole('link', { name: /view cart/i });
  }

  // 🔹 Navegação
  async goToProducts(): Promise<void> {
    await this.productsLink.click();
    await expect(this.page).toHaveURL(/products/i);
  }

  // 🔹 Ações
  async addProductToCartByIndex(index = 0): Promise<void> {
    await this.addToCartButtons.nth(index).click();
  }

  async addProductAndGoToCart(): Promise<void> {
    await this.addProductToCartByIndex();
    await expect(this.modalTitle).toBeVisible({ timeout: 10000 });
    await this.viewCartButton.click();
  }

  // 🔹 Validações
  async expectProductsToBeVisible(): Promise<void> {
    await expect(this.productCards.first()).toBeVisible({ timeout: 10000 });
  }

  async expectAddToCartModal(): Promise<void> {
    await expect(this.modalTitle).toBeVisible({ timeout: 10000 });
  }
}
