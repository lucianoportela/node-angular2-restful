var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Turma = require('../models/Turma.js');

/* GET /turma Listagem de turmas. */
router.get('/', function(req, res, next) {
  Turma.find(function (err, turma) {
    if (err) return next(err);
    res.json(turma);
  });
});

/* POST /turma Cadastro de turma */
router.post('/', function(req, res, next) {
  Turma.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /turma/id  Lista filtrada por um turma*/
router.get('/:id', function(req, res, next) {
  Turma.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /turma/:id Salva a edição de turma */
router.put('/:id', function(req, res, next) {
  Turma.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /turma/:id Deletando o turma a partir do id */
router.delete('/:id', function(req, res, next) {
  Turma.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;


