import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/auth/login.page";
import { DashboardPage } from "../../src/pages/dashboard/dashboard.page";
import { Assert } from "../../src/assertions";

test.describe("Authentication", () => {
  test("User can login successfully", async ({ page }) => {
    // Arrange
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // Act
    await loginPage.open();

    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);

    // Assert
    await Assert.hasText(dashboardPage.getDashboardTitle(), "Dashboard");
  });
});
