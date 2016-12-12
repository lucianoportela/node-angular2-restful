var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Totalizador = require('../models/Totalizador.js');

/* GET /totalizador Listagem de totalizadors. */
router.get('/', function(req, res, next) {
  Totalizador.find(function (err, totalizador) {
    if (err) return next(err);
    res.json(totalizador);
  });
});

/* POST /totalizador Cadastro de totalizador */
router.post('/', function(req, res, next) {
  Totalizador.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /totalizador/id  Lista filtrada por um totalizador*/
router.get('/:id', function(req, res, next) {
  Totalizador.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /totalizador/:id Salva a edição de totalizador */
router.put('/:id', function(req, res, next) {
  Totalizador.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /totalizador/:id Deletando o totalizador a partir do id */
router.delete('/:id', function(req, res, next) {
  Totalizador.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;

