import { Navigation, Wait } from "../actions";
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
    await Navigation.goto(this.page, path);
  }

  async goBack(): Promise<void> {
    await Navigation.goBack(this.page);
  }

  async goForward(): Promise<void> {
    await Navigation.goForward(this.page);
  }

  async reload(): Promise<void> {
    await Navigation.reload(this.page);
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
    await Wait.pageLoad(this.page);
  }

  async waitForNetworkIdle(): Promise<void> {
    await Wait.networkIdle(this.page);
  }
}
