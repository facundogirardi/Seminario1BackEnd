var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var UserSchema = new mongoose.Schema({
    pedido: Number,
    nombre: String,
    apellido: String,
    dni: Number,
    telefono: Number,
    obrasocial: String,
    provincia: String,
    estadopedido: String,
    date: Date
})

UserSchema.plugin(mongoosePaginate)
const User = mongoose.model('User', UserSchema)

module.exports = User;