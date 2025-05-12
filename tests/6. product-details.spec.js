// tests/product-details.spec.js

/*Test Case to view the product details */

const { test, expect } = require('@playwright/test');

test('View details of a product', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.click('.inventory_item_name');
  await expect(page.locator('.inventory_details_name')).toBeVisible();
});
