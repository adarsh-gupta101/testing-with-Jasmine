// var fs = require("fs");

// // Karma configuration file
// module.exports = function (config) {
//   var webdriverConfig = {
//     hostname: "hub.lambdatest.com",
//     port: 80,
//   }; 

//   config.set({
//     hostname: "localhost.lambdatest.com",
//     port: 9876,
//     basePath: "./",
//     frameworks: ["jasmine"],
//     plugins: [
//       "karma-jasmine",
//       "karma-webdriver-launcher",
//       "karma-*",
//       "karma-mocha-reporter",
//     ],
//     client: { clearContext: false },
//     preprocessors: {},
//     files: ["test/*.js", "src/*.js"],
//     captureTimeout: 600000,
//     retryLimit: 1,
//     browserDisconnectTimeout: 120000,
//     browserDisconnectTolerance: 1,
//     browserNoActivityTimeout: 120000,
//     reporters: ["mocha"],
//     mochaReporter: { showDiff: true, output: "full" },
//     colors: true,
//     concurrency: 5, // Adjust based on LambdaTest quota
//     logLevel: config.LOG_DEBUG,
//     customLaunchers: {
//       chrome: {
//         tunnel: true,
//         base: "WebDriver",
//         config: webdriverConfig,
//         browserName: "chrome",
//         platform: "windows 10",
//         version: "71.0",
//         name: "Karma With Heartbeat",
//         user: process.env.LT_USERNAME,
//         accessKey: process.env.LT_ACCESS_KEY,
//         pseudoActivityInterval: 15000, // 15000 ms heartbeat to avoid timeouts
//       },
//       LT_Chrome_Test: {
//         base: "WebDriver",
//         config: webdriverConfig,
//         browserName: "chrome",
//         browserVersion: "latest",
//         build: "Jasmine Unit Test Demo",
//         name: "Karma Jasmine Sample",
//         tunnel: true,
//         // tunnelName: process.env.LT_TUNNEL || 'jasmine',
//         tunnelName: "1486ea4f-9767-47b9-8fff-8243198cd181",
//         video: true,
//         visual: true,
//         network: true,
//         console: true,
//         user: process.env.LT_USERNAME,
//         accessKey: process.env.LT_ACCESS_KEY,
//         pseudoActivityInterval: 10000,
//         "LT:Options": {
//           username: process.env.LT_USERNAME,
//           accessKey: process.env.LT_ACCESS_KEY,
//           tunnel: true,
//           visual: true,
//           video: true,
//           platform: "Windows 10",
//           build: "Jasmine-Karma-Cloud",
//           project: "Jasmine-Integration-Cloud",
//           console: true,
//           w3c: true,
//           plugin: "node_js-karma",
//         },
//       },
//     },
//     singleRun: true,
//     autoWatch: true,
//   });
// };


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
          name: 'Jasmine-Karma-Test',
          build: 'LambdaTest-Karma-Jasmine',
          tunnel: true,
          user: process.env.LT_USERNAME,
          accessKey: process.env.LT_ACCESS_KEY,
        },
        //safari
        LT_Safari_Test: {
          base: 'WebDriver',
          config: webdriverConfig,
          browserName: 'Safari',
          browserVersion: '18',
          platformName: "MacOS Sequoia",
          name: 'Jasmine-Karma-Test',
          build: 'LambdaTest-Karma-Jasmine',
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
  