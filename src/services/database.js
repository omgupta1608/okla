const { Sequelize } = require('sequelize'),
    Error = require('../utils/error').Error;
class Database {
    #database
    constructor() {
        let ENV = process.env;
        this.#database = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASS, {
            dialect: 'mysql',
            host: ENV.DB_HOST,
            define: {
                freezeTableName: true,
                timestamps: false
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
    get sequelize() {
        return this.#database;
    }
}

let dbInstance = new Database();
module.exports = dbInstance;