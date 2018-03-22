var axios = require('axios');
var iconv = require('iconv-lite');

const URL_MINAG = 'http://sistemas.minag.gob.pe/sisap/portal2/mayorista/';
const URL_MERCADO = 'http://sistemas.minag.gob.pe/sisap/portal2/mayorista/generos/filtrarPorMercado';
const URL_GENERO = 'http://sistemas.minag.gob.pe/sisap/portal2/mayorista/variedades/filtrarPorGenero';
const URL_FILTER = 'http://sistemas.minag.gob.pe/sisap/portal2/mayorista/resumenes/filtrar';

exports.getIndexPage = function () {
    return axios.get(URL_MINAG);
};

exports.getProductsByMercadoPage = function (mercado) {
    var params = 'mercado=' + mercado +'&&ajax=true';

    return axios.post(URL_MERCADO, params, getOptions());
};

exports.getProductsByGeneroPage = function (genero) {
    var params = 'expandir=' + genero + '&ajax=true';

    return axios.post(URL_GENERO, params);
};

exports.getFilterPage = function (filter) {
    const params = getFromFilter(filter);

    return axios.post(URL_FILTER, params, { responseEncoding: 'iso-8859-1'});
};

function getFromFilter(filter) {
    var params = 'mercado=' + filter.mercado;
    params += joinValues('variables[]', filter.variables);
    params += joinValues('productos[]', filter.products);
    params += joinValues('anios[]', filter.years);
    params += joinValues('meses[]', filter.months);
    params += joinValues('semanas[]', filter.weeks);
    params += '&periodicidad=' + filter.period;
    params += '&fecha=' + filter.fecha
        + '&desde=' + filter.desde
        + '&hasta=' + filter.hasta;
    params += '&__ajax_carga_final=consulta&ajax=true';

    return params;
    // return '&mercado=*&&variables[]=precio_max&variables[]=precio_prom&variables[]=precio_min&&fecha=14/03/2018&desde=01/03/2018&hasta=14/03/2018&&anios[]=2018&&meses[]=03&&semanas[]=11&&productos[]=1001&productos[]=0202&&periodicidad=dia&&&&&&&&&&&__ajax_carga_final=consulta&ajax=true\n';
}

function joinValues(key, items) {
    var params = '';
    var max = items.length;

    for (var i = 0; i < max; i++) {
        params += '&' + key + '=' + items[i];
    }

    return params;
}

function getOptions() {
    return {
        transformResponse: [function (data) {
            return iconv.decode(data, 'iso-8859-1');
        }]
    }
}