const moment = require('moment');
const winston = require('winston')
const { levels } = require('../config/parameters').winstonConfig
const { createLogger, format, transports } = winston
const { combine, timestamp, label, printf, prettyPrint, simple, ms, splat, colorize } = format;


function formmater() {
    const specialFormat = printf(({ level, message, timestamp }) => {
        return `${timestamp} - ${level}: ${message}`;
    });
    return specialFormat;
}

const logger = createLogger({
    levels: levels,
    format: combine(
        timestamp({ format: "DD-MM-YYYY-ss:mm:HH:" }),
        formmater(),

    ),

    transports: [
        new transports.Console({ colorize: true, timestamp: true }),
        new transports.File({
            filename: `logs/${moment().format("DD-MM-YYYY")}/${moment().format("DD-MM-YYYY")}-emergency.log`, level: "emergency",
        }),
        new transports.File({
            filename: `logs/${moment().format("DD-MM-YYYY")}/${moment().format("DD-MM-YYYY")}-alert.log`, level: "alert",
        }),
        new transports.File({
            filename: `logs/${moment().format("DD-MM-YYYY")}/${moment().format("DD-MM-YYYY")}-critical.log`, level: "critical",
        }),
        new transports.File({
            filename: `logs/${moment().format("DD-MM-YYYY")}/${moment().format("DD-MM-YYYY")}-error.log`, level: "error",
        }),
        new transports.File({
            filename: `logs/${moment().format("DD-MM-YYYY")}/${moment().format("DD-MM-YYYY")}-warn.log`, level: "warn",
        }),
        new transports.File({
            filename: `logs/${moment().format("DD-MM-YYYY")}/${moment().format("DD-MM-YYYY")}-notice.log`, level: "notice",
        }),
        new transports.File({
            filename: `logs/${moment().format("DD-MM-YYYY")}/${moment().format("DD-MM-YYYY")}-info.log`, level: "info",
        }),
        new transports.File({
            filename: `logs/${moment().format("DD-MM-YYYY")}/${moment().format("DD-MM-YYYY")}-debug.log`, level: "debug",
        }),
        new transports.File({
            filename: `logs/${moment().format("DD-MM-YYYY")}/${moment().format("DD-MM-YYYY")}-combined.log`, level: "combined",
        }),
    ],
})




module.exports = logger;
