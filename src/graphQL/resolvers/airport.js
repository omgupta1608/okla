const { airportModel } = require('../../models'),
    { ApolloError } = require('apollo-server-express'),
    { Op } = require('sequelize');

const getAllAirports = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        airportModel.findAll().then(data => {
            resolve(data);
        }).catch(error => {
            reject(new ApolloError(error));
        });
    });
}

const getAirportById = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        airportModel.findOne({
            where: {
                aId: {
                    [Op.eq]: args.ID
                }
            }
        }).then(data => {
            if (data instanceof airportModel) {
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
    airportQueries: {
        getAllAirports,
        getAirportById
    }
}