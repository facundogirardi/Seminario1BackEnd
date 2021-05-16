var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var ContactoSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    region: String,
    opinion: String

})

ContactoSchema.plugin(mongoosePaginate)
const Contacto = mongoose.model('Contacto', ContactoSchema)

module.exports = Contacto;