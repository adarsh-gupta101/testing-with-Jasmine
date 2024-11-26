

const Jasmine = require('jasmine');
const JasmineConsoleReporter = require("jasmine-console-reporter");
const customMatchers = require('../helpers/CustomEmailMatcher');

const jasmine = new Jasmine();

const reporter = new JasmineConsoleReporter({
  colors: 1,
  cleanStack: 0,
  verbosity: 4,
  listStyle: "indent",
  activity: "dots",
  beep: true,
  summary: true
});

jasmine.env.clearReporters();
jasmine.env.addReporter(reporter);

// Modify the beforeEach to use global matchers
beforeEach(function() {
  jasmine.addMatchers(customMatchers);
});

jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.execute();