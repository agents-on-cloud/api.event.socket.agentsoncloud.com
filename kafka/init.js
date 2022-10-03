const { Kafka } = require("kafkajs");
const { topics } = require("../config/parameters").kafka
const logger = require("../utils/logger")
let consumer
// , consumer2, consumer3, consumer4
const init = async () => {
    try {
        const kafka = new Kafka({

            clientId: process.env.KAFKA_CLIENT_ID,
            brokers: [process.env.KAFKA_BROKERS],
            allowAutoTopicCreation: false,
        });


        consumer = kafka.consumer({ groupId: "1001" });
        // consumer2 = kafka.consumer({ groupId: "1002" });
        // consumer3 = kafka.consumer({ groupId: "1003" });
        // consumer4 = kafka.consumer({ groupId: "1004" });


        await consumer.connect();
        // await consumer2.connect();
        // await consumer3.connect();
        // await consumer4.connect();
        // let id = 0
        for (let topic of topics) {
            // console.log("topic", topic)
            // if (id >= 0 || id < 7)
            await consumer.subscribe(topic);
            // if (id >= 7 || id < 12)
            //     await consumer2.subscribe(topic);
            // if (id >= 12 || id < 17)
            //     await consumer3.subscribe(topic);
            // if (id >= 17 || id < 30)
            //     await consumer4.subscribe(topic);
            // ++id
        }

    } catch (error) {
        console.log(error);
        logger.critical("could not connect to kafka server", error.message)
    } finally {
        // process.exit(0);
    }

}

module.exports = {
    init,
    consumer
};
