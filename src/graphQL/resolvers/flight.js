const { flightModel } = require('../../models'),
    { ApolloError } = require('apollo-server-express'),
    { Op } = require('sequelize');

const getAllFlights = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        flightModel.findAll().then(data => {
            resolve(data);
        }).catch(error => {
            reject(new ApolloError(error));
        });
    });
}

const getFlightByNumber = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        flightModel.findOne({
            where: {
                fNumber: {
                    [Op.eq]: args.Number
                }
            }
        }).then(data => {
            if (data instanceof flightModel) {
                resolve(data);
            } else {
                reject(new ApolloError('Invalid Type'));
            }
        }).catch(error => {
            reject(new ApolloError(error));
        });
    });
}

module.exports = {
    flightQueries: {
        getAllFlights,
        getFlightByNumber
    }
}