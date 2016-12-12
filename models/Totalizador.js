var mongoose = require('mongoose');

var TotalizadorSchema = new mongoose.Schema({
  qtde: String,
  descricao:String
});

module.exports = mongoose.model('Totalizador', TotalizadorSchema);

