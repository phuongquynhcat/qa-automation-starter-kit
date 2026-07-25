import { Page } from "@playwright/test";

export abstract class Navigation {
  static async goto(page: Page, path = "/"): Promise<void> {
    await page.goto(path);
  }

  static async reload(page: Page): Promise<void> {
    await page.reload();
  }

  static async goBack(page: Page): Promise<void> {
    await page.goBack();
  }

  static async goForward(page: Page): Promise<void> {
    await page.goForward();
  }
}
