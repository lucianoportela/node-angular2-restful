var mongoose = require('mongoose');

var AlunoSchema = new mongoose.Schema({
  nome: String,
  curso: String,
  professor: String,
  matricula: Number
});

module.exports = mongoose.model('Aluno', AlunoSchema);
