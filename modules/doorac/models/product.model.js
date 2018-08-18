'use strict';
var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define('Product', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
        ,
        codeNFC: {
            type: DataTypes.STRING
        },
        prize: {
            type: DataTypes.INTEGER
        }
    });

    return Product;
};