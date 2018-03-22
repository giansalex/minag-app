var ctrl = require('../controllers/mercado.controller');

module.exports = function (router) {
    /* GET mercados. */
    router.get('/api/mercado', ctrl.index);
};