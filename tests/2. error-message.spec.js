/*Test Case to check if the error message fits the error banner container when user visits  
authenticated endpoint without authenticating - user*/

const { test, expect } = require('@playwright/test');

test('Error message text should fit inside the red banner on /cart.html', async ({ page }) => {
  // Go to cart page directly without login
  await page.goto('https://www.saucedemo.com/cart.html');

  // Select the banner and its text
  const banner = page.locator('.error-message-container');
  const text = banner.locator('h3');

  // Ensure the banner is visible
  await expect(banner).toBeVisible();

  // Get dynamic dimensions
  const bannerBox = await banner.boundingBox();
  const textBox = await text.boundingBox();

  // Log for debugging (optional)
  console.log('Banner size:', bannerBox);
  console.log('Text size:', textBox);

  // Assert the text fits inside the banner (dynamically)
  expect(textBox.height).toBeLessThanOrEqual(bannerBox.height);
  expect(textBox.width).toBeLessThanOrEqual(bannerBox.width);
});

test('Error message text should fit inside the red banner on /inventory.html', async ({ page }) => {
  // Go to cart page directly without login
  await page.goto('https://www.saucedemo.com/inventory.html');

  // Select the banner and its text
  const banner = page.locator('.error-message-container');
  const text = banner.locator('h3');

  // Ensure the banner is visible
  await expect(banner).toBeVisible();

  // Get dynamic dimensions
  const bannerBox = await banner.boundingBox();
  const textBox = await text.boundingBox();

  // Log for debugging (optional)
  console.log('Banner size:', bannerBox);
  console.log('Text size:', textBox);

  // Assert the text fits inside the banner (dynamically)
  expect(textBox.height).toBeLessThanOrEqual(bannerBox.height);
  expect(textBox.width).toBeLessThanOrEqual(bannerBox.width);
});