const { tripModel } = require('../../models'),
    { ApolloError } = require('apollo-server-express'),
    { Op } = require('sequelize');

const getTripById = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        tripModel.findOne({
            where: {
                tId: {
                    [Op.eq]: args.ID
                }
            }
        }).then(data => {
            if (data instanceof tripModel) {
                resolve(data);
            } else {
                reject(new ApolloError('Invalid Type'));
            }
        }).catch(error => {
            reject(new ApolloError(error))
        });
    });
}

const getAllTrips = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        tripModel.findAll().then(data => {
            resolve(data);
        }).catch(error => {
            reject(new ApolloError(error));
        });
    });
}

const getUserTrips = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        tripModel.findAll({
            where: {
                uId: {
                    [Op.eq]: args.uId
                }
            }
        }).then(data => {
            resolve(data);
        }).catch(error => {
            reject(new ApolloError(error));
        });
    });
}

module.exports = {
    tripQueries: {
        getAllTrips,
        getTripById,
        getUserTrips
    }
}