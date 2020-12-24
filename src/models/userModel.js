const { DataTypes } = require('sequelize');
const sequelize = require('../services/database').sequelize;

const UserModel = {
    userid: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    balance: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isActive: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    home: {
        type: DataTypes.STRING,
        allowNull: false
    },
    currentLocation: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

module.exports = {
    userModel: sequelize.define('users', UserModel)
}