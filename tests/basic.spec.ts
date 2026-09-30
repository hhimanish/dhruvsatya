import { test, expect } from '@playwright/test';

test('homepage loads and displays hero', async ({ page }) => {
  await page.goto('http://localhost:3002/');
  await expect(page).toHaveTitle(/DhruvSatya/);
  await expect(page.locator('h1')).toBeVisible();
});

test('navigation works', async ({ page }) => {
  await page.goto('http://localhost:3002/');
  
  // Accept cookies first if visible
  const acceptBtn = page.locator('button', { hasText: 'Accept All' });
  if (await acceptBtn.isVisible()) {
    await acceptBtn.click();
  }

  // Use the Hero CTA link
  await page.locator('a[href="/contact"]').last().click({ force: true });
  await expect(page).toHaveURL(/.*contact/);
  await expect(page.locator('h1')).toContainText('change');
});

test('form submission rate limit mock', async ({ page }) => {
  await page.goto('http://localhost:3002/contact');
  
  await page.fill('input#name', 'Test User');
  await page.fill('input#email', 'test@example.com');
  await page.fill('input#company', 'Test Corp');
  await page.fill('textarea#message', 'Testing the form');
  
  await page.click('button[type="submit"]');
  
  // Wait for submission success state
  await expect(page.locator('text=Request Received')).toBeVisible({ timeout: 5000 });
});
