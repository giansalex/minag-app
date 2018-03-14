var expect = require('chai').expect;
var minag = require('./../../scrapping/minag');
var loader = require('./../../scrapping/loader');
var cherio = require('cheerio');

describe('Minag Resultados', function() {
    this.timeout(10000);
    it('filtro por dia con variables prom, max, min', function() {
        return loader.getFilterPage({
            mercado: '*',
            variables: ['precio_max', 'precio_prom', 'precio_min'],
            fecha: '14/03/2018',
            desde: '01/03/2018',
            hasta: '14/03/2018',
            years: ['2018'],
            months: ['03'],
            weeks: ['11'],
            period: 'dia',
            products: ['1001', '0202']
        })
            .then(function (response) {
                const data = response.data;
                expect(data).not.to.be.empty;

                var list = minag.parse(cherio.load(data));
                console.log(list);
                expect(list).to.be.lengthOf(6);
            });
    });

});
