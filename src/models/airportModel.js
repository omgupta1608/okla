const { DataTypes } = require('sequelize');
const sequelize = require('../services/database').sequelize;

const AirportModel = {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    iata_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    links_count: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    aid: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true
    }
}

module.exports = {
    airportModel: sequelize.define('airports', AirportModel)
}