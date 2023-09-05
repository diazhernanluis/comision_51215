import winston from 'winston';

const customLevelOptions = {
    levels: {
        fata: 0,
        error: 1,
        warning: 2,
        info: 3,
        debug: 4
    },
    colors: {
        fatal: 'red',
        error: 'magenta',
        warning: 'yellow',
        info: 'blue',
        debug: 'white'
    }
};

const log = winston.createLogger({
    level: customLevelOptions,
    transports: [
        new winston.transports.Console({
            level: "info",
            format: winston.format.combine(
                winston.format.colorize({colors: customLevelOptions.colors}),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            filename: 'logs/errors.log',
            level: 'warning',
            format: winston.format.simple()
        })
    ]
})

export default log;