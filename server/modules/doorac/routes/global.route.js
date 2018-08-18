'use strict';

var todo = require('../controllers/global.controller');
var moduleName = 'global';
var path = '/api/' + moduleName;

module.exports = function (app) {
    // Plans Routes
    app.route(path + '/products')
        .get(todo.listProducts)
    
    app.route(path + '/sale')
        .get(todo.listSales)
        .post(todo.createSale);
    
    app.route(path + '/stock')
        .get(todo.listStocks)
        .post(todo.createStock);

    app.route(path + '/nfc')
        .get(todo.listNFC)
  
};