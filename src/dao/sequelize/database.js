require('dotenv').config();
const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(
    process.env.BDD_NAME,
    process.env.BDD_USER,
    process.env.BDD_USER_MDP,
    {
        host: process.env.BDD_HOST,
        dialect: 'mysql'
    }
)
module.exports = sequelize