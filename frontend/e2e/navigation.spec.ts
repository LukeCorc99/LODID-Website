import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('home page renders header and footer', async ({ page }) => {
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()
  })

  test('MENU link navigates to menu page', async ({ page }) => {
    await page.getByRole('navigation').getByRole('link', { name: 'MENU' }).click()
    await expect(page).toHaveURL('/#/menu')
  })

  test('WORK AT LODID link navigates correctly', async ({ page }) => {
    await page.getByRole('navigation').getByRole('link', { name: 'WORK AT LODID' }).click()
    await expect(page).toHaveURL('/#/work-at-lodid')
  })

  test('OUR STORY link navigates correctly', async ({ page }) => {
    await page.getByRole('navigation').getByRole('link', { name: 'OUR STORY' }).click()
    await expect(page).toHaveURL('/#/our-story')
  })

  test('logo click navigates to home', async ({ page }) => {
    await page.goto('/#/menu')
    await page.locator('header img[alt="LODID"]').click()
    // HashRouter always produces /#/ for the root route when navigated via NavLink
    await expect(page).toHaveURL('/#/')
  })

  test('footer CATERING link navigates correctly', async ({ page }) => {
    await page.locator('footer').getByRole('link', { name: 'CATERING' }).click()
    await expect(page).toHaveURL('/#/catering')
  })

  test('footer WORK AT LODID link navigates correctly', async ({ page }) => {
    await page.locator('footer').getByRole('link', { name: 'WORK AT LODID' }).click()
    await expect(page).toHaveURL('/#/work-at-lodid')
  })
})
