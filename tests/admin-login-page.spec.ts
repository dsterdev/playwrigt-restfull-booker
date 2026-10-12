// spec: specs/restfull-plataform-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Admin access', () => {
  test('Display the admin login form', async ({ page }) => {
    // 1. Open the admin panel without authenticating.
    await page.goto('https://automationintesting.online/admin');

    // 2. Verify that the login form is displayed.
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  });
});
