var mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  perfil:{
  	 nome:String
  },
  cep:Number,
  endereco:string
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
