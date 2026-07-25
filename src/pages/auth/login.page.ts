import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../core";
import { Action, LocatorFactory } from "../../actions";

export class LoginPage extends BasePage {
  // ============================
  // Locators
  // ============================

  private readonly usernameField: Locator;
  private readonly passwordField: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);

    this.usernameField = LocatorFactory.byPlaceholder(page, "Username");

    this.passwordField = LocatorFactory.byPlaceholder(page, "Password");

    this.loginButton = LocatorFactory.byRole(page, "button", {
      name: "Login",
    });
  }

  // ============================
  // Navigation
  // ============================

  async open(): Promise<void> {
    await this.goto("/");
  }

  // ============================
  // Atomic Actions
  // ============================

  async fillUsername(username: string): Promise<void> {
    await Action.fill(this.usernameField, username);
  }

  async fillPassword(password: string): Promise<void> {
    await Action.fill(this.passwordField, password);
  }

  async clickLogin(): Promise<void> {
    await Action.click(this.loginButton);
  }

  // ============================
  // Composite Actions
  // ============================

  async login(username: string, password: string): Promise<void> {
    await this.fillUsername(username);

    await this.fillPassword(password);

    await this.clickLogin();
  }
}
