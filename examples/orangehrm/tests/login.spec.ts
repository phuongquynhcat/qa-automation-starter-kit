import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { loginUser } from "../data/login-user";

test.describe("OrangeHRM Login", () => {
  test("should login successfully", async ({ page }) => {
    // Arrange
    const loginPage = new LoginPage(page);

    // Act
    await loginPage.open();
    await loginPage.login(loginUser.username, loginUser.password);

    // Assert
    await expect(page).toHaveURL(/dashboard/i);
  });
});
