import { defineConfig, devices } from "@playwright/test";
import { ENV } from "./src/config/env";

export default defineConfig({
  testDir: "./examples/orangehrm/tests",

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [["html"], ["list"]],

  use: {
    baseURL: ENV.BASE_URL,

    headless: false,

    viewport: {
      width: 1440,
      height: 900,
    },

    trace: "on-first-retry",

    screenshot: "only-on-failure",

    video: "retain-on-failure",

    actionTimeout: 10000,

    navigationTimeout: 30000,
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
});
