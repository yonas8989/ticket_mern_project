const winston = require("winston");

// Create a logger instance
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }), // Logs to console
    new winston.transports.File({ filename: "logs/app.log" }) // Logs to file
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: "logs/exceptions.log" }) // Handles uncaught exceptions
  ],
  rejectionHandlers: [
    new winston.transports.File({ filename: "logs/rejections.log" }) // Handles unhandled promise rejections
  ]
});

// Global error handling
process.on("uncaughtException", (ex) => {
  logger.error(`Uncaught Exception: ${ex.message}`, { stack: ex.stack });
  process.exit(1);
});

process.on("unhandledRejection", (ex) => {
  logger.error(`Unhandled Rejection: ${ex.message}`, { stack: ex.stack });
  process.exit(1);
});

module.exports = logger;
