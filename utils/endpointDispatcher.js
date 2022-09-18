const pathRebuilder = require("../utils/pathRebuilder")
const axios = require("axios");
const ApiError = require("../exceptionHandler/apiError");
let axiosRetry = require('axios-retry');
const { axiosRetryConfig } = require('../config/parameters')


const endpointDispatcher = async (feature, virturalEndpoint, endpoint, endpointQOS, body, responseType) => {
    try {

        const pathName = pathRebuilder(feature.protocol, feature.domain, endpoint.endpoint, body, headers = {}, responseType = {})
        let config = {
            retries: endpoint.retries, // number of retries
            retryDelay: (retryCount) => {

                return (retryCount * axiosRetryConfig.retriesDelay) + 500; // time interval between retries
            },
            retryCondition: (error) => {
                // if retry condition is not specified, by default idempotent requests are retried
                return error;
            },
        }
        axiosRetry(axios, config);

        let request = await axios(
            {
                url: feature.protocol.toLowerCase() + "://" + feature.domain + (feature.domain === "localhost" ? ":" + feature.port : "/") + encodeURI(pathName),
                method: endpoint.method.toLowerCase(),
                body: body,
                headers: endpoint.header,
                responseType: responseType
            }
        )
        delete axiosRetry
        return request

    } catch (error) {

        throw (error)
    }
}




module.exports = endpointDispatcher 