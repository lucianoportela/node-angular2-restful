var express = require('express');
var router = express.Router();

/* GET Página inicial. */
router.get('/', function(req, res) {
  res.render('index', { title: 'RestFull' });
});

module.exports = router;
