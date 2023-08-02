import winston from "winston";

const log = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: 'http'
        }),
        new winston.transports.File({
            level: 'warn',
            filename: 'logs/error.log',
        })
    ]
});

export default log