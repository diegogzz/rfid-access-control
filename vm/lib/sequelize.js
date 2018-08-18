const Sequelize = require('sequelize');
const utils = require('./utils');
var db = {};
const sequelize = new Sequelize('rfid-access-control', 'diegooscar', 'Pass.word1', {
  host: 'rfid-access-control.database.windows.net',
  dialect: 'mssql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false,
  dialectOptions: {
    encrypt: true
  }
});

var models = utils.getGlobbedPaths('./modules/*/models/**/*.js')

models.forEach(function (modelPath) {
    var model = sequelize['import']('../' + modelPath);
    db[model.name] = model;
});

//


Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});


sequelize.sync({ force: true })

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;