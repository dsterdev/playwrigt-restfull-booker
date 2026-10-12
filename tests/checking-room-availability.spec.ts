// spec: specs/restfull-plataform-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Room availability', () => {
  test('Check availability and display matching rooms', async ({ page }) => {
    // 1. Open the public booking page.
    await page.goto('https://automationintesting.online/');

    // 2. Check availability for the dates preselected in the booking form.
    await page.getByRole('button', { name: 'Check Availability' }).click();

    // 3. Verify that the available room options and their nightly prices are displayed.
    await expect(page.getByRole('heading', { name: 'Our Rooms' })).toBeVisible();
    await expect(page.getByText('£100 per night')).toBeVisible();
    await expect(page.getByText('£225 per night')).toBeVisible();
  });
});
