import { expect, Page } from "@playwright/test";

export abstract class PageAssert {
  /**
   * Assert page title.
   */
  static async title(page: Page, expected: string | RegExp): Promise<void> {
    await expect(page).toHaveTitle(expected);
  }

  /**
   * Assert page url.
   */
  static async url(page: Page, expected: string | RegExp): Promise<void> {
    await expect(page).toHaveURL(expected);
  }

  /**
   * Assert page url contains text.
   */
  static async urlContains(page: Page, expected: string): Promise<void> {
    await expect(page).toHaveURL(new RegExp(expected));
  }
}
