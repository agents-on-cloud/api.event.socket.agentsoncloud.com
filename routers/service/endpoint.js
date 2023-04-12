const knex = require("../../config/database");
const logger = require("../../utils/logger");

const findEndpoint = async ({ tableName, conditions }) => {
    try {
        let event = await knex
            .distinct()
            .select("*")
            .from(tables.virtualEndpoint)
            .where({ age_mt_event_id: eventId });
        return age_mt_endpoints_id;

    } catch (error) {
        logger.error("Something went wrong" + error)

    }

}

module.exports = findEndpoint