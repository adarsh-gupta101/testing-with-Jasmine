// spec/support/reporter.js
const JasmineConsoleReporter = require('jasmine-console-reporter');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const Jasmine=require('jasmine');
const jasmine = new Jasmine();
// Setup DOM environment
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.Event = window.Event;

// Setup console reporter
const reporter = new JasmineConsoleReporter({
    colors: 1,
    cleanStack: 1,
    verbosity: 4,
    listStyle: 'indent',
    activity: false
});

jasmine.env.clearReporters(); 
jasmine.env.addReporter(reporter);

jasmine.loadConfigFile('spec/support/jasmine.json'); 
jasmine.execute();
