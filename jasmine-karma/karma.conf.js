var fs = require('fs');

// Karma configuration file
module.exports = function(config) {
    var webdriverConfig = {
        hostname: 'hub.lambdatest.com',
        port: 80
    };

    config.set({
        hostname: 'localhost.lambdatest.com',
        port: 9876,
        basePath: './',
        frameworks: ['jasmine'],
        plugins: [
            'karma-jasmine',
            'karma-webdriver-launcher',
            'karma-*',
            'karma-mocha-reporter'
        ],
        client: { clearContext: false },
        preprocessors: {},
        files: ['test/*.js', 'src/*.js'],
        captureTimeout: 600000,
        retryLimit: 1,
        browserDisconnectTimeout: 120000,
        browserDisconnectTolerance: 1,
        browserNoActivityTimeout: 120000,
        reporters: ['mocha'],
        mochaReporter: { showDiff: true, output: 'full' },
        colors: true,
        concurrency: 5, // Adjust based on LambdaTest quota
        logLevel: config.LOG_DEBUG,
        customLaunchers: {
            'LT_Chrome_Test': {
                base: 'WebDriver',
                config: webdriverConfig,
                browserName: 'chrome',
                browserVersion: 'latest',
                build: 'Jasmine Unit Test Demo',
                name: 'Karma Jasmine Sample',
                tunnel: true,
                tunnelName: process.env.LT_TUNNEL || 'jasmine',
                video: true,
                visual: true,
                network: true,
                console: true,
                user: process.env.LT_USERNAME,
                accessKey: process.env.LT_ACCESS_KEY,
                pseudoActivityInterval: 10000,
                'LT:Options': {
                    username: process.env.LT_USERNAME,
                    accessKey: process.env.LT_ACCESS_KEY,
                    tunnel: true,
                    visual: true,
                    video: true,
                    platform: 'Windows 10',
                    build: 'Jasmine-Karma-Cloud',
                    project: 'Jasmine-Integration-Cloud',
                    console: true,
                    w3c: true,
                    plugin: 'node_js-karma'
                }
            }
        },
        singleRun: true,
        autoWatch: true
    });
};
