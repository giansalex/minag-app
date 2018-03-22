var mercado = require('./../scrapping/mercado');
var loader = require('./../scrapping/loader');
var product = require('./../scrapping/product');
var cherio = require('cheerio');

exports.index = function (req, res, next) {
    loader.getIndexPage()
        .then(function (response){
            var html = cherio.load(response.data);

            var mercados = mercado.getVariables(html);
            res.json(mercados);
        });
};

exports.products = function (req, res, next) {
    const code = req.params.code;
    loader.getProductsByMercadoPage(code)
        .then(function (response) {
            const data = response.data;
            var products = product.list(cherio.load(data));

            res.json(products);
        });
};
