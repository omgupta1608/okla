const sequelize = require('../services/database').sequelize,
    { userModel } = require('./userModel'),
    { flightModel } = require('./flightModel'),
    { tripModel} = require('./tripModel'),
    { airportModel } = require('./airportModel');

module.exports = {
    userModel: sequelize.define('users', userModel),
    flightModel: sequelize.define('flights', flightModel),
    tripModel: sequelize.define('trips', tripModel),
    airportModel: sequelize.define('airports', airportModel)
}