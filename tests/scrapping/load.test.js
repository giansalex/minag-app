var assert = require('assert');
var loader = require('./../../scrapping/loader');

describe('WebPage', function() {
    this.timeout(10000);
    it('carga pagina de principal de minag', function() {
        return loader.getIndexPage()
            .then(function (response) {
                const data = response.data;
                assert.ok(data);
                console.log(data);
            });
    });

    it('carga productos de todos los mercados', function () {
        return loader.getProductsPage('*')
            .then(function (response) {
                const data = response.data;
                assert.ok(data);
                console.log(data);
            });
    });

    it('carga productos de Mcdo mayorista cereales, leguminosas y oleaginosas', function () {
        return loader.getProductsPage('15011506')
            .then(function (response) {
                const data = response.data;
                assert.ok(data);
                console.log(data);
            });
    });
});