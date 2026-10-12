// spec: specs/restfull-plataform-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Room details and booking', () => {
  test('Open the selected room reservation form', async ({ page }) => {
    // 1. Open the public platform page.
    await page.goto('https://automationintesting.online/');

    // 2. Check availability for the preselected dates.
    await page.locator('[id="booking"] button').click();

    // 3. Open the Single room reservation page without submitting a booking.
    await page.locator('#rooms a[href^="/reservation/1"]').click();

    // 4. Verify that the selected room details and reservation section are displayed.
    await expect(page.getByRole('heading', { name: 'Single Room' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Book This Room' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Reserve Now' })).toBeVisible();
  });
});
