import { test, expect } from '@playwright/test'

test('should navigate to the listings page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'About Page' and click on it
  await page.click('text=See the collection')
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/listings')
  // The new page should contain an h1 with "Art Vandelay"
  await expect(page.locator('h1')).toContainText('Art Vandelay')
})

test('should navigate to the first product page', async ({ page }) => {
  await page.goto('http://localhost:3000/listings')
  await page.click('img')
  await expect(page).toHaveURL('http://localhost:3000/listings/1')
  await expect(page.locator('h2')).toContainText('The Night Watch')
})

test('header should navigate to the hoome page', async ({ page }) => {
  await page.goto('http://localhost:3000/listings/1')
  await page.click('h1')
  await expect(page).toHaveURL('http://localhost:3000')
})
