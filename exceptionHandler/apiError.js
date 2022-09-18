const {
    ReasonPhrases,
    StatusCodes,
    getReasonPhrase,
    getStatusCode,
} = require('http-status-codes');


class ApiError {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }

    // 300


    // 400 
    static badRequest(msg) {
        return new ApiError(StatusCodes.BAD_REQUEST, msg);
    }
    //401    
    static unauthorized(msg) {
        return new ApiError(StatusCodes.UNAUTHORIZED, msg);
    }
    //402
    static paymentRequired(msg) {
        return new ApiError(StatusCodes.PAYMENT_REQUIRED, msg);
    }
    //403 
    static forbidden(msg) {
        return new ApiError(StatusCodes.FORBIDDEN, msg);
    }
    //404 Not Found
    static notFound(msg) {
        return new ApiError(StatusCodes.NOT_FOUND, msg);
    }

    //405 Method Not Allowed
    static methodNotAllowed(msg) {
        return new ApiError(StatusCodes.METHOD_NOT_ALLOWED, msg);
    }


    // 406 Not Acceptable
    static notAcceptable(msg) {
        return new ApiError(StatusCodes.NOT_ACCEPTABLE, msg);
    }

    //408 Request Timeout
    static requestTimeout(msg) {
        return new ApiError(StatusCodes.REQUEST_TIMEOUT, msg);
    }
    //408 Request Timeout
    static conflict(msg) {
        return new ApiError(StatusCodes.CONFLICT, msg);
    }

    //500 
    static internalServerError(msg) {
        return new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, msg);
    }
    //501
    static notImplemented(msg) {
        return new ApiError(StatusCodes.NOT_IMPLEMENTED, msg);
    }
    //502
    static badGateway(msg) {
        return new ApiError(StatusCodes.BAD_GATEWAY, msg);
    }
    //503
    static serviceUnavailable(msg) {
        return new ApiError(StatusCodes.SERVICE_UNAVAILABLE, msg);
    }

    static requestTimeout(msg) {
        return new ApiError(StatusCodes.REQUEST_TIMEOUT, msg);
    }





}

module.exports = ApiError;