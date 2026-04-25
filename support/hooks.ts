import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { PlaywrightWorld } from './world';

setDefaultTimeout(30000);

Before(async function (this: PlaywrightWorld) {
  this.browser = await chromium.launch({ headless: true });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: PlaywrightWorld) {
  await this.context.close();
  await this.browser.close();
});
