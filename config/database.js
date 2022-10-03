const parameters = require("../config/parameters")
const knex = require("knex")(parameters.database.mysql2);
module.exports = knex