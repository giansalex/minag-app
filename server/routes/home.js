var home = require('../controllers/home.controller');

module.exports = function (router) {
    /* GET home page. */
    router.get('/', home.index); 
};