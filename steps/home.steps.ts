import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PlaywrightWorld } from '../support/world';

const BASE_URL = 'https://manuelaklenke.com';

Given('I open the home page', async function (this: PlaywrightWorld) {
  await this.page.goto(BASE_URL);
});

When('the page is loaded', async function (this: PlaywrightWorld) {
  await this.page.waitForLoadState('networkidle');
});

Then('the main content is visible', async function (this: PlaywrightWorld) {
  await expect(this.page.locator('main')).toBeVisible();
});
