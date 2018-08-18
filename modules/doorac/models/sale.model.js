'use strict';
var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    var Sale = sequelize.define('Sale', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATE
        }
        ,
        total: {
            type: DataTypes.INTEGER
        }
    });

    return Sale;
};