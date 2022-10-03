function objectMapping(incomming, outgoing) {
    const regex = /\${[a-zA-Z]+[\sS\]_[a-zA-Z]+}|\${[a-zA-Z]}/g;
    const replace1 = /\${/g;
    const replace2 = /}/g;

    let stringifiedOutgoing = JSON.stringify(outgoing);
    // console.log(stringifiedOutgoing);
    let outgoingMathched = stringifiedOutgoing.match(regex);

    let flattenedIncomming = flattenObj(incomming);

    // console.log("outgoingMathched", outgoingMathched);
    let mappedOutgoing = stringifiedOutgoing;
    if (outgoingMathched !== null && outgoingMathched.length > 0) {
        mappedOutgoing = outgoingMathched
            .map((matched) => {
                m1 = matched.replace(replace1, "");
                m2 = m1.replace(replace2, "");

                return (stringifiedOutgoing = stringifiedOutgoing.replace(
                    matched,
                    flattenedIncomming[m2]
                ));
            })
            .pop();
    }

    mappedOutgoing = JSON.parse(mappedOutgoing);
    // console.log("mappedOutgoing", mappedOutgoing);
    return mappedOutgoing;
}

const flattenObj = (ob) => {
    let result = {};
    for (const i in ob) {
        if (typeof ob[i] === "object" && !Array.isArray(ob[i])) {
            const temp = flattenObj(ob[i]);
            for (const j in temp) {
                result[j] = temp[j];
            }
        }
        // else if (Array.isArray(ob[i]) === true) {
        //     const temp1 = flattenObj(ob[i]);
        //     for (const j in temp1) {
        //         result[j] = temp1[j];
        //     }
        // }
        else {
            result[i] = ob[i];
        }
    }
    return result;
};

const copyArraysFromObject = (firstObject, secondObject) => {
    for (var k in firstObject) {
        if (Array.isArray(firstObject[k])) secondObject[k] = firstObject[k];
    }
    return secondObject;
};



module.exports = {
    objectMapping,
    flattenObj,
    copyArraysFromObject,
}