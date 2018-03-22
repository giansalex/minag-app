var express = require('express');
var homeRoutes = require('./home');
var mercadoRoutes = require('./mercado');

var router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', function (req, res) {
  res.send('OK')
});

homeRoutes(router);
mercadoRoutes(router);

module.exports = router;
