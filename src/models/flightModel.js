const { DataTypes } = require('sequelize');
const sequelize = require('../services/database').sequelize;

const FlightModel = {
    fId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isDirect: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    source: {
        type: DataTypes.STRING,
        allowNull: false
    },
    destination: {
        type: DataTypes.STRING,
        allowNull: false
    },
    departure: {
        type: DataTypes.STRING,
        allowNull: false
    },
    arrival: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isActive: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stop: {
        type: DataTypes.STRING,
        allowNull: false
    },
    company: {
        type: DataTypes.STRING,
        allowNull: false
    },
    economyPrice: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    firstClassPrice: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    businessClassPrice: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    emptySeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isDelayed: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isCacncelled: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}

module.exports = {
    airportModel: sequelize.define('flights', FlightModel)
}