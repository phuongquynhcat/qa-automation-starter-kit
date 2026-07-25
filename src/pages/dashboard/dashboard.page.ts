import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../core";
import { LocatorFactory } from "../../actions";

export class DashboardPage extends BasePage {
  // ============================
  // Locators
  // ============================

  private readonly dashboardTitle: Locator;
  private readonly userDropdown: Locator;

  constructor(page: Page) {
    super(page);

    this.dashboardTitle = LocatorFactory.byRole(page, "heading", {
      name: "Dashboard",
    });

    this.userDropdown = LocatorFactory.byRole(page, "banner");
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

  getDashboardTitle(): Locator {
    return this.dashboardTitle;
  }

  getUserDropdown(): Locator {
    return this.userDropdown;
  }
}
