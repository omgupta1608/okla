const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('okla', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    sync: {
        force: false
    },
    logging: false
});

module.exports = sequelize;