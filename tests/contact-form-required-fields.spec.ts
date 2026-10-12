// spec: specs/restfull-plataform-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Contact form', () => {
  test('Reject submission when required fields are empty', async ({ page }) => {
    // 1. Open the public platform page.
    await page.goto('https://automationintesting.online/');

    // 2. Submit the contact form without entering personal information.
    await page.locator('#contact button').click();

    // 3. Verify that required fields are rejected.
    await expect(page.getByText('Name may not be blank')).toBeVisible();
    await expect(page.getByText('Email may not be blank')).toBeVisible();
    await expect(page.getByText('Message may not be blank')).toBeVisible();
  });
});
