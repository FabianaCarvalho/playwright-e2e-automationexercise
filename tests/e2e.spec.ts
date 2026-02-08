import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { SignupPage } from '../pages/signupPage';
import { ProductsPage } from '../pages/productsPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { validVisaPayment } from '../test-data/payment';

test('E2E AutomationExercise Playwright + TS', async ({ page }) => {
  const userName = 'Fabiana';
  const userEmail = `fabiana_${Date.now()}@email.com`;
  const userPassword = 'Test@1234';

  const home = new HomePage(page);
  const signup = new SignupPage(page);
  const products = new ProductsPage(page);
  const checkout = new CheckoutPage(page);

  // Home
  await home.goto();
  await home.navigateToLogin();

  // Signup
  await signup.registerUser(userName, userEmail, userPassword);

  // 🔥 Products (NAVEGAÇÃO EXPLÍCITA)
  await products.goToProducts();
  await products.expectProductsToBeVisible();
  await products.addProductAndGoToCart();

  // Checkout
  await checkout.completeCheckout(validVisaPayment);
});
