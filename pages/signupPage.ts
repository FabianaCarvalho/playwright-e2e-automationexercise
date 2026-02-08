import { Page, expect } from '@playwright/test';

export class SignupPage {
  constructor(private page: Page) {}

  async registerUser(
    name: string,
    email: string,
    password: string
  ): Promise<void> {

    // Garantia de que estamos na tela de Signup
    await expect(this.page.getByText('New User Signup!')).toBeVisible();

    await this.page.fill('input[data-qa="signup-name"]', name);
    await this.page.fill('input[data-qa="signup-email"]', email);
    await this.page.click('button[data-qa="signup-button"]');

    // Espera SEMÂNTICA no formulário de cadastro
    await expect(this.page.locator('#password')).toBeVisible({ timeout: 15000 });

    // Formulário
    await this.page.check('#id_gender2');
    await this.page.fill('#password', password);

    await this.page.selectOption('#days', '1');
    await this.page.selectOption('#months', '1');
    await this.page.selectOption('#years', '1990');

    await this.page.fill('#first_name', name);
    await this.page.fill('#last_name', 'Test');
    await this.page.fill('#address1', 'Rua Teste');
    await this.page.selectOption('#country', 'Canada');
    await this.page.fill('#state', 'Ontario');
    await this.page.fill('#city', 'Toronto');
    await this.page.fill('#zipcode', '12345');
    await this.page.fill('#mobile_number', '1234567890');

    await this.page.click('button[data-qa="create-account"]');

    // Confirmação final (mais estável que getByText puro)
    await expect(
      this.page.locator('h2[data-qa="account-created"]')
    ).toBeVisible({ timeout: 15000 });
  }
}
