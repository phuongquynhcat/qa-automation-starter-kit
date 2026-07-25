import { Locator, Page } from "@playwright/test";

export abstract class Wait {
  static async pageLoad(page: Page): Promise<void> {
    await page.waitForLoadState("load");
  }

  static async networkIdle(page: Page): Promise<void> {
    await page.waitForLoadState("networkidle");
  }

  static async visible(locator: Locator): Promise<void> {
    await locator.waitFor({
      state: "visible",
    });
  }

  static async hidden(locator: Locator): Promise<void> {
    await locator.waitFor({
      state: "hidden",
    });
  }
}
