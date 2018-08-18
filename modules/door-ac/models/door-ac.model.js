'use strict';
var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    var DoorAC = sequelize.define('Todo', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        code_rf: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW
        },
        in: {
            type: DataTypes.BOOLEAN
        },
        out: {
            type: DataTypes.BOOLEAN
        }
    });

    return DoorAC;
};
