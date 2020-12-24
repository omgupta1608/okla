const { Sequelize } = require('sequelize'),
    Error = require('../utils/error').Error;
class Database {
    #database
    constructor() {
        this.#database = new Sequelize('okla', 'root', '', {
            dialect: 'mysql',
            host: 'localhost',
            define:{
                freezeTableName: true
            },
            sync: {
                force: false
            },
            logging: false
        });
    }
    async check() {
        try {
            await this.#database.authenticate();
            console.info(`******************Connected to DB Successfully******************`);
        } catch (error) {
            Error(error, 'Cannot connect to DB', 'database.js');
        }
    }
    get sequelize(){
        return this.#database;
    }
}

let dbInstance = new Database();
module.exports = dbInstance;