var axios = require('axios');
const URL_MINAG = 'http://sistemas.minag.gob.pe/sisap/portal2/mayorista/';
const URL_MERCADO = 'http://sistemas.minag.gob.pe/sisap/portal2/mayorista/generos/filtrarPorMercado';

exports.getIndexPage = function () {
    return axios.get(URL_MINAG);
};

exports.getProductsPage = function (mercado) {
    var params = 'mercado=' + mercado +'&&ajax=true';

    return axios.post(URL_MERCADO, params);
};