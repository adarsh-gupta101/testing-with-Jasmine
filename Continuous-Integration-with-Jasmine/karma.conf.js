

module.exports = function (config) {
  const webdriverConfig = {
    hostname: 'hub.lambdatest.com',
    port: 80,
  };

  config.set({
    basePath: '',
    frameworks: ['jasmine'], // Use Jasmine as the testing framework
    files: [
      'test/*.js', // Include all test files
      'src/*.js', // Include source files
    ],
    preprocessors: {}, // Add preprocessors if needed
    reporters: ['mocha'], // Use Mocha-style reporting
    mochaReporter: {
      output: 'full', // Display full results in the terminal
    },
    customLaunchers: {
      LT_Chrome_Test: {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'chrome',
        browserVersion: 'latest',
        platform: 'Windows 11',
        name: 'Jasmine-Karma-CI-Test',
        build: 'Jasmine-Karma-CI-Test',
        tunnel: true,
        user: process.env.LT_USERNAME,
        accessKey: process.env.LT_ACCESS_KEY,
      },
      //safari
      LT_Explorer_Test: {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'Internet Explorer',
        browserVersion: '10',
        platformName: "Windows 7",
        name: 'Jasmine-Karma-CI-Test',
        build: 'Jasmine-Karma-CI-Test',
        tunnel: true,
        user: process.env.LT_USERNAME,
        accessKey: process.env.LT_ACCESS_KEY,
        plugin: "node_js-jasmine"

      },
    },
    browsers: ['LT_Chrome_Test', "LT_Safari_Test"], // Use the LambdaTest custom launcher
    singleRun: true, // Exit after running tests
    autoWatch: false, // Disable auto-watch for continuous testing
    concurrency: 1, // Run one test at a time
    logLevel: config.LOG_DEBUG, // Enable detailed logging for debugging
    browserNoActivityTimeout: 300000, // Increase timeout for LambdaTest
    browserDisconnectTimeout: 300000,
    browserDisconnectTolerance: 1,
  });
};
