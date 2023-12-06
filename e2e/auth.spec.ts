import { test } from '@playwright/test';

test('auth', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.screenshot({ path: 'e2e/screenshots/index.png' })

  await page.getByRole('link', { name: 'auth' }).click();
  await page.getByLabel('Email Address *').click();
  await page.getByLabel('Email Address *').fill('dfadsfsdaf');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('fdsafdsfadsf');
  await page.getByLabel('Remember me').check();
  await page.screenshot({ path: 'e2e/screenshots/login.png' })
  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.getByRole('button', { name: '登 出' }).click();
  await page.screenshot({ path: 'e2e/screenshots/login-success.png' })
  await page.getByRole('button', { name: '去登录' }).click();

  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.screenshot({ path: 'e2e/screenshots/back-to-login.png' })
  await page.getByRole('link', { name: 'Don\'t have an account? Sign Up' }).click();

  await page.screenshot({ path: 'e2e/screenshots/register.png' })
  await page.getByLabel('First Name *').click();
  await page.getByLabel('First Name *').click();
  await page.getByLabel('First Name *').fill('dsafds');
  await page.getByLabel('Last Name *').click();
  await page.getByLabel('Last Name *').fill('dafds');
  await page.getByLabel('Email Address *').click();
  await page.getByLabel('Email Address *').fill('dsafds');
  await page.getByLabel('Password *').click();
  await page.getByLabel('I want to receive inspiration, marketing promotions and updates via email.').check();
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.getByRole('link', { name: 'Already have an account? Sign in' }).click();
});