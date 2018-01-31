
let logger1 = require('./omelo-logger')

let config = {
    "appenders": {
      "console": {
        "type": "console"
      },
      "file": {
        "type": "file",
        "filename": "${opts:base}/logs/con-log-${opts:serverId}.log",
        "maxLogSize": 1048576,
        "layout": {
          "type": "basic"
        },
        "backups": 5
      }
    },
    "categories": {
      "default": {
        "appenders": ["file", "console"],
        "level": "debug"
      }
    },
    "replaceConsole": true,
    "lineDebug": true,
    "rawMessage":false
  }

  logger1.configure(config);

  let logger = logger1.getLogger('game');

logger.info('test1');
logger.warn('test2');
logger.error('test3');
