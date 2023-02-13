const { Kafka } = require("kafkajs");
const { topics } = require("../config/parameters").kafka;
const logger = require("../utils/logger");

// , consumer2, consumer3, consumer4

const kafka = new Kafka({
  clientId: process.env.KAFKA_CLIENT_ID,
  brokers: [process.env.KAFKA_BROKERS],
  allowAutoTopicCreation: true,
  retry: {
    initialRetryTime: 300000,
    maxRetryTime: 600000,
    retries: 8,
  },
});
(async function producerInit() {
  const producer = kafka.producer();
  await producer.connect();
  await producer.disconnect();
})();
const consumerInit = async function () {
  try {
    let consumer = await kafka.consumer({ groupId: "1" });

    await consumer.connect();
    for (let topic of topics) {
      await consumer.subscribe(topic);
    }

    return consumer;
  } catch (error) {
    console.log("could not connect to kafka server", error);
    logger.critical("could not connect to kafka server", error.message);
  } finally {
    // process.exit(0);
  }
};

module.exports = {
  consumerInit,
};
