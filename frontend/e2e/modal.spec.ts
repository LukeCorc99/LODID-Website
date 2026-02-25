import { test, expect } from '@playwright/test'

test.describe('InfoModal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  // ── Open behaviour ──────────────────────────────────────────────────────────

  test('CONTACT button in header opens modal with correct title', async ({ page }) => {
    await page.locator('header').getByRole('button', { name: 'CONTACT' }).click()
    await expect(page.getByRole('dialog')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Contact' })).toBeVisible()
  })

  test('ALLERGENS button in footer opens modal with correct title', async ({ page }) => {
    await page.locator('footer').getByRole('button', { name: 'ALLERGENS' }).click()
    await expect(page.getByRole('dialog')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Allergens' })).toBeVisible()
  })

  test('PRIVACY button in footer opens modal with correct title', async ({ page }) => {
    await page.locator('footer').getByRole('button', { name: 'PRIVACY' }).click()
    await expect(page.getByRole('dialog')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Privacy Policy' })).toBeVisible()
  })

  test('COOKIES button in footer opens modal with correct title', async ({ page }) => {
    await page.locator('footer').getByRole('button', { name: 'COOKIES' }).click()
    await expect(page.getByRole('dialog')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Cookie Policy' })).toBeVisible()
  })

  // ── Close behaviour ─────────────────────────────────────────────────────────

  test('close button dismisses the modal', async ({ page }) => {
    await page.locator('header').getByRole('button', { name: 'CONTACT' }).click()
    await expect(page.getByRole('dialog')).toBeVisible()
    await page.getByRole('button', { name: 'Close' }).click()
    await expect(page.getByRole('dialog')).not.toBeVisible()
  })

  test('Escape key dismisses the modal', async ({ page }) => {
    await page.locator('header').getByRole('button', { name: 'CONTACT' }).click()
    await expect(page.getByRole('dialog')).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(page.getByRole('dialog')).not.toBeVisible()
  })

  test('clicking the backdrop dismisses the modal', async ({ page }) => {
    await page.locator('header').getByRole('button', { name: 'CONTACT' }).click()
    await expect(page.getByRole('dialog')).toBeVisible()
    // Click the top-left corner of the overlay — well outside the centred panel
    await page.getByRole('dialog').click({ position: { x: 10, y: 10 } })
    await expect(page.getByRole('dialog')).not.toBeVisible()
  })

  // ── Body scroll lock ─────────────────────────────────────────────────────────

  test('body scroll is locked while the modal is open', async ({ page }) => {
    await page.locator('header').getByRole('button', { name: 'CONTACT' }).click()
    const overflow = await page.evaluate(() => document.body.style.overflow)
    expect(overflow).toBe('hidden')
  })

  test('body scroll is restored after the modal closes', async ({ page }) => {
    await page.locator('header').getByRole('button', { name: 'CONTACT' }).click()
    await page.getByRole('button', { name: 'Close' }).click()
    const overflow = await page.evaluate(() => document.body.style.overflow)
    expect(overflow).toBe('')
  })

  // ── Switching modals ─────────────────────────────────────────────────────────

  test('each footer button opens the correct modal', async ({ page }) => {
    const cases: Array<[string, string]> = [
      ['ALLERGENS', 'Allergens'],
      ['PRIVACY', 'Privacy Policy'],
      ['COOKIES', 'Cookie Policy'],
    ]

    for (const [btn, heading] of cases) {
      await page.locator('footer').getByRole('button', { name: btn }).click()
      await expect(page.getByRole('heading', { name: heading })).toBeVisible()
      await page.keyboard.press('Escape')
    }
  })
})
