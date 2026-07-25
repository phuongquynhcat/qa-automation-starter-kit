import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../core";
import { LocatorFactory } from "../../actions";

export class DashboardPage extends BasePage {
  // ============================
  // Locators
  // ============================

  private readonly _dashboardTitle: Locator;

  constructor(page: Page) {
    super(page);

    this._dashboardTitle = LocatorFactory.byRole(page, "heading", {
      name: "Dashboard",
    });
  }

  // ============================
  // Navigation
  // ============================

  async open(): Promise<void> {
    await this.goto("/web/index.php/dashboard/index");
  }

  // ============================
  // Getters
  // ============================

  get dashboardTitle(): Locator {
    return this._dashboardTitle;
  }
}
