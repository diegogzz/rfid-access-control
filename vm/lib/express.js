'use strict';

var path = require('path');
var _ = require('underscore');

var utils = require('./utils');

module.exports.init = function (app) {

    var routes = utils.getGlobbedPaths('./server/*/routes/**/*.js')

    routes.forEach(function (routePath) {
        require(path.resolve(routePath))(app);
    });
}
