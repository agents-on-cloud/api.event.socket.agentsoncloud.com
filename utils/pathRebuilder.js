const pathRebuilder = (protocol, domain, path, body) => {

    try {
        const regex = /:[a-zA-Z]+[_\sS\][a-zA-Z]+/g
        const replace = /:/g
        let url = new URL(protocol.toLowerCase() + "://" + domain + path);
        let query = url.searchParams
        let pathParams = url.pathname.match(regex)
        let pathQueryKeys = []
        for (let key of query.keys()) {
            pathQueryKeys.push(key)
        }
        if (pathQueryKeys.length > 0 && pathQueryKeys.checkIsEqual(Object.keys(body))) {
            pathQueryKeys.forEach(queryParam => query.set(queryParam, body[queryParam]))
        }


        let pathname = url.pathname
        if (pathParams !== null && pathParams.length > 0) {
            pathname = pathParams.map(matched => url.pathname = url.pathname.replace(matched, body[matched.replace(replace, "")])).pop()
        }
        return pathname + url.search
    } catch (error) {

        if (err.response.status) {
            res.status(err.response.status).json(err.response.data)

        } else {
            res.status(500).json({ massage: `Your ${domain} API Didn't return a respose or your server is down` })
        }
    }

}


module.exports = pathRebuilder


