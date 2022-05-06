const {winston, transports, createLogger} = require('winston');

const logger = createLogger({
    level: 'info',
    transports:[
        new transports.File({filename: 'error.log'})
    ],
    rejectionHandlers:[
        new transports.File({filename: 'rejections.log'})
    ],
    exceptionHandlers:[
        new transports.File({filename: 'exceptions.log'})
    ]
});

module.exports = logger;