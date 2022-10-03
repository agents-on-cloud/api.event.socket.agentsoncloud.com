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
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "HRS",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "COM",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "SUP",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "INC",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "PRF",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "NOT",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "BIL",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "CON",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "KNB",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "MRK",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "BKG",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "TSK",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "PRV",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "SRV",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "FAC",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "INV",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "DMS",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "MRK",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "LOG",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "LGS",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "CRN",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "RPT",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "TS1",
                allowAutoTopicCreation: false,
                fromBeginning: false,
            },
            {
                topic: "TS2",
                allowAutoTopicCreation: false,
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
