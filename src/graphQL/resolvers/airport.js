const database = require('../../services/database');

const getAllAirports = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        resolve('ALL AIRPORTS!!!!!!!!!');
    });
}

const getAirportById = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        resolve('SINGLE AIRPORT BY ID - ' + args.Id);
    });
}

module.exports = {
    airportQueries: {
        getAllAirports,
        getAirportById
    }
}