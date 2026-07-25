import { expect, Locator, Page } from "@playwright/test";

export abstract class Assert {
  // ============================
  // Locator Assertions
  // ============================

  static async isVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  static async isHidden(locator: Locator): Promise<void> {
    await expect(locator).toBeHidden();
  }

  static async hasText(locator: Locator, text: string): Promise<void> {
    await expect(locator).toHaveText(text);
  }

  static async containsText(locator: Locator, text: string): Promise<void> {
    await expect(locator).toContainText(text);
  }

  static async hasValue(locator: Locator, value: string): Promise<void> {
    await expect(locator).toHaveValue(value);
  }

  static async isEnabled(locator: Locator): Promise<void> {
    await expect(locator).toBeEnabled();
  }

  static async isDisabled(locator: Locator): Promise<void> {
    await expect(locator).toBeDisabled();
  }

  // ============================
  // Page Assertions
  // ============================

  static async hasURL(page: Page, url: string | RegExp): Promise<void> {
    await expect(page).toHaveURL(url);
  }
}
