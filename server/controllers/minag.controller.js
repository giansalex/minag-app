var minag = require('./../scrapping/minag');
var loader = require('./../scrapping/loader');
var cherio = require('cheerio');

exports.filter = function (req, res, next) {
    var obj = req.body;

    loader.getFilterPage(obj)
        .then(function (response){
            var data = response.data;
            var list = minag.parse(cherio.load(data));

            res.json(list);
        });
};