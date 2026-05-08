import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./src",
  testMatch: "**/*.e2e.ts",
  use: {
    baseURL: "http://localhost:8080/dbshield/",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "npm run dev -- --host 127.0.0.1 --port 8080",
    url: "http://127.0.0.1:8080/dbshield/",
    reuseExistingServer: true,
  },
});
