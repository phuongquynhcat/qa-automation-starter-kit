import { Page } from "@playwright/test";

/**
 * Base class for all reusable UI components.
 *
 * Examples:
 * - Header
 * - Sidebar
 * - Modal
 * - Table
 * - Pagination
 */
export abstract class BaseComponent {
  constructor(protected readonly page: Page) {}
}
