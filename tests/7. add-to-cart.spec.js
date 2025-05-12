// tests/add-to-cart.spec.js

/*Test Case to add the product on cart */

const { test, expect } = require('@playwright/test');

test('Add one product to cart and verify cart count', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});
