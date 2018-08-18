'use strict';
var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    var Todo = sequelize.define('Todo', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        data: {
            type: DataTypes.STRING
        }
    });

    return Todo;
};
