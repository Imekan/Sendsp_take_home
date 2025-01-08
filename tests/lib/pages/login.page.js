import { expect } from "@playwright/test";

export class LoginPage {
  emailFieldLocator = 'Email address';
  passwordFieldLocator = 'Password';
  loginButton = 'Login';

  async goto(page) {
    await page.goto('/');
  }

  async login(user) {
    await this.page.getByLabel(loginPage.emailFieldLocator).fill('enangict@gmail.com');
    await this.page.getByLabel(loginPage.passwordFieldLocator).fill('Send54321@');
    await this.page.getByRole('button', { name: loginPage.loginButton }).click();

    this.dashboardPage = new DashboardPage(this.page);

    await expect(this.dashboardPage.usernameMenuLocator).toHaveText(`${user.lastName} ${user.firstName}`, { timeout: 15000 });
  }
}
