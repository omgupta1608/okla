const {
    readFileSync
} = require('fs'),
path = require('path');

const responseHandler = (statusCode, data, message) => {
    return {
        statusCode,
        data,
        message
    }
};

const importTypes = (relativePath, extendType) => {
    let file = readFileSync(path.join(__dirname, '../graphQL' + relativePath)).toString();
    return file
}

module.exports = {
    responseHandler,
    importTypes
}