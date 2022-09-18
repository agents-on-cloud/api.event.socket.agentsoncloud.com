const { v4: uuidv4 } = require('uuid');

const uuidGenerator = (db = null, table = null, country = null, trn = null) => {
    return (trn ? trn + '-' : "") + (db ? db + '-' : "") + (table ? table + '-' : "") + (country ? country + '-' : "") + `${uuidv4()}`
}


module.exports = uuidGenerator