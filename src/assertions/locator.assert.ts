import { expect, Locator } from "@playwright/test";

export abstract class LocatorAssert {
  /**
   * Assert that the locator is visible.
   */
  static async visible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  /**
   * Assert that the locator is hidden.
   */
  static async hidden(locator: Locator): Promise<void> {
    await expect(locator).toBeHidden();
  }

  /**
   * Assert that the locator is enabled.
   */
  static async enabled(locator: Locator): Promise<void> {
    await expect(locator).toBeEnabled();
  }

  /**
   * Assert that the locator is disabled.
   */
  static async disabled(locator: Locator): Promise<void> {
    await expect(locator).toBeDisabled();
  }

  /**
   * Assert locator text.
   */
  static async text(locator: Locator, expected: string): Promise<void> {
    await expect(locator).toHaveText(expected);
  }

  /**
   * Assert locator contains text.
   */
  static async containsText(locator: Locator, expected: string): Promise<void> {
    await expect(locator).toContainText(expected);
  }

  /**
   * Assert input value.
   */
  static async value(locator: Locator, expected: string): Promise<void> {
    await expect(locator).toHaveValue(expected);
  }
}
