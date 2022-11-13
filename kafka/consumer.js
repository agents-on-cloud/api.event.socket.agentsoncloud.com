
const axios = require("axios");
const { Kafka } = require("kafkajs");
const { consumerInit } = require("./init.js")
const logger = require("../utils/logger.js");
const endpointDispatcher = require('../utils/endpointDispatcher');
const util = require('util')
async function run() {
    try {

        const consumer = await consumerInit()
        await consumer.run({
            eachMessage: async ({ topic, partition, message, heartbeat }) => {
                try {

                    const { messageId, timestamp, type, data, metaData } = JSON.parse(message.value);
                    const { eventId, eventName, actions, parentGwTransactionId, workspace, ciamWorkspace, accessToken } = metaData
                    console.log("message: " + util.inspect(JSON.parse(message.value), false, null, true /* enable colors */));
                    let headers = { workspace: ciamWorkspace, authorization: `Bearer ${accessToken}` }

                    if (!_.isNil(type) && type === constants.eventMessageType.transaction) {
                        for (let action of actions) {
                            try {
                                await endpointDispatcher({ workspace: workspace.url, uri: action.virtualEndpoint, body: { ...data, eventId, eventName }, headers: headers })
                            } catch (error) {
                                if (error.code == 'ECONNREFUSED') {
                                    // console.log(error.message);
                                } else if (error.response) {
                                    // The request was made and the server responded with a status code
                                    // that falls out of the range of 2xx
                                    // console.log(error.response.data);
                                    // console.log(error.response.status);
                                    // console.log(error.response.headers);
                                } else if (error.request) {
                                    // The request was made but no response was received
                                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                                    // http.ClientRequest in node.js
                                    // console.log(error.request.data);
                                } else {
                                    // console.log(error);
                                    // Something happened in setting up the request that triggered an Error
                                    // console.log('Error', error.message);
                                }
                            }
                        }
                    }
                } catch (error) {
                    // logger.error("kafka consumer runner error:" + error.message)
                }
            },
        });
    } catch (error) {
        logger.error("kafka consumer error:" + error.message)

    }
}

module.exports = run

