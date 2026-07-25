import dotenv from "dotenv";

dotenv.config();

export const ENV = Object.freeze({
  BASE_URL: process.env.OHRM_BASE_URL ?? "",

  USERNAME: process.env.OHRM_USERNAME ?? "",

  PASSWORD: process.env.OHRM_PASSWORD ?? "",
});
