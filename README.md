# Playwright Test Suite

This repository contains Playwright test scripts for verifying the login functionality of an application. The scripts include tests for scenarios such as logging in with no email, invalid email, and valid credentials.

## Prerequisites

Ensure the following are installed on your machine:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Imekan/Sendsp_take_home.git
   cd sendsp_take_home
   ```

2. Initialize the project and install dependencies:
   ```bash
   npm init -y
   npm install @playwright/test
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Project Structure

The project structure includes:
- `lib/pages/`: Contains reusable page object models (e.g., `login.page.ts`).
- `tests/`: Contains test scripts (e.g., `login.test.ts`).

## Running Tests

1. To run all tests:
   ```bash
   npx playwright test
   ```

2. To run a specific test file:
   ```bash
   npx playwright test tests/login.test.ts
   ```

3. To view test results in the browser:
   ```bash
   npx playwright show-report
   ```

## Tests Included

### 1. Login with No Email
This test verifies that an error message appears when attempting to log in without entering an email.

### 2. Login with Invalid Email
This test ensures that an error message appears when logging in with an invalid email address.

### 3. Login with Valid Credentials
This test confirms successful login when valid credentials are provided.

## Code Overview

### Example Test Script
```javascript
import { test, expect } from '@playwright/test';
import { LoginPage } from '../lib/pages/login.page';

let loginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage();
  await loginPage.goto(page);
});

test('login with no email', async ({ page }) => {
  await page.getByLabel(loginPage.emailFieldLocator).fill('');
  await page.getByLabel(loginPage.passwordFieldLocator).fill('Send54321@');
  await page.getByRole('button', { name: loginPage.loginButton }).click();

  await expect(page.getByText('Please enter an email')).toBeVisible();
});
```

## Additional Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Node.js Documentation](https://nodejs.org/en/docs/)
