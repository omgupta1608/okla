const { DataTypes } = require('sequelize');

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
    aId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true
    }
}

module.exports = {
    airportModel: AirportModel
}