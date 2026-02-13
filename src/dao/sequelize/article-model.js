const { DataTypes } = require('sequelize')
const sequelize = require('./database')

const Article = sequelize.define('Article', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desc:{
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imgPath : {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Article