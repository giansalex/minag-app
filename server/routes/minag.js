var ctrl = require('../controllers/minag.controller');

module.exports = function (router) {
    /* GET mercados. */
    router.post('/api/minag/filter', ctrl.filter);
};