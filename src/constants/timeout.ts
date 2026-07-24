export const TIMEOUT_TYPE = {
  SHORT: "short",
  MEDIUM: "medium",
  LONG: "long",
  EXTRA_LONG: "extraLong",
} as const;

export type TimeoutType = (typeof TIMEOUT_TYPE)[keyof typeof TIMEOUT_TYPE];
