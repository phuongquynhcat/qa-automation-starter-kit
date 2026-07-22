import { Page } from "@playwright/test";

export class BasePage {
  constructor(protected readonly page: Page) {}

  // Navigation
  async goto(path = "/"): Promise<void> {
    await this.page.goto(path);
  }
  async goBack(): Promise<void> {
    await this.page.goBack();
  }
  async goForward(): Promise<void> {
    await this.page.goForward();
  }
  async reload(): Promise<void> {
    await this.page.reload();
  }

  // Information
  getTitle(): Promise<string> {
    return this.page.title();
  }
  getCurrentUrl(): string {
    return this.page.url();
  }

  // Synchronization
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState("load");
  }
  async waitForNetworkIdle(): Promise<void> {
    await this.page.waitForLoadState("networkidle");
  }
}
