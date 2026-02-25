import { test, expect } from '@playwright/test'

// The mobile project in playwright.config.ts runs this file with the Pixel 5
// viewport (393×851). At that width the mainNav is hidden and only the
// hamburger button is visible in the header.
//
// NOTE: the mobile menu closes via transform: translateX(100%), NOT display:none.
// This means `toBeVisible()` still passes when closed (CSS-hidden ≠ off-screen).
// Use `toBeInViewport()` to assert whether a menu element is actually on screen.

const hamburger = (page: import('@playwright/test').Page) =>
  page.locator('header').getByRole('button').filter({ hasText: /^$/ })

test.describe('Mobile menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('hamburger button opens the mobile menu', async ({ page }) => {
    await hamburger(page).click()
    await expect(page.getByRole('button', { name: 'CONTACT' })).toBeInViewport()
  })

  test('hamburger button closes the mobile menu when tapped again', async ({ page }) => {
    await hamburger(page).click()
    await expect(page.getByRole('button', { name: 'CONTACT' })).toBeInViewport()
    await hamburger(page).click()
    // Menu slides off-screen — button still in DOM but outside the viewport
    await expect(page.getByRole('button', { name: 'CONTACT' })).not.toBeInViewport()
  })

  test('CONTACT in mobile menu opens the modal', async ({ page }) => {
    await hamburger(page).click()
    await page.getByRole('button', { name: 'CONTACT' }).click()
    await expect(page.getByRole('dialog')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Contact' })).toBeVisible()
  })

  test('CONTACT in mobile menu closes the menu before opening the modal', async ({ page }) => {
    await hamburger(page).click()
    await page.getByRole('button', { name: 'CONTACT' }).click()
    // Modal is open — menu should have slid off-screen (onClose was called)
    await expect(page.getByRole('dialog')).toBeVisible()
    await expect(page.locator('nav').filter({ hasText: 'HOME' }).getByRole('button', { name: 'CONTACT' })).not.toBeInViewport()
  })

  test('mobile nav links still navigate correctly', async ({ page }) => {
    await hamburger(page).click()
    await page.getByRole('link', { name: 'MENU' }).click()
    await expect(page).toHaveURL('/#/menu')
  })
})
