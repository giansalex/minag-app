var axios = require('axios');
const URL_MINAG = 'http://sistemas.minag.gob.pe/sisap/portal2/mayorista/';
const URL_MERCADO = 'http://sistemas.minag.gob.pe/sisap/portal2/mayorista/generos/filtrarPorMercado';
const URL_GENERO = 'http://sistemas.minag.gob.pe/sisap/portal2/mayorista/variedades/filtrarPorGenero';
const URL_FILTER = 'http://sistemas.minag.gob.pe/sisap/portal2/mayorista/resumenes/filtrar';

exports.getIndexPage = function () {
    return axios.get(URL_MINAG);
};

exports.getProductsByMercadoPage = function (mercado) {
    var params = 'mercado=' + mercado +'&&ajax=true';

    return axios.post(URL_MERCADO, params);
};

exports.getProductsByGeneroPage = function (genero) {
    var params = 'expandir=' + genero + '&ajax=true';

    return axios.post(URL_GENERO, params);
};

exports.getFilterPage = function (filter) {
    const params = getFromFilter(filter);

    return axios.post(URL_FILTER, params, {responseEncoding: 'iso-8859-1'});
};

function getFromFilter(filter) {
    return '&mercado=*&&variables[]=precio_max&variables[]=precio_prom&variables[]=precio_min&&fecha=14/03/2018&desde=01/03/2018&hasta=14/03/2018&&anios[]=2018&&meses[]=03&&semanas[]=11&&productos[]=1001&productos[]=0202&&periodicidad=dia&&&&&&&&&&&__ajax_carga_final=consulta&ajax=true\n';
}