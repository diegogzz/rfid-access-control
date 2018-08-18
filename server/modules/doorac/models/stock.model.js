'use strict';
var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    var Stock = sequelize.define('Stock', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        quantity: {
            type: DataTypes.INTEGER
        },
              date: {
            type: DataTypes.DATE
        }
    });

    return Stock;
};