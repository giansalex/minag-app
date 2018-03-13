var axios = require('axios');
const URL_MINAG = 'http://sistemas.minag.gob.pe/sisap/portal2/mayorista/';

exports.getPage = function () {
    return axios.get(URL_MINAG);
};
