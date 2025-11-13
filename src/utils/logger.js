const winston = require('winston');

const log = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: 'HH:mm:ss' }),
    winston.format.printf(({ timestamp, level, message }) => 
      `${timestamp} [${level}]: ${message}` // no browser here
    )
  ),
  transports: [new winston.transports.Console()],
});

module.exports = log;