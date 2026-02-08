import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 120000, // 2 minutos por teste
  retries: 1,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    video: 'on',
    screenshot: 'only-on-failure'
  },
  projects: [
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } }
  ]
});
