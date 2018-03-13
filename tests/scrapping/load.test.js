var assert = require('assert');
var loader = require('./../../scrapping/loader');

describe('WebPage', function() {

    it('carga pagina de principal de minag', function() {
        return loader.getPage()
            .then(function (response) {
                const data = response.data;
                assert.ok(data);
                console.log(data);
            });
    });
});