require("dotenv").config();
var express = require('express');
// var path = require('path');
var cookieParser = require('cookie-parser');
const apiErrorHandler = require('./exceptionHandler/apiErrorHandler');
const run = require("./kafka/consumer")
global.constants = require("./config/constants")
global._ = require('lodash');
var app = express();
const cors = require("cors");
let io = require("socket.io-client");
app.use(cors())
const endpointDispatcher = require('./utils/endpointDispatcher');
const logger = require("./utils/logger.js");



// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const router = require("./routers");
// app.use(router);
app.use(apiErrorHandler);
// run()//kafka consumer 


const amqp = require("amqplib");
var channel, connection;
connectQueue()  // call the connect function

async function connectQueue() {
    try {
        connection = await amqp.connect("amqp://localhost:5672");
        channel = await connection.createChannel()

        await channel.assertQueue("test-queue")
        // 
        // let eventMessage
        channel.consume("test-queue", msg => {
            let data = JSON.parse(`${Buffer.from(msg.content)}`);
            const { eventId, eventName, actions, parentGwTransactionId, workspace, ciamWorkspace, accessToken, passmein } = data.metaData
            let headers = { workspace: ciamWorkspace, authorization: `Bearer ${accessToken}`, passmein: passmein ? true : false }
            // console.log(headers);

            actions.forEach(async action => {


                try {
                    logger.notice(`endpoint ${action.virtualEndpoint} in`)
                    const response = await endpointDispatcher({ workspace: workspace.url, uri: action.virtualEndpoint, body: { ...data.data, eventId, eventName }, headers: headers })
                    logger.notice(`endpoint ${action.virtualEndpoint} out`)

                } catch (error) {
                    if (error.code == 'ECONNREFUSED') {
                    } else if (error.response.data.message) {
                        logger.critical(`endpoint ${action.virtualEndpoint} + fail because ${error?.response?.data?.message}`)
                        // return
                        // consumer.disconnect()
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        // console.log(error.response); 
                        // console.log(error.response.status);
                        // console.log(error.response.headers);
                    }
                    else if (error.response.data) {
                        logger.critical(`endpoint ${action.virtualEndpoint} + fail because ${error?.response?.data}`)
                        // consumer.disconnect()
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        // console.log(error.response); 
                        // console.log(error.response.status);
                        // console.log(error.response.headers);
                    } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        // console.log(error.request);
                    } else {
                        // console.log(error);
                        // Something happened in setting up the request that triggered an Error
                        // console.log('Error', error.message);
                    }
                }
            })
            channel.ack(msg);

        })

    } catch (error) {
        console.log(error);
    }
}




// // const env = process?.env?.NODE_ENV || "development";
// const ioConnection = `http://localhost:50503`;
// // const ioConnection = `http://api.socket.${env}.agentsoncloud.com`;
// let socket = io.connect(ioConnection, { reconnect: true });

// socket.emit("join_room", "all");
// socket.on("eventHandler", async (data) => {
//     // console.log("gggggggg");
//     // console.log(data.metaData);
//     const { eventId, eventName, actions, parentGwTransactionId, workspace, ciamWorkspace, accessToken, passmein } = data.metaData
//     let headers = { workspace: ciamWorkspace, authorization: `Bearer ${accessToken}`, passmein: passmein ? true : false }
//     // console.log(headers);

//     actions.forEach(async action => {


//         try {
//             logger.notice(`endpoint ${action.virtualEndpoint} in`)
//             const response = await endpointDispatcher({ workspace: workspace.url, uri: action.virtualEndpoint, body: { ...data.data, eventId, eventName }, headers: headers })
//             logger.notice(`endpoint ${action.virtualEndpoint} out`)

//         } catch (error) {
//             if (error.code == 'ECONNREFUSED') {
//             } else if (error.response.data.message) {
//                 logger.critical(`endpoint ${action.virtualEndpoint} + fail because ${error?.response?.data?.message}`)
//                 // return
//                 // consumer.disconnect()
//                 // The request was made and the server responded with a status code
//                 // that falls out of the range of 2xx
//                 // console.log(error.response); 
//                 // console.log(error.response.status);
//                 // console.log(error.response.headers);
//             }
//             else if (error.response.data) {
//                 logger.critical(`endpoint ${action.virtualEndpoint} + fail because ${error?.response?.data}`)
//                 // consumer.disconnect()
//                 // The request was made and the server responded with a status code
//                 // that falls out of the range of 2xx
//                 // console.log(error.response); 
//                 // console.log(error.response.status);
//                 // console.log(error.response.headers);
//             } else if (error.request) {
//                 // The request was made but no response was received
//                 // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//                 // http.ClientRequest in node.js
//                 // console.log(error.request);
//             } else {
//                 // console.log(error);
//                 // Something happened in setting up the request that triggered an Error
//                 // console.log('Error', error.message);
//             }
//         }
//     })

// });

module.exports = app;
