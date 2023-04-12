const { models } = require("../models/index");

const getConfigData = async (modelName, id, requestedUrlId) => {

    const promiseArray = ["url", "path", "events", "qosConfig", "pathsEvents"]
        .map(string =>
            models[string]?.findAll({
                raw: true,
                attributes: {
                    exclude: ["createdAt", "updatedAt"],

                },
                ...(string === 'path' && requestedUrlId && { where: { urlId: requestedUrlId } })
            })
        );
    //attributes: { exclude: ['id', "createdAt", "updatedAt", path == "path" && "urlId", path == "qosConfig" && "pathId"] },   
    if (modelName && id) promiseArray.push(models[modelName].findAll({ raw: true, where: { id } }))

    return await Promise.all(promiseArray);

};


const getLogedData = async () => {
    const promiseArray = ["log"]
        .map(path => models[path].findAll({
            raw: true,
            attributes: { exclude: ["createdAt", "updatedAt"] },
        }));
    return await Promise.all(promiseArray);
};

module.exports = { getConfigData, getLogedData }