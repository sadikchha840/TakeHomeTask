// tests/filter-products.spec.js

/*Test Case to filter the products from the dropdown option of the application*/

const { test, expect } = require('@playwright/test');

test('Filter products by price low to high', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.selectOption('.product_sort_container', 'lohi');

  const prices = await page.$$eval('.inventory_item_price', nodes =>
    nodes.map(n => parseFloat(n.innerText.replace('$', '')))
  );
  const sorted = [...prices].sort((a, b) => a - b);
  expect(prices).toEqual(sorted);
});
