const { Sequelize } = require('sequelize'),
    Error = require('../utils/error').Error;

const sequelize = new Sequelize('okla', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    sync: {
        force: false
    },
    logging: false
});

const initialize = async () => {
    try {
        await sequelize.authenticate();
        console.info(`******************Connected to DB Successfully******************`);
    } catch (error) {
        Error(error, 'Cannot connect to DB', 'database.js');
    }    
} 

module.exports = {
    initialize,
    database: sequelize
}