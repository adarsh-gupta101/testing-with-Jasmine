const Jasmine = require('jasmine');

const JasmineConsoleReporter = require("jasmine-console-reporter");
const jasmine = new Jasmine();


const reporter = new JasmineConsoleReporter({
  colors: 1,              // 0: no colors, 1: basic, 2: full colors
  cleanStack: 0,          // 0: raw stack, 1: shortened, 2: elided, 3: clean
  verbosity: 4,           // 0: summary only, 1: spec names, 2: summary with messages, 3: full logs, 4: detailed
  listStyle: "indent",    // "flat" or "indent" (better readability)
  activity: "dots"    ,     // Show spinner while tests run
  beep: true, // Beep on failure
    summary: true
});


jasmine.env.clearReporters(); // Clear default reporter
jasmine.env.addReporter(reporter);

jasmine.loadConfigFile('spec/support/jasmine.json'); // Load your jasmine.json configuration file
jasmine.execute();
