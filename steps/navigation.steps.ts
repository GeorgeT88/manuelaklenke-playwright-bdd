import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PlaywrightWorld } from '../support/world';

const BASE_URL = 'https://manuelaklenke.com';

Given('I navigate to {string}', async function (this: PlaywrightWorld, path: string) {
  await this.page.goto(`${BASE_URL}${path}`);
  await this.page.waitForLoadState('networkidle');
});

Then('the navbar is visible', async function (this: PlaywrightWorld) {
  await expect(this.page.locator('nav')).toBeVisible();
});

Then('the footer is visible', async function (this: PlaywrightWorld) {
  await expect(this.page.locator('footer')).toBeVisible();
});

When('I click the {string} link in the navbar', async function (this: PlaywrightWorld, linkText: string) {
  await this.page.locator('nav').getByRole('link', { name: linkText }).first().click();
  await this.page.waitForLoadState('networkidle');
});

Then('I am on the {string} page', async function (this: PlaywrightWorld, path: string) {
  await expect(this.page).toHaveURL(`${BASE_URL}${path}`);
});

Then('a 404 message is visible', async function (this: PlaywrightWorld) {
  await expect(this.page.getByText('404')).toBeVisible();
});
