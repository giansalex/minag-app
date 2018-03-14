var expect = require('chai').expect;
var minag = require('./../../scrapping/minag');
var loader = require('./../../scrapping/loader');
var cherio = require('cheerio');

describe('Minag Resultados', function() {
    this.timeout(10000);
    it('filtro por dia con variables prom, max, min', function() {
        return loader.getFilterPage('*')
            .then(function (response) {
                const data = response.data;
                expect(data).not.to.be.empty;

                var list = minag.parse(cherio.load(data));
                console.log(list);
                expect(list).to.be.lengthOf(6);
            });
    });

});
