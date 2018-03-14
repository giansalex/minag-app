var expect = require('chai').expect;
var mercado = require('./../../scrapping/mercado');
var loader = require('./../../scrapping/loader');
var cherio = require('cheerio');

describe('Mercado', function() {
    this.timeout(10000);

    var html;
    before(function() {
        return loader.getIndexPage()
            .then(function (response){
                html = cherio.load(response.data);
            });
    });

    it('carga pagina de principal de minag y lista los mercados', function() {
        expect(html).not.to.be.null;

        var mercados = mercado.list(html);
        expect(mercados).to.be.lengthOf(8);
    });

    it('carga pagina de principal de minag y lista las variables', function() {
        expect(html).not.to.be.null;

        var mercados = mercado.getVariables(html);

        expect(mercados).to.be.lengthOf(4);
    });
});