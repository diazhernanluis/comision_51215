import winston from "winston";
// Lista de colores aceptada: https://www.npmjs.com/package/colors


const customLevelsOption = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        debug: 4
    },
    colors: {
        fatal: 'red',
        error: 'green',
        warning: 'yellow',
        info: 'blue',
        debug: 'white'
    }
}

const log = winston.createLogger({
    level: customLevelsOption,
    transports: [
        new winston.transports.Console({
            level: 'debug',
            format: winston.format.combine(
                winston.format.colorize({colors: customLevelsOption.colors}),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            filename: 'logs/errors.log',
            level: 'warn',
            format: winston.format.simple()
        })
    ]
});

export default log;