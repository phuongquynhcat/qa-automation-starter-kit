import { test } from "@playwright/test";

import { LoginPage } from "../../src/pages/auth/login.page";
import { DashboardPage } from "../../src/pages/dashboard/dashboard.page";

import { Assert } from "../../src/assertions";
import { ENV } from "../../src";

test.describe("Authentication", () => {
  test("User can login successfully", async ({ page }) => {
    // ============================
    // Arrange
    // ============================

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    const username = ENV.USERNAME;
    const password = ENV.PASSWORD;

    // ============================
    // Act
    // ============================

    await loginPage.open();

    await loginPage.login(username, password);

    // ============================
    // Assert
    // ============================

    await Assert.hasText(dashboardPage.dashboardTitle, "Dashboard");
  });
});
