
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const MonAn = sequelize.define('MonAn', {

    ten_mon: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mo_ta: {
        type: DataTypes.TEXT
    },
    gia_ban: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    con_hang: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }

}, {

    tableName: 'mon_an'
});

module.exports = MonAn;