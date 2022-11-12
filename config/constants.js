const eventMessageType = {
    migration: "MIGRATION",
    rollBack: "ROLL_BACK",
    transaction: "TRANSACTION",
    deleteTransaction: "DELETE_TRANSACTION",

}

const status = {
    valid: "VALID",
    active: "ACTIVE",
    latest: "LATEST",
    failed: "FAILED",
    pending: "PENDING",
    expired: "EXPIRED",
    invalid: "INVALID",
    unknown: "UNKNOWN",
    updated: "UPDATED",
    deleted: "DELETED",
    inActive: "INACTIVE",
    succeeded: "SUCCEEDED",
    assignToken: "ASSIGN-TOKEN",
    unassignToken: "UNASSIGN-TOKEN",
    reassignToken: "REASSIGN-TOKEN",
}



module.exports = { status, eventMessageType }