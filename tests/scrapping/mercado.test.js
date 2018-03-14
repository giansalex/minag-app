var expect = require('chai').expect;
var mercado = require('./../../scrapping/mercado');
var loader = require('./../../scrapping/loader');
var cherio = require('cheerio');

describe('Mercado', function() {
    this.timeout(10000);
    it('carga pagina de principal de minag y lista los mercados', function() {
        return loader.getIndexPage()
            .then(function (response) {
                const data = response.data;
                expect(data).not.to.be.empty;

                var mercados = mercado.list(cherio.load(data));
                expect(mercados).to.be.lengthOf(8);
            });
    });
});