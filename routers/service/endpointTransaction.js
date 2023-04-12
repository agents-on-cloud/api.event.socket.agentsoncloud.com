
// const knex = require('../../config/database')
// const { database } = require('../../config/parameters')
// const insert = async ({ parentGwTransactionId }) => {
//     const id = uuidGenerator(database.databaseAbbreviation, database.tablesAbbreviation.endpointTransaction, "JOR");
//     const gw_transaction_id = uuidGenerator();
//     const gw_transaction_id = uuidGenerator();
//     const parent_gw_transaction_id = 
//     knex(database.tables.endpointTransaction).insert({})

// }
// // const findEndpointTransaction = async (body) => {
// //     try {
// //         const {
// //             id,
// //             gwTransactionId,
// //             ageMtVirtualEndpointId,
// //             virtualEndpointTransactionId,
// //             status,
// //             actionsCount,
// //             parentGwTransactionId,
// //             recordStatus,
// //             language, limit, offset } = body

// //         return await generic.queriesBuilder("endpointTransaction",
// //             [(id && { id }),
// //             (gwTransactionId && { gwTransactionId }),
// //             (ageMtVirtualEndpointId && { ageMtVirtualEndpointId }),
// //             (virtualEndpointTransactionId && { virtualEndpointTransactionId }),
// //             (status && { status }),
// //             (actionsCount && { actionsCount }),
// //             (parentGwTransactionId && { parentGwTransactionId }),
// //             { recordStatus: recordStatus ? recordStatus : constants.status.latest }
// //             ],
// //             {
// //                 limit,
// //                 offset
// //             }
// //         );

// //     } catch (error) {
// //         console.log("erros", error);
// //     }
// // }


// module.exports = { insert }