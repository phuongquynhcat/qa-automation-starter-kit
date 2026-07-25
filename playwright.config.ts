import { defineConfig, devices } from "@playwright/test";
import { ENV, CONFIG, BROWSER } from "./src";
import { BROWSER_NAME } from "./src/constants";

export default defineConfig({
  testDir: "./tests",

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [["html"], ["list"]],

  use: {
    baseURL: ENV.BASE_URL,

    headless: CONFIG.headless,

    viewport: BROWSER.viewport,

    testIdAttribute: "data-testid",

    trace: "on-first-retry",

    screenshot: "only-on-failure",

    video: "retain-on-failure",

    actionTimeout: BROWSER.actionTimeout,

    navigationTimeout: BROWSER.navigationTimeout,
  },

  projects: [
    {
      name: BROWSER_NAME.CHROMIUM,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],

  expect: {
    timeout: 5000,
  },
});
