import { test, expect } from '@playwright/test';

test('Search works', async ({ page }) => {
	await page.goto('/');
	await page.getByPlaceholder('Search by sender').fill('Emelia');
	await expect(page.getByRole('rowheader', { name: 'Emelia39' })).toBeVisible();
});
