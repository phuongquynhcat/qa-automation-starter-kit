import { NavigationAction, WaitAction } from "../actions";
import { BaseComponent } from "./base-component";

/**
 * Base class for all Page Objects.
 *
 * Provides:
 * - Navigation
 * - Page Information
 * - Synchronization
 */
export abstract class BasePage extends BaseComponent {
  // ============================
  // Navigation
  // ============================
  async goto(path = "/"): Promise<void> {
    await NavigationAction.goto(this.page, path);
  }

  async goBack(): Promise<void> {
    await NavigationAction.goBack(this.page);
  }

  async goForward(): Promise<void> {
    await NavigationAction.goForward(this.page);
  }

  async reload(): Promise<void> {
    await NavigationAction.reload(this.page);
  }

  // ============================
  // Information
  // ============================
  getTitle(): Promise<string> {
    return this.page.title();
  }

  getCurrentUrl(): string {
    return this.page.url();
  }

  // ============================
  // Synchronization
  // ============================
  async waitForPageLoad(): Promise<void> {
    await WaitAction.pageLoad(this.page);
  }

  async waitForNetworkIdle(): Promise<void> {
    await WaitAction.networkIdle(this.page);
  }
}
