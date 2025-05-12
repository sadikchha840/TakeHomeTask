
# Playwright Test Automation - SauceDemo

This repository contains a Playwright-based test automation suite for [SauceDemo](https://www.saucedemo.com), a sample e-commerce site used for QA testing and automation practice.


## Features

- Automated UI and functional testing using [Playwright](https://playwright.dev/)
- Covers mostly positive test scenarios
- Can be executed headlessly or with UI

---

## Test Coverage

-Feature Area | Login Page, Products Page, Filter, Cart, Navigation (Burger Menu), Logout, Social Media Links (Footer) 

| Feature Area             | Test Cases                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| Login Page               | Valid login, invalid login, empty fields error, username field UI, password field UI, login button UI, form container size, logo visibility, login button alignment |
| Products Page            | Product display verification, product sorting                                                                    |
| Cart                     | Add to cart, remove from cart, cart item count, view cart UI                                                      |
| Checkout Flow            | Form validation (first name, last name, postal code), continue to overview, complete order, success message       |
| Navigation (Burger Menu) | Logout functionality, continue shopping button                                                                    |
| Logout                   |    |
| Social Media Links       | Twitter link, Facebook link, LinkedIn link functionality and redirection                                          |

---

## Project Structure

```
TAKE HOME TASK/
├── .github/                     # GitHub-specific configurations (e.g., workflows)
├── node_modules/                # Node.js dependencies
├── playwright-report/          # Automatically generated Playwright HTML test reports
├── test-results/               # Raw test result outputs
├── tests/                      # Main test directory
│   ├── 1. login.spec.js                 # Login functionality test
│   ├── 2. error-message.spec.js        # Invalid login error message test
│   ├── 3. navigation.spec.js           # Navbar and page navigation test
│   ├── 4. BurgerButton.spec.js         # Burger menu functionality test
│   ├── 5. filter-products.spec.js      # Product filtering feature test
│   ├── 6. product-details.spec.js      # Product detail page validation
│   ├── 7. add-to-cart.spec.js          # Add items to cart functionality
│   ├── 8. remove-from-cart.spec.js     # Remove items from cart functionality
│   ├── 9. CartIcon.spec.js             # Cart icon update behavior
│   ├── 10. checkout-flow.spec.js       # Complete checkout process test
│   ├── 11. social-links.spec.js        # Social media links verification
│
├── tests-examples/
│   └── demo-todo-app.spec.js           # Example test for reference
│
├── .gitignore                  # Specifies files and folders to be ignored by Git
├── package.json                # Project metadata and dependencies
├── package-lock.json           # Locked versions of installed dependencies
└── playwright.config.js        # Playwright test runner configuration

```

---



### Install dependencies

```bash
npm install
```

### 3. Install Playwright Browsers

```bash
npx playwright install
```

---

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run tests for a specific file

```bash
npx playwright test tests/login.test.js
```

### Run with UI reporter

```bash
npx playwright test --ui
```

---

## Reports & Debugging

### Generate HTML Report

```bash
npx playwright show-report
```

After test execution, a detailed HTML report will open in your browser showing test outcomes.

---

## Cross-Browser Testing (Optional)

Modify `playwright.config.js` to include:

```ts
projects: [
  { name: 'Chromium', use: { browserName: 'chromium' } },
  { name: 'Firefox', use: { browserName: 'firefox' } },
  { name: 'WebKit', use: { browserName: 'webkit' } },
],
```

Then run:

```bash
npx playwright test
```

---

## Environment Variables (Optional)

To keep credentials or test URLs separate:

1. Install dotenv
```bash
npm install dotenv
```

2. Create `.env`
```env
BASE_URL=https://www.saucedemo.com
STANDARD_USER=standard_user
PASSWORD=secret_sauce
```

3. Load values in your config or utility files:
```ts
require('dotenv').config();
```


---

# Test Result 
[TestResult](https://docs.google.com/spreadsheets/d/1P1sj_T6DnaV8ZSfWwSbaz0cGgxG5OsQE4R4Sb4-r960/edit?gid=0#gid=0)


## Author

**Sadikchha Chapagain**  
QA Engineer | 4+ years experience in web & mobile automation  
Worked across insurance, gaming, e-learning, e-commerce and healthcare domains.

---

