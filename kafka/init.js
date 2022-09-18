const { Kafka } = require("kafkajs");

const kafka = new Kafka({

    clientId: process.env.KAFKA_CLIENT_ID,
    brokers: [process.env.KAFKA_BROKERS],
    allowAutoTopicCreation: false,
});
module.exports = kafka;
