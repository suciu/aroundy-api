let bunyan = require('bunyan');
let config = require('../config').logger;

// set logger default values based on environment variables
let log = bunyan.createLogger({
  name: config.source,
  level: config.level,
  env: config.env,
});

// make sure that uncaught exceptions are logged before exiting
process.on('uncaughtException', function (err) {
  log.fatal(err, "Uncaught exception");
})

process.on('exit', (code) => {
  log.error({exitCode: code}, "Exiting with status code: " + code);
});

process.on('warning', (warning) => {
  log.warn(warning, "Warning triggered");
});

process.on('unhandledRejection', (reason, promise) => {
  log.fatal(reason, "Unhandled rejection: " + reason.message);
});

// export the module
module.exports = log;