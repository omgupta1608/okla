const getUserById = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        resolve(`USER FETCHED ID - ${args.ID}`);
    });
}

const getAllUsers = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        resolve(`USERS FETCHED `);
    });
}

module.exports = {
    userQueries: {
        getAllUsers,
        getUserById
    }
}