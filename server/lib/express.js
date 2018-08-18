'use strict';

var path = require('path');

var utils = require('./utils');

module.exports.init = function (app) {

    var routes = utils.getGlobbedPaths('./modules/*/routes/*.js')

    routes.forEach(function (routePath) {
        require(path.resolve(routePath))(app);
    });
}
