
const axios = require("axios");
const { Kafka } = require("kafkajs");
const { consumerInit } = require("./init.js")
const logger = require("../utils/logger.js");
const endpointDispatcher = require('../utils/endpointDispatcher');
const util = require('util')
// const logger = require("../utils/logger")

async function run() {
    try {

        const consumer = await consumerInit()
        // console.log(consumer);
        await consumer.run({
            eachMessage: async ({ topic, partition, message, heartbeat }) => {
                 try {
                    const { messageId, timestamp, type, data, metaData } = JSON.parse(message.value);
                    const { eventId, eventName, actions, parentGwTransactionId, workspace, ciamWorkspace, accessToken, passmein } = metaData
                    let headers = { workspace: ciamWorkspace, authorization: `Bearer ${accessToken}`, passmein: passmein ? true : false }

                    if (!_.isNil(type) && type === constants.eventMessageType.transaction) {
                        for (let action of actions) {
                            try {
                            const response = await endpointDispatcher({ workspace: workspace.url, uri: action.virtualEndpoint, body: { ...data, eventId, eventName }, headers: headers })
                            } catch (error) {
                                if (error.code == 'ECONNREFUSED') {
                                } else if (error.response) {
                                    logger.critical(`endpoint ${action.virtualEndpoint} + fail because ${error.response.data.message}`)
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
                                    console.log(error.request);
                                } else {
                                    // console.log(error);
                                    // Something happened in setting up the request that triggered an Error
                                    console.log('Error', error.message);
                                }
                            }
                        }
                    }
                } catch (error) {
                    logger.error("kafka consumer runner error:" + error.message)
                }
            },
        });
    } catch (error) {
        logger.error("kafka consumer error:" + error.message)

    }
}

module.exports = run

