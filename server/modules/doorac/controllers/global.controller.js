var models = require('../../../lib/sequelize');
/**
 * Create a 
 */
exports.createSale = function (req, res) {
    var sale = req.body;
    models.Sale.create(sale,{
        include:[{
            model: models.LineSale
        }]
    }).then(function (sale) {
        res.json(sale);
    }).catch(function (error) {
        res.status(400).send(error);
    });
};

exports.createStock = function (req, res) {
    var stock = req.body;
    models.Stock.create(stock).then(function (stock) {
        res.json(stock);
    }).catch(function (error) {
        res.status(400).send(error);
    });
};

exports.listProducts = function (req, res) {
    models.Product.findAll().then(function (all) {
        res.json(all);
    }).catch(function (error) {
        res.status(400).send(error);
    });
};

exports.listSales = function (req, res) {
    models.Sale.findAll({
        include: [{
            model: models.LineSales
        },
    {
        model: models.Products
    }]
    }).then(function (sales) {
        res.json(sales);
    }).catch(function (error) {
        res.status(400).send(error);
    });
};

exports.listStocks = function (req, res) {
    models.Stock.findAll({
        include: [
            {
                model:models.Products
            }
        ]
    }).then(function (stock) {
        res.json(stock);
    }).catch(function (error) {
        res.status(400).send(error);
    });
};
exports.listNFC = function (req, res) {
    models.DoorAC.findAll().then(function (all) {
        res.json(all);
    }).catch(function (error) {
        res.status(400).send(error);
    });
};


