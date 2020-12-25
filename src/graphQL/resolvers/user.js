const { userModel } = require('../../models'),
    { ApolloError } = require('apollo-server-express'),
    { Op } = require('sequelize'),
    emailRegex = new RegExp(/^[a-z0-9\.]+@[a-z]+\.[a-z]+$/),
    helpers = {
        genUser: (info) => {
            let user = info;
            user.uId = `U-${user.name.substr(user.name.length - 4)}${user.phone.substr(user.phone.length - 4)}`;
            user.isActive = 1;
            user.balance = 0;

            return user;
        }
    };

const getUserById = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        userModel.findOne({
            where: {
                uId: {
                    [Op.eq]: args.ID
                }
            }
        }).then(data => {
            if (data instanceof userModel) {
                resolve(data);
            } else {
                reject(new ApolloError('Invalid Type'));
            }
        }).catch(error => {
            reject(new ApolloError(error));
        })
    });
}

const getAllUsers = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        userModel.findAll().then(data => {
            resolve(data);
        }).catch(error => {
            reject(new ApolloError(error));
        });
    });
}

const login = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        if (!args.email.match(emailRegex)) {
            reject(new ApolloError('Invalid Email'));
        }
        userModel.findOne({
            where: {
                email: {
                    [Op.eq]: args.email
                }
            }
        }).then(data => {
            if (data instanceof userModel && data.password === args.password) {
                resolve({
                    message: "Logged In Successfully as " + data.name,
                    accessToken: "JWT Here!"
                });
            } else {
                reject(new ApolloError('Wrong Credentials'));
            }
        }).catch(error => {
            reject(new ApolloError(error));
        });
    });
}

const signUp = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        let user = helpers.genUser(args.info);
        userModel.create(user).then(data => {
            resolve({
                message: "Account Created! " + data.name,
                accessToken: "JWT Here!"
            });
        }).catch(error => {
            reject(new ApolloError('Something went Wrong'));
        });
    });
}

module.exports = {
    userQueries: {
        getAllUsers,
        getUserById
    },
    userMutations: {
        login,
        signUp
    }
}