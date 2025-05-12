/*TestCases for the correct position of (Burger Menu button) from two different users*/
const { test, expect } = require('@playwright/test');

async function login(page, username) {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', username);
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
}

async function checkBurgerIconNotRotated(page) {
  const burgerIconImg = page.locator('img[alt="Open Menu"]');
  await expect(burgerIconImg).toBeVisible();

  const handle = await burgerIconImg.elementHandle();
  
  const computedStyleHandle = await page.evaluateHandle(el => getComputedStyle(el), handle);
  const transformValue = await computedStyleHandle.getProperty('transform').then(prop => prop.jsonValue());

  expect(
    transformValue === 'none' || transformValue === 'matrix(1, 0, 0, 1, 0, 0)'
  ).toBeTruthy();
}

test('Standard User - Burger icon image should be straight (no rotation)', async ({ page }) => {
  await login(page, 'standard_user');
  await checkBurgerIconNotRotated(page);
});

test('Visual User - Burger icon image should be straight (no rotation)', async ({ page }) => {
  await login(page, 'visual_user');
  await checkBurgerIconNotRotated(page);
});
