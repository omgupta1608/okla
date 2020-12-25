const { DataTypes } = require('sequelize');
const sequelize = require('../services/database').sequelize;
const TripModel = {
    tId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true
    },
    uId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fId:{
        type: DataTypes.STRING,
        allowNull:false
    },
    mealOption: {
        type: DataTypes.STRING,
        allowNull: false
    },
    class: {
        type: DataTypes.STRING,
        allowNull: false
    },
    seatNo: {
        type: DataTypes.STRING,
        allowNull: false
    }
};

module.exports = {
    tripModel: TripModel
}