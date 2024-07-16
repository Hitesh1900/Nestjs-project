// src/config/logger.ts

import winston from 'winston';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    // Add more transports as needed (file, database, etc.)
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple(),
  ),
});

export default logger;
