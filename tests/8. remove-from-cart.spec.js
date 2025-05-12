// tests/remove-from-cart.spec.js

/*Test Case to remove the product from cart */

const { test, expect } = require('@playwright/test');

test('Remove product from cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('[data-test="remove-sauce-labs-backpack"]');
  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
});
