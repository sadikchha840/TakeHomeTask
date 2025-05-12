/*Test Case to check the position of the cart icon from two different users*/

const { test, expect } = require('@playwright/test');

const PASSWORD = process.env.SAUCEDEMO_PASSWORD;

if (!PASSWORD) {
  //hiding the password in the code by setting up an environment variable for security reasons//
  throw new Error('Environment variable SAUCEDEMO_PASSWORD is not set.'); 
}

async function login(page, username) { //definition
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', username);
  await page.fill('#password', PASSWORD);
  await page.click('#login-button');
}

test('Visual User - shopping_cart_container should have correct styles', async ({ page }) => {
  await login(page, 'visual_user'); //call

  const cartContainer = page.locator('.shopping_cart_container');
  await expect(cartContainer).toBeVisible();

  const handle = await cartContainer.elementHandle();
  const style = await page.evaluate(el => {
    const s = window.getComputedStyle(el);
    return {
      height: s.height,
      width: s.width,
      position: s.position,
      top: s.top,
      right: s.right
    };
  }, handle);

  expect(style).toEqual({
    height: '40px',
    width: '40px',
    position: 'absolute',
    top: '10px',
    right: '20px'
  });
});

test('Standard User - shopping_cart_container should have correct styles', async ({ page }) => {
  await login(page, 'standard_user');

  const cartContainer = page.locator('.shopping_cart_container');
  await expect(cartContainer).toBeVisible();
  const handle = await cartContainer.elementHandle();
  //console.log("Handle:");
  //console.log(handle.styles);
  const style = await page.evaluate(el => {
    const s = window.getComputedStyle(el);
    return {
      height: s.height,
      width: s.width,
      position: s.position,
      top: s.top,
      right: s.right
    };
  }, handle);

  
  console.log("style:")
  console.log(style);

  expect(style).toEqual({
    height: '40px',
    width: '40px',
    position: 'absolute',
    top: '10px',
    right: '20px'
  });
});