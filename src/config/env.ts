import dotenv from "dotenv";

dotenv.config();

export const ENV = Object.freeze({
  BASE_URL: process.env.BASE_URL ?? "",

  USERNAME: process.env.USERNAME ?? "",

  PASSWORD: process.env.PASSWORD ?? "",
});
