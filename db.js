const Sequelize = require('sequelize')
const config = require('./config')

exports.sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
    host: config.db.host,
    dialect: config.db.dialect,
    pool: {
        max: config.db.pool.max,
        min: config.db.pool.min,
        idle: config.db.pool.idle
    },
})