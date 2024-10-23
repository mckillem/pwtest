import { test, expect } from '@playwright/test';

test('has url', async ({ page }) => {
  await page.goto('https://bond.vertia.cloud/');

  await expect(page).toHaveURL("https://bond.vertia.cloud/");
});

test('login', async ({ page }) => {
  await page.goto('https://bond.vertia.cloud/');

  await page.getByPlaceholder('Email').fill("test@vertia.com");

  await page.getByPlaceholder('Heslo').fill("_XL_1W_BVr");

  await page.getByRole('button', { name: 'Přihlásit se' }).click();

  // await expect(page.getByRole('banner', { name: 'Přehled' })).toBeVisible();

  await page.getByText('Nakoupit dluhopis').click();
  await page.getByText('Počet kusů').first().click();
  // todo: vybrat dva kusy
  // await page.getByRole('banner').nth(2).click();
  await page.getByRole('button', { name: 'Nakoupit dluhopis' }).first().click();
  await page.getByRole('button', { name: 'Potvrdit nákup' }).first().click();
  // todo: sjet na konec dokumentu a provést screenshot
  await page.getByRole('button', { name: 'Odeslat SMS' }).first().click();

  // await expect(page.getByRole('banner', { name: 'Podepsat dokumenty' })).toBeVisible();

  // await page.locator('#content').getByText('Podepsat dokumenty').click();



});

// test('buy a bond', async ({ page }) => {
//   await page.getByText('Nakoupit dluhopis').click();
// });