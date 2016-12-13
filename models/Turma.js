var mongoose = require('mongoose');

var TurmaSchema = new mongoose.Schema({
  descricao:String,
  periodo:String,
  sala:String,
  horario:String,
  sigla:String,
  capacidade:String
});

module.exports = mongoose.model('Turma', TurmaSchema);

