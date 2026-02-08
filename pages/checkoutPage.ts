import { Page, expect } from '@playwright/test';
import { PaymentData } from '../types/payment';

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  private proceedToCheckoutButton = this.page.locator('text=Proceed To Checkout');
  private placeOrderButton = this.page.locator('text=Place Order');
  private payButton = this.page.locator('text=Pay and Confirm Order');
  private successMessage = this.page.locator(
    'text=Your order has been placed successfully!'
  );

  private async fillPaymentForm(payment: PaymentData) {
  await this.page.fill('input[name="name_on_card"]', payment.nameOnCard);
  await this.page.fill('input[name="card_number"]', payment.cardNumber);
  await this.page.fill('input[name="cvc"]', payment.cvc);
  await this.page.fill('input[name="expiry_month"]', payment.expiryMonth);
  await this.page.fill('input[name="expiry_year"]', payment.expiryYear);
}

  async completeCheckout(payment: PaymentData) {
  await this.proceedToCheckoutButton.click();
  await this.placeOrderButton.click();

  await this.fillPaymentForm(payment);
  await this.payButton.click();

  // ✅ validação final estável
  await expect(this.page).toHaveURL(/payment_done/);
  }


  private async proceedToCheckout() {
    await expect(this.proceedToCheckoutButton).toBeVisible();
    await this.proceedToCheckoutButton.click();
  }

  private async addOrderMessage(message = 'Automated test order') {
    await this.page.fill('textarea[name="message"]', message);
  }

  private async placeOrder() {
    await expect(this.placeOrderButton).toBeEnabled();
    await this.placeOrderButton.click();
  }

  private async fillPaymentDetails(payment: PaymentData) {
    await this.page.fill('input[name="name_on_card"]', payment.nameOnCard);
    await this.page.fill('input[name="card_number"]', payment.cardNumber);
    await this.page.fill('input[name="cvc"]', payment.cvc);
    await this.page.fill('input[name="expiry_month"]', payment.expiryMonth);
    await this.page.fill('input[name="expiry_year"]', payment.expiryYear);
  }

  private async confirmPayment() {
    await expect(this.payButton).toBeEnabled();
    await this.payButton.click();
  }

  private async assertOrderCompleted() {
    await expect(this.successMessage).toBeVisible({ timeout: 60000 });
  }
}
