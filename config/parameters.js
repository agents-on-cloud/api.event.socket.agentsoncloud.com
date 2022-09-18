require('dotenv').config();
const config = {
    app: {
        name: 'Agents On Cloued Event Gateway',
        env: process.env.NODE_ENV,
        port: process.env.PORT || 50003
    },
    database: {
        databaseAbbreviation: 'AGE',
        transactionAbbreviation: 'TRN',
        tablesAbbreviation: {
            workspace: "AWS",
            feature: "AFT",
            endpoint: "AEP",
            event: "AEV",
            virtualEndpoint: "AVE",
            eventAction: "AEA",
            endpointQOS: "AEQ",
            endpointTransaction: "AET",
            log: "AEL"
        },
        mysql: {
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST_ADDRESS,
            port: process.env.DB_PORT,
            dialect: process.env.DB_DIALECT,
            database: process.env.DB_NAME,
            logging: false,
            timezone: "+03:00",
        }
    },
    kafka: {


    },
    winstonConfig: {
        levels: {
            emergency: 0, // Emergency: system is unusable
            alert: 1,   // action must be taken immediately
            critical: 2, //  critical conditions
            error: 3, // error conditions
            warn: 4, // warning conditions
            notice: 5, // notice conditions
            info: 6, // informative conditions
            debug: 7, // debug conditions
            combined: 8, // combined conditions

        },
    },

};


module.exports = config;
