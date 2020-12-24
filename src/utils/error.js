module.exports.Error = (error, message, file) => {
    console.error(`
ERROR : ${error}
MESSAGE : ${message}
FILE : ${file}
    `);
}

module.exports.formatGQLError = (err) => {
    if (err.message.startsWith("Database Error: ")) {
        return new Error('Internal server error');
    }
    return err;
}