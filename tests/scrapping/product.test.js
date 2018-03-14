var expect = require('chai').expect;
var product = require('./../../scrapping/product');
var loader = require('./../../scrapping/loader');
var cherio = require('cheerio');


describe('Product', function() {
    this.timeout(10000);
    it('filtra productos por mercado y lista los productos disponibles', function() {
        return loader.getProductsByMercadoPage('*')
            .then(function (response) {
                const data = response.data;
                expect(data).not.to.be.empty;

                var productos = product.list(cherio.load(data));
                expect(productos).to.be.lengthOf(136);
            });
    });

    it('filtra productos por genero y lista los productos disponibles', function() {
        return loader.getProductsByGeneroPage('0203')
            .then(function (response) {
                const data = response.data;
                expect(data).not.to.be.empty;

                var productos = product.list(cherio.load(data));
                expect(productos).to.be.lengthOf(4);
            });
    });
});

