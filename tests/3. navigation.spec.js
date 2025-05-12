// File: tests/ui-navigation.spec.js
/*TestCases for navigation (Burger Menu button)*/

const { test, expect } = require('@playwright/test');

test.describe('Navigation Menu - SauceDemo Inventory Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('Menu button (3 lines) should be visible', async ({ page }) => {
    await expect(page.locator('#react-burger-menu-btn')).toBeVisible();
  });

  test('Clicking menu button should open the side navigation', async ({ page }) => {
    await page.click('#react-burger-menu-btn');
    await expect(page.locator('.bm-menu')).toBeVisible();
  });

  test('Navigation menu should contain "All Items" link', async ({ page }) => {
    await page.click('#react-burger-menu-btn');
    await expect(page.locator('#inventory_sidebar_link')).toHaveText('All Items');
  });

  test('Navigation menu should contain "About" link', async ({ page }) => {
    await page.click('#react-burger-menu-btn');
    await expect(page.locator('#about_sidebar_link')).toHaveText('About');
  });

  test('Navigation menu should contain "Logout" link', async ({ page }) => {
    await page.click('#react-burger-menu-btn');
    await expect(page.locator('#logout_sidebar_link')).toHaveText('Logout');
  });

  test('Navigation menu should contain "Reset App State" link', async ({ page }) => {
    await page.click('#react-burger-menu-btn');
    await expect(page.locator('#reset_sidebar_link')).toHaveText('Reset App State');
  });

 test('Clicking close (X) button should close the menu', async ({ page }) => {
  await page.click('#react-burger-menu-btn');
  await expect(page.locator('.bm-menu')).toBeVisible(); // Confirm menu opens

  await page.click('#react-burger-cross-btn');

  // Wait for the menu to disappear (animation delay accounted)
  await expect(page.locator('.bm-menu')).toBeHidden();
});


  test('Clicking "About" link should navigate to external site', async ({ page }) => {
  await page.click('#react-burger-menu-btn');

  // Intercept the navigation instead of expecting a popup
  const [response] = await Promise.all([
    page.waitForNavigation(),
    page.click('#about_sidebar_link')
  ]);

  expect(page.url()).toContain('saucelabs.com');
});


  test('Clicking "Logout" should return user to login page', async ({ page }) => {
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

  test('Menu should slide in from the left', async ({ page }) => {
    await page.click('#react-burger-menu-btn');
    const transformValue = await page.locator('.bm-menu-wrap').evaluate(el => getComputedStyle(el).transform);
    expect(transformValue).toContain('matrix(1, 0, 0, 1'); // Indicates visible on left
  });

});
