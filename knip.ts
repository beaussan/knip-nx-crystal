import { KnipConfig }  from 'knip';

const config: KnipConfig = {
  entry: 'apps/my-app/src/main.tsx',
  vitest: {
    entry: 'apps/my-app/**/*.spec.{tsx,ts}',
  },
  "playwright": {
    "config": ["apps/my-app-e2e/playwright.config.ts"],
    "entry": ["apps/my-app-e2e/**/*.@(spec|test).?(c|m)[jt]s?(x)"]
  }
};

export default config;