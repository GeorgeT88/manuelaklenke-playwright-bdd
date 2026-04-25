import { IConfiguration } from '@cucumber/cucumber/api';

const config: Partial<IConfiguration> = {
  paths: ['features/**/*.feature'],
  require: ['steps/**/*.ts'],
  requireModule: ['ts-node/register'],
  format: ['progress-bar', 'json:reports/cucumber-report.json'],
  publishQuiet: true,
};

export default config;
