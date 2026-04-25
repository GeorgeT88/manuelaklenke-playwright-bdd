module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: ['support/**/*.ts', 'steps/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress-bar', 'json:reports/cucumber-report.json'],
    timeout: 30000,
    publishQuiet: true,
  },
};
