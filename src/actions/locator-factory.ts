import { Locator, Page } from "@playwright/test";

export abstract class LocatorFactory {
  // ============================
  // Basic Locators
  // ============================

  static byId(page: Page, id: string): Locator {
    return page.locator(`#${id}`);
  }

  static byCss(page: Page, selector: string): Locator {
    return page.locator(selector);
  }

  static byXpath(page: Page, xpath: string): Locator {
    return page.locator(`xpath=${xpath}`);
  }

  // ============================
  // Playwright Recommended
  // ============================

  static byRole(
    page: Page,
    role: Parameters<Page["getByRole"]>[0],
    options?: Parameters<Page["getByRole"]>[1],
  ): Locator {
    return page.getByRole(role, options);
  }

  static byText(page: Page, text: string): Locator {
    return page.getByText(text);
  }

  static byLabel(page: Page, label: string): Locator {
    return page.getByLabel(label);
  }

  static byPlaceholder(page: Page, placeholder: string): Locator {
    return page.getByPlaceholder(placeholder);
  }

  static byTestId(page: Page, testId: string): Locator {
    return page.getByTestId(testId);
  }
}
