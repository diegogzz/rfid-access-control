'use strict';
var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    var LineSale = sequelize.define('LineSale', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        quantity: {
            type: DataTypes.INTEGER
        }
    });

    return LineSale;
};