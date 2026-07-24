export const ENVIRONMENT = {
  DEV: "dev",
  UAT: "uat",
  STAGING: "staging",
  PRODUCTION: "production",
} as const;

export type Environment = (typeof ENVIRONMENT)[keyof typeof ENVIRONMENT];
