require('dotenv').config();
const config = {
    app: {
        name: 'Agents On Cloued Event Gateway',
        env: process.env.NODE_ENV,
        port: process.env.PORT,
        apiGatewayUrl: process.env.API_GATEWAY_URL
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
        tables: {
            workspace: "AGE_MT_Workspace",
            feature: "AGE_MT_Feature",
            endpoint: "AGE_MT_Endpoint",
            event: "AGE_MT_Event",
            virtualEndpoint: "AGE_MT_Virtual_Endpoint",
            eventAction: "AGE_RT_Event_Actions",
            endpointQOS: "AGE_ST_Endpoint_QOS",
            endpointTransaction: "AGE_TT_Endpoint_Transactions",
            log: "AGE_TT_Logs"
        },
        mysql2: {
            client: process.env.DB_DIALECT,
            connection: {
                host: process.env.DB_HOST_ADDRESS,
                port: process.env.DB_PORT,
                user: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME
            },
        }
    },
    kafka: {
        topics: [
            {
                topic: "CIM",
                fromBeginning: false,
            },
            {
                topic: "HRS",
                fromBeginning: false,
            },
            {
                topic: "COM",
                fromBeginning: false,
            },
            {
                topic: "SUP",
                fromBeginning: false,
            },
            {
                topic: "INC",
                fromBeginning: false,
            },
            {
                topic: "PRF",
                fromBeginning: false,
            },
            {
                topic: "NOT",
                fromBeginning: false,
            },
            {
                topic: "BIL",
                fromBeginning: false,
            },
            {
                topic: "CON",
                fromBeginning: false,
            },
            {
                topic: "KNB",
                fromBeginning: false,
            },
            {
                topic: "MRK",
                fromBeginning: false,
            },
            {
                topic: "BKG",
                fromBeginning: false,
            },
            {
                topic: "TSK",
                fromBeginning: false,
            },
            {
                topic: "PRV",
                fromBeginning: false,
            },
            {
                topic: "SRV",
                fromBeginning: true,
            },
            {
                topic: "FAC",
                fromBeginning: false,
            },
            {
                topic: "INV",
                fromBeginning: false,
            },
            {
                topic: "DMS",
                fromBeginning: false,
            },
            {
                topic: "LOG",
                fromBeginning: false,
            },
            {
                topic: "LGS",
                fromBeginning: false,
            },
            {
                topic: "CRN",
                fromBeginning: false,
            },
            {
                topic: "RPT",
                fromBeginning: false,
            },
            {
                topic: "VCM",
                fromBeginning: false,
            },
            {
                topic: "WLT",
                fromBeginning: false,
            },
            {
                topic: "TRIGGERED",
                fromBeginning: false,
            },
            {
                topic: "TS1",
                fromBeginning: false,
            },
            {
                topic: "TS2",
                fromBeginning: false,
            },

        ],
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
