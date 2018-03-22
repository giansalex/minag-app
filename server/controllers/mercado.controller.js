var mercado = require('./../scrapping/mercado');
var loader = require('./../scrapping/loader');
var cherio = require('cheerio');

exports.index = function (req, res, next) {
    loader.getIndexPage()
        .then(function (response){
            var html = cherio.load(response.data);

            var mercados = mercado.getVariables(html);
            res.json(mercados);
        });
};
