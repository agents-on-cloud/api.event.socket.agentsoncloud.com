
let axios = require("axios");
let axiosRetry = require('axios-retry');

const { axiosRetryConfig, app } = require('../config/parameters')


const endpointDispatcher = async ({ workspace, uri, body, headers }) => {
    console.log("🚀 ~ file: endpointDispatcher.js ~ line 9 ~ endpointDispatcher ~ headers", headers)
    try {
        let initalRetryDelay = 0
        let retries = 0
        let config = {
            retries: retries, // number of retries
            retryDelay: (retryCount) => {
                initalRetryDelay += 0
                console.log(retryCount)
                return (retryCount * retries); // time interval between retries
            },
            retryCondition: (error) => {

                return error;
            },
        }


        axiosRetry(axios, config);
        let url = app.apiGatewayUrl + workspace + uri

        let request = await axios(
            {
                url: url,
                method: "POST",
                data: body,
                headers: headers,
                withCredentials: true,
                maxContentLength: 100000000,
                maxBodyLength: 1000000000
            }
        )

        delete axiosRetry
        return request

    } catch (error) {
        console.log(error.message)
        console.log(error.request);
        throw (error)
    }
}




module.exports = endpointDispatcher 