import { Locator } from "@playwright/test";

/**
 * Provides common locator actions for Playwright.
 *
 * This class contains reusable actions that can be shared
 * across all Page Objects.
 */
export abstract class Action {
  // ============================
  // Mouse Actions
  // ============================

  /**
   * Click an element.
   */
  static async click(locator: Locator): Promise<void> {
    // TODO:
    // - Logger
    // - Retry
    // - Screenshot on failure

    await locator.click();
  }

  /**
   * Hover over an element.
   */
  static async hover(locator: Locator): Promise<void> {
    // TODO:
    // - Logger

    await locator.hover();
  }

  // ============================
  // Keyboard Actions
  // ============================

  /**
   * Fill an input field.
   */
  static async fill(locator: Locator, value: string): Promise<void> {
    // TODO:
    // - Logger
    // - Retry

    await locator.fill(value);
  }

  /**
   * Press a key.
   */
  static async press(locator: Locator, key: string): Promise<void> {
    // TODO:
    // - Logger

    await locator.press(key);
  }

  // ============================
  // Form Actions
  // ============================

  /**
   * Check a checkbox.
   */
  static async check(locator: Locator): Promise<void> {
    // TODO:
    // - Logger

    await locator.check();
  }

  /**
   * Uncheck a checkbox.
   */
  static async uncheck(locator: Locator): Promise<void> {
    // TODO:
    // - Logger

    await locator.uncheck();
  }

  /**
   * Select an option from a dropdown.
   */
  static async select(
    locator: Locator,
    value: string | string[],
  ): Promise<void> {
    // TODO:
    // - Logger

    await locator.selectOption(value);
  }
}
