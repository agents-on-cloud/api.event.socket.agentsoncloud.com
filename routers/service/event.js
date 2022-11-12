const { findOne, findAll } = require('./generic.js')
const { tables } = require('../../config/parameters').database
const findEvent = ({ id, name }) => {
    try {
        findOne(tables.event, { id: id })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { findEvent }