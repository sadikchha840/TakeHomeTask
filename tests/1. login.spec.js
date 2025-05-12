// File: tests/ui-login.spec.js, Total: 10 Test cases for login feature

/*Test Case to check for login feature, Includes both UI and Functional testing of the application*/


const { test, expect } = require('@playwright/test');

test.describe('UI Validation - SauceDemo Login Page', () => {


//Login is required to access the inventory page, so it's handled in beforeEach()
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  
  //UI testing of login feature 
  

   test('Username input field should be visible and have correct placeholder', async ({ page }) => {
    const username = page.locator('#user-name');
    await expect(username).toBeVisible();
    await expect(username).toHaveAttribute('placeholder', 'Username');
  });

  test('Password input field should be visible and have correct placeholder', async ({ page }) => {
    const password = page.locator('#password');
    await expect(password).toBeVisible();
    await expect(password).toHaveAttribute('placeholder', 'Password');
  });

  test('Login form container should have expected dimensions', async ({ page }) => {
    const loginBox = await page.locator('.login-box').boundingBox();
    expect(loginBox).not.toBeNull();
    expect(loginBox.width).toBeGreaterThan(250);
    expect(loginBox.height).toBeGreaterThan(200);
  });

  test('Login button should be visible and clickable', async ({ page }) => {
    const loginBtn = page.locator('#login-button');
    await expect(loginBtn).toBeVisible();
    await expect(loginBtn).toBeEnabled();
  });

  test('Login button text should be "Login"', async ({ page }) => {
    await expect(page.locator('#login-button')).toHaveText('Login');
  });

  test('Login button should be horizontally centered', async ({ page }) => {
    const btnBox = await page.locator('#login-button').boundingBox();
    const screenWidth = await page.evaluate(() => window.innerWidth);
    const centerDistance = Math.abs((screenWidth / 2) - (btnBox.x + btnBox.width / 2));
    expect(centerDistance).toBeLessThan(100); 
  });

 test('The "Swag Labs" logo should appear on the login screen', async ({ page }) => {
    const logo = page.locator('.login_logo');
    await expect(logo).toBeVisible();
    await expect(logo).toHaveText('Swag Labs');
  });
  
  //Functional Testing of login feature
  //Count=3

  test('Login the saucedemo site using valid credentials', async({ page }) => {
  
  await page.goto('https://www.saucedemo.com/'); //dummy website

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  
  await page.click('#login-button');

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.title')).toHaveText('Products');
});


  test('Attempting to log in with empty fields should display an error message', async ({ page }) => {
    await page.click('#login-button');
    const errorMsg = page.locator('[data-test="error"]');
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toContainText('Username is required');
  });

test('Login with invalid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'wrong_user');
  await page.fill('#password', 'wrong_pass');
  await page.click('#login-button');
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

 
});
