/*Test Case to check if the social media footer link is working*/

const { test, expect } = require('@playwright/test');

test.describe('Social Media Footer Links - standard_user', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('Twitter link is visible and navigates correctly', async ({ page }) => {
    const twitterLink = page.locator('.social_twitter a');
    await expect(twitterLink).toBeVisible();
    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      twitterLink.click()
    ]);
    await popup.waitForLoadState();
    expect(popup.url()).toContain('x.com/saucelabs');
  });

  test('Facebook link is visible and navigates correctly', async ({ page }) => {
    const facebookLink = page.locator('.social_facebook a');
    await expect(facebookLink).toBeVisible();
    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      facebookLink.click()
    ]);
    await popup.waitForLoadState();
    expect(popup.url()).toContain('facebook.com/saucelabs');
  });

  test('LinkedIn link is visible and navigates correctly', async ({ page }) => {
    const linkedinLink = page.locator('.social_linkedin a');
    await expect(linkedinLink).toBeVisible();
    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      linkedinLink.click()
    ]);
    await popup.waitForLoadState();
    expect(popup.url()).toContain('linkedin.com/company/sauce-labs');
  });

});
