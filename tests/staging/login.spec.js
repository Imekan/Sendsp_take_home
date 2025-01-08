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

test('login with invalid email', async ({ page }) => {
  await page.getByLabel(loginPage.emailFieldLocator).fill('fakeemdislsd@gmail.com');
  await page.getByLabel(loginPage.passwordFieldLocator).fill('Send54321@');
  await page.getByRole('button', { name: loginPage.loginButton }).click();

  await expect(page.getByText('Error')).toBeVisible();
});

test('login with valid credentials', async ({ page }) => {
  await page.getByLabel(loginPage.emailFieldLocator).fill('enangict@gmail.com');
  await page.getByLabel(loginPage.passwordFieldLocator).fill('Send54321@');
  await page.getByRole('button', { name: loginPage.loginButton }).click();

  await expect(page.getByLabel('Country')).toBeVisible();
});
