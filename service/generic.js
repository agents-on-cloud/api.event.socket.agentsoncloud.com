
const database = require('../config/database')
const findOne = async (tableName, conditions) => {
    try {
        return await database.select(tableName).where(conditions)

    } catch (error) {
        console.log(error.message)

    }

}


const findAll = async (tableName, conditions) => {
    try {
        return await database.select(tableName).where(conditions);

    } catch (error) {
        console.log(error.message)
    }
}

module.exports = { findOne, findAll }