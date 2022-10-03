
const axios = require("axios");
const { Kafka } = require("kafkajs");
const { consumer } = require("./init.js")
const { findEvent } = require("../service/event")
const { objectMapping, flattenObj, copyArraysFromObject, } = require('../utils/misc')
const database = require('../config/database')
const { tables } = require('../config/parameters').database
async function run() {
    try {
        await consumer.run({
            eachMessage: async ({ topic, partition, message, heartbeat }) => {
                try {

                    const message = JSON.parse(message.value);
                    console.log("message : " + util.inspect(message, false, null, true /* enable colors */));

                    let feature = {}, endpoints = [], event = {}, eventActions = []

                    // console.log("message : " + util.inspect(messageId, timestamp, type, metaData, dto, false, null, true /* enable colors */));
                    // endpoints = database.select(tables.endpoint).where()
                    // event = findEvent({ id: metaData.eventID })
                    // let eventPaths = await events
                    //     .findOne({
                    //         attributes: {
                    //             exclude: ["id", "createdAt", "updatedAt", "eventName"],
                    //         },
                    //         where: { eventName: resopnse.eventName },
                    //         include: [
                    //             {
                    //                 model: path,
                    //             },
                    //         ],
                    //     })
                    //     .then((data) => data.get({ plain: true }));
                    // let urls = [];
                    // eventPaths.paths.forEach((p) =>
                    //     urls.push(
                    //         url
                    //             .findOne({
                    //                 nested: false,
                    //                 where: { id: p.urlId },
                    //                 include: [
                    //                     {
                    //                         model: path,
                    //                         where: {
                    //                             urlId: p.urlId,
                    //                             id: p.pathsEvents.pathId,
                    //                         },
                    //                         include: [
                    //                             {
                    //                                 model: events,
                    //                                 where: { eventName: resopnse.eventName },
                    //                             },
                    //                         ],
                    //                     },
                    //                 ],
                    //             })
                    //             .then((data) => data.get({ plain: true }))
                    //     )
                    // );

                    // let promises = Promise.all(urls);
                    // let data = await promises;

                    // // console.log("data1: " + util.inspect(data, false, null, true /* enable colors */));

                    // promises = Promise.all(
                    //     data.map(async (url) => {
                    //         await Promise.all(
                    //             url.paths.map(async (path) => {
                    //                 await Promise.all(
                    //                     path.events.map(async (event) => {
                    //                         event["pathActions"] = await pathActions.findAll({
                    //                             raw: true,
                    //                             where: { pathsEventId: event.pathsEvents.id },
                    //                         });
                    //                         return event;
                    //                     }))
                    //                 return path;
                    //             }
                    //             ))
                    //         return url;
                    //     })
                    // );

                    // data = await promises

                    // console.log("data1: " + util.inspect(data, false, null, true /* enable colors */));
                    // let requests = []
                    // let parsedOutgoing
                    // data.forEach(url => {
                    //     url.paths.forEach(path => {
                    //         path.events.forEach(evnt => {
                    //             evnt.pathActions.forEach(pathAction => {
                    //                 parsedOutgoing = pathAction.pathJsonObject
                    //                 if (url.domain === "localhost") {
                    //                     requests.push(axios[path.httpMethod.toLowerCase()](`http://${url.domain}:${url.portNumber}${path.pathName}`, copyArraysFromObject(flattenObj(resopnse), objectMapping(resopnse, parsedOutgoing))))


                    //                     // console.log("data1: " + util.inspect(copyArraysFromObject(flattenObj(resopnse), objectMapping(resopnse, parsedOutgoing)), false, null, true /* enable colors */));
                    //                 }
                    //                 else {
                    //                     requests.push(axios[path.httpMethod.toLowerCase()](`https://${url.domain}${path.pathName}`, copyArraysFromObject(flattenObj(resopnse), objectMapping(resopnse, parsedOutgoing))))
                    //                 }

                    //             })
                    //         })
                    //     })
                    // })

                    // let requsetPromises = Promise.all(requests)
                    // let requsetResponds = await requsetPromises
                } catch (error) {
                    console.log(error);
                }
            },
        });
    } catch (error) {

    }

}


module.exports = run

