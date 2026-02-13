const { DataTypes } = require('sequelize')
const sequelize = require('./database')

const User = sequelize.define('Users', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    LastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mdp : {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = User