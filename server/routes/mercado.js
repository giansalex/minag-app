var ctrl = require('../controllers/mercado.controller');

module.exports = function (router) {
    /* GET mercados. */
    router.get('/api/mercado', ctrl.index);
    router.get('/api/mercado/:code/products', ctrl.products);
};