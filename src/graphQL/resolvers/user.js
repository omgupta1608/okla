const { userModel } = require('../../models/userModel'),
    { ApolloError } = require('apollo-server-express'),
    { Op } = require('sequelize');

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
            }else{
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

module.exports = {
    userQueries: {
        getAllUsers,
        getUserById
    }
}