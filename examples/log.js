
let logger1 = require('../lib/logger')

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

  var logger = require('../lib/logger').getLogger('default');

logger.info('test1');
logger.warn('test2');
logger.error('test3');
