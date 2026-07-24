export const BROWSER_NAME = {
  CHROMIUM: "chromium",
  FIREFOX: "firefox",
  WEBKIT: "webkit",
} as const;

export type BrowserName = (typeof BROWSER_NAME)[keyof typeof BROWSER_NAME];
