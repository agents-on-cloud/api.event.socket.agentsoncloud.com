const ApiError = require("./apiError");

function appErrorHandler(err, req, res, next) {
    if (err instanceof ApiError) {
        res.status(err.code).json({ ...err });
        return;
    }

}

module.exports = appErrorHandler;