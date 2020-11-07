var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var EncuestaSchema = new mongoose.Schema({
    titulo: String,
    sector: String,
    tamaño: String,
    pregunta1: String,
    respuesta1: String,
    varlorref1: String,
    pregunta2: String,
    respuesta2: String,
    varlorref2: String,
    pregunta3: String,
    respuesta3: String,
    varlorref3: String,
    pregunta4: String,
    respuesta4: String,
    varlorref4: String,
    pregunta5: String,
    respuesta5: String,
    varlorref5: String
})

EncuestaSchema.plugin(mongoosePaginate)
const Encuesta = mongoose.model('Encuesta', EncuestaSchema)

module.exports = Encuesta;